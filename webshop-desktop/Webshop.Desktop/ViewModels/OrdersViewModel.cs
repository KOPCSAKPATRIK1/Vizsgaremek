using System.Collections.ObjectModel;

using CommunityToolkit.Mvvm.ComponentModel;

using Webshop.Desktop.Contracts.ViewModels;
using Webshop.Desktop.Core.Contracts.Services;
using Webshop.Desktop.Core.Interfaces.Business;
using Webshop.Desktop.Core.Models;
using Webshop.Desktop.Core.Models.Business;

namespace Webshop.Desktop.ViewModels;

public class OrdersViewModel : ObservableRecipient, INavigationAware
{
    #region Private members

    private readonly IOrderService _orderService;

    #endregion

    #region Observables

    public ObservableCollection<OrderVmList> OrdersWithInfo { get; set; } = new();

    #endregion

    #region Constructor

    public OrdersViewModel(IOrderService orderService)
    {
        _orderService = orderService;
    }

    #endregion

    #region Events
    public void OnNavigatedTo(object parameter)
    {
       OrdersWithInfo.Clear();
        var ordersWithInfo = _orderService.GetOrdersWithInfo();
        foreach ( var order in ordersWithInfo )
        {
            OrdersWithInfo.Add(order);
        }
    }

    public void OnNavigatedFrom()
    {

    }

    #endregion
}
