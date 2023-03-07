using Webshop.Desktop.Core.Models.Business;

namespace Webshop.Desktop.Core.Interfaces.Business;
public interface IProductService
{
    ProductVmList[] GetProductsWithCategory();
}
