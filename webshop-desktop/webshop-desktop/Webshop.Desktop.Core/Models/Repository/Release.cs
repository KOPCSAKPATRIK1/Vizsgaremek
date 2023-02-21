using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Webshop.Desktop.Core.Models.Repository;
public partial class Release
{
    public int Id
    {
        get; set;
    }

    public string Name { get; set; } = null!;

    public DateTime ReleaseData
    {
        get; set;
    }

    public string Desc { get; set; } = null!;

    public string ImageUrl1 { get; set; } = null!;

    public string ImageUrl2 { get; set; } = null!;

    public string ImageUrl3 { get; set; } = null!;

    public string ImageUrl4 { get; set; } = null!;
}

