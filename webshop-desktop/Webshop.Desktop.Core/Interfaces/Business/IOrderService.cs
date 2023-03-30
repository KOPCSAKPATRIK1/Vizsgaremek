using Webshop.Desktop.Core.Models.Business;

namespace Webshop.Desktop.Core.Interfaces.Business;
public interface IOrderService
{
    OrderVmList[] GetOrdersWithInfo();
    void DeleteOrder(int id);
}
