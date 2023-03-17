﻿using System.Collections.ObjectModel;
using System.Windows.Input;
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

    #endregion

    #region Observables

    public ObservableCollection<ProductVmList> ProductsWithInfo { get; set; } = new();

    [ObservableProperty] private ProductVmList? _selectedProduct;

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

        ProductsWithInfo.Clear();
        var productsWithInfo =  _productService.GetProductsWithInfo();
        foreach (var product in productsWithInfo)
        {
            ProductsWithInfo.Add(product);
        }
    }
    public void OnNavigatedFrom()
    {

    }

    #endregion

    #region Commands

    [RelayCommand]
    private void ToNewProductPage()
    {
        _navigationService.Frame?.Navigate(typeof(NewProductPage));
    }

    [RelayCommand(CanExecute = nameof(CanChangeInactive))]
    private void ChangeInactive()
    {
        if (SelectedProduct != null)
        {
            _productService.ChangeInactive(SelectedProduct.Id);
            LoadProducts();
        }

    }

    #endregion

    #region Methods

    private void LoadProducts()
    {
        ProductsWithInfo.Clear();
        var productsWithInfo =  _productService.GetProductsWithInfo();
        foreach (var product in productsWithInfo)
        {
            ProductsWithInfo.Add(product);
        }
    }

    private bool CanChangeInactive()
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