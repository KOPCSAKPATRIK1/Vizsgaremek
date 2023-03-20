using System.Collections.ObjectModel;
using System.Windows.Input;
using CommunityToolkit.Mvvm.ComponentModel;
using CommunityToolkit.Mvvm.Input;
using Microsoft.UI.Xaml;
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
    private readonly ISizeService _sizeService;
    private readonly IProductService _productService;
    private readonly INavigationService _navigationService;
    private bool _isTeachingTipOpen;

    #endregion

    public TeachingTip TeachingTip;

    #region Observables

    public ObservableCollection<CategoryVmList> Categories { get; set; } = new();

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

    #endregion

    public NewProductViewModel(
        ICategoryService categoryService,
        ISizeService sizeService,
        IProductService productService,
        INavigationService navigationService)
    {
        _categoryService = categoryService;
        _sizeService = sizeService;
        _productService = productService;
        _navigationService = navigationService;
    }

    #region Getters, setters

    public bool IsTeachingTipOpen
    {
        get => _isTeachingTipOpen;
        set => SetProperty(ref _isTeachingTipOpen, value);
    }

    public SizeVmList SelectedSize { get; set; } = null!;

    public CategoryVmList SelectedCategory { get; set; } = null!;

    public ProductNamesVmList SelectedProduct { get; set; } = null!;

    #endregion

    #region Events

    public void OnNavigatedTo(object parameter)
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

    public void OnNavigatedFrom()
    {

    }

    #endregion

    #region Commands

    public ICommand SaveProductCommand => new RelayCommand(SaveProduct);

    public ICommand ClosePageCommand => new RelayCommand(ClosePage);

    #endregion

    #region Methods


    public void SaveProduct()
    {
        _productService.AddProducts(new NewProductDto
        {
            Name = ProductName,
            Desc = ProductDesc,
            ImgUrl1 = ImageUrl1,
            ImgUrl2 = ImageUrl2,
            ImgUrl3 = ImageUrl3,
            ImgUrl4 = ImageUrl4,
            SizesWithQuantity = Sizes,
            Price = ProductPrice,
            CategoryId = SelectedCategory.Id
        });
        TeachingTip.IsOpen = true;       
    }

    public void ClosePage()
    {
        if (_navigationService.CanGoBack)
        {
           _navigationService.GoBack();
        }
    }

    #endregion
}
