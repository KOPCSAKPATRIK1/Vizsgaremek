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
    private readonly IRepository<User> _userRepository;
    private readonly IRepository<Product> _productRepository;

    #endregion

    #region Constructor

    public OrderService(
        IRepository<Order> orderRepository,
        IRepository<OrderItem> orderItemRepository,
        IRepository<User> userRepository,
        IRepository<Product> productRepository)
    {
        _orderRepository = orderRepository;
        _orderItemRepository = orderItemRepository;
        _userRepository = userRepository;
        _productRepository = productRepository;
    }

    #endregion
    public OrderVmList[] GetOrdersWithInfo()
    {
        return _orderRepository.GetAll()
             .Include(o => o.User)
             .Include(o => o.OrderItems)
             .Select(o => new OrderVmList
             {
                 OrderId = o.Id,
                 Email = o.User.Email,
                 OrderDate = o.OrderDate,
                 Info = o.OrderItems.Select(oi => new OrderInfoVmList
                 {
                     ProductName = oi.Product.Name,
                     Quantity = oi.Quantity,
                     Size = oi.Size.Size1,
                 }).ToArray(),
             }).ToArray();
    }
}
