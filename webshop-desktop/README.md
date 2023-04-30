## Alkalmazás funkciói

- Termékek felvétele, módosítása, törlése (flag-el megjelölés)
- Termék kategóriák felvétele, módosítása, törlése
- Rendelések megjelenítése és szállítási cím megváltoztatása
- Megjelenések felvétele, módosítása, törlése

`Plusz funkciók`

- Like rendszer
- Popularitás változtatás
- Webshop megjelenítése az alkalmazásban (WebView 2)

## Követelmények

Visual Studio 2022

.NET 7 támogatás.

Winui 3 tools lásd -> [Required workloads and components](https://learn.microsoft.com/en-us/windows/apps/windows-app-sdk/set-up-your-development-environment?tabs=cs-vs-community%2Ccpp-vs-community%2Cvs-2022-17-1-a%2Cvs-2022-17-1-b)

XAMMP

## Elindítás

XAMPP elindítása.

egy új adatbázis létrehozása "webshop" néven, majd a "webshop-desktop" mappában lévő webshop.sql beimportálása.

`WebView 2 használatának követelményei` (A program a funkció használata nélkül is fut)

Az alkalmazásban lévő Webshop megjelenítő funkció megfelelő működéséhez el kell indítani a frontend/backend alkalmazásokat a társam dokumentációja alapján.

Ha ez hiányos lenne kövesd a következő lépéseket:

Visual Stúdió Code elindítása.

A "webshop-backend" mappában indítsunk egy új terminált majd futassuk le az "npm i" parancsot, ha a letöltés befejeződött futassuk le az "npm rum start:dev" parancsot.

Amennyiben a backend alkalmazás fut, indítsunk el ismét egy új terminált a "webshop-frontend" mappában, majd futassuk le az "npm i" parancsot, ha a letöltés befejeződött futassuk le az "npm start" parancsot.

"Would you like to run the app on another port instead? › (Y/n)" üzenet felugrásakor válaszoljunk igennel.

Alkalmazás elindítása. <br />
(startup project a Webshop.Desktop legyen)

## Fontosabb interfészek muködése:

A Webshop.Desktop.Core -> Interfaces -> Business mappában található interfészekben le vannak dokumentálva.
