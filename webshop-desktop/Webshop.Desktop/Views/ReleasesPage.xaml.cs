using Microsoft.UI.Xaml.Controls;

using Webshop.Desktop.ViewModels;

namespace Webshop.Desktop.Views;

public sealed partial class ReleasesPage : Page
{
    public ReleasesViewModel ViewModel
    {
        get;
    }

    public ReleasesPage()
    {
        ViewModel = App.GetService<ReleasesViewModel>();
        InitializeComponent();
        Loaded += (sender, args) =>
        {
            ViewModel.TeachingTip = TeachingTip_confirm;
        };
    }
}
