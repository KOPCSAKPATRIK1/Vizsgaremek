using System.Collections.ObjectModel;
using CommunityToolkit.Mvvm.ComponentModel;
using CommunityToolkit.Mvvm.Input;
using Microsoft.UI.Xaml;
using Microsoft.UI.Xaml.Controls;
using Webshop.Desktop.Contracts.Services;
using Webshop.Desktop.Contracts.ViewModels;
using Webshop.Desktop.Core.Interfaces.Business;
using Webshop.Desktop.Core.Models.Business;
using Webshop.Desktop.Core.Models.Business.Dtos;
using Webshop.Desktop.Views.Dialogs;

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
    public XamlRoot XamlRoot;

    #region Observables

    [ObservableProperty] private CategoryVmList _selectedCategory;
    public ObservableCollection<CategoryVmList> Categories { get; set; } = new();

    [ObservableProperty] private string? _productName;
    [ObservableProperty] private string? _productDesc;
    [ObservableProperty] private string? _imageUrl1;
    [ObservableProperty] private string? _imageUrl2;
    [ObservableProperty] private string? _imageUrl3;
    [ObservableProperty] private string? _imageUrl4;
    [ObservableProperty] private int _productPrice;
    [ObservableProperty]
    private Dictionary<string, int> _sizesWithQuantity = new()
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

    [ObservableProperty] private string _nameValidationText;
    [ObservableProperty] private bool _nameValidationVisibility;

    [ObservableProperty] private string _descValidationText;
    [ObservableProperty] private bool _descValidationVisibility;

    [ObservableProperty] private string _img1ValidationText;
    [ObservableProperty] private bool _img1ValidationVisibility;

    [ObservableProperty] private string _categoryValidationText;
    [ObservableProperty] private bool _categoryValidationVisibility;

    #endregion

    #region Constructor

    public NewProductViewModel(
        ICategoryService categoryService,
        IProductService productService,
        INavigationService navigationService)
    {
        _categoryService = categoryService;
        _productService = productService;
        _navigationService = navigationService;
    }

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
            SizesWithQuantity = product.SizesWithQuantity;
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

    public void NameValidation()
    {
        if (string.IsNullOrWhiteSpace(ProductName))
        {
            NameValidationText = "A név nem lehet üres";
            NameValidationVisibility = true;
        }
        else if (ProductName.Length < 4)
        {
            NameValidationText = "A névnek 3 karakternél hosszabbnak kell lennie";
            NameValidationVisibility = true;
        }
        else
        {
            NameValidationVisibility = false;
        }
        SaveProductCommand.NotifyCanExecuteChanged();
    }

    public void DescValidation()
    {
        if (string.IsNullOrWhiteSpace(ProductDesc))
        {
            DescValidationText = "A leírás nem lehet üres";
            DescValidationVisibility = true;
        }
        else if (ProductDesc.Length < 11)
        {
            DescValidationText = "A leírásnak 10 karakternél hosszabbnak kell lennie";
            DescValidationVisibility = true;
        }
        else
        {
            DescValidationVisibility = false;
        }
        SaveProductCommand.NotifyCanExecuteChanged();
    }

    public void Img1Validation()
    {
        if (string.IsNullOrWhiteSpace(ImageUrl1))
        {
            Img1ValidationText = "Az első kép nem lehet üres";
            Img1ValidationVisibility = true;
        }
        else
        {
            Img1ValidationVisibility = false;
        }
        SaveProductCommand.NotifyCanExecuteChanged();
    }

    public void CategoryValidation()
    {
        if (SelectedCategory == null)
        {
            CategoryValidationText = "Válassz kategóriát";
            CategoryValidationVisibility = true;
        }
        else
        {
            CategoryValidationVisibility = false;
        }
        SaveProductCommand.NotifyCanExecuteChanged();
    }

    partial void OnSelectedCategoryChanged(CategoryVmList value)
    {
        DeleteCategoryCommand.NotifyCanExecuteChanged();
        UpdateCategoryNameCommand.NotifyCanExecuteChanged();
    }

    #endregion

    #region Commands

    [RelayCommand(CanExecute = nameof(IsValid))]
    private void SaveProduct()
    {
        NameValidation();
        DescValidation();
        Img1Validation();
        CategoryValidation();

        foreach (var sizeWithQuantity in SizesWithQuantity)
        {
            if (sizeWithQuantity.Value < 0)
            {
                SizesWithQuantity[sizeWithQuantity.Key] = 0;
            }
        }

        if (IsValid())
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
                    SizesWithQuantity = SizesWithQuantity,
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
                    SizesWithQuantity = SizesWithQuantity,
                    Price = ProductPrice,
                    CategoryId = SelectedCategory.Id,
                });
                TeachingTip.Subtitle = "Új termék(ek) hozzáadva";
                TeachingTip.IsOpen = true;
            }
        }
    }

    [RelayCommand]
    private async void NewCategory()
    {
        var dialogContent = new NewCategoryPage();
        var dialog = new ContentDialog
        {
            XamlRoot = XamlRoot,
            PrimaryButtonText = "Felvétel",
            CloseButtonText = "Mégse",
            Content = dialogContent
        };

        var result = await dialog.ShowAsync();
        if (result != ContentDialogResult.Primary)
        {
            return;
        }

        if (string.IsNullOrWhiteSpace(dialogContent.ViewModel.CategoryName))
        {
            TeachingTip.Subtitle = "Kategória neve nem lehet üres";            
            NewCategory(); 
            TeachingTip.IsOpen = true;
        }
        else
        {
            _categoryService.AddCategory(dialogContent.ViewModel.CategoryName);
            TeachingTip.Subtitle = "Kategória felvéve";
            TeachingTip.IsOpen = true;
            LoadCategories();
        }
    }

    [RelayCommand(CanExecute = nameof(IsCategorySelected))]
    private async void UpdateCategoryName()
    {
        var dialogContent = new NewCategoryPage();
        var dialog = new ContentDialog
        {
            XamlRoot = XamlRoot,
            PrimaryButtonText = "Mentés",
            CloseButtonText = "Mégse",
            Content = dialogContent
        };

        dialogContent.ViewModel.CategoryName = SelectedCategory.Name;

        var result = await dialog.ShowAsync();
        if (result != ContentDialogResult.Primary)
        {
            return;
        }

        if (string.IsNullOrWhiteSpace(dialogContent.ViewModel.CategoryName))
        {
            TeachingTip.Subtitle = "Kategória neve nem lehet üres";
            TeachingTip.IsOpen = true;
            UpdateCategoryName();
        }
        else
        {
            _categoryService.UpdateCategoryName(SelectedCategory.Id, dialogContent.ViewModel.CategoryName);
            TeachingTip.Subtitle = "Változtatások elmentve";
            TeachingTip.IsOpen = true;
            LoadCategories();
        }
    }

    [RelayCommand(CanExecute = nameof(IsCategorySelected))]
    private void DeleteCategory()
    {
        if (_categoryService.DeleteCategory(SelectedCategory.Id) == false)
        {
            TeachingTip.Subtitle = "A kategóriához tartozik termék";
            TeachingTip.IsOpen = true;
        }
        else
        {
            _categoryService.DeleteCategory(SelectedCategory.Id);
            TeachingTip.Subtitle = "Kategória sikeresen törölve";
            TeachingTip.IsOpen = true;
            LoadCategories();
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
            Categories.Add(new CategoryVmList
            {
                Id = category.Id,
                Name = category.Name
            });
        }
    }

    private bool IsValid()
    {
        if (DescValidationVisibility == false &&
            NameValidationVisibility == false &&
            Img1ValidationVisibility == false &&
            CategoryValidationVisibility == false)
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    private bool IsCategorySelected()
    {
        if (SelectedCategory != null)
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    #endregion
}
