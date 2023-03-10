using Webshop.Desktop.Core.Interfaces.Business;
using Webshop.Desktop.Core.Interfaces.Repository;
using Webshop.Desktop.Core.Models.Business;
using Webshop.Desktop.Core.Models.Domain;

namespace Webshop.Business;
public class SizeService : ISizeService
{
    #region Private members

    private readonly IRepository<Size> _sizeRepository;

    #endregion

    #region Constructor

    public SizeService(IRepository<Size> sizeRepository)
    {    
        _sizeRepository = sizeRepository; 
    }

    #endregion
    public SizeVmList[] GetSizes()
    {
        return _sizeRepository.GetAll()
            .Select(s => new SizeVmList
            {
                Id = s.Id,
                Size = s.Size1
            }).ToArray();
    }
}
