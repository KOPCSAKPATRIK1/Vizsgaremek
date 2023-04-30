namespace Webshop.Desktop.Core.Models.Domain;
public partial class User
{
    public int Id { get; set; }

    public string Username { get; set; } = null!;

    public string Email { get; set; } = null!;

    public string Password { get; set; } = null!;

    public virtual ICollection<Like> Likes { get; } = new List<Like>();

    public virtual ICollection<Order> Orders { get; } = new List<Order>();

    public virtual ICollection<ShoppingCartItem> ShoppingCartItems { get; } = new List<ShoppingCartItem>();
}

