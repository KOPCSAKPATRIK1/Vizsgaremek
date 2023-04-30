using System.Collections.ObjectModel;
using CommunityToolkit.Mvvm.ComponentModel;
using CommunityToolkit.Mvvm.Input;
using Microsoft.UI.Xaml;
using Microsoft.UI.Xaml.Controls;
using Webshop.Desktop.Contracts.ViewModels;
using Webshop.Desktop.Core.Interfaces.Business;
using Webshop.Desktop.Core.Models.Business;
using Webshop.Desktop.Core.Models.Business.Dtos;
using Webshop.Desktop.Views.Dialogs;

namespace Webshop.Desktop.ViewModels;

public partial class OrdersViewModel : ObservableRecipient, INavigationAware
{
    #region Private members

    private readonly IOrderService _orderService;
    private readonly IAddressService _addressService;

    #endregion

    public TeachingTip TeachingTip;
    public XamlRoot XamlRoot;

    #region Observables

    public ObservableCollection<OrderVmList> OrdersWithInfo { get; set; } = new();

    [ObservableProperty] private OrderVmList _selectedOrder;

    #endregion

    #region Constructor

    public OrdersViewModel(
        IOrderService orderService,
        IAddressService addressService)
    {
        _orderService = orderService;
        _addressService = addressService;
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
    private async void ChangeOrderAddress()
    {
        var dialogContent = new ChangeAddressPage();
        var dialog = new ContentDialog
        {
            XamlRoot = XamlRoot,
            PrimaryButtonText = "Mentés",
            CloseButtonText = "Mégse",
            Content = dialogContent,
        };

        dialogContent.ViewModel.StreetAddress = SelectedOrder.StreetAddress;
        dialogContent.ViewModel.City = SelectedOrder.City;
        dialogContent.ViewModel.State = SelectedOrder.State;
        dialogContent.ViewModel.PostalCode = SelectedOrder.PostalCode;

        var result = await dialog.ShowAsync();
        if (result != ContentDialogResult.Primary)
        {
            return;
        }

        if (string.IsNullOrWhiteSpace(dialogContent.ViewModel.StreetAddress) ||
            string.IsNullOrWhiteSpace(dialogContent.ViewModel.City) ||
            string.IsNullOrWhiteSpace(dialogContent.ViewModel.State))
        {
            TeachingTip.Subtitle = "Mezők nem lehetnek üresek";
            ChangeOrderAddress();
            TeachingTip.IsOpen = true;
        }
        else
        {
            _addressService.ChangeAddress(new AddressDto
            {
                StreetAddress = dialogContent.ViewModel.StreetAddress,
                City = dialogContent.ViewModel.City,
                State = dialogContent.ViewModel.State,
                PostalCode = dialogContent.ViewModel.PostalCode
            }, SelectedOrder.AddressId);

            TeachingTip.Subtitle = "Változtatások Elmentve";
            TeachingTip.IsOpen = true;
            LoadOrders();
        }
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
