using Microsoft.UI.Xaml.Controls;
using Webshop.Desktop.ViewModels;

namespace Webshop.Desktop.Views;

public sealed partial class OrdersPage : Page
{
    public OrdersViewModel ViewModel
    {
        get;
    }

    public OrdersPage()
    {
        ViewModel = App.GetService<OrdersViewModel>();
        InitializeComponent();
        Loaded += (sender, args) =>
        {
            ViewModel.TeachingTip = TeachingTip_confirm;
            ViewModel.XamlRoot = XamlRoot;
        };
    }
}
