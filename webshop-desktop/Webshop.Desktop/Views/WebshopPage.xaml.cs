using Microsoft.UI.Xaml.Controls;

using Webshop.Desktop.ViewModels;

namespace Webshop.Desktop.Views;

// To learn more about WebView2, see https://docs.microsoft.com/microsoft-edge/webview2/.
public sealed partial class WebshopPage : Page
{
    public WebshopViewModel ViewModel
    {
        get;
    }

    public WebshopPage()
    {
        ViewModel = App.GetService<WebshopViewModel>();
        InitializeComponent();

        ViewModel.WebViewService.Initialize(WebView);
    }
}
