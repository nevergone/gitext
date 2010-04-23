Git VCS kiegészítő Komodohoz



A projekt honlapja és forrása: http://github.com/nevergone/gitext

Támogatott Komodo Edit és Komodo IDE verziók: 4.1 - 5.x


Segítség lefordításhoz:

1.) A telepített Komodo könyvtárában keress egy "sdk" könyvtárat: <telepített komodo>/lib/sdk
2.) Az itt található README.txt fájlban megtalálod az SDK beállítását különféle rendszerek alatt.
3.) Microsoft Windows alatt szükséges lehet a .py kiterjesztésű fájlok Pythonhoz rendelése, a Komodoval telepített Pythont itt találod: <telepített komodo>\lib\python\python.exe (hasznos link: http://support.microsoft.com/kb/310519 )
4.) Ha sikerült a Komodo SDK beállítása (erről a "koext help gettingstarted" paranccsal meggyőzödhetsz), akkor a gitext forrását tartalmazó könyvtárban add ki a következő parancsot: koext build --unjarred
5.) Sikeres művelet esetén létrejött ugyanott egy .xpi kiterjesztésű fájl, ezt add hozzá a Komodohoz, mint a többi kiterjesztést

