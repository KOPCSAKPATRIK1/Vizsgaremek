## Követelmények

Visual Studio 2022

.NET 7 támogatás.

Winui 3 tools lásd -> [Required workloads and components](https://learn.microsoft.com/en-us/windows/apps/windows-app-sdk/set-up-your-development-environment?tabs=cs-vs-community%2Ccpp-vs-community%2Cvs-2022-17-1-a%2Cvs-2022-17-1-b)

XAMMP

## Elindítása

XAMPP elindítása.

"webshop" adatbázis létrehozása majd a webshop.desktop mappában lévő webshop.sql beimportálása.

WebView 2 használatának követelményei

Az alkalmazásban levő Webshop megjelenítő funkció megfelelő működéséhez el kell indítani a frontend/backend alkalmazasokat a társam dokumentációja alapján.

Ha ez hiányos lenne kövesd a következő lépéseket:

Visual Stúdió Code elindítása.

A "webshop-backend" mappában indítsunk egy új terminált majd futassuk le az "npm i" parancsot, ha a letöltés befejeződött azután futassuk le az "npm rum start:dev" parancsot.

Amennyiben a backend alkalmazás fut, indítsunk el ismét egy új terminált a "webshop-frontend" mappában majd futassuk le az "npm i" parancsot, ha a letöltés befejeződött azután futassuk le az "npm start" parancsot.

"Would you like to run the app on another port instead? › (Y/n)" üzenet felugrásakor válaszoljunk igennel.

Alkalmazás elinditása. <br />
(startup project a Webshop.Desktop legyen)

## Fontosabb interfészek muködése:

Webshop.Desktop.Core -> Interfaces -> Business

IAddressService

void ChangeAddress(AddressDto address, int id);

Szállitási cím megváltoztatása. <br />
param: name="address" (Szállítási cím) <br />
param: name="id" (Rendelés azonosító)

ICategoryService

CategoryVmList[] GetCategories();

Új kategória hozzáadása. <br />
returns: Kategóriák megjeleníthető formában.

bool DeleteCategory(int id);

Kategória törlése. <br />
param: name="id" (Kategória azonosítója) <br />
returns: Sikerült e törölni a kategóriát.

void UpdateCategoryName(int id, string name);

Kategória nevének megváltoztatása. <br />
param: name="id" (Kategória azonosítója) <br />
param: name="name" (Kategória neve)

IOrderService

OrderVmList[] GetOrdersWithInfo();

Rendelések lekérdezése, rendelt termékkel/termékekkel. <br />
returns: Rendelések megjeleníthető formában.

void DeleteOrder(int id);

Rendelés törlése. <br />
param: name="id" (Rendelés azonosító)

IProductService

ProductVmList[] GetProductsWithInfo();

Termékek lekérdezése mérettel, inaktivitással stb... <br />
returns: Termékek megjeleníthető formában.
 
void AddProducts(ProductDto newProduct);

Termék(ek) hozzáadása mérettekkel. <br />
param: name="newProduct" (Új termék)

void ChangeInactive(int id);

Inaktivitás megváltoztatása. <br />
param: name="id" (Termék azonosító)

void ChangePopular(int id); 

Popularitás megváltoztatása. <br />
param: name="id" (Termék azonosító)
    
ProductDto GetProductForUpdate(int id);

Termék megkeresése változtatásra. <br />
param: name="id" (Termék azonosító) <br />
returns: Termékek megjeleníthető formában.
   
void UpdateProduct(ProductDto product, int id);

Termék változtatása. <br />
param: name="product" (Termék változtatott adatokkal) <br />
param: name="id" (Termék azonosító)
    
IReleaseService

void AddRelease(ReleaseDto release);

Megjelenés hozzáadása. <br />
param: name="release" (Megjelnés)
 
ReleaseVmList[] GetReleases();

Megjelenések lekérdezése. <br />
returns: Megjelenés megjeleníthető formában.
   
void DeleteRelease(int id);

Megjelenés törlése. <br />
param: name="id" (Megjelenés azonosító)
  
ReleaseDto GetReleaseForUpdate(int id);

Megjelenés megkeresése változtatásra. <br />
param: name="id" (Megjelenés azonosító) <br />
returns: Megjelenés megjeleníthető formában.
    
void UpdateRelease(ReleaseDto release, int id);

Megjelenés változtatása. <br />
param: name="release" (Megjelenés megváltoztatott adatokkal) <br />
param: name="id" (Megjelenés azonosító)