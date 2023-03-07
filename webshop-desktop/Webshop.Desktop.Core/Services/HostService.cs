using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Extensions.Hosting;

namespace Webshop.Desktop.Core.Services;
public static class HostService
{
    public static IHost AppHost
    {
        get; set;
    }
    public static T GetService<T>() where T : class
    {
        return AppHost!.Services.GetService(typeof(T)) as T ?? throw new NullReferenceException(nameof(AppHost));
    }
}
