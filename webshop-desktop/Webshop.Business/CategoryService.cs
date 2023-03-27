using Webshop.Desktop.Core.Interfaces.Business;
using Webshop.Desktop.Core.Interfaces.Repository;
using Webshop.Desktop.Core.Models.Business;
using Webshop.Desktop.Core.Models.Business.Dtos;
using Webshop.Desktop.Core.Models.Domain;

namespace Webshop.Business;
public class CategoryService : ICategoryService
{
    #region Private members

    private readonly IRepository<Category> _categoryService;

    #endregion

    #region Constructor

    public CategoryService(IRepository<Category> categoryService)
    {
        _categoryService= categoryService;
    }    

    #endregion

    public CategoryVmList[] GetCategories()
    {
        return _categoryService.GetAll()
            .Select(c => new CategoryVmList{
                Id= c.Id,
                Name = c.Name,
            }).ToArray();
    }

    public void AddCategory(string categoryName)
    {
        _categoryService.Add(new Category
        {
            Name = categoryName,
        });
    }
}
