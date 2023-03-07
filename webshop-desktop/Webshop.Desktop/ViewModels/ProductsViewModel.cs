using System.Collections.ObjectModel;
using CommunityToolkit.Mvvm.ComponentModel;
using Webshop.Desktop.Contracts.ViewModels;
using Webshop.Desktop.Core.Interfaces.Business;
using Webshop.Desktop.Core.Models.Business;

namespace Webshop.Desktop.ViewModels;

public class ProductsViewModel : ObservableRecipient, INavigationAware
{
    #region Private members

    private readonly IProductService _productService;

    #endregion

    #region Observables

    public ObservableCollection<ProductVmList> ProductsWithInfo { get; set; } = new();

    #endregion

    #region Constructor

    public ProductsViewModel(IProductService productService)
    {
        _productService = productService;
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

}