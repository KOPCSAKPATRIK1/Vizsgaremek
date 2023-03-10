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

    #endregion

    #region Constructor

    public ProductService(IRepository<Product> productRepository,
        IRepository<Stock> stockRepository)
    {
        _productRepository = productRepository;
        _stockRepository = stockRepository;
    }

    #endregion
    public ProductVmList[] GetProductsWithInfo()
    {
        var res = _productRepository.GetAll()
            .Include(p => p.Category)
            .Include(p => p.Stocks)
            .Include(p => p.Sizes)
            .Select(p => new ProductVmList
            {
                Id = p.Id,
                Name = p.Name,
                Price = p.Price,
                CategoryName = p.Category.Name,
                Info = p.Stocks.Select(s => new ProductInfoVmList
                {
                    Size = s.Size.Size1,
                    Quantity = s.InStock
                }).ToArray(),
            })
            .ToArray();
        return res;
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

        var stock = new Stock
        {
            InStock = newProduct.Quantity,
            SizeId = newProduct.SizeId,
            ProductId = addedProduct.Id
        };

        _stockRepository.Add(stock);
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
}
