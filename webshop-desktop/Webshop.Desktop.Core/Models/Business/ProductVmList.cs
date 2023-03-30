﻿namespace Webshop.Desktop.Core.Models.Business;
public class ProductVmList
{
    #nullable enable
    public int Id { get; set; }
    public string Name { get; set; } = null!;
    public string? CategoryName { get; set; }
    public int Price { get; set; }
    public string? ImageUrl1 { get; set; }
    public int Likes { get; set; }
    public string? Inactive { get; set; }
    public ProductInfoVmList[] Info { get; set; } = null!;
}

public class ProductInfoVmList
{
    public int Size { get; set; }
    public int Quantity { get; set; }
}