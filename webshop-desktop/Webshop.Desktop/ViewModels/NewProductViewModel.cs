using System.Collections.ObjectModel;
using System.Windows.Input;
using CommunityToolkit.Mvvm.ComponentModel;
using CommunityToolkit.Mvvm.Input;
using Webshop.Desktop.Contracts.ViewModels;
using Webshop.Desktop.Core.Interfaces.Business;
using Webshop.Desktop.Core.Models.Business;
using Webshop.Desktop.Core.Models.Business.Dtos;

namespace Webshop.Desktop.ViewModels;

public class NewProductViewModel : ObservableRecipient, INavigationAware
{
    // TODO: termek valasztas eseten tobbi disabled, validacio
    #region Private members

    private readonly ICategoryService _categoryService;
    private readonly ISizeService _sizeService;
    private readonly IProductService _productService;
    private string? _newProductName;
    private string? _productDesc;
    private string? _imageUrl1;
    private string? _imageUrl2;
    private string? _imageUrl3;
    private string? _imageUrl4;
    private int _productPrice;
    private int _productQuantity;

    #endregion

    #region Observables

    public ObservableCollection<CategoryVmList> Categories { get; set; } = new();
    public ObservableCollection<SizeVmList> Sizes { get; set; } = new();
    public ObservableCollection<ProductNamesVmList> ProductNames { get; set; } = new();

    #endregion

    public NewProductViewModel(
        ICategoryService categoryService,
        ISizeService sizeService,
        IProductService productService)
    {
        _categoryService = categoryService;
        _sizeService = sizeService;
        _productService = productService;
        SaveProductCommand = new RelayCommand(SaveProduct);
    }

    #region Getters, setters
    public string? NewProductName
    {
        get => _newProductName;
        set
        {
            if (value != null)
            {
                SetProperty(ref _newProductName, value);
            }
        }
    }

    public string? ProductDesc
    {
        get => _productDesc;
        set
        {
            if (value != null)
            {
                SetProperty(ref _productDesc, value);
            }
        }
    }

    public string? ImageUrl1
    {
        get => _imageUrl1 ?? "";
        set
        {
            if (value != null)
            {
                SetProperty(ref _imageUrl1, value);
            }
        }
    }

    public string? ImageUrl2
    {
        get => _imageUrl2 ?? "";
        set
        {
            if (value != null)
            {
                SetProperty(ref _imageUrl2, value);
            }
        }
    }

    public string? ImageUrl3
    {
        get => _imageUrl3 ?? "";
        set
        {
            if (value != null)
            {
                SetProperty(ref _imageUrl3, value);
            }
        }
    }

    public string? ImageUrl4
    {
        get => _imageUrl4 ?? "";
        set
        {
            if (value != null)
            {
                SetProperty(ref _imageUrl4, value);
            }
        }
    }

    public int ProductPrice
    {
        get => _productPrice;
        set => SetProperty(ref _productPrice, value);
    }

    public int ProductQuantity
    {
        get => _productQuantity;
        set => SetProperty(ref _productQuantity, value);
    }

    public SizeVmList SelectedSize { get; set; } = null!;

    public CategoryVmList SelectedCategory { get; set; } = null!;

    public ProductNamesVmList SelectedProduct { get; set; } = null!;

    #endregion

    #region Events

    public void OnNavigatedTo(object parameter)
    {
        Categories.Clear();
        var categories = _categoryService.GetCategories();
        foreach (var category in categories)
        {
            Categories.Add(new CategoryVmList {
                Id = category.Id,
                Name = category.Name
            });
        }

        Sizes.Clear();
        var sizes = _sizeService.GetSizes();
        foreach (var size in sizes)
        {
            Sizes.Add(new SizeVmList {
               Id = size.Id,
               Size = size.Size
            });
        }

        ProductNames.Clear();
        var productNames = _productService.GetProductNames();
        foreach (var name in productNames)
        {
            ProductNames.Add(new ProductNamesVmList {
                Id = name.Id,
                Name = name.Name
            });
        }
    }

    public void OnNavigatedFrom()
    {

    }

    #endregion

    #region Methods, commands
    public ICommand SaveProductCommand
    {
        get;
    }

    public void SaveProduct()
    {
        _productService.AddProducts(new NewProductDto
        {
            Name = NewProductName,
            Desc = ProductDesc,
            ImgUrl1 = ImageUrl1,
            ImgUrl2 = ImageUrl2,
            ImgUrl3 = ImageUrl3,
            ImgUrl4 = ImageUrl4,
            Price = ProductPrice,
            Quantity = ProductQuantity,
            SizeId = SelectedSize.Id,
            CategoryId = SelectedCategory.Id
        });
    }

    #endregion
}
