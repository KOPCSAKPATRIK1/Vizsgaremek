namespace Webshop.Desktop.Core.Models.Business.Dtos;
public class NewProductDto
{
    public string Name { get; set; }
    public string Desc { get; set; }
    public string ImgUrl1 { get; set; }
    public string ImgUrl2 { get; set; }
    public string ImgUrl3 { get; set; }
    public string ImgUrl4 { get; set; }
    public Dictionary<string, int> SizesWithQuantity { get; set; }
    public int Price { get; set; }
    public int CategoryId { get; set; }
}
