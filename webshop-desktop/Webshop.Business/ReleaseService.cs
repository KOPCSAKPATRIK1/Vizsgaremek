using Webshop.Desktop.Core.Interfaces.Business;
using Webshop.Desktop.Core.Interfaces.Repository;
using Webshop.Desktop.Core.Models.Business;
using Webshop.Desktop.Core.Models.Business.Dtos;
using Webshop.Desktop.Core.Models.Domain;

namespace Webshop.Business;
public class ReleaseService : IReleaseService
{
    #region Private members

    private readonly IRepository<Release> _releaseRepository;

    #endregion

    #region Constructor

    public ReleaseService(IRepository<Release> releaseRepository)
    {
        _releaseRepository = releaseRepository;
    }

    #endregion

    public void AddRelease(ReleaseDto release)
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

    public ReleaseVmList[] GetReleases()
    {
        return _releaseRepository.GetAll()
            .Select(r => new ReleaseVmList
            {
                Id = r.Id,
                Name = r.Name,
                ReleaseDate = r.ReleaseDate,
                Info = new ReleaseInfoVmList[]
                {
                    new ReleaseInfoVmList
                    {
                         Desc = r.Desc,
                    ImageUrl1 = r.ImageUrl1,
                    ImageUrl2 = r.ImageUrl2,
                    ImageUrl3 = r.ImageUrl3,
                    ImageUrl4 = r.ImageUrl4,
                    }
                }
            }).ToArray();
    }

    public void DeleteRelease(int id)
    {
        var release = _releaseRepository.Find(r => r.Id == id).SingleOrDefault();
        if (release != null)
        {
            _releaseRepository.Remove(release);
        }
    }

    public ReleaseDto? GetReleaseForUpdate(int id)
    {
        return _releaseRepository.Find(r => r.Id == id)
        .Select(r => new ReleaseDto
        {
            Name = r.Name,
            Desc = r.Desc,
            ReleaseDate = r.ReleaseDate,
            ImageUrl1 = r.ImageUrl1,
            ImageUrl2 = r.ImageUrl2,
            ImageUrl3 = r.ImageUrl3,
            ImageUrl4 = r.ImageUrl4,
        })
        .FirstOrDefault();
    }

    public void UpdateRelease(ReleaseDto release, int id)
    {
        var existingRelease = _releaseRepository.Find(r => r.Id == id).FirstOrDefault();
        if (existingRelease != null)
        {
            existingRelease.Name = release.Name;
            existingRelease.Desc = release.Desc;
            existingRelease.ReleaseDate = release.ReleaseDate;
            existingRelease.ImageUrl1 = release.ImageUrl1;
            existingRelease.ImageUrl2 = release.ImageUrl2;
            existingRelease.ImageUrl3 = release.ImageUrl3;
            existingRelease.ImageUrl4 = release.ImageUrl4;
            _releaseRepository.Update(existingRelease);
        }
    }
}
