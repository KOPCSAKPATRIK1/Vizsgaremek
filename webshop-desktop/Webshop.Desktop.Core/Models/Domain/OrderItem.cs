namespace Webshop.Desktop.Core.Models.Domain;
#nullable enable
public partial class OrderItem
{
    public int Id { get; set; }

    public int Quantity { get; set; }

    public int? ProductId { get; set; }

    public int? OrderId { get; set; }

    public int? SizeId { get; set; }

    public virtual Order Order { get; set; } = null!;

    public virtual Product Product { get; set; } = null!;

    public virtual Size Size { get; set; } = null!;
}
