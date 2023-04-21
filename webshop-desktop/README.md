## Követelmények

Winui 3 tools lásd -> Required workloads and components(https://learn.microsoft.com/en-us/windows/apps/windows-app-sdk/set-up-your-development-environment?tabs=cs-vs-community%2Ccpp-vs-community%2Cvs-2022-17-1-a%2Cvs-2022-17-1-b)

XAMMP telepitése.

"webshop" adatbázis létrehozása majd a webshop.desktop mappában lévõ webshop.sql beimportálása.

Alkalmazás elinditása.

## Fontosabb interfészek muködése:

Webshop.Desktop.Core Interfaces Business

`IAddressService`

void ChangeAddress(AddressDto address, int id);

Szállitási cím megváltoztatása.
param name="address" Szállitási cím
param name="id" Rendelés azonosító

`ICategoryService`

CategoryVmList[] GetCategories();

Új kategória hozzáadása.
returns Kategóriák megjeleníthetõ formában.

bool DeleteCategory(int id);

Kategória törlése.
param name="id" Kategória azonosítója.
returns Sikerült e törölni a kategóriát.

void UpdateCategoryName(int id, string name);

Kategória nevének megváltoztatása.
param name="id" Kategória azonosítója.
param name="name" Kategória neve.

`IOrderService`

OrderVmList[] GetOrdersWithInfo();

Rendelések rekérdezése, rendelt termékkel/termékekkel.
returns Rendelések megjeleníthetõ formában.

void DeleteOrder(int id);

Rendelés törlése.
param name="id" Rendelés azonosító.

`IProductService`

ProductVmList[] GetProductsWithInfo();

Termékek lekérdezése mérettel, inaktivitással stb...
returns Termékek megjeleníthetõ formában.
 
void AddProducts(ProductDto newProduct);

Termék(ek) hozzáadása mérettekkel.
param name="newProduct" Új termék.

void ChangeInactive(int id);

Inaktivitás megváltoztatása.
param name="id" Termék azonosító.

void ChangePopular(int id); 

Popularitás megváltoztatása.
param name="id" Termék azonosító.
    
ProductDto GetProductForUpdate(int id);

Termék megkeresése változtatásra.
param name="id" Termék azonosító.
returns Termékek megjeleníthetõ formában.
   
void UpdateProduct(ProductDto product, int id);

Termék változtatása.
param name="product" Termék változtatott adatokkal.
param name="id" Termék azonosító.
    
`IReleaseService`

void AddRelease(ReleaseDto release);

Megjelenés hozzáadása.
param name="release" Megjelnés.
 
ReleaseVmList[] GetReleases();

Megjelenések lekérdezése.
returns Megjelenés megjeleníithetõ formában.
   
void DeleteRelease(int id);

Megjelenés törlése.
param name="id" Megjelenés azonosító.
  
ReleaseDto GetReleaseForUpdate(int id);

Megjelenés megkerése változtatásra.
param name="id" Megjelenés azonosító.
returns Megjelenés megjeleníithetõ formában.
    
void UpdateRelease(ReleaseDto release, int id);

Megjelenés változtatása.
param name="release" Megjelenés megváltoztatott adatokkal.
param name="id" Megjelenés azonosító.
    