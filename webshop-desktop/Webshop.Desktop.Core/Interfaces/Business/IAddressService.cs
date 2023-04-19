using Webshop.Desktop.Core.Models.Business.Dtos;

namespace Webshop.Desktop.Core.Interfaces.Business;
public interface IAddressService
{
    /// <summary>
    /// Szállitási cím megváltoztatása.
    /// </summary>
    /// <param name="address">Szállitási cím</param>
    /// <param name="id">Rendelés azonosító</param>
    void ChangeAddress(AddressDto address, int id);
}
