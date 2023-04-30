using Microsoft.EntityFrameworkCore;
using Webshop.Desktop.Core.Interfaces.Business;
using Webshop.Desktop.Core.Interfaces.Repository;
using Webshop.Desktop.Core.Models.Business;
using Webshop.Desktop.Core.Models.Domain;

namespace Webshop.Business;
public class OrderService : IOrderService
{
    #region Private members

    private readonly IRepository<Order> _orderRepository;
    private readonly IRepository<OrderItem> _orderItemRepository;
    private readonly IRepository<Address> _addressRepository;

    #endregion

    #region Constructor

    public OrderService(
        IRepository<Order> orderRepository,
        IRepository<OrderItem> orderItemRepository,
        IRepository<Address> addressRepository)
    {
        _orderRepository = orderRepository;
        _orderItemRepository = orderItemRepository;
        _addressRepository = addressRepository;
    }

    #endregion

    public OrderVmList[] GetOrdersWithInfo()
    {
        return _orderRepository.GetAllIncluding(o => o.User, o => o.OrderItems)
            .Select(o => new OrderVmList
            {
                Id = o.Id,
                OrderId = o.Id,
                Email = o.User.Email,
                OrderDate = o.OrderDate,
                AddressId = o.AddressId,
                StreetAddress = o.Address.StreetAddress,
                City = o.Address.City,
                State = o.Address.State,
                PostalCode = o.Address.PostalCode,
                ShippingMethod = o.ShippingMethod.Name,
                Info = o.OrderItems.Select(oi => new OrderInfoVmList
                {
                    CategoryName = oi.Product.Category.Name,
                    ProductName = oi.Product.Name,
                    Quantity = oi.Quantity,
                    Size = oi.Size.Size1,
                }).ToArray(),
            }).ToArray();
    }

    public void DeleteOrder(int id)
    {
        var order = _orderRepository.Find(o => o.Id == id).Include(o => o.OrderItems).FirstOrDefault();
        if (order != null)
        {
            var orderItems = order.OrderItems.ToArray();
            foreach (var orderItem in orderItems)
            {
                _orderItemRepository.Remove(orderItem);
            }

            var address = _addressRepository.Find(a => a.Id == order.AddressId).FirstOrDefault();
            if (address != null)
            {
                _addressRepository.Remove(address);
            }
            _orderRepository.Remove(order);
        }
    }
}
