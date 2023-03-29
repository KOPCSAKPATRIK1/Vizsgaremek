namespace Webshop.Desktop.Core.Models.Domain;
public partial class Size
{
    public int Id { get; set; }

    public int Size1 { get; set; }

    public virtual ICollection<OrderItem> OrderItems { get; } = new List<OrderItem>();

    public virtual ICollection<ShoppingCartItem> ShoppingCartItems { get; } = new List<ShoppingCartItem>();

    public virtual ICollection<Stock> Stocks { get; } = new List<Stock>();

    public virtual ICollection<Product> Products { get; } = new List<Product>();
}