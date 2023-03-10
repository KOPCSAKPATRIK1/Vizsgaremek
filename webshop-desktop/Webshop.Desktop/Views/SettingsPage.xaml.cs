using Microsoft.UI.Xaml.Controls;

using Webshop.Desktop.ViewModels;

namespace Webshop.Desktop.Views;

public sealed partial class SettingsPage : Page
{
    public SettingsViewModel ViewModel
    {
        get;
    }

    public SettingsPage()
    {
        ViewModel = App.GetService<SettingsViewModel>();
        InitializeComponent();
    }
}
