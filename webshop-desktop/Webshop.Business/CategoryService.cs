using Webshop.Desktop.Core.Interfaces.Business;
using Webshop.Desktop.Core.Interfaces.Repository;
using Webshop.Desktop.Core.Models.Business;
using Webshop.Desktop.Core.Models.Domain;

namespace Webshop.Business;
public class CategoryService : ICategoryService
{
    #region Private members

    private readonly IRepository<Category> _categoryService;
    private readonly IRepository<Product> _productService;

    #endregion

    #region Constructor

    public CategoryService(
        IRepository<Category> categoryService,
        IRepository<Product> productService)
    {
        _categoryService = categoryService;
        _productService = productService;
    }

    #endregion

    public CategoryVmList[] GetCategories()
    {
        return _categoryService.GetAll()
            .Select(c => new CategoryVmList
            {
                Id = c.Id,
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

    public bool DeleteCategory(int id)
    {
        var category = _categoryService.Find(c => c.Id == id).FirstOrDefault();
        if (category != null)
        {
            var productWithCategory = _productService.Find(p => p.CategoryId == id);
            if (productWithCategory.Any())
            {
                return false;
            }
            else
            {
                _categoryService.Remove(category);
                return true;
            }
        }
        else
        {
            return false;
        }
    }

    public void UpdateCategoryName(int id, string name)
    {
        var category = _categoryService.Find(c => c.Id == id).FirstOrDefault();
        if (category != null)
        {
            category.Name = name;
            _categoryService.Update(category);
        }
    }
}
