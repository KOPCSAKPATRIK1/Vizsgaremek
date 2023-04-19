using Webshop.Desktop.Core.Interfaces.Business;
using Webshop.Desktop.Core.Interfaces.Repository;
using Webshop.Desktop.Core.Models.Business.Dtos;
using Webshop.Desktop.Core.Models.Domain;

namespace Webshop.Business;
public class AddressService : IAddressService
{
    #region Private members

    private readonly IRepository<Address> _addressRepository;

    #endregion

    #region Constructor

    public AddressService(IRepository<Address> addressRepository)
    {
        _addressRepository = addressRepository;
    }

    #endregion

    public void ChangeAddress(AddressDto address,int id)
    {
        var existingAddress = _addressRepository.Find(a => a.Id == id).FirstOrDefault();
        if (existingAddress != null)
        {
            existingAddress.StreetAddress = address.StreetAddress;
            existingAddress.City = address.City;
            existingAddress.State = address.State;
            existingAddress.PostalCode = address.PostalCode;
            _addressRepository.Update(existingAddress);
        }
    }
}
