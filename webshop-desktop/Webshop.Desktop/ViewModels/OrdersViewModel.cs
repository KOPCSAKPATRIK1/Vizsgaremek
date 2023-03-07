using System.Collections.ObjectModel;

using CommunityToolkit.Mvvm.ComponentModel;

using Webshop.Desktop.Contracts.ViewModels;
using Webshop.Desktop.Core.Contracts.Services;
using Webshop.Desktop.Core.Models;

namespace Webshop.Desktop.ViewModels;

public class OrdersViewModel : ObservableRecipient, INavigationAware
{
  
    public OrdersViewModel()
    {
        
    }

    public void OnNavigatedTo(object parameter)
    {
       
    }

    public void OnNavigatedFrom()
    {
    }
}
