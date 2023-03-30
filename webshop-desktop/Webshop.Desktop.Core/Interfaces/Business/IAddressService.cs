using Webshop.Desktop.Core.Models.Business.Dtos;

namespace Webshop.Desktop.Core.Interfaces.Business;
public interface IAddressService
{
    void ChangeAddress(AddressDto address, int id);
}
