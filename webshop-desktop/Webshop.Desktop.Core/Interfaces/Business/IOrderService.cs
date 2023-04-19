using Webshop.Desktop.Core.Models.Business;

namespace Webshop.Desktop.Core.Interfaces.Business;
public interface IOrderService
{
    /// <summary>
    /// Rendelések rekérdezése, rendelt termékkel/termékekkel.
    /// </summary>
    /// <returns>Rendelések megjeleníthető formában.</returns>
    OrderVmList[] GetOrdersWithInfo();

    /// <summary>
    /// Rendelés törlése.
    /// </summary>
    /// <param name="id">Rendelés azonosító.</param>
    void DeleteOrder(int id);
}
