﻿namespace Webshop.Desktop.Core.Models.Domain;
public partial class ShippingMethod
{
    public int Id
    {
        get; set;
    }

    public string Name { get; set; } = null!;

    public virtual ICollection<Order> Orders { get; } = new List<Order>();
}
