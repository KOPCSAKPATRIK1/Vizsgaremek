namespace Webshop.Desktop.Core.Models.Business.Dtos;
public class ProductDto
{
    public string Name { get; set; }
    public string Desc { get; set; }
    public string ImageUrl1 { get; set; }
    public string ImageUrl2 { get; set; }
    public string ImageUrl3 { get; set; }
    public string ImageUrl4 { get; set; }
    public Dictionary<string, int> SizesWithQuantity { get; set; }
    public int Price { get; set; }
    public int CategoryId { get; set; }
}
