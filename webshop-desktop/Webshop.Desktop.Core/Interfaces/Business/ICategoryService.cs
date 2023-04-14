using Webshop.Desktop.Core.Models.Business;

namespace Webshop.Desktop.Core.Interfaces.Business;
public interface ICategoryService
{
    CategoryVmList[] GetCategories();
    void AddCategory(string category);
    bool DeleteCategory(int id);
    void UpdateCategoryName(int id, string name);
}
