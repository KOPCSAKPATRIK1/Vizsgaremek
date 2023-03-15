using System.Windows.Input;
using CommunityToolkit.Mvvm.ComponentModel;
using CommunityToolkit.Mvvm.Input;
using Webshop.Desktop.Contracts.Services;
using Webshop.Desktop.Contracts.ViewModels;
using Webshop.Desktop.Core.Interfaces.Business;
using Webshop.Desktop.Core.Models.Business.Dtos;

namespace Webshop.Desktop.ViewModels;

public partial class NewReleaseViewModel : ObservableRecipient, INavigationAware
{
    #region Private members

    private readonly IReleaseService _releaseService;
    private readonly INavigationService _navigationService;

    #endregion

    #region Observables

    [ObservableProperty] private string? _releaseName;
    [ObservableProperty] private string? _releaseDesc;
    [ObservableProperty] private string? _imageUrl1;
    [ObservableProperty] private string? _imageUrl2;
    [ObservableProperty] private string? _imageUrl3;
    [ObservableProperty] private string? _imageUrl4;
    [ObservableProperty] private DateTimeOffset _selectedDate = DateTimeOffset.Now;

    #endregion

    #region Constructor
    public NewReleaseViewModel(
        IReleaseService releaseService,
        INavigationService navigationService)
    {
        _releaseService = releaseService;
        _navigationService = navigationService;
    }

    #endregion

    #region Events

    public void OnNavigatedFrom()
    {

    }

    public void OnNavigatedTo(object parameter)
    {

    }

    #endregion

    #region Commands

    [RelayCommand]
    private void SaveRelease()
    {
        _releaseService.AddRelease(new NewReleaseDto
        {
            Name = ReleaseName,
            Desc = ReleaseDesc,
            ImageUrl1 = ImageUrl1,
            ImageUrl2 = ImageUrl2,
            ImageUrl3 = ImageUrl3,
            ImageUrl4 = ImageUrl4,
            ReleaseDate = SelectedDate.DateTime.ToString("yyyy-MM-dd"),
        });
    }

    [RelayCommand]
    private void ClosePage()
    {
        if (_navigationService.CanGoBack)
        {
            _navigationService.GoBack();
        }
    }

    #endregion
}
