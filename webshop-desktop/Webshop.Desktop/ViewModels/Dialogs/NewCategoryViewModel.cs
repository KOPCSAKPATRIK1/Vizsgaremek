using CommunityToolkit.Mvvm.ComponentModel;

namespace Webshop.Desktop.ViewModels.Dialogs;
public partial class NewCategoryViewModel : ObservableRecipient
{
    [ObservableProperty] private string _categoryName;
}
