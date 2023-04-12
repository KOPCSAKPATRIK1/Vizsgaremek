using Webshop.Desktop.Core.Models.Business;
using Webshop.Desktop.Core.Models.Business.Dtos;

namespace Webshop.Desktop.Core.Interfaces.Business;
public interface IProductService
{
    ProductVmList[] GetProductsWithInfo();
    void AddProducts(ProductDto newProduct);
    void ChangeInactive(int id);
    void ChangePopular(int id);
    ProductDto GetProductForUpdate(int id);
    void UpdateProduct(ProductDto product, int id);
}
