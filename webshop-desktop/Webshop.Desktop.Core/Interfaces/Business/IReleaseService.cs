using Webshop.Desktop.Core.Models.Business.Dtos;
using Webshop.Desktop.Core.Models.Domain;

namespace Webshop.Desktop.Core.Interfaces.Business;
public interface IReleaseService
{
    void AddRelease(NewReleaseDto release);
}
