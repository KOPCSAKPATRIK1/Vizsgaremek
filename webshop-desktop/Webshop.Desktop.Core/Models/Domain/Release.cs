namespace Webshop.Desktop.Core.Models.Domain;
public partial class Release
{
#nullable enable
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public string ReleaseDate { get; set; } = null!;

    public string Desc { get; set; } = null!;

    public string ImageUrl1 { get; set; } = null!;

    public string? ImageUrl2 { get; set; }

    public string? ImageUrl3 { get; set; }

    public string? ImageUrl4 { get; set; }
}


