using System.Windows.Input;
using CommunityToolkit.Mvvm.ComponentModel;
using CommunityToolkit.Mvvm.Input;
using Webshop.Desktop.Contracts.ViewModels;
using Webshop.Desktop.Core.Interfaces.Business;
using Webshop.Desktop.Core.Models.Business.Dtos;

namespace Webshop.Desktop.ViewModels;

public class NewReleaseViewModel : ObservableRecipient, INavigationAware
{
    #region Private members

    private readonly IReleaseService _releaseService;
    private string? _releaseName;
    private string? _releaseDesc;
    private string? _imageUrl1;
    private string? _imageUrl2;
    private string? _imageUrl3;
    private string? _imageUrl4;

    #endregion

    #region Constructor
    public NewReleaseViewModel(IReleaseService releaseService)
    {
        _releaseService = releaseService;
        SaveReleaseCommand = new RelayCommand(SaveRelease);
    }

    #endregion

    #region Getters, setters
    public string? ReleaseName
    {
        get => _releaseName;
        set
        {
            if (value != null)
            {
                SetProperty(ref _releaseName, value);
            }
        }
    }

    public string? ReleaseDesc
    {
        get => _releaseDesc;
        set
        {
            if (value != null)
            {
                SetProperty(ref _releaseDesc, value);
            }
        }
    }

    public string? ImageUrl1
    {
        get => _imageUrl1 ?? "";
        set
        {
            if (value != null)
            {
                SetProperty(ref _imageUrl1, value);
            }
        }
    }

    public string? ImageUrl2
    {
        get => _imageUrl2 ?? "";
        set
        {
            if (value != null)
            {
                SetProperty(ref _imageUrl2, value);
            }
        }
    }

    public string? ImageUrl3
    {
        get => _imageUrl3 ?? "";
        set
        {
            if (value != null)
            {
                SetProperty(ref _imageUrl3, value);
            }
        }
    }

    public string? ImageUrl4
    {
        get => _imageUrl4 ?? "";
        set
        {
            if (value != null)
            {
                SetProperty(ref _imageUrl4, value);
            }
        }
    }

    public DateTimeOffset SelectedDate
    {
        get;
        set;
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

    #region Methods, command

    public ICommand SaveReleaseCommand { get; }



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

    #endregion
}
