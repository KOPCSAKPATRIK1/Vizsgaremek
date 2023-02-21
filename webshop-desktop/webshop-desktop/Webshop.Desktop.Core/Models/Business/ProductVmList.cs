using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Webshop.Desktop.Core.Models.Business;
public class ProductVmList
{
    public int Id
    {
        get; set;
    }
    public string Name { get; set; } = null!;
    public int Price
    {
        get; set;
    }
    public int? CategoryId
    {
        get; set;
    }
#nullable enable
    public string? CategoryName
    {
        get; set;
    }
}