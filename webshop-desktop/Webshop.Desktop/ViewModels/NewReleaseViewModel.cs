﻿using CommunityToolkit.Mvvm.ComponentModel;
using CommunityToolkit.Mvvm.Input;
using Microsoft.UI.Xaml.Controls;
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

    [ObservableProperty] private string _nameValidationText;
    [ObservableProperty] private bool _nameValidationVisibility;

    [ObservableProperty] private string _descValidationText;
    [ObservableProperty] private bool _descValidationVisibility;

    [ObservableProperty] private string _img1ValidationText;
    [ObservableProperty] private bool _img1ValidationVisibility;

    [ObservableProperty] private string _dateValidationText;
    [ObservableProperty] private bool _dateValidationVisibility;

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

    #region Validation

    public void NameValidation()
    {
        if (ReleaseName == null || ReleaseName == "")
        {
            NameValidationText = "A név nem lehet üres";
            NameValidationVisibility = true;
        }
        else if (ReleaseName.Length < 4)
        {
            NameValidationText = "A névnek 3 karakternél hosszabbnak kell lennie";
            NameValidationVisibility = true;
        }
        else
        {
            NameValidationVisibility = false;
        }
        SaveReleaseCommand.NotifyCanExecuteChanged();
    }

    public void DescValidation()
    {
        if (ReleaseDesc == null || ReleaseDesc == "")
        {
            DescValidationText = "A leírás nem lehet üres";
            DescValidationVisibility = true;
        }
        else if (ReleaseDesc.Length < 11)
        {
            DescValidationText = "A leírásnak 10 karakternél hosszabbnak kell lennie";
            DescValidationVisibility = true;
        }
        else
        {
            DescValidationVisibility = false;
        }
        SaveReleaseCommand.NotifyCanExecuteChanged();
    }

    public void Img1Validation()
    {
        if (ImageUrl1 == null || ImageUrl1 == "")
        {
            Img1ValidationText = "Az első kép nem lehet üres";
            Img1ValidationVisibility = true;
        }
        else
        {
            Img1ValidationVisibility = false;
        }
        SaveReleaseCommand.NotifyCanExecuteChanged();
    }

    public void DateValidation()
    {
        if (SelectedDate < DateTimeOffset.Now || SelectedDate.Day == DateTimeOffset.Now.Day)
        {
            DateValidationText = "Megjelenés leghamarabb holnapi dátummal lehetséges";
            DateValidationVisibility = true;
        }
        else
        {
            DateValidationVisibility = false;
        }
        SaveReleaseCommand.NotifyCanExecuteChanged();
    }

    #endregion

    #endregion

    #region Commands

    [RelayCommand(CanExecute = nameof(IsValid))]
    private void SaveRelease()
    {
        NameValidation();
        DescValidation();
        Img1Validation();
        DateValidation();
        if (IsValid() == true)
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

    #region Methods

    private bool IsValid()
    {
        if (NameValidationVisibility == false &&
            DescValidationVisibility == false &&
            Img1ValidationVisibility == false &&
            DateValidationVisibility == false)
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    #endregion
}
