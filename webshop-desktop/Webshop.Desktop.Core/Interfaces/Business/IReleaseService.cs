using Webshop.Desktop.Core.Models.Business;
using Webshop.Desktop.Core.Models.Business.Dtos;

namespace Webshop.Desktop.Core.Interfaces.Business;
public interface IReleaseService
{
    void AddRelease(NewReleaseDto release);
    ReleaseVmList[] GetReleases();
    int DeleteRelease(int id);
}
