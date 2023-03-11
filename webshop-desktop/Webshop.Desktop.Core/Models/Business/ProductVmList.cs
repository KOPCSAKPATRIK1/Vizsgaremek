namespace Webshop.Desktop.Core.Models.Business;
public class ProductVmList
{
    public int Id { get; set; }
    public string Name { get; set; } = null!;

#nullable enable
    public string? CategoryName { get; set; }

    public int Price { get; set; }
    public string? ImageUrl1 { get; set; }
    public ProductInfoVmList[] Info { get; set; } = null!;
}

public class ProductInfoVmList
{
    public int Size { get; set; }

    public int Quantity { get; set; }


}