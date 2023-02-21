using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Webshop.Desktop.Core.Models.Repository;
public partial class Size
{
    public int Id
    {
        get; set;
    }

    public int Size1
    {
        get; set;
    }
    public virtual ICollection<Stock> Stocks { get; } = new List<Stock>();

    public virtual ICollection<Product> Products { get; } = new List<Product>();
}
