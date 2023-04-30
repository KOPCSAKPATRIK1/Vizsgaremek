namespace Webshop.Desktop.Core.Models.Domain;
#nullable enable
public partial class Product
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public string Desc { get; set; } = null!;

    public string ImageUrl1 { get; set; } = null!;

    public string? ImageUrl2 { get; set; }

    public string? ImageUrl3 { get; set; }

    public string? ImageUrl4 { get; set; }

    public int Price { get; set; }

    public sbyte Inactive { get; set; }

    public sbyte Popular { get; set; }

    public int CategoryId { get; set; }

    public virtual Category Category { get; set; }

    public virtual ICollection<Like> Likes { get; } = new List<Like>();

    public virtual ICollection<OrderItem> OrderItems { get; } = new List<OrderItem>();

    public virtual ICollection<ShoppingCartItem> ShoppingCartItems { get; } = new List<ShoppingCartItem>();

    public virtual ICollection<Stock> Stocks { get; } = new List<Stock>();

    public virtual ICollection<Size> Sizes { get; } = new List<Size>();
}

