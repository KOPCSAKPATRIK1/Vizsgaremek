using System.Collections.ObjectModel;
using CommunityToolkit.Mvvm.ComponentModel;
using CommunityToolkit.Mvvm.Input;
using Microsoft.UI.Xaml.Controls;
using Webshop.Desktop.Contracts.Services;
using Webshop.Desktop.Contracts.ViewModels;
using Webshop.Desktop.Core.Interfaces.Business;
using Webshop.Desktop.Core.Models.Business;
using Webshop.Desktop.Views;

namespace Webshop.Desktop.ViewModels;

public partial class ReleasesViewModel : ObservableRecipient, INavigationAware
{
    #region Private members

    private readonly IReleaseService _releaseService;
    private readonly INavigationService _navigationService;

    #endregion

    public TeachingTip TeachingTip;

    #region Observables

    public ObservableCollection<ReleaseVmList> Releases { get; set; } = new();

    [ObservableProperty] private ReleaseVmList? _selectedRelease;

    #endregion

    #region Constructor

    public ReleasesViewModel(
        IReleaseService releaseService,
        INavigationService navigationService)
    {
        _releaseService = releaseService;
        _navigationService = navigationService;
    }

    #endregion

    #region Events

    public void OnNavigatedTo(object parameter)
    {
        LoadProducts();
    }

    public void OnNavigatedFrom()
    {

    }

    partial void OnSelectedReleaseChanged(ReleaseVmList? value)
    {
        DeleteReleaseCommand.NotifyCanExecuteChanged();
        ChangeReleaseParametersCommand.NotifyCanExecuteChanged();
    }

    #endregion

    #region Commands

    [RelayCommand] 
    private void ToNewReleasePage()
    {
         _navigationService.Frame?.Navigate(typeof(NewReleasePage));
    }

    [RelayCommand(CanExecute = nameof(CanExecuteCommand))]
    private void DeleteRelease()
    {
        _releaseService.DeleteRelease(SelectedRelease.Id);
        TeachingTip.Subtitle = "Megjelenés sikeresen törölve";
        TeachingTip.IsOpen = true;
        LoadProducts();
    }

    [RelayCommand(CanExecute = nameof(CanExecuteCommand))]
    private void ChangeReleaseParameters()
    {
        _navigationService.Frame?.Navigate(typeof(NewReleasePage), SelectedRelease.Id);
    }

    #endregion

    #region Methods

    private void LoadProducts()
    {
        Releases.Clear();
        var releases = _releaseService.GetReleases();
        foreach ( var release in releases )
        {
            Releases.Add(release);
        }
    }

    private bool CanExecuteCommand()
    {
        if (SelectedRelease == null)
        {
            return false;
        }
        else
        {
            return true;
        }
    }

    #endregion
}

