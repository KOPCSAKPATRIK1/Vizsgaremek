using Microsoft.UI.Xaml.Controls;

using Webshop.Desktop.ViewModels;

namespace Webshop.Desktop.Views;

public sealed partial class NewReleasePage : Page
{
    public NewReleaseViewModel ViewModel
    {
        get;
    }

    public NewReleasePage()
    {
        ViewModel = App.GetService<NewReleaseViewModel>();
        InitializeComponent();
        Loaded += (sender, args) =>
        {
            ViewModel.TeachingTip = TeachingTip_confirm;
        };
    }
}
