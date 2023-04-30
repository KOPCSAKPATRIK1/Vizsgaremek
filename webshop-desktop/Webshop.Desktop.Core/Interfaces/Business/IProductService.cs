using Webshop.Desktop.Core.Models.Business;
using Webshop.Desktop.Core.Models.Business.Dtos;

namespace Webshop.Desktop.Core.Interfaces.Business;
public interface IProductService
{
    /// <summary>
    /// Termékek lekérdezése mérettel, inaktivitással stb...
    /// </summary>
    /// <returns>Termékek megjeleníthető formában.</returns>
    ProductVmList[] GetProductsWithInfo();

    /// <summary>
    /// Termék(ek) hozzáadása mérettekkel.
    /// </summary>
    /// <param name="newProduct">Új termék.</param>
    void AddProducts(ProductDto newProduct);

    /// <summary>
    /// Inaktivitás megváltoztatása.
    /// </summary>
    /// <param name="id">Termék azonosító.</param>
    void ChangeInactive(int id);

    /// <summary>
    /// Popularitás megváltoztatása.
    /// </summary>
    /// <param name="id">Termék azonosító.</param>
    void ChangePopular(int id);

    /// <summary>
    /// Termék megkeresése változtatásra.
    /// </summary>
    /// <param name="id">Termék azonosító.</param>
    /// <returns>Termékek megjeleníthető formában.</returns>
    ProductDto GetProductForUpdate(int id);

    /// <summary>
    /// Termék változtatása.
    /// </summary>
    /// <param name="product">Termék változtatott adatokkal.</param>
    /// <param name="id">Termék azonosító.</param>
    void UpdateProduct(ProductDto product, int id);   

    /// <summary>
    /// Termék törlése.
    /// </summary>
    /// <param name="id">Termék azonosító.</param>
    /// <returns>Sikerült e vagy nem</returns>
    bool DeleteProduct(int id);
}
