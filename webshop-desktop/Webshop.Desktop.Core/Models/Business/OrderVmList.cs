namespace Webshop.Desktop.Core.Models.Business;
public class OrderVmList
{
    public int OrderId { get; set; }
    public string Email { get; set; }
    public DateTime OrderDate { get; set; }
    public OrderInfoVmList[] Info { get; set; } = null!;
}

public class OrderInfoVmList
{
    public string ProductName { get; set; }
    public int Size { get; set; }
    public int Quantity { get; set; }
}
