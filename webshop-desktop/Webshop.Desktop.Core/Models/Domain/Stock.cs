namespace Webshop.Desktop.Core.Models.Domain;
#nullable enable
public partial class Stock
{
    public int Id { get; set; }

    public int InStock { get; set; }

    public int? SizeId { get; set; }

    public int? ProductId { get; set; }

    public virtual Product? Product { get; set; }

    public virtual Size Size { get; set; }
}

