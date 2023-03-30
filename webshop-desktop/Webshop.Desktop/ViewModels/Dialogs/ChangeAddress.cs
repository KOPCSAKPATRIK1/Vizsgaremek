using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CommunityToolkit.Mvvm.ComponentModel;

namespace Webshop.Desktop.ViewModels.Dialogs;
public partial class ChangeAddress
{
    [ObservableProperty] private string _streetAddress;
}
