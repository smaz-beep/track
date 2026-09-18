# Frau Sarahs Tracking – Version 015

Dies ist die Arbeitsversion 015 für das Tagesprotokoll, den Lebensmittelkatalog und die Makro-Auswertung.

## Neu in Version 015

- Lebensmittel stehen ohne zusätzlichen Kategorien-Klick in einer gemeinsamen Liste.
- In der oberen Lebensmittelliste stehen nur Namen; Mengen und Portionswahl erscheinen erst nach der Auswahl.
- Lebensmittel mit Varianten öffnen erst nach ihrer Auswahl die passende Variantenliste, etwa Gouda, Tomate oder Kartoffel.
- Nährwerte gelten eindeutig pro `100 g`, `100 ml` oder `10 cm`. Eine Portion hat zusätzlich eine Beschriftung, eine konkrete Menge und eigene Multiplikatoren. Beispiel: `1 Packung` = `125 g`, danach `0,5×`, `1×` oder `2×`.
- Ein Lebensmittel kann mehrere Portionen mit jeweils eigenen Multiplikatoren besitzen.
- Freie Lebensmittel können direkt bei einer Mahlzeit eingegeben und bei Bedarf als häufiges oder seltenes Lebensmittel in die Liste übernommen werden.
- Für jede ausgewählte Portion werden kcal, Kohlenhydrate, Protein, Fett und Ballaststoffe sofort für die Mahlzeit berechnet. Fehlende kcal werden als `Makros fehlen` markiert.
- Mahlzeiten stehen in einer gemeinsamen, platzsparenden Liste. Das Protokoll zeigt kompakte, weiterhin farbcodierte Zeilen.
- Im Protokoll ist `Alle` eine echte Auswahl aller Kategorien; einzelne Kategorien können danach wieder abgewählt werden.
- Der Header zeigt nur die kcal seit dem letzten Ende einer Nachtruhe.
- Schlaf wird über Nachtruhe, Nickerchen oder Aufgewacht erfasst; bei den ersten beiden gibt es Start und Ende.
- Beim Schlaf-Filter erscheinen alle Schlaf-Einträge direkt in ihrer zeitlichen Reihenfolge, ohne Sonderblöcke.
- `Body & Soul` enthält zusätzlich `total k.o.`; die Soul-Liste ist um die vereinbarten Gefühle ergänzt.
- Dark Mode kann in den Einstellungen manuell, nach Uhrzeit oder anhand von Sonnenauf- und -untergang aktiviert werden.
- Das Erscheinungsbild, die Lebensmittelverwaltung sowie JSON-/CSV-Datenexport und -import liegen in den Einstellungen.
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
