namespace Webshop.Desktop.Core.Models.Business;
public class OrderVmList
{
    public int Id { get; set; }
    public int OrderId { get; set; }
    public string Email { get; set; }
    public DateTime OrderDate { get; set; }
    public int AddressId { get; set; }
    public string StreetAddress { get; set; }
    public string City { get; set; }
    public string State { get; set; }
    public int PostalCode { get; set; }
    public string ShippingMethod { get; set; }
    public OrderInfoVmList[] Info { get; set; } = null!;
}

public class OrderInfoVmList
{
    public string CategoryName { get; set; }
    public string ProductName { get; set; }
    public int Size { get; set; }
    public int Quantity { get; set; }
}
