using Webshop.Desktop.Core.Models.Business;

namespace Webshop.Desktop.Core.Interfaces.Business;
public interface ICategoryService
{
    /// <summary>
    /// Kategóriák lekérdezése.
    /// </summary>
    /// <returns>Kategóriák megjeleníthető formában.</returns>
    CategoryVmList[] GetCategories();

    /// <summary>
    /// Új kategória hozzáadása.
    /// </summary>
    /// <param name="category">Kategória neve.</param>
    void AddCategory(string category);

    /// <summary>
    /// Kategória törlése.
    /// </summary>
    /// <param name="id">Kategória azonosítója.</param>
    /// <returns>Sikerült e törölni a kategóriát.</returns>
    bool DeleteCategory(int id);

    /// <summary>
    /// Kategória nevének megváltoztatása.
    /// </summary>
    /// <param name="id">Kategória azonosítója.</param>
    /// <param name="name">Kategória neve.</param>
    void UpdateCategoryName(int id, string name);
}
