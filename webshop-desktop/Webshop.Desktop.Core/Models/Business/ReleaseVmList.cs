using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Webshop.Desktop.Core.Models.Business;
public class ReleaseVmList
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string ReleaseDate { get; set; }
    public ReleaseInfoVmList[] Info { get; set; } = null!;
}

public class ReleaseInfoVmList
{
    public string Desc { get; set; }
    public string ImageUrl1 { get; set; }
    public string ImageUrl2 { get; set; }
    public string ImageUrl3 { get; set; }
    public string ImageUrl4 { get; set; }
}
