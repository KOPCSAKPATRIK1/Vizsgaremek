using System.Collections.ObjectModel;
using CommunityToolkit.Mvvm.ComponentModel;
using CommunityToolkit.Mvvm.Input;
using Microsoft.UI.Xaml.Controls;
using Webshop.Desktop.Contracts.Services;
using Webshop.Desktop.Contracts.ViewModels;
using Webshop.Desktop.Core.Interfaces.Business;
using Webshop.Desktop.Core.Models.Business;
using Webshop.Desktop.Core.Models.Business.Dtos;

namespace Webshop.Desktop.ViewModels;

public partial class NewProductViewModel : ObservableRecipient, INavigationAware
{
    #region Private members

    private readonly ICategoryService _categoryService;
    private readonly IProductService _productService;
    private readonly INavigationService _navigationService;
    private int _productId;

    #endregion

    public TeachingTip TeachingTip;

    #region Observables

    public ObservableCollection<CategoryVmList> Categories { get; set; } = new();
    public CategoryVmList SelectedCategory { get; set; } = null!;

    [ObservableProperty] private string? _productName;
    [ObservableProperty] private string? _productDesc;
    [ObservableProperty] private string? _imageUrl1;
    [ObservableProperty] private string? _imageUrl2;
    [ObservableProperty] private string? _imageUrl3;
    [ObservableProperty] private string? _imageUrl4;
    [ObservableProperty] private int _productPrice;
    [ObservableProperty] private Dictionary<string, int> _sizes = new()
    {
        {"36", 0},
        {"37", 0},
        {"38", 0},
        {"39", 0},
        {"40", 0},
        {"41", 0},
        {"42", 0},
        {"43", 0},
        {"44", 0},
        {"45", 0},
        {"46", 0}
    };
    [ObservableProperty] private bool _isTeachingTipOpen;


    #endregion

    public NewProductViewModel(
        ICategoryService categoryService,
        IProductService productService,
        INavigationService navigationService)
    {
        _categoryService = categoryService;
        _productService = productService;
        _navigationService = navigationService;
    }

    #region Getters, setters

    #endregion

    #region Events

    public void OnNavigatedTo(object parameter)
    {
        _productId = Convert.ToInt32(parameter);
        LoadCategories();
        if (_productId != 0)
        {
            var product = _productService.GetProductForUpdate(_productId);
            ProductName = product.Name;
            ProductDesc = product.Desc;
            ProductPrice = product.Price;
            ImageUrl1 = product.ImageUrl1;
            ImageUrl2 = product.ImageUrl2;
            ImageUrl3 = product.ImageUrl3;
            ImageUrl4 = product.ImageUrl4;
            Sizes = product.SizesWithQuantity;
            foreach (var category in Categories)
            {
                if (category.Id == product.CategoryId)
                {
                    SelectedCategory = category;
                    break;
                }
            }
        }
    }

    public void OnNavigatedFrom()
    {

    }

    #endregion

    #region Commands

    [RelayCommand]
    private void SaveProduct()
    {
        if (_productId != 0)
        {
            _productService.UpdateProduct(new ProductDto
            {
                Name = ProductName,
                Desc = ProductDesc,
                ImageUrl1 = ImageUrl1,
                ImageUrl2 = ImageUrl2,
                ImageUrl3 = ImageUrl3,
                ImageUrl4 = ImageUrl4,
                SizesWithQuantity = Sizes,
                Price = ProductPrice,
                CategoryId = SelectedCategory.Id,
            }, _productId);
            TeachingTip.Subtitle = "Változtatások Elmentve";
            TeachingTip.IsOpen = true;  
        }
        else
        {
            _productService.AddProducts(new ProductDto
            {
                Name = ProductName,
                Desc = ProductDesc,
                ImageUrl1 = ImageUrl1,
                ImageUrl2 = ImageUrl2,
                ImageUrl3 = ImageUrl3,
                ImageUrl4 = ImageUrl4,
                SizesWithQuantity = Sizes,
                Price = ProductPrice,
                CategoryId = SelectedCategory.Id,
            });
            TeachingTip.Subtitle = "Új termék(ek) hozzáadva";
            TeachingTip.IsOpen = true;            
        }       
    }

    [RelayCommand]
    private void ClosePage()
    {
        if (_navigationService.CanGoBack)
        {
           _navigationService.GoBack();
        }
    }

    #endregion

    #region Methods

    private void LoadCategories()
    {

        Categories.Clear();
        var categories = _categoryService.GetCategories();
        foreach (var category in categories)
        {
            Categories.Add(new CategoryVmList {
            Id = category.Id,
            Name = category.Name
            });
        }
    }

    #endregion
}
