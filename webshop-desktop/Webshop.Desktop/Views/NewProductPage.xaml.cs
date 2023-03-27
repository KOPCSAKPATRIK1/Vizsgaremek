using Microsoft.UI.Xaml.Controls;

using Webshop.Desktop.ViewModels;

namespace Webshop.Desktop.Views;

public sealed partial class NewProductPage : Page
{
    public NewProductViewModel ViewModel
    {
        get;
    }

    public NewProductPage()
    {
        ViewModel = App.GetService<NewProductViewModel>();
        InitializeComponent();
        Loaded += (sender, args) =>
        {
            ViewModel.TeachingTip = TeachingTip_confirm;
            ViewModel.XamlRoot = XamlRoot;
        };
    }
}
