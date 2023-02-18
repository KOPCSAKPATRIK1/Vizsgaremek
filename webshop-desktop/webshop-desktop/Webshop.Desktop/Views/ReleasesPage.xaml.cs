using Microsoft.UI.Xaml.Controls;

using Webshop.Desktop.ViewModels;

namespace Webshop.Desktop.Views;

// TODO: Change the grid as appropriate for your app. Adjust the column definitions on DataGridPage.xaml.
// For more details, see the documentation at https://docs.microsoft.com/windows/communitytoolkit/controls/datagrid.
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
    }
}
