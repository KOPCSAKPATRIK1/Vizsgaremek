using System.Windows.Input;
using CommunityToolkit.Mvvm.ComponentModel;
using CommunityToolkit.Mvvm.Input;
using Microsoft.UI.Xaml.Controls;
using Webshop.Desktop.Contracts.Services;
using Webshop.Desktop.Contracts.ViewModels;
using Webshop.Desktop.Core.Interfaces.Business;
using Webshop.Desktop.Core.Models.Business.Dtos;
using WinRT;

namespace Webshop.Desktop.ViewModels;

public partial class NewReleaseViewModel : ObservableRecipient, INavigationAware
{
    #region Private members

    private readonly IReleaseService _releaseService;
    private readonly INavigationService _navigationService;
    private int _releaseId;

    #endregion

    public TeachingTip TeachingTip;

    #region Observables

    [ObservableProperty] private string? _releaseName;
    [ObservableProperty] private string? _releaseDesc;
    [ObservableProperty] private string? _imageUrl1;
    [ObservableProperty] private string? _imageUrl2;
    [ObservableProperty] private string? _imageUrl3;
    [ObservableProperty] private string? _imageUrl4;
    [ObservableProperty] private DateTimeOffset _selectedDate = DateTimeOffset.Now;

    [ObservableProperty] private string _nameValidation;
    [ObservableProperty] private bool _nameValidationVisibility;

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

    public void OnNavigatedTo(object parameter)
    {
        _releaseId = Convert.ToInt32(parameter);
        if (_releaseId != 0)
        {
            var release = _releaseService.GetReleaseForUpdate(_releaseId);
            ReleaseName = release.Name;
            ReleaseDesc = release.Desc;
            SelectedDate = DateTimeOffset.Parse(release.ReleaseDate); ;
            ImageUrl1 = release.ImageUrl1;
            ImageUrl2 = release.ImageUrl2;
            ImageUrl3 = release.ImageUrl3;
            ImageUrl4 = release.ImageUrl4;
        }
    }

    public void OnNavigatedFrom()
    {

    }

    public void OnNameChanged()
    {
        if (ReleaseName == null)
        {
            NameValidation = "A Név nem lehet üres";
            NameValidationVisibility = true;
        }
    }

    #endregion

    #region Commands

    [RelayCommand]
    private void SaveRelease()
    {
        if (_releaseId != 0)
        {
            _releaseService.UpdateRelease(new ReleaseDto
            {
                Name = ReleaseName,
                Desc = ReleaseDesc,
                ImageUrl1 = ImageUrl1,
                ImageUrl2 = ImageUrl2,
                ImageUrl3 = ImageUrl3,
                ImageUrl4 = ImageUrl4,
                ReleaseDate = SelectedDate.DateTime.ToString("yyyy-MM-dd"),
            }, _releaseId);
            TeachingTip.Subtitle = "Változtatások elmentve";
            TeachingTip.IsOpen = true;
        }
        else
        {
            _releaseService.AddRelease(new ReleaseDto
            {
                Name = ReleaseName,
                Desc = ReleaseDesc,
                ImageUrl1 = ImageUrl1,
                ImageUrl2 = ImageUrl2,
                ImageUrl3 = ImageUrl3,
                ImageUrl4 = ImageUrl4,
                ReleaseDate = SelectedDate.DateTime.ToString("yyyy-MM-dd"),
            });
            TeachingTip.Subtitle = "Megjelenés hozzáadva";
            TeachingTip.IsOpen = true;
        }

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
