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
    private readonly IRepository<OrderItem> _orderItemRepository;
    private readonly IRepository<Like> _likeRepository;
    private readonly IRepository<ShoppingCartItem> _shoppingCartItemRepository;

    #endregion

    #region Constructor

    public ProductService(
        IRepository<Product> productRepository,
        IRepository<Stock> stockRepository,
        IRepository<Size> sizeRepository,
        IRepository<OrderItem> orderItemRepository,
        IRepository<Like> likeRepository,
        IRepository<ShoppingCartItem> shoppingCartItemRepository)
    {
        _productRepository = productRepository;
        _stockRepository = stockRepository;
        _sizeRepository = sizeRepository;
        _orderItemRepository = orderItemRepository;
        _likeRepository = likeRepository;
        _shoppingCartItemRepository = shoppingCartItemRepository;
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
                ImageUrl1 = p.ImageUrl1,
                Inactive = p.Inactive != 0 ? "INAKTÍV" : "",
                Popular = p.Popular != 0 ? "POPULÁRIS" : "",
                Likes = p.Likes.Count(),
                Info = p.Stocks.Where(s => s.InStock > 0).Select(s => new ProductInfoVmList
                {
                    Size = s.Size.Size1,
                    Quantity = s.InStock,
                }).OrderBy(p => p.Size).ToArray(),
            }).ToArray();
    }

    public void AddProducts(ProductDto newProduct)
    {
        var addedProduct = new Product
        {
            Name = newProduct.Name,
            Desc = newProduct.Desc,
            ImageUrl1 = newProduct.ImageUrl1,
            ImageUrl2 = newProduct.ImageUrl2,
            ImageUrl3 = newProduct.ImageUrl3,
            ImageUrl4 = newProduct.ImageUrl4,
            Price = newProduct.Price,
            CategoryId = newProduct.CategoryId
        };

        _productRepository.Add(addedProduct);

        foreach (var sizeWithQuantity in newProduct.SizesWithQuantity)
        {
            var keyInt = int.Parse(sizeWithQuantity.Key);
            var sizeId = _sizeRepository.Find(s => s.Size1 == keyInt).
                Select(s => s.Id).SingleOrDefault();
            if (sizeId == 0)
            {
                _sizeRepository.Add(new Size
                {
                    Size1 = keyInt
                });
                var newSizeId = _sizeRepository.Find(s => s.Size1 == keyInt)
                    .Select(s => s.Id).SingleOrDefault();
                _stockRepository.Add(new Stock
                {
                    InStock = sizeWithQuantity.Value,
                    ProductId = addedProduct.Id,
                    SizeId = newSizeId
                });
            }
            else
            {
                _stockRepository.Add(new Stock
                {
                    InStock = sizeWithQuantity.Value,
                    ProductId = addedProduct.Id,
                    SizeId = sizeId
                });
            }
        }
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

    public void ChangePopular(int id)
    {
        var product = _productRepository.Find(p => p.Id == id).FirstOrDefault();
        if (product != null)
        {
            if (product.Popular == 0)
            {
                product.Popular = 1;
            }
            else
            {
                product.Popular = 0;
            }

            _productRepository.Update(product);
        }
    }

    public ProductDto GetProductForUpdate(int id)
    {
        var productDto = _productRepository.Find(p => p.Id == id)
            .Include(p => p.Stocks)
            .Select(p => new ProductDto
            {
                Name = p.Name,
                Desc = p.Desc,
                ImageUrl1 = p.ImageUrl1,
                ImageUrl2 = p.ImageUrl2,
                ImageUrl3 = p.ImageUrl3,
                ImageUrl4 = p.ImageUrl4,
                Price = p.Price,
                CategoryId = p.CategoryId,
            })
            .ToArray()
            .FirstOrDefault();

        var stocks = _stockRepository.Find(s => s.ProductId == id)
            .Include(s => s.Size)
            .ToArray();

        var sizesWithQuantity = new Dictionary<string, int>();
        foreach (var stock in stocks)
        {
            sizesWithQuantity.Add(stock.Size.Size1.ToString(), stock.InStock);
        }
        productDto.SizesWithQuantity = sizesWithQuantity;

        return productDto;
    }

    public void UpdateProduct(ProductDto product, int id)
    {
        var existingProduct = _productRepository.Find(p => p.Id == id).FirstOrDefault();
        if (existingProduct != null)
        {
            existingProduct.Name = product.Name;
            existingProduct.Desc = product.Desc;
            existingProduct.Price = product.Price;
            existingProduct.ImageUrl1 = product.ImageUrl1;
            existingProduct.ImageUrl2 = product.ImageUrl2;
            existingProduct.ImageUrl3 = product.ImageUrl3;
            existingProduct.ImageUrl4 = product.ImageUrl4;
            existingProduct.CategoryId = product.CategoryId;
            _productRepository.Update(existingProduct);
            foreach (var sizeWithQuantity in product.SizesWithQuantity)
            {
                var existingStock = _stockRepository.Find(s => s.ProductId == id && s.Size.Size1 == int.Parse(sizeWithQuantity.Key)).FirstOrDefault();
                if (existingStock != null)
                {
                    existingStock.InStock = sizeWithQuantity.Value;
                    _stockRepository.Update(existingStock);
                }
            }
        }
    }

    public bool DeleteProduct(int id)
    {
        var product = _productRepository.Find(p => p.Id == id).FirstOrDefault();
        if (product != null)
        {
            if (_orderItemRepository.Find(o => o.ProductId == id).FirstOrDefault() != null ||
                _shoppingCartItemRepository.Find(s => s.ProductId == id).FirstOrDefault() != null)
            {
                return false;
            }
            else
            {
                var likes = _likeRepository.Find(l => l.ProductId == id).ToArray();
                if (likes != null)
                {
                    foreach (var like in likes)
                    {
                        _likeRepository.Remove(like);
                    }
                }

                var stocks = _stockRepository.Find(s => s.ProductId == id).ToArray();
                if (stocks != null)
                {
                    foreach (var stock in stocks)
                    {
                        _stockRepository.Remove(stock);
                    }
                }
            }
            _productRepository.Remove(product);
            return true;
        }
        else
        {
            return false;
        }
    }
}