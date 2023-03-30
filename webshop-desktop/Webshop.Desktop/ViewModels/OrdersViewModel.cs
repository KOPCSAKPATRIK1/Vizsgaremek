using System.Collections.ObjectModel;

using CommunityToolkit.Mvvm.ComponentModel;
using CommunityToolkit.Mvvm.Input;
using Microsoft.UI.Xaml;
using Microsoft.UI.Xaml.Controls;
using Webshop.Desktop.Contracts.ViewModels;
using Webshop.Desktop.Core.Contracts.Services;
using Webshop.Desktop.Core.Interfaces.Business;
using Webshop.Desktop.Core.Models;
using Webshop.Desktop.Core.Models.Business;

namespace Webshop.Desktop.ViewModels;

public partial class OrdersViewModel : ObservableRecipient, INavigationAware
{
    #region Private members

    private readonly IOrderService _orderService;

    #endregion

    public TeachingTip TeachingTip;
    public XamlRoot XamlRoot;

    #region Observables

    public ObservableCollection<OrderVmList> OrdersWithInfo { get; set; } = new();

    [ObservableProperty] private OrderVmList _selectedOrder;

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
        LoadOrders();
    }

    public void OnNavigatedFrom()
    {

    }

    partial void OnSelectedOrderChanged(OrderVmList value)
    {
        ChangeOrderAddressCommand.NotifyCanExecuteChanged();
        DeleteOrderCommand.NotifyCanExecuteChanged();
    }

    #endregion

    #region Commands

    [RelayCommand(CanExecute = nameof(IsOrderSelected))]
    private void ChangeOrderAddress()
    {
         
    }

    [RelayCommand(CanExecute = nameof(IsOrderSelected))]
    private void DeleteOrder()
    {
        _orderService.DeleteOrder(SelectedOrder.Id);
        TeachingTip.Subtitle = "Rendelés sikeresen törölve";
        TeachingTip.IsOpen = true;
        LoadOrders();
    }

    #endregion

    #region Methods

    private void LoadOrders()
    {
        OrdersWithInfo.Clear();
        var ordersWithInfo = _orderService.GetOrdersWithInfo();
        foreach (var order in ordersWithInfo)
        {
            OrdersWithInfo.Add(order);
        }
    }

    private bool IsOrderSelected()
    {
        if (SelectedOrder != null)
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    #endregion
}
