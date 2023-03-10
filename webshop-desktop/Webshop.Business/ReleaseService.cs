using Webshop.Desktop.Core.Interfaces.Business;
using Webshop.Desktop.Core.Interfaces.Repository;
using Webshop.Desktop.Core.Models.Business.Dtos;
using Webshop.Desktop.Core.Models.Domain;

namespace Webshop.Business;
public class ReleaseService : IReleaseService
{
    #region Private members

    private readonly IRepository<Release> _releaseRepository;


    #endregion

    #region Constructor
    public ReleaseService(IRepository<Release>  releaseRepository)
    {
        _releaseRepository = releaseRepository;
    }

    #endregion

    public void AddRelease(NewReleaseDto release)
    {
        _releaseRepository.Add(new Release
        {
            Name = release.Name,
            Desc = release.Desc,
            ImageUrl1 = release.ImageUrl1,
            ImageUrl2 = release.ImageUrl2,
            ImageUrl3 = release.ImageUrl3,
            ImageUrl4 = release.ImageUrl4,
            ReleaseDate = release.ReleaseDate,
        });
    }
}
