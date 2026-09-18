# Frau Sarahs Tracking – Version 015

Dies ist die Arbeitsversion 015 für Lebensmittelkatalog und Makro-Auswertung.

## Neu in Version 015

- Lebensmittel stehen ohne zusätzlichen Kategorien-Klick in einer gemeinsamen Liste.
- Lebensmittel mit Varianten öffnen erst nach ihrer Auswahl die passende Variantenliste, etwa Gouda, Tomate oder Kartoffel.
- Für jede ausgewählte Portion werden kcal, Kohlenhydrate, Protein, Fett und Ballaststoffe sofort für die Mahlzeit berechnet.
- Mahlzeiten stehen in einer gemeinsamen, platzsparenden Liste. Das Protokoll zeigt kompakte, weiterhin farbcodierte Zeilen.
- Der Header zeigt nur die kcal seit dem letzten Ende einer Nachtruhe.
- Schlaf wird über Nachtruhe, Nickerchen oder Aufgewacht erfasst; bei den ersten beiden gibt es Start und Ende.
- Beim Schlaf-Filter erscheinen alle Schlaf-Einträge direkt in ihrer zeitlichen Reihenfolge, ohne Sonderblöcke.
- `Body & Soul` enthält zusätzlich `total k.o.`; die Soul-Liste ist um die vereinbarten Gefühle ergänzt.
- Die Stammliste mit Referenzwerten und Standardportionen liegt in `../LM.xlsx`.

## Starten

- `index.html` ist die App.
- Für PWA-Installation und Offline-Betrieb gehören `manifest.json`, `sw.js` und `icon.png` dazu.
- Die App sollte über einen lokalen Webserver oder eine HTTPS-Webadresse geöffnet werden. Ein direktes Öffnen der HTML-Datei kann Service Worker und Installation verhindern.

## Daten

Die Einträge werden lokal im Browser mit IndexedDB gespeichert. Die App bietet CSV-Exporte sowie JSON-Backup und -Import. Ein Backup vor Browserwechsel, Datenbereinigung oder größeren Änderungen wird empfohlen.

## Versionsprinzip

GitHub ist die maßgebliche Änderungshistorie: Dort lassen sich Änderungen pro Datei und Zeile nachvollziehen. Dieser Ordner dient zusätzlich als lesbare, vollständige Momentaufnahme der jeweiligen Version.

Bei der nächsten Version genügt eine kurze Ergänzung wie:

`Geändert: index.html (Schlafmaske und Export), sw.js (Cache-Version). Vollständiger Vergleich: GitHub.`
