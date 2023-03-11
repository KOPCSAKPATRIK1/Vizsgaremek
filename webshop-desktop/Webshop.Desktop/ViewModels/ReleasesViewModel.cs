using System.Collections.ObjectModel;
using CommunityToolkit.Mvvm.ComponentModel;
using Webshop.Desktop.Contracts.ViewModels;
using Webshop.Desktop.Core.Interfaces.Business;
using Webshop.Desktop.Core.Models.Business;

namespace Webshop.Desktop.ViewModels;

public class ReleasesViewModel : ObservableRecipient, INavigationAware
{
    #region Private members

    private readonly IReleaseService _releaseService;

    #endregion

    #region Observables

    public ObservableCollection<ReleaseVmList> Releases { get; set; } = new();

    #endregion

    #region Constructor

    public ReleasesViewModel(IReleaseService releaseService)
    {
      _releaseService = releaseService;
    }

    #endregion

    #region Events

    public void OnNavigatedTo(object parameter)
    {
        Releases.Clear();
        var releases = _releaseService.GetReleases();
        foreach ( var release in releases )
        {
            Releases.Add(release);
        }
    }

    public void OnNavigatedFrom()
    {

    }

    #endregion
}

