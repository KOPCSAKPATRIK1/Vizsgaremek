using Webshop.Desktop.Core.Models.Business;
using Webshop.Desktop.Core.Models.Business.Dtos;

namespace Webshop.Desktop.Core.Interfaces.Business;
public interface IProductService
{
    ProductVmList[] GetProductsWithInfo();
    ProductNamesVmList[] GetProductNames();
    void AddProducts(NewProductDto newProduct);
    void ChangeInactive(int id);
}
