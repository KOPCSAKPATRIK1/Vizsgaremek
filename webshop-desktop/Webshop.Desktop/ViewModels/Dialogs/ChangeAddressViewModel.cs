using CommunityToolkit.Mvvm.ComponentModel;

namespace Webshop.Desktop.ViewModels.Dialogs;
public partial class ChangeAddressViewModel : ObservableRecipient
{
    [ObservableProperty] private string _streetAddress;
    [ObservableProperty] private string _city;
    [ObservableProperty] private string _state;
    [ObservableProperty] private int _postalCode;
}
