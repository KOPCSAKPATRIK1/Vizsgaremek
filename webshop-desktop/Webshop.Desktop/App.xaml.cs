﻿using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.UI.Xaml;
using Webshop.Business;
using Webshop.Desktop.Activation;
using Webshop.Desktop.Contracts.Services;
using Webshop.Desktop.Core.Contracts.Services;
using Webshop.Desktop.Core.Interfaces.Business;
using Webshop.Desktop.Core.Interfaces.Repository;
using Webshop.Desktop.Core.Models.Domain;
using Webshop.Desktop.Core.Services;
using Webshop.Desktop.Models;
using Webshop.Desktop.Services;
using Webshop.Desktop.ViewModels;
using Webshop.Desktop.Views;
using Webshop.Repository;
using Webshop.Repositrory.Repository;

namespace Webshop.Desktop;

// To learn more about WinUI 3, see https://docs.microsoft.com/windows/apps/winui/winui3/.
public partial class App : Application
{
    // The .NET Generic Host provides dependency injection, configuration, logging, and other services.
    // https://docs.microsoft.com/dotnet/core/extensions/generic-AppHost
    // https://docs.microsoft.com/dotnet/core/extensions/dependency-injection
    // https://docs.microsoft.com/dotnet/core/extensions/configuration
    // https://docs.microsoft.com/dotnet/core/extensions/logging
    private static readonly IHost AppHost = Host
        .CreateDefaultBuilder()
        .ConfigureServices((context, services) =>
        {
            //DbContext
            services.AddDbContextPool<WebshopContext>(options =>
            {
                options.UseMySQL("server=localhost;uid=root;pwd=;database=webshop");
            });
            services.AddScoped(typeof(IRepository<>), typeof(Repository<>));

            // Configuration
            services.Configure<LocalSettingsOptions>(context.Configuration.GetSection(nameof(LocalSettingsOptions)));

            // Default Activation Handler
            services.AddTransient<ActivationHandler<LaunchActivatedEventArgs>, DefaultActivationHandler>();

            // Core Services
            services.AddSingleton<ISampleDataService, SampleDataService>();
            services.AddSingleton<IFileService, FileService>();

            // Services
            services.AddSingleton<ILocalSettingsService, LocalSettingsService>();
            services.AddSingleton<IThemeSelectorService, ThemeSelectorService>();
            services.AddTransient<IWebViewService, WebViewService>();
            services.AddTransient<INavigationViewService, NavigationViewService>();
            services.AddSingleton<IActivationService, ActivationService>();
            services.AddSingleton<IPageService, PageService>();
            services.AddSingleton<INavigationService, NavigationService>();

            //Repositories
            services.AddTransient<IRepository<Product>, Repository<Product>>();
            services.AddTransient<IRepository<OrderItem>, Repository<OrderItem>>();
            services.AddTransient<IRepository<Category>, Repository<Category>>();
            services.AddTransient<IRepository<Size>, Repository<Size>>();


            //Business services
            services.AddTransient<IProductService, ProductService>();


            // Views and ViewModels
            services.AddTransient<SettingsViewModel>();
            services.AddTransient<SettingsPage>();

            services.AddTransient<WebshopViewModel>();
            services.AddTransient<WebshopPage>();

            services.AddTransient<NewReleaseViewModel>();
            services.AddTransient<NewReleasePage>();

            services.AddTransient<NewProductViewModel>();
            services.AddTransient<NewProductPage>();

            services.AddTransient<ReleasesViewModel>();
            services.AddTransient<ReleasesPage>();

            services.AddTransient<OrdersViewModel>();
            services.AddTransient<OrdersPage>();

            services.AddTransient<ProductsViewModel>();
            services.AddTransient<ProductsPage>();

            services.AddTransient<ShellPage>();
            services.AddTransient<ShellViewModel>();
        })
        .Build();



    public static WindowEx MainWindow { get; } = new MainWindow();

    public App()
    {
        InitializeComponent();
        UnhandledException += App_UnhandledException;
    }

    public static T GetService<T>() where T : class
    {
        HostService.AppHost ??= AppHost; ;
#pragma warning disable CS8603 // Possible null reference return.
        return AppHost.Services.GetService(typeof(T)) as T;
#pragma warning restore CS8603 // Possible null reference return.
    }

    private void App_UnhandledException(object sender, Microsoft.UI.Xaml.UnhandledExceptionEventArgs e)
    {
        // TODO: Log and handle exceptions as appropriate.
        // https://docs.microsoft.com/windows/windows-app-sdk/api/winrt/microsoft.ui.xaml.application.unhandledexception.
    }

    protected async override void OnLaunched(LaunchActivatedEventArgs args)
    {
        base.OnLaunched(args);

        await App.GetService<IActivationService>()
                 .ActivateAsync(args);
    }
}
