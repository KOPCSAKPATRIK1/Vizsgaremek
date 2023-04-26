# Áttekintés

Androidos cipő e-commerce applikáció, melynek célja egy letisztult, dinamikus és felhasználóbarát felület megvalósítása modern és világszynvonalu elemekkel.

## Használt technológiák:
- React Native expo
- Nativewinds (Tailwinds react nativera)
- React Native Paper(Material design könyvtár)
- Használt packagek:
    - [AsyncStorage](https://reactnative.dev/docs/asyncstorage)
    - [React navigation](https://reactnative.dev/docs/asyncstorage)
    - [React Native Select Dropdown](https://www.npmjs.com/package/react-native-select-dropdown)
    - [React Native Vector Icons](https://www.npmjs.com/package/react-native-vector-icons)

# Telepítés

- Clone-ozd a repo-t Visual studióban
- Inditsd el a backend alkalmazást a backend dokumentáció alapján
- XAMPP elindítása a backend dokumentáció alapján
- Lépj be a webshop-mobil mappába a terminálban `(cd webshop-backend)`
- Futtasd le az `npm install` parancsot a terminálban
- webshop-mobil > assets > ipAddress.js > Változtassa meg a ip címet az aktuális számitógépére(Terminal > ipconfig)
- Ha emulátort használnál:
    - Inditsd el az android emulátort
    - A fiók környezeti változóinak szerkeztése > Új > Változó neve: `ANDROID_HOME` > Változó értéke: `Android Sdk mappájának elérési útvonala`
    - Futtasd le az `npx expo start` majd ha az expo felállt nyomd meg az "A" billentyűt
- Ha android eszközt használnál:
    - Az eszköz és a számítógép legyen ugyanazon a hálózaton
    - Töltse le az `Expo Go` alkalmazást play áruházból
    - Futtasd le az `npx expo start` majd ha az expo felállt olvassa be a QR kódot
