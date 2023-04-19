using Webshop.Desktop.Core.Models.Business;
using Webshop.Desktop.Core.Models.Business.Dtos;

namespace Webshop.Desktop.Core.Interfaces.Business;
public interface IReleaseService
{
    /// <summary>
    /// Megjelenés hozzáadása.
    /// </summary>
    /// <param name="release">Megjelnés.</param>
    void AddRelease(ReleaseDto release);

    /// <summary>
    /// Megjelenések lekérdezése.
    /// </summary>
    /// <returns>Megjelenés megjeleníithető formában.</returns>
    ReleaseVmList[] GetReleases();

    /// <summary>
    /// Megjelenés törlése.
    /// </summary>
    /// <param name="id">Megjelenés azonosító.</param>
    void DeleteRelease(int id);

    /// <summary>
    /// Megjelenés megkerése változtatásra.
    /// </summary>
    /// <param name="id">Megjelenés azonosító.</param>
    /// <returns>Megjelenés megjeleníithető formában.</returns>
    ReleaseDto GetReleaseForUpdate(int id);

    /// <summary>
    /// Megjelenés változtatása.
    /// </summary>
    /// <param name="release">Megjelenés megváltoztatott adatokkal.</param>
    /// <param name="id">Megjelenés azonosító.</param>
    void UpdateRelease(ReleaseDto release, int id);
}
