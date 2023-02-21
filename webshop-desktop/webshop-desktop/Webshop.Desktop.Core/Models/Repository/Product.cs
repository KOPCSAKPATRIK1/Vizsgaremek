using System;
using System.Collections;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Webshop.Desktop.Core.Models.Repository;
#nullable enable
public partial class Product
{
    public int Id
    {
        get; set;
    }

    public string Name { get; set; } = null!;

    public string Desc { get; set; } = null!;

    public int Price
    {
        get; set;
    }

    public int? CategoryId
    {
        get; set;
    }

    public string ImageUrl1 { get; set; } = null!;

    public string ImageUrl2 { get; set; } = null!;

    public string ImageUrl3 { get; set; } = null!;

    public string ImageUrl4 { get; set; } = null!;

    public virtual Category? Category
    {
        get; set;
    }

    public virtual ICollection<OrderItem> OrderItems { get; } = new List<OrderItem>();

    public virtual ICollection<ShoppingCartItem> ShoppingCartItems { get; } = new List<ShoppingCartItem>();
    public virtual ICollection<Stock> Stocks { get; } = new List<Stock>();

    public virtual ICollection<Size> Sizes { get; } = new List<Size>();
}

