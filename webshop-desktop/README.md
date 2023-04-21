## K�vetelm�nyek

Winui 3 tools l�sd -> Required workloads and components(https://learn.microsoft.com/en-us/windows/apps/windows-app-sdk/set-up-your-development-environment?tabs=cs-vs-community%2Ccpp-vs-community%2Cvs-2022-17-1-a%2Cvs-2022-17-1-b)

XAMMP telepit�se.

"webshop" adatb�zis l�trehoz�sa majd a webshop.desktop mapp�ban l�v� webshop.sql beimport�l�sa.

Alkalmaz�s elindit�sa.

## Fontosabb interf�szek muk�d�se:

Webshop.Desktop.Core Interfaces Business

`IAddressService`

void ChangeAddress(AddressDto address, int id);

Sz�llit�si c�m megv�ltoztat�sa.
param name="address" Sz�llit�si c�m
param name="id" Rendel�s azonos�t�

`ICategoryService`

CategoryVmList[] GetCategories();

�j kateg�ria hozz�ad�sa.
returns Kateg�ri�k megjelen�thet� form�ban.

bool DeleteCategory(int id);

Kateg�ria t�rl�se.
param name="id" Kateg�ria azonos�t�ja.
returns Siker�lt e t�r�lni a kateg�ri�t.

void UpdateCategoryName(int id, string name);

Kateg�ria nev�nek megv�ltoztat�sa.
param name="id" Kateg�ria azonos�t�ja.
param name="name" Kateg�ria neve.

`IOrderService`

OrderVmList[] GetOrdersWithInfo();

Rendel�sek rek�rdez�se, rendelt term�kkel/term�kekkel.
returns Rendel�sek megjelen�thet� form�ban.

void DeleteOrder(int id);

Rendel�s t�rl�se.
param name="id" Rendel�s azonos�t�.

`IProductService`

ProductVmList[] GetProductsWithInfo();

Term�kek lek�rdez�se m�rettel, inaktivit�ssal stb...
returns Term�kek megjelen�thet� form�ban.
 
void AddProducts(ProductDto newProduct);

Term�k(ek) hozz�ad�sa m�rettekkel.
param name="newProduct" �j term�k.

void ChangeInactive(int id);

Inaktivit�s megv�ltoztat�sa.
param name="id" Term�k azonos�t�.

void ChangePopular(int id); 

Popularit�s megv�ltoztat�sa.
param name="id" Term�k azonos�t�.
    
ProductDto GetProductForUpdate(int id);

Term�k megkeres�se v�ltoztat�sra.
param name="id" Term�k azonos�t�.
returns Term�kek megjelen�thet� form�ban.
   
void UpdateProduct(ProductDto product, int id);

Term�k v�ltoztat�sa.
param name="product" Term�k v�ltoztatott adatokkal.
param name="id" Term�k azonos�t�.
    
`IReleaseService`

void AddRelease(ReleaseDto release);

Megjelen�s hozz�ad�sa.
param name="release" Megjeln�s.
 
ReleaseVmList[] GetReleases();

Megjelen�sek lek�rdez�se.
returns Megjelen�s megjelen�ithet� form�ban.
   
void DeleteRelease(int id);

Megjelen�s t�rl�se.
param name="id" Megjelen�s azonos�t�.
  
ReleaseDto GetReleaseForUpdate(int id);

Megjelen�s megker�se v�ltoztat�sra.
param name="id" Megjelen�s azonos�t�.
returns Megjelen�s megjelen�ithet� form�ban.
    
void UpdateRelease(ReleaseDto release, int id);

Megjelen�s v�ltoztat�sa.
param name="release" Megjelen�s megv�ltoztatott adatokkal.
param name="id" Megjelen�s azonos�t�.
    