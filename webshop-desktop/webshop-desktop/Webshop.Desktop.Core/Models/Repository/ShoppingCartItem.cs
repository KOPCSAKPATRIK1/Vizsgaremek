using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Webshop.Desktop.Core.Models.Repository;
#nullable enable
public partial class ShoppingCartItem
{
    public int Id
    {
        get; set;
    }

    public int Quantity
    {
        get; set;
    }

    public int? ProductId
    {
        get; set;
    }

    public int? UserId
    {
        get; set;
    }

    public virtual Product? Product
    {
        get; set;
    }

    public virtual User? User
    {
        get; set;
    }
}

