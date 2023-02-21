using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Mysqlx.Crud;

namespace Webshop.Desktop.Core.Models.Repository;
#nullable enable
public partial class Address
{
    public int Id
    {
        get; set;
    }

    public string StreetAddress { get; set; } = null!;

    public string City { get; set; } = null!;

    public string State { get; set; } = null!;

    public int PostalCode
    {
        get; set;
    }

    public int? UserId
    {
        get; set;
    }

    public virtual ICollection<Order> Orders { get; } = new List<Order>();

    public virtual User? User
    {
        get; set;
    }
}
