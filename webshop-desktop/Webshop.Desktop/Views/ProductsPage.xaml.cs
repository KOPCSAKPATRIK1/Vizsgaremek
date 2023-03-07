using Microsoft.UI.Xaml.Controls;
using Webshop.Desktop.ViewModels;

namespace Webshop.Desktop.Views;

public sealed partial class ProductsPage : Page
{
    public ProductsViewModel ViewModel
    {
        get;
    }

    public ProductsPage()
    {
        ViewModel = App.GetService<ProductsViewModel>();
        InitializeComponent();
    }
}
