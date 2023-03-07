namespace Webshop.Desktop.Core.Models.Domain;
public partial class User
{
    public int Id
    {
        get; set;
    }

    public string Email { get; set; } = null!;

    public string Password { get; set; } = null!;

    public virtual ICollection<Address> Addresses { get; } = new List<Address>();

    public virtual ICollection<OrderItem> OrderItems { get; } = new List<OrderItem>();

    public virtual ICollection<Order> Orders { get; } = new List<Order>();

    public virtual ICollection<ShoppingCartItem> ShoppingCartItems { get; } = new List<ShoppingCartItem>();
}
