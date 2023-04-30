using System.Collections.ObjectModel;
using CommunityToolkit.Mvvm.ComponentModel;
using CommunityToolkit.Mvvm.Input;
using Microsoft.UI.Xaml.Controls;
using Webshop.Desktop.Contracts.Services;
using Webshop.Desktop.Contracts.ViewModels;
using Webshop.Desktop.Core.Interfaces.Business;
using Webshop.Desktop.Core.Models.Business;
using Webshop.Desktop.Views;


namespace Webshop.Desktop.ViewModels;

public partial class ProductsViewModel : ObservableRecipient, INavigationAware
{
    #region Private members

    private readonly IProductService _productService;
    private readonly ICategoryService _categoryService;
    private readonly INavigationService _navigationService;
    private ProductVmList[] _products;

    #endregion

    public TeachingTip TeachingTip;

    #region Observables

    public ObservableCollection<ProductVmList> Products { get; set; } = new();
    public ObservableCollection<CategoryVmList> Categories { get; set; } = new();

    [ObservableProperty] private ProductVmList? _selectedProduct;
    [ObservableProperty] private CategoryVmList _selectedCategory;
    [ObservableProperty] private string _filterText;

    #endregion

    #region Constructor

    public ProductsViewModel(
        IProductService productService,
        INavigationService navigationService,
        ICategoryService categoryService)
    {
        _productService = productService;
        _navigationService = navigationService;
        _categoryService = categoryService;
    }

    #endregion

    #region Events

    public void OnNavigatedTo(object parameter)
    {
        LoadProducts();        
        Categories.Clear();
        var categories = _categoryService.GetCategories();
        Categories.Add(new CategoryVmList
        {
            Name = "Összes"
        });
        foreach (var category in categories)
        {
            Categories.Add(new CategoryVmList
            {
                Id = category.Id,
                Name = category.Name
            });
        }
        SelectedCategory = Categories.First();
    }

    public void OnNavigatedFrom()
    {

    }

    partial void OnSelectedProductChanged(ProductVmList? value)
    {
        ChangeInactiveCommand.NotifyCanExecuteChanged();
        ChangePopularCommand.NotifyCanExecuteChanged();
        ChangeProductParametersCommand.NotifyCanExecuteChanged();
        DeleteProductCommand.NotifyCanExecuteChanged();
    }

    partial void OnFilterTextChanging(string value)
    {
        var filteredProducts = _products.Where(p => p.Name.Contains(value.ToUpper()));
        Products.Clear();
        foreach (var product in filteredProducts)
        {
            Products.Add(product);
        }
    }

    partial void OnSelectedCategoryChanged(CategoryVmList value)
    {
        if (value.Name == "Összes")
        {
            Products.Clear();
            foreach (var product in _products)
            {
                Products.Add(product);
            }
        }
        else
        {
            var filteredProducts = _products.Where(p => p.CategoryName == value.Name);
            Products.Clear();
            foreach (var product in filteredProducts)
            {
                Products.Add(product);
            }
        }
    }

    #endregion

    #region Commands

    [RelayCommand]
    private void ToNewProductPage()
    {
        _navigationService.Frame?.Navigate(typeof(NewProductPage));
    }

    [RelayCommand(CanExecute = nameof(CanExecuteCommand))]
    private void ChangeInactive()
    {
        if (SelectedProduct != null)
        {
            _productService.ChangeInactive(SelectedProduct.Id);
            LoadProducts();
        }
        OnSelectedCategoryChanged(SelectedCategory);
        if (FilterText != null)
        {
            OnFilterTextChanging(FilterText);
        }
    }

    [RelayCommand(CanExecute = nameof(CanExecuteCommand))]
    private void ChangePopular()
    {
        if (SelectedProduct != null)
        {
            _productService.ChangePopular(SelectedProduct.Id);
            LoadProducts();
        }
        OnSelectedCategoryChanged(SelectedCategory);
        if (FilterText != null)
        {
            OnFilterTextChanging(FilterText);
        }
    }

    [RelayCommand(CanExecute = nameof(CanExecuteCommand))]
    private void ChangeProductParameters()
    {
        _navigationService.Frame?.Navigate(typeof(NewProductPage), SelectedProduct.Id);
    }

    [RelayCommand(CanExecute = nameof(CanExecuteCommand))]
    private void DeleteProduct()
    {
        if (_productService.DeleteProduct(SelectedProduct.Id))
        {
            TeachingTip.Subtitle = "Sikeres törlés";
            TeachingTip.IsOpen = true;
            LoadProducts();
        }
        else
        {
            TeachingTip.Subtitle = "A termék rendelve lett vagy kosárban van probáld inaktivvá tenni";
            TeachingTip.IsOpen = true;
        }
        
    }

    #endregion

    #region Methods

    private void LoadProducts()
    {
        Products.Clear();
        _products = _productService.GetProductsWithInfo();
        foreach (var product in _products)
        {
            Products.Add(product);
        }
    }

    private bool CanExecuteCommand()
    {
        if (SelectedProduct == null)
        {
            return false;
        }
        else
        {
            return true;
        }
    }

    #endregion
}