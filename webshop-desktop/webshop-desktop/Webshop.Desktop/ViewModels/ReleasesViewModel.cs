using System.Collections.ObjectModel;

using CommunityToolkit.Mvvm.ComponentModel;

using Webshop.Desktop.Contracts.ViewModels;
using Webshop.Desktop.Core.Contracts.Services;
using Webshop.Desktop.Core.Models;

namespace Webshop.Desktop.ViewModels;

public class ReleasesViewModel : ObservableRecipient, INavigationAware
{
    private readonly ISampleDataService _sampleDataService;

    public ObservableCollection<SampleOrder> Source { get; } = new ObservableCollection<SampleOrder>();

    public ReleasesViewModel(ISampleDataService sampleDataService)
    {
        _sampleDataService = sampleDataService;
    }

    public async void OnNavigatedTo(object parameter)
    {
        Source.Clear();

        // TODO: Replace with real data.
        var data = await _sampleDataService.GetGridDataAsync();

        foreach (var item in data)
        {
            Source.Add(item);
        }
    }

    public void OnNavigatedFrom()
    {
    }
}
