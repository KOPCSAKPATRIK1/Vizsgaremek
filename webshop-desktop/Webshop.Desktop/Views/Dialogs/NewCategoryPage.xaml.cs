using Microsoft.UI.Xaml.Controls;
using Webshop.Desktop.ViewModels.Dialogs;

namespace Webshop.Desktop.Views.Dialogs;

public sealed partial class NewCategoryPage : Page
{
    public NewCategoryViewModel ViewModel { get; set; }

    public NewCategoryPage()
    {
        ViewModel = App.GetService<NewCategoryViewModel>();
        InitializeComponent();
    }
}
