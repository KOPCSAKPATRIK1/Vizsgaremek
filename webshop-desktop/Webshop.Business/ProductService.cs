using Microsoft.EntityFrameworkCore;
using Webshop.Desktop.Core.Interfaces.Business;
using Webshop.Desktop.Core.Interfaces.Repository;
using Webshop.Desktop.Core.Models.Business;
using Webshop.Desktop.Core.Models.Business.Dtos;
using Webshop.Desktop.Core.Models.Domain;

namespace Webshop.Business;

public class ProductService : IProductService
{
    #region Private members
   
    private readonly IRepository<Product> _productRepository;
    private readonly IRepository<Stock> _stockRepository;
    private readonly IRepository<Size> _sizeRepository;

    #endregion

    #region Constructor

    public ProductService(
        IRepository<Product> productRepository,
        IRepository<Stock> stockRepository,
        IRepository<Size> sizeRepository)
    {
        _productRepository = productRepository;
        _stockRepository = stockRepository;
        _sizeRepository = sizeRepository;
    }

    #endregion
    public ProductVmList[] GetProductsWithInfo()
    {
        return _productRepository.GetAllIncluding(p => p.Category, p => p.Stocks, p => p.Sizes)
            .Select(p => new ProductVmList
            {
                Id = p.Id,
                Name = p.Name,
                Price = p.Price,
                CategoryName = p.Category.Name,
                ImageUrl1= p.ImageUrl1,
                Inactive = p.Inactive  != 0 ? "INAKTÍV" : "",
                Info = p.Stocks.Select(s => new ProductInfoVmList
                {
                    Size = s.Size.Size1,
                    Quantity = s.InStock,
                }).OrderBy(p => p.Size).ToArray(),
            })
            .ToArray();
    }

    public void AddProducts(NewProductDto newProduct)
    {
        var addedProduct = new Product
        {
            Name = newProduct.Name,
            Desc = newProduct.Desc,
            ImageUrl1 = newProduct.ImgUrl1,
            ImageUrl2 = newProduct.ImgUrl2,
            ImageUrl3 = newProduct.ImgUrl3,
            ImageUrl4 = newProduct.ImgUrl4,
            Price = newProduct.Price,
            CategoryId = newProduct.CategoryId
        };

        _productRepository.Add(addedProduct);

        foreach (var sizesWithQuantity in newProduct.SizesWithQuantity)
        {
            var size = _sizeRepository.Find(s => s.Size1 == int.Parse(sizesWithQuantity.Key)).
                Select(s => s.Id).SingleOrDefault();
            _stockRepository.Add(new Stock
            {
                InStock = sizesWithQuantity.Value,
                ProductId = addedProduct.Id,
                SizeId = size
            });
        }

    }

    public ProductNamesVmList[] GetProductNames()
    {
        return _productRepository.GetAll()
            .Select(p => new ProductNamesVmList
            {
                Id = p.Id,
                Name = p.Name,
            }).ToArray();
    }

    public void ChangeInactive(int id)
    {
        var product = _productRepository.Find(p => p.Id == id).FirstOrDefault();
        if (product != null)
        {
            if (product.Inactive == 0)
            {
                product.Inactive = 1;
            }
            else
            {
                product.Inactive = 0;
            }

        _productRepository.Update(product);
        }
    }
}
