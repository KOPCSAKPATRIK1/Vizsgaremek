namespace Webshop.Desktop.Core.Models.Domain;
public partial class Address
{
    public int Id { get; set; }

    public string StreetAddress { get; set; } = null!;

    public string City { get; set; } = null!;

    public string State { get; set; } = null!;

    public int PostalCode { get; set; }

    public virtual ICollection<Order> Orders { get; } = new List<Order>();
}
