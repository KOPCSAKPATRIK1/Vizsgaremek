
namespace Webshop.Desktop.Core.Models.Domain;
#nullable enable
public partial class Order
{
    public int Id { get; set; }

    public DateTime OrderDate { get; set; }

    public int? UserId { get; set; }

    public int? ShippingMethodId { get; set; }

    public int? PaymentMethodId { get; set; }

    public int AddressId { get; set; }

    public virtual Address Address { get; set; } = null!;

    public virtual ICollection<OrderItem> OrderItems { get; } = new List<OrderItem>();

    public virtual PaymentMethod? PaymentMethod { get; set; }

    public virtual ShippingMethod ShippingMethod { get; set; } = null!;

    public virtual User User { get; set; } = null!;
}
