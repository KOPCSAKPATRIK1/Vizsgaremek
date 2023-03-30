using Microsoft.UI.Xaml.Controls;
using Webshop.Desktop.ViewModels.Dialogs;

namespace Webshop.Desktop.Views.Dialogs;

public sealed partial class ChangeAddressPage : Page
{
    public ChangeAddressViewModel ViewModel { get; set; }

    public ChangeAddressPage()
    {
        ViewModel = App.GetService<ChangeAddressViewModel>();
        InitializeComponent();
    }
}
