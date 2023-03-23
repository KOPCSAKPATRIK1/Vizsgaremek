using Webshop.Desktop.Core.Models.Business;
using Webshop.Desktop.Core.Models.Business.Dtos;

namespace Webshop.Desktop.Core.Interfaces.Business;
public interface IReleaseService
{
    void AddRelease(ReleaseDto release);
    ReleaseVmList[] GetReleases();
    void DeleteRelease(int id);
    ReleaseDto GetReleaseForUpdate(int id);
    void UpdateRelease(ReleaseDto release, int id);
}
