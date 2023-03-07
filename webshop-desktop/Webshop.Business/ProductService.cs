using Microsoft.EntityFrameworkCore;
using Webshop.Desktop.Core.Interfaces.Business;
using Webshop.Desktop.Core.Interfaces.Repository;
using Webshop.Desktop.Core.Models.Business;
using Webshop.Desktop.Core.Models.Domain;

namespace Webshop.Business;

public class ProductService : IProductService
{
    #region Private members
   
    private readonly IRepository<Product> _productRepository;

    #endregion

    #region Constructor

    public ProductService(IRepository<Product> productRepository)
    {
        _productRepository = productRepository;
    }

    #endregion
    public ProductVmList[] GetProductsWithCategory()
    {
        return _productRepository.GetAll()
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
    }

}
