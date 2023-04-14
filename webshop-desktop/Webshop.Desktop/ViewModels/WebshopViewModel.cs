using System.Windows.Input;
using CommunityToolkit.Mvvm.ComponentModel;
using CommunityToolkit.Mvvm.Input;
using Microsoft.Web.WebView2.Core;
using Webshop.Desktop.Contracts.Services;
using Webshop.Desktop.Contracts.ViewModels;

namespace Webshop.Desktop.ViewModels;

public class WebshopViewModel : ObservableRecipient, INavigationAware
{
    private Uri _source = new("http://localhost:3001/");
    private bool _isLoading = true;
    private bool _hasFailures;

    public IWebViewService WebViewService
    {
        get;
    }

    public Uri Source
    {
        get => _source;
        set => SetProperty(ref _source, value);
    }

    public bool IsLoading
    {
        get => _isLoading;
        set => SetProperty(ref _isLoading, value);
    }

    public bool HasFailures
    {
        get => _hasFailures;
        set => SetProperty(ref _hasFailures, value);
    }

    public ICommand BrowserBackCommand
    {
        get;
    }

    public ICommand BrowserForwardCommand
    {
        get;
    }

    public ICommand ReloadCommand
    {
        get;
    }

    public ICommand RetryCommand
    {
        get;
    }

    public ICommand OpenInBrowserCommand
    {
        get;
    }

    public WebshopViewModel(IWebViewService webViewService)
    {
        WebViewService = webViewService;

        BrowserBackCommand = new RelayCommand(() => WebViewService.GoBack(), () => WebViewService.CanGoBack);
        BrowserForwardCommand = new RelayCommand(() => WebViewService.GoForward(), () => WebViewService.CanGoForward);
        ReloadCommand = new RelayCommand(() => WebViewService.Reload());
        RetryCommand = new RelayCommand(OnRetry);
        OpenInBrowserCommand = new RelayCommand(async () => await Windows.System.Launcher.LaunchUriAsync(WebViewService.Source), () => WebViewService.Source != null);
    }

    public void OnNavigatedTo(object parameter)
    {
        WebViewService.NavigationCompleted += OnNavigationCompleted;
    }

    public void OnNavigatedFrom()
    {
        WebViewService.UnregisterEvents();
        WebViewService.NavigationCompleted -= OnNavigationCompleted;
    }

    private void OnNavigationCompleted(object? sender, CoreWebView2WebErrorStatus webErrorStatus)
    {
        IsLoading = false;
        OnPropertyChanged(nameof(BrowserBackCommand));
        OnPropertyChanged(nameof(BrowserForwardCommand));
        if (webErrorStatus != default)
        {
            HasFailures = true;
        }
    }

    private void OnRetry()
    {
        HasFailures = false;
        IsLoading = true;
        WebViewService?.Reload();
    }
}
