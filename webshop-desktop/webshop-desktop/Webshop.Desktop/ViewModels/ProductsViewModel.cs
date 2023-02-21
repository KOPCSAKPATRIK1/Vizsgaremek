using System.Collections.ObjectModel;

using CommunityToolkit.Mvvm.ComponentModel;

using Webshop.Desktop.Contracts.ViewModels;
using Webshop.Desktop.Core.Contracts.Services;
using Webshop.Desktop.Core.Interfaces.Business;
using Webshop.Desktop.Core.Models;
using Webshop.Desktop.Core.Models.Business;

namespace Webshop.Desktop.ViewModels;

public class ProductsViewModel : ObservableRecipient, INavigationAware
{
    private readonly IProductService _productService;

    public ObservableCollection<ProductVmList> ProductsWithCategory { get; set; } = new();

    public ProductsViewModel(IProductService productService)
    {
        _productService = productService;
    }

    public void OnNavigatedTo(object parameter)
    {

        ProductsWithCategory.Clear();
        var productsWithCategory = _productService.GetProductsWithCategory();
        foreach (var product in productsWithCategory)
        {
            ProductsWithCategory.Add(product);
        }
    }

    public void OnNavigatedFrom()
    {
    }
}
