﻿using System.Collections.ObjectModel;
using CommunityToolkit.Mvvm.ComponentModel;
using CommunityToolkit.Mvvm.Input;
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
    private readonly INavigationService _navigationService;
    private ProductVmList[] _products;

    #endregion

    #region Observables

    public ObservableCollection<ProductVmList> Products { get; set; } = new();

    [ObservableProperty] private ProductVmList? _selectedProduct;
    [ObservableProperty] private string _filterText;

    #endregion

    #region Constructor

    public ProductsViewModel(
        IProductService productService,
        INavigationService navigationService)
    {
        _productService = productService;
        _navigationService = navigationService;
    }

    #endregion

    #region Events

    public  void OnNavigatedTo(object parameter)
    {
        LoadProducts();
    }
    public void OnNavigatedFrom()
    {

    }

    partial void OnSelectedProductChanged(ProductVmList? value)
    {
        ChangeInactiveCommand.NotifyCanExecuteChanged();
        ChangeProductParametersCommand.NotifyCanExecuteChanged();
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
    }

    [RelayCommand(CanExecute = nameof (CanExecuteCommand))]
    private void ChangeProductParameters()
    {
        _navigationService.Frame?.Navigate(typeof(NewProductPage), SelectedProduct.Id);
    }

    #endregion

    #region Methods

    private void LoadProducts()
    {
        Products.Clear();
        _products =  _productService.GetProductsWithInfo();
        foreach (var product in _products)
        {
            Products.Add(product);
        }
    }

    private bool CanExecuteCommand()
    {
        if (SelectedProduct == null)
        {
            return  false;
        }
        else
        {
            return true;
        }
    }

    #endregion
}