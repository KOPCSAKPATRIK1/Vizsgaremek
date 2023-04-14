namespace Webshop.Desktop.Core.Models.Business;
public class ProductVmList
{
    public int Id { get; set; }
    public string Name { get; set; } = null!;
    public string CategoryName { get; set; }  = null!;
    public int Price { get; set; }
    public string ImageUrl1 { get; set; } = null!;
    public int Likes { get; set; }
    public string Inactive { get; set; } = null!;
    public string Popular { get; set; } = null!;
    public ProductInfoVmList[] Info { get; set; } = null!;
}

public class ProductInfoVmList
{
    public int Size { get; set; }
    public int Quantity { get; set; }
}