# C# / .NET kódstílus és szabályok

Hordozható szabályfájl C# projektekhez. Másold a cél repóba (például `.claude/decisions/conventions.md`
néven, vagy importáld a CLAUDE.md-ből: `@docs/csharp-kodstilus.md`).

- **1–11. rész:** a követendő stílus.
- **12. rész:** contractok, vagyis hibaosztályok, amelyeket a fordító nem lát. Mindegyiknél ott van, hogyan
  ellenőrizd és mit tegyél.
- **13. rész:** minták, amelyeket ne másolj át, a helyes megoldással együtt.

Ütközésnél a sorrend: contract > ez a fájl > a repó generált conventionjei > hivatalos best practice >
saját tudás. Az ütközést mindig mondd ki, ne dönts csendben.

---

## 1. Formázás

| Szabály | Érték |
| --- | --- |
| Behúzás | 4 szóköz, tab nincs |
| Sorvég | CRLF (`end_of_line = crlf`) |
| Kapcsos zárójel | mindig új sorban (Allman), lambdánál, metódusnál, típusnál, property-nél is |
| `else`, `catch`, `finally` | új sorban |
| Kapcsos zárójel egysoros blokknál | kötelező, egysoros `if` is kap `{ }`-t |
| Egysoros blokk egy sorban | nem: `csharp_preserve_single_line_blocks = false` |
| Namespace | file-scoped: `namespace Foo.Bar;` |
| `using` | a namespace előtt, `System.*` elöl, ábécérendben |
| `using` utasítás | egyszerű forma: `using var x = …;` |
| Szóközök | kulcsszó után igen (`if (`), metódusnév és `(` között nem, cast után nem, `:` körül öröklésnél igen |
| Operátor tördelésnél | a sor elejére kerül |
| Hosszú paraméterlista | minden paraméter külön sorban, a nyitó `(` után új sor |

Másolható `.editorconfig` mag:

```ini
[*.cs]
indent_style = space
indent_size = 4
tab_width = 4
end_of_line = crlf
csharp_new_line_before_open_brace = all
csharp_new_line_before_else = true
csharp_preserve_single_line_blocks = false
csharp_prefer_braces = true:suggestion
csharp_style_namespace_declarations = file_scoped:warning
csharp_using_directive_placement = outside_namespace:silent
dotnet_sort_system_directives_first = true
csharp_prefer_simple_using_statement = true:warning
csharp_style_var_for_built_in_types = true:warning
csharp_style_var_when_type_is_apparent = true:suggestion
csharp_style_var_elsewhere = true:suggestion
csharp_style_implicit_object_creation_when_type_is_apparent = true:warning
csharp_style_expression_bodied_properties = true:warning
csharp_style_expression_bodied_accessors = true:warning
csharp_style_expression_bodied_constructors = false:suggestion
csharp_style_expression_bodied_methods = when_on_single_line:silent
csharp_style_pattern_matching_over_as_with_null_check = true:warning
csharp_style_unused_value_assignment_preference = discard_variable:warning
csharp_preferred_modifier_order = public,private,protected,internal,static,async,readonly,override,sealed,abstract,virtual:warning
dotnet_style_readonly_field = true:warning
dotnet_style_require_accessibility_modifiers = for_non_interface_members:suggestion
dotnet_style_qualification_for_field = false:suggestion
dotnet_style_qualification_for_property = false:suggestion
dotnet_style_qualification_for_method = false:suggestion
dotnet_style_qualification_for_event = false:suggestion
dotnet_style_predefined_type_for_locals_parameters_members = true:suggestion
dotnet_style_object_initializer = true:suggestion
dotnet_style_collection_initializer = true:suggestion
dotnet_style_coalesce_expression = true:suggestion
dotnet_style_null_propagation = true:suggestion
dotnet_style_prefer_compound_assignment = true:warning
dotnet_style_operator_placement_when_wrapping = beginning_of_line
```

A stílusszabályokat a build is ellenőrizze. A `.csproj`-ba vagy a `Directory.Build.props`-ba:
`<EnforceCodeStyleInBuild>true</EnforceCodeStyleInBuild>`.

## 2. Nyelvi elemek

- `var` mindenhol, ahol a típus kiderül (beépített típusoknál is).
- Target-typed `new()`, ha a típus a bal oldalon áll: `public ObservableCollection<OrderVmList> Orders { get; } = new();`
- Objektum- és gyűjtemény-inicializáló a property-nkénti értékadás helyett.
- `int`, `string`, `bool` kulcsszó, nem `Int32`, `String`.
- Nincs `this.` minősítés.
- Pattern matching az `as` + null-ellenőrzés helyett: `if (x is Order order)`.
- Expression body property-nél és accessornál igen, konstruktornál nem. Metódusnál csak akkor, ha egy
  sorba fér.
- Logikai eredményt közvetlenül adj vissza, ne `if/else`-ben:
  `private bool IsOrderSelected() => SelectedOrder != null;`
- `??` és `?.` a kézi null-ellenőrzés helyett.
- Nem használt visszatérési érték: discard (`_ = …`).
- Mezők `readonly`-k, ha a konstruktor után nem változnak.

## 3. Elnevezés

| Mi | Forma | Példa |
| --- | --- | --- |
| Típus, metódus, property, esemény | PascalCase | `OrderService`, `GetOrdersWithInfo` |
| Interfész | `I` + PascalCase | `IOrderService`, `IRepository<TEntity>` |
| Privát mező | `_camelCase` | `_orderRepository` |
| Paraméter, lokális változó | camelCase | `orderItems`, `newProduct` |
| Generikus típusparaméter | `T` + szerep | `TEntity` |
| Aszinkron metódus | `Async` végződés | `ActivateAsync` |
| Logikai metódus vagy property | kérdésként olvasható | `IsValid`, `IsCategorySelected`, `CanExecuteCommand` |
| Service | `<Domén>Service : I<Domén>Service` | `ProductService : IProductService` |
| Repository | generikus: `Repository<TEntity> : IRepository<TEntity>` | |
| Bemeneti/szerkesztési adatobjektum | `<Domén>Dto` | `ProductDto`, `AddressDto` |
| Listás megjelenítési modell | `<Domén>VmList`, beágyazott elemre `<Domén>InfoVmList` | `OrderVmList`, `OrderInfoVmList` |
| View model | `<Képernyő>ViewModel`, dialógusnál `ViewModels/Dialogs/` alatt | `OrdersViewModel` |
| Oldal (view) | `<Képernyő>Page` | `OrdersPage` |
| Parancs | igei metódusnév; a generált parancs `<Név>Command` | `DeleteOrder()` → `DeleteOrderCommand` |
| Navigációs parancs | `To<Cél>Page` | `ToNewProductPage()` |
| Repository-mező a service-ben | `_<entitás>Repository` | `_stockRepository` |

Egy név önmagában is mondja meg, mi ez és mire való (domén + szerep). Ne legyen `data`, `item2`,
`temp`, `flag`. Ne adj egy repositorynak `_categoryService` nevet. Projektnév, namespace és mappa
ugyanazt a helyesen írt szót használja.

## 4. Fájlok, mappák, namespace-ek

- Fájlonként egy fő típus, a fájl neve a típus neve. Kivétel: a hozzá tartozó kis beágyazott
  adattípus (például `OrderVmList` mellett `OrderInfoVmList`) mehet ugyanabba a fájlba.
- A namespace a projekt gyökér-namespace-ével kezdődik, és követi a mappát:
  `Webshop.Desktop.Core/Models/Business/Dtos/AddressDto.cs` → `namespace Webshop.Desktop.Core.Models.Business.Dtos;`
- Interfészek külön mappában a közös (Core) projektben, szerep szerint: `Interfaces/Business/`,
  `Interfaces/Repository/`. UI-szolgáltatások interfészei: `Contracts/Services/`, `Contracts/ViewModels/`.
- Modellek szerep szerint: `Models/Domain/` (entitások), `Models/Business/` (megjelenítési modellek),
  `Models/Business/Dtos/` (DTO-k).
- UI projektben: `Views/`, `Views/Dialogs/`, `ViewModels/`, `ViewModels/Dialogs/`, `Services/`,
  `Helpers/`, `Activation/`, `Behaviors/`.
- `<Nullable>enable</Nullable>` és `<ImplicitUsings>enable</ImplicitUsings>` minden projektben.
  Fájlszintű `#nullable` kapcsolót ne használj.

## 5. Rétegek

```
Core            entitások, DTO-k, megjelenítési modellek, interfészek; nem hivatkozik más projektre
Repository      DbContext és a generikus repository; csak a Core-ra hivatkozik
Business        a service-ek (a Core interfészeinek implementációi); a Core-ra hivatkozik
UI / Host       nézetek, view modelek, DI-összerakás (composition root); mindenre hivatkozhat
```

- A függőségek a Core felé mutatnak. A Business és a Repository nem hivatkozik egymásra, mindkettő a
  Core interfészein keresztül beszél.
- A view model csak service-interfészt kap, repositoryt vagy DbContextet soha.
- Az entitás nem megy ki a UI-ba. A service DTO-t vagy `VmList`-et ad vissza, és a leképezés a
  service-ben, egy helyen történik.

## 6. Osztályok felépítése

A service-ekben és a view modelekben a tagok sorrendje `#region` blokkokkal, mindig ugyanígy:

```csharp
public class OrderService : IOrderService
{
    #region Private members

    private readonly IRepository<Order> _orderRepository;
    private readonly IRepository<Address> _addressRepository;

    #endregion

    #region Constructor

    public OrderService(
        IRepository<Order> orderRepository,
        IRepository<Address> addressRepository)
    {
        _orderRepository = orderRepository;
        _addressRepository = addressRepository;
    }

    #endregion

    public OrderVmList[] GetOrdersWithInfo()
    {
        …
    }
}
```

View modelben a régiók sorrendje: `Private members` → `Observables` → `Constructor` → `Events`
(navigáció és `On…Changed` kezelők) → `Commands` → `Methods` (privát segédmetódusok).

- Konstruktoros injektálás, `private readonly` mezőkbe. Több paraméternél mindegyik külön sorban.
- Üres, kötelező interfész-metódus (például `OnNavigatedFrom`) üresen maradhat, de ne legyen benne
  üres sor.

## 7. Adatelérés (EF Core)

- Generikus repository: `IRepository<TEntity>` a Core-ban, `Repository<TEntity>` a Repository
  projektben. `Get`, `GetAll`, `GetAllIncluding(params …)`, `Find(predicate)`, `Add`, `AddRange`,
  `Remove`, `Update`.
- A lekérdező metódusok `IQueryable<T>`-t adnak vissza. A service építi tovább (`Include`, `Select`),
  és ő materializál (`ToArray()`).
- Listát a service tömbként ad vissza (`T[]`, `ToArray()`), nem `List<T>`-ként.
- Leképezés: `Select(x => new XVmList { … })` projekcióval a lekérdezésben, nem betöltés utáni
  ciklussal.
- Keresés azonosító alapján: `Find(x => x.Id == id).FirstOrDefault()`, utána null-ellenőrzés. Nem
  létező elemre a módosító metódus csendben visszatér, a törlő `bool`-t ad (`false` = nem sikerült).
- **Egy felhasználói művelet = egy `SaveChanges`.** A repository nem commitol. A service végzi el az
  összes változtatást, aztán egyszer ment (lásd `commit-side-effect-order`).
- Az adatbázis-first (scaffoldolt) modellt kézzel nem szerkeszted. A saját kód `partial` osztályba
  vagy az `OnModelCreatingPartial`-ba kerül. Code-first esetén a modellváltozás és a migráció
  ugyanabban a commitban van.
- A connection string konfigurációból jön (`appsettings.json`, user secrets), kódban nincs.
- Igaz/hamis értéket `bool`-ként tárolj, dátumot dátumtípusként. `sbyte` jelzőt és szöveges dátumot
  ne használj.

## 8. MVVM (CommunityToolkit.Mvvm)

- A view model `partial class`, és `ObservableRecipient`-ből (vagy `ObservableObject`-ből) származik.
  Navigációs képernyőn `INavigationAware`: az adatot `OnNavigatedTo(object parameter)` tölti be.
- Megfigyelhető állapot: `[ObservableProperty]` privát `_camelCase` mezőn, egy sorban:
  `[ObservableProperty] private string _productName;`
- Lista: `ObservableCollection<T>` property, `= new();` kezdőértékkel. Újratöltés: `Clear()`, majd
  `Add` elemenként.
- Parancs: `[RelayCommand]` egy privát metóduson. Feltételhez `CanExecute = nameof(IsXSelected)`.
  Kijelölés-változáskor a `partial void OnSelectedXChanged(...)` hívja a
  `…Command.NotifyCanExecuteChanged()`-et.
- Aszinkron parancs: `private async Task SaveAsync()` (ebből `AsyncRelayCommand` lesz), soha nem
  `async void`.
- A view a view modelt a code-behind konstruktorában kapja, és `ViewModel` property-ként adja át a
  XAML-nek. Kötés: `{x:Bind ViewModel.X, Mode=TwoWay, UpdateSourceTrigger=PropertyChanged}`.
- A view model nem tart UI-vezérlőt (`TeachingTip`, `ContentDialog`, `XamlRoot`). Értesítést és
  dialógust egy injektált service-en keresztül kér (például `IDialogService`, `INotificationService`).
- Navigáció injektált `INavigationService`-szel: `_navigationService.Frame?.Navigate(typeof(XPage), id)`.
- XAML: attribútumonként egy sor. `x:Name` PascalCase-ben, aláhúzás nélkül (`ConfirmTeachingTip`).
  A felhasználónak szóló szöveg erőforrásfájlba kerül (`.resw`/`.resx`), nem a kódba.

## 9. Validáció

- Űrlapmezőnként a view modelben `partial void On<Mező>Changed(string value)` ellenőriz. Hibánál
  kitölti a `<Mező>ValidationText`-et, és `true`-ra állítja a `<Mező>ValidationVisibility`-t. A végén
  hívja a mentő parancs `NotifyCanExecuteChanged()`-ét.
- A mentő parancs `CanExecute`-ja egy `IsValid()` metódus, ami minden `…ValidationVisibility` mezőt
  összegez. Mentés előtt minden mező-ellenőrzés még egyszer lefut.
- Hosszabb távon ugyanez rövidebben: `ObservableValidator` és data annotationök (`[Required]`,
  `[MinLength]`). Új kódban ezt használd.
- A határokat a bemenetnél ellenőrizd (űrlap, kérés), nem a service mélyén.
- A hibaüzenet a felhasználó nyelvén szól, és megmondja a szabályt („A névnek legalább 4 karakteresnek
  kell lennie”).

## 10. Dependency injection

- Egy composition root (`App.xaml.cs` vagy `Program.cs`), csoportosítva és megjegyzéssel jelölve:
  DbContext → konfiguráció (`Configure<TOptions>`) → aktiválás → core service-ek → UI service-ek →
  repositoryk → business service-ek → view modelek és oldalak párban → dialógusok.
- Repository: egyetlen nyitott generikus regisztráció, `services.AddScoped(typeof(IRepository<>), typeof(Repository<>));`.
  Ugyanazt a service-t ne regisztráld két különböző élettartammal.
- Élettartamok: a DbContext és ami használja `Scoped`. Az állapot nélküli UI-szolgáltatás
  `Singleton`. A view model és az oldal `Transient`.
- Asztali appban a scoped service-eket egy scope-ból kérd (oldalanként vagy műveletenként
  `CreateScope()`), ne a gyökér-providerből (lásd `lifetime-matched-injection`).
- Beállítás az options patternnel (`IOptions<T>`), nem statikus mezőből.

## 11. Dokumentáció és kommentek

- Minden publikus service-interfész metódusa kap XML dokumentációt, magyarul, teljes mondattal és
  ponttal: `<summary>`, minden paraméterhez `<param>`, és `<returns>`, ha van visszatérési érték.
  Az implementáció nem ismétli meg.

```csharp
/// <summary>
/// Rendelés törlése.
/// </summary>
/// <param name="id">Rendelés azonosító.</param>
void DeleteOrder(int id);
```

- Komment csak a nem nyilvánvaló „miért”-hez. Ami a következő sorból látszik, azt ne írd le.
- Generált vagy sablonból jött kód kommentjeit nem kell lefordítani, de saját kódban egy nyelvet
  használj.
- `#pragma warning disable` és `null!` csak indoklással, egy sorral felette.

---

## 12. Contractok (hibaosztályok)

Mindegyik olyan hiba, amit a fordító és a linter nem jelez, de drága. Ha a változtatásod érinti a
„mikor” részt, menj végig a „hogyan ellenőrizd” lépésen.

### emit-hygiene: zajmentes kód
**Mikor:** bármilyen kód írásakor.
**Ellenőrizd:** minden kommentnél kérdezd meg, hogy „miért”-et magyaráz-e. Minden új függvénynél,
hogy egynél több hívója van-e. Minden guardnál, hogy melyik valódi bemenet éri el.
**Tedd:** töröld a narráló kommenteket, olvaszd vissza az egyszer használt segédfüggvényt, és kövesd
a fájl meglévő stílusát.

### self-descriptive-naming: önmagáért beszélő nevek
**Mikor:** bármi elnevezésekor.
**Ellenőrizd:** egy keresési találatban, önmagában olvasva is kiderül-e a névből, mi ez és mire
való?
**Tedd:** név = domén + szerep. Logikai érték kérdésként olvasható. Amihez a diffed nem nyúlt, azt
ne nevezd át.

### logic-over-surface: szabály a hibaosztályról, ne az API-ról
**Mikor:** szabály, contract vagy convention írásakor.
**Ellenőrizd:** mi tört el, mi a gyökérok, mi a hibaosztály, és hogyan találja meg más a következő
esetet.
**Tedd:** a konkrét API-név legfeljebb példaként szerepeljen. Amit a fordító vagy a hivatalos
dokumentáció már elmond, abból nem kell szabály.

### lifetime-matched-injection: az élettartamok egyezzenek
**Mikor:** service regisztrálásakor, singleton vagy cache írásakor, háttérmunkánál, eseménykezelőnél.
**Ellenőrizd:** minden regisztrációnál nevezz meg két élettartamot: a tartóét (folyamat, scope,
oldal) és az adatét (app, felhasználó, kérés, művelet). Egyezniük kell. A gyökér-providerből vagy
statikus service locatorból feloldott scoped service valójában singleton.
**Tedd:** scoped service-t ne tarts singletonban, statikus mezőben vagy `BackgroundService`-ben.
Használj `IServiceScopeFactory`-t vagy `IDbContextFactory<T>`-t műveletenként. Az eseménykezelőt
és a timert a tulajdonosa szüntesse meg.

### commit-side-effect-order: egy művelet, egy commit, utána a mellékhatás
**Mikor:** `SaveChanges`, többlépéses írás vagy törlés, e-mail, üzenet, HTTP-hívás, újrapróbálás.
**Ellenőrizd:** írd fel sorban a commitokat és a külső hatásokat. Mi marad, ha a folyamat bármelyik
után leáll? Mi történik, ha kétszer fut le?
**Tedd:** egy felhasználói művelethez egy `SaveChanges` vagy egy explicit tranzakció tartozzon. A
repository ne commitoljon. A külső hatás a commit után jöjjön, vagy outboxon keresztül. Az
újrapróbált művelet legyen idempotens.

### lost-update: elveszett módosítás
**Mikor:** szerkesztő képernyő, update parancs, kapcsoló (toggle), készlet vagy számláló változtatása.
**Ellenőrizd:** kerülhet-e egy második szereplő az olvasás és a mentés közé? Ha igen, miből venné
észre a második mentés?
**Tedd:** konkurens szerkesztésnél concurrency token (`rowversion`) és a
`DbUpdateConcurrencyException` kezelése. Számláló és kapcsoló az adatbázisban változzon
(`ExecuteUpdate`, `SET x = x - 1`), ne memóriában. Csak a módosított mezőket mentsd.

### nullability-across-layers: nullability minden rétegben ugyanaz
**Mikor:** új vagy módosított mező, oszlop, DTO, leképezés, view model.
**Ellenőrizd:** kövesd végig a mezőt entitás → oszlop → DTO → leképezés → view model → kliens.
Mindenhol ugyanaz a nullability, vagy egyetlen explicit leképezés dönt. Minden `null!`, `!` és
elnyomott CS86xx figyelmeztetés mellé kell indoklás.
**Tedd:** `<Nullable>enable</Nullable>`. A nullabilityről egyszer dönts, az igazság forrásánál
(általában az oszlopnál). Ne `!`-lel tedd zölddé a buildet.

### time-kind: az idő fajtája
**Mikor:** `DateTime`, `DateTimeOffset`, `DateOnly`, szövegként tárolt dátum, időzóna, dátum JSON-ban.
**Ellenőrizd:** minden időmezőnél nevezd meg a fajtáját: pillanat, naptári nap vagy faliórás idő.
Utána nézd meg, hogy a C# típus, az oszlop és a JSON formátum ehhez illik-e.
**Tedd:** pillanatra `DateTimeOffset` vagy UTC `DateTime`, naptári napra `DateOnly`. Dátumot ne
tárolj szövegként. Tesztelhető időhöz injektált `TimeProvider`.

### migration-history: a séma története közös állapot
**Mikor:** migráció, ModelSnapshot, modellváltozás, sémaszkript, modellt érintő ágak merge-e.
**Ellenőrizd:** minden migrációról mondd meg, hol futott már (helyben, közös adatbázison, élesben).
Merge után: `dotnet ef migrations has-pending-model-changes`. Olvasd el az `Up`-ot és a `Down`-t, és
keresd az adatvesztő lépéseket.
**Tedd:** olyan migrációt, ami már futott máshol, ne szerkessz, inkább adj hozzá újat. Párhuzamos
ágaknál a későbbit generáld újra. A modell és a migráció egy commitban legyen.

### api-spec-fidelity: az OpenAPI spec ne hazudjon
**Mikor:** végpont, DTO, enum, JSON-beállítás vagy OpenAPI-dokumentum változásakor.
**Ellenőrizd:** minden megváltozott végpontnál tégy egy valódi választ a sémája mellé (státuszkódok,
kötelező mezők, nullability, enum, dátumformátum, hibatest).
**Tedd:** a spec a kódból generálódjon, és legyen commitolva. Minden választípust és hibakódot
deklarálj. Törő változást ugyanabban a PR-ben jelezz a klienseknek.

### openapi-client-consumption: generált kliens fogyasztása
**Mikor:** generált API-kliens vagy az általa visszaadott adat érintésekor.
**Ellenőrizd:** ha hiányzik egy mező, vagy rossz az alakja, hasonlítsd össze a valódi választ a
spec-kel. Ha eltérnek, a spec a hiba.
**Tedd:** a spec-et javítsd, aztán generálj újra. A hívás helyén a guard csak ideiglenes híd lehet,
egy linkkel a javításhoz. DTO → modell leképezés DTO-nként egy helyen legyen.

### dotnet-tooling: eszköz kiesése ne legyen csendes
**Mikor:** az SDK, a `dotnet-ef`, az LSP vagy egy MCP szerver nem érhető el, vagy a projekt (például
csak Windowson futó) itt nem buildelhető.
**Ellenőrizd:** melyik eszköz válaszolt ténylegesen?
**Tedd:** egyszer mondd ki, használd a tartalékmegoldást, és a végső jelentésben sorold fel, mit nem
lehetett ellenőrizni.

---

## 13. Amit ne vigyél tovább

Ezek a forráskódban előforduló minták. Új kódba ne másold őket, a jobb oldali oszlop szerint írd
meg helyettük.

| Talált minta | Miért baj | Helyette |
| --- | --- | --- |
| A repository `Add`/`Update`/`Remove` metódusa maga hívja a `SaveChanges`-t | Egy törlés vagy mentés több külön commit lesz, és félúton elakadhat (`commit-side-effect-order`) | A repository csak változtat, a service a végén egyszer ment |
| Scoped DbContext és repository a gyökér-providerből (`App.GetService<T>()` scope nélkül) | A DbContext a folyamat végéig él, régi adatot és változáskövetést hordoz (`lifetime-matched-injection`) | Scope oldalanként vagy műveletenként, vagy `IDbContextFactory<T>` |
| Ugyanaz a repository nyitott generikusként `Scoped`, zártként `Transient` regisztrálva | Típusonként más élettartam, kiszámíthatatlan viselkedés | Egy nyitott generikus regisztráció, egy élettartammal |
| Connection string a kódban (`UseMySQL("server=…;pwd=…")`) | Jelszó kerülhet a repóba, és környezetenként nem állítható | `appsettings.json` / user secrets, `GetConnectionString` |
| Dátum `string`-ként az entitásban | Szövegként rendeződik és hasonlít (`time-kind`) | `DateOnly` / `DateTime` és dátum oszlop |
| `sbyte Inactive` / `Popular` jelző, megjelenítéskor szöveggé alakítva | A típus nem mondja meg a jelentést, a UI-szöveg a service-ben keletkezik | `bool IsInactive`, a megjelenítési szöveg a view-ban vagy egy converterben |
| Kapcsolás memóriában: beolvasás, `0 ↔ 1` csere, teljes `Update` | Két kattintás vagy két felhasználó felülírja egymást (`lost-update`) | Feltételes update az adatbázisban, vagy concurrency token |
| `async void` parancsmetódus | A kivétel összeomlasztja az appot, és nem lehet rá várni | `async Task` + `[RelayCommand]` (`AsyncRelayCommand`) |
| A view model publikus mezőben tartja a `TeachingTip`-et és a `XamlRoot`-ot | A view model a UI-hoz kötődik, és nem tesztelhető | Injektált értesítő- és dialógus-service |
| A dialógus újranyitása rekurzív hívással érvénytelen bemenetnél | Elágazó, nehezen követhető folyamat | Ciklus, vagy validáció a dialógusban, a bezárás előtt |
| Ugyanaz a törlő service-hívás kétszer (egyszer a feltételben, egyszer a törzsben) | Kétszer fut a mellékhatás | Egyszer hívd, és az eredményét használd |
| `if (feltétel) return true; else return false;` | Zaj | `return feltétel;` |
| Varázsszöveg összehasonlításra (`value.Name == "Összes"`) | Fordítás vagy átnevezés után csendben eltörik | Külön jelző (`Id == 0`) vagy konstans |
| Varázs alapérték (`Price ?? 10000`) | Rejtett üzleti szabály | Kötelező mező validációval, vagy nevesített konstans |
| Méret `Dictionary<string, int>` kulccsal, utána `int.Parse` | Felesleges konverzió, futásidejű hibalehetőség | `Dictionary<int, int>` vagy saját típus |
| `#pragma warning disable CS8603` és `= null!` a nullable figyelmeztetésre | Elrejti a valódi null-utat (`nullability-across-layers`) | A visszatérési típus legyen `T?`, és a hívó kezelje |
| Egy projektben ki van kapcsolva a `Nullable` | Abban a projektben nincs null-ellenőrzés | `<Nullable>enable</Nullable>` mindenhol |
| Elírt projektnév és eltérő namespace (`…Repositrory` projekt, `…Repository` namespace) | A keresés és a navigáció félrevezet | Projekt, mappa és namespace ugyanazzal a helyes névvel |
| Repository-mező `_categoryService` néven | A név mást mond, mint ami a mező | `_categoryRepository` |
| `x:Name="TeachingTip_confirm"` | Kevert elnevezés | `ConfirmTeachingTip` |
