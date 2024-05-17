document.addEventListener('DOMContentLoaded', function() {

    const puzzles = [
    [["Weißes Pulver", ["Kokain", "Mehl", "Salz", "Zucker"]], ["Allergien", ["Gras", "Haar", "Milch", "Nuss"]], ["Vorkommend in Breaking Bad", ["Labor", "Maske", "Methamphetamin", "Wohnmobil"]], ["Homographen", ["Collagen", "Heroin", "Modern", "Umfahren"]]],
    [["Häufig während Halloween gesehen", ["Fledermaus", "Geist", "Skelett", "Spinne"]], ["Gesunde Beschreibung des Kopfs einer Person", ["Birne", "Kürbis", "Nuss", "Tomate"]], ["Bestandteil von Chips", ["Essig", "Kartoffel", "Öl", "Salz"]], ["Motor_", ["Boot", "Leistung", "Rad", "Raum"]]],
    [["Schachfiguren", ["Bauer", "Dame", "König", "Turm"]], ["Küchengeräte", ["Mühle", "Presse", "Reibe", "Sieb"]], ["Am Ende von Künstlern mit Nummer-1 Alben", ["Berg", "Fischer", "Hosen", "Park"]], ["_Klub", ["Automobil", "Buch", "Fussball", "Schach"]]],
    [["Einheiten", ["DB", "KG", "NM", "PA"]], ["Chemische Elemente die nach Wissenschaftlern benannt sind", ["ES", "FM", "MD", "NO"]], ["EU-Gründerstaaten", ["BE", "DE", "FR", "NL"]], ["Originaltitel von Filmen", ["IT", "ME", "PI", "UP"]]],
    [["Golfschläger", ["Driver", "Hybrid", "Putter", "Wedge"]], ["Schwermetalle", ["Eisen", "Kupfer", "Quecksilber", "Zink"]], ["Werkzeuge", ["Axt", "Hacke", "Hammer", "Säge"]], ["Anagramme", ["Beil", "Blei", "Leib", "Lieb"]]],
    [["Braune Heißgetränke", ["Americano", "Cappuccino","Espresso", "Kaffee"]], ["Teile eines Fußballtors", ["Latte", "Netz", "Pfosten", "Verankerung"]], ["Auf Weihnachtsmärtken zu sehen", ["Glühwein", "Karusell", "Mandeln", "Stand"]], ["Eis_", ["Bär", "Berg", "Lauf", "Tee"]]],
    [["Gängiger Wert", ["Durchschnitt", "Mittel", "Normal", "Standard"]], ["Zum Erreichen eines Ziels verwendet", ["Lösung", "Methode", "Verfahren", "Weg"]], ["Deutsche Schauspieler", ["Bär", "Herbst", "Koch", "Vogel"]], ["Am Ende europäischer Wahrzeichen", ["Dame", "Platz", "Tag", "Turm"]]],
    [["Gesichtspflegeprodukte", ["Creme", "Öl", "Peeling", "Serum"]], ["Häufig während Covid gesehen", ["Desinfektionsmittel", "Impfung", "Maske", "Test"]], ["Familiennamen in GOT", ["Baratheon", "Lannister", "Mormont", "Targaryen"]], ["Leistungs_", ["Druck", "Kurs", "Nachweis", "Stark"]]],
    [["Edelsteine", ["Amethyst", "Diamant", "Rubin", "Smaragd"]], ["Arabische Halbinsel-Staaten", ["Bahrain", "Jemen", "Kuwait", "Saudi-Arabien"]], ["WM-Austragungsorte", ["Katar", "Russland", "Südafrika", "Südkorea"]], ["Beginnend mit Familienmitgliedern", ["Muttermal", "Oman", "Opal", "Papaya"]]],
    [["Fortbewegungsmittel", ["Auto", "Bahn", "Fahrrad", "Schiff"]], ["Mythologische Wesen", ["Drache", "Sirene", "Yeti", "Zentaur"]], ["Teilsysteme eines Computers", ["Bus", "Chip", "Port", "Speicher"]], ["Vogelarten", ["Greif", "Sing", "Wasser", "Zug"]]],
    [["Sitzgelegenheiten", ["Bett", "Hocker", "Sofa", "Stuhl"]], ["Idee", ["Hauch", "Schimmer", "Schuss", "Spur"]], ["Dinge in denen Geld gelagert wird", ["Automat", "Konto", "Portemonnaie", "Tresor"]], ["Volks_", ["Bank", "Lied", "Mund", "Nah"]]],
    [["Deutsche Mittelgebirge", ["Eifel", "Harz", "Schwarzwald", "Westerwald"]], ["Häufig verbrannt", ["Hexe", "Holz", "Kohle", "Papier"]], ["Rollen im Spiel Werwölfe", ["Bürgermeister", "Jäger", "Seherin", "Werwolf"]], ["Gold_", ["Erz", "Handel", "Rausch", "Reserve"]]],
    [["Auf einem Bett zu finden", ["Bezug", "Laken", "Matratze", "Kissen"]], ["Teile einer Gitarre", ["Decke", "Sattel", "Steg", "Wirbel"]], ["Name von Filmprotagonisten mit gleichnamigem Film", ["Benjamin", "Edward", "Léon", "Schindler"]], ["Lauf_", ["Bahn", "Forrest", "Geld", "Pass"]]],
    [["Standard-Apps", ["Kalender", "Kamera", "Kompass", "Uhr"]], ["Nachweis", ["Beleg", "Schein", "Urkunde", "Zeugnis"]], ["Dinge, die oft aus Kupfer gemacht sind", ["Instrument", "Münze", "Rinne", "Rohr"]], ["_Fernsehen", ["Farb", "Kabel", "Privat", "Regional"]]],
    [["Körperteile/Organe von denen wir 2 haben", ["Fuß", "Hand", "Niere", "Ohr"]], ["Basiseinheiten im SI System", ["Ampere", "Kelvin", "Meter", "Mol"]], ["Namen deutscher Weltmeister", ["Bauer", "Bein", "Lahm", "Mai"]], ["Hand_", ["Ball", "Buch", "Granate", "Schuh"]]],
    [["Kleiner", ["Gnom", "Hobbit", "Pimpf", "Zwerg"]], ["Am Himmel zu sehen", ["Mond", "Regenbogen", "Vogel", "Wolke"]], ["Sternbilder", ["Drache", "Einhorn", "Giraffe", "Widder"]], ["In Logo von F1 Teams zu finden", ["Bulle", "Pferd", "Schlange", "Stern"]]],
    [["Taten die man täglich vollbringt", ["Essen", "Gang", "Schlaf", "Trinken"]], ["Handlung einer Person", ["Arbeit", "Leistung", "Tat", "Tun"]], ["Kennzahlen eines Autos", ["Drehmoment", "Gewicht", "Reichweite", "Verbrauch"]], ["Deutsche Bands ohne erste Silbe", ["Heilig", "Stein", "Werk", "Zen"]]],
    [["Tankstellen", ["Aral", "Esso", "Shell", "Jet"]], ["Vollzählig", ["Komplett", "Total", "Umfassend", "Vollständig"]], ["Arten von Zahlen", ["Ganz", "Imaginär", "Natürlich", "Rational"]], ["Was mit L gemeint sein könnte", ["Fünfzig", "Groß", "Liter", "Luxemburg"]]],
    [["Kontinente mit A", ["Afrika", "Amerika", "Asien", "Australien"]], ["Bestandteil von Pizzateig", ["Hefe", "Mehl", "Öl", "Salz"]], ["Lebewesen", ["Charakter", "Leben", "Organismus", "Wesen"]], ["_Park", ["Europa", "Freizeit", "Tier", "Wasser"]]], 
    [["Im Zusammenhang mit Raubtieren verwendet", ["Beute", "Jagd", "Revier", "Riss"]], ["Haben mehrere Grade", ["Abschluss", "Cousin", "Lebensmittel", "Verbrennung"]], ["Dinge die einen Deckel haben", ["Flasche", "Gully", "Toilette", "Topf"]], ["Stein_", ["Adler", "Bruch", "Ofen", "Schleuder"]]], 
    [["Bei der Tour de France zu sehen", ["Fahrrad", "Presse", "Trikot", "Ziel"]], ["Stadium", ["Etappe", "Rang", "Station", "Stufe"]], ["Dinge die Gläser haben", ["Fenster", "Handy", "Lampe", "Monokel"]], ["Enden mit Fortbewegungsmitteln", ["Anzug", "Cottbus", "Grad", "Heranwagen"]]], 
    [["News", ["Bericht", "Meldung", "Nachricht", "Report"]], ["Haben Seiten", ["Buch", "Form", "Internet", "Zeitung"]], ["Enthalten Batterien/Akku", ["Kamera", "Laptop", "Taschenlampe", "Wecker"]], ["Unternehmen ohne 'Deutsche'", ["Bahn", "Bank", "Post", "Telekom"]]], 
    [["Autobegriffe", ["Beschleunigung", "Drehmoment", "Hubraum", "Pferdestärke"]], ["In IT Terminologie verwendet", ["Bug", "Patch", "Software", "Update"]], ["Edelgase", ["Argon", "Neon", "Radon", "Xenon"]], ["Was mit V gemeint sein könnte", ["Fünf", "Geschwindigkeit", "Vanadium", "Version"]]], 
    [["Armut/Wohlstand einer Person beschreibend", ["Arm", "Betucht", "Illiquid", "Reich"]], ["Teile einer Hose", ["Bein", "Bund", "Saum", "Schritt"]], ["Deutsche Wörter, die auch so im Englischen verwendet werden", ["Angst", "Doppelgänger", "Kindergarten", "Poltergeist"]], ["_Schaft", ["Gemein", "Land", "Ort", "Wissen"]]], 
    [["Die da", ["Dame", "Frau", "Sie", "Weib"]], ["Käsearten", ["Frisch", "Hart", "Schaf", "Ziege"]], ["Homophone von Buchstaben", ["Er", "Kuh", "Tee", "Zeh"]], ["Haben Nägel", ["Finger", "Pflanze", "Rahmen", "Wand"]]], 
    [["Als Sicherheitsvorkehrung verwendet", ["Brille", "Handschuh", "Helm", "Maske"]], ["Teile eines Autos", ["Gurt", "Rad", "Scheibe", "Sitz"]], ["Hundebefehle", ["Aus", "Fuß", "Hier", "Pfote"]], ["Beginnend mit Personalpronomen", ["Duplikat", "Essen", "Sieb", "Wirt"]]], 
    [["Besoffen", ["Berauscht", "Blau", "Molum", "Voll"]], ["Teil Mensch, Teil Tier", ["Harpyie", "Mantikor", "Minotaur", "Zentaur"]], ["Häufig während chinesischem Neujahr gesehen", ["Drache", "Feuerwerk", "Laterne", "Rot"]], ["Teil von 'Keine Ahnung'-Redewendungen", ["Brett", "Holzweg", "Schlauch", "Wald"]]], 
    [["Lauchgewächse", ["Ailanthus", "Lauch", "Schalotte", "Zwiebel"]], ["Dinge auf die man 'schreiben' kann", ["Blatt", "Block", "Festplatte", "Tafel"]], ["'Hilft' gegen Vampire", ["Knoblauch", "Kreuz", "Silber", "Sonne"]], ["_Putzer", ["Fenster", "Klo", "Schuh", "Stiefel"]]], 
    [["Aus dt. Großstädten stämmige", ["Berliner", "Bremer", "Kölner", "Nürnberger"]], ["Typische 'Amerikanische' Essen, die nicht aus Amerika stammen", ["Bacon", "Hamburger", "Hot Dog", "Pommes"]], ["Schwimmarten", ["Kraul", "Rücken", "Schmetterling", "Seiten"]], ["_Korb", ["Brust", "Fahrrad", "Obst", "Papier"]]], 
    [["Farben des Regenbogens", ["Blau", "Grün", "Rot", "Violett"]], ["Eigenschaften der Sonne", ["Gelb", "Groß", "Heiß", "Hell"]], ["Dinge, die Zeiger haben können", ["Kompass", "Thermometer", "Uhr", "Waage"]], ["_Bank", ["Bier", "Fenster", "Park", "Samen"]]], 
    [["Schulfächer", ["Deutsch", "Geschichte", "Religion", "Sport"]], ["Dinge die man in der Kirche macht", ["Beten", "Glauben", "Singen", "Sitzen"]], ["Meinung", ["Annahme", "Auffassung", "Standpunkt", "Überzeugung"]], ["Endend mit geometrischen Körpern", ["Eiswürfel", "Erdkugel", "Sitzkreis", "Warnkegel"]]], 
    [["Kleidungsstücke, die oft aus Leder gemacht sind", ["Gürtel", "Handschuh", "Jacke", "Stiefel"]], ["Teile eines Liedes", ["Chorus", "Gesang", "Intro", "Strophe"]], ["Lieder, die den ESC gewannen", ["Fairytale", "Hallelujah", "Refrain", "Satellite"]], ["Namen dt. Städte", ["Oberhäslich", "Regenmantel", "Sargleben", "Schabernack"]]], 
    [["Ahhhh", ["Logisch", "Natürlich", "Offensichtlich", "Selbstverständlich"]], ["Mehlsorten", ["Kokos", "Reis", "Roggen", "Weizen"]], ["Oft aus Brasilien exportiert", ["Erdöl", "Kaffee", "Rindfleisch", "Soja"]], ["Kristall_", ["Glas", "Klar", "Schale", "Zucker"]]], 
    [["Teil eines Buchs", ["Ende", "Index", "Kapitel", "Titel"]], ["Auf einem Notenblatt zu sehen", ["Komponist", "Note", "Takt", "Tempo"]], ["Kennzahlen einer CPU", ["Cache", "Kernzahl", "Leistung", "Taktfrequenz"]], ["Sicherheits_", ["Abstand", "Brille", "Code", "Gurt"]]], 
    [["Beim Pokern zu Sehen", ["Chips", "Karte", "Matte", "Sonnenbrille"]], ["Typisch Italienisch", ["Ferrari", "Karneval", "Pasta", "Pizza"]], ["Berühmte Physiker des 19. Jahrhunderts", ["Ampère", "Faraday", "Fourier", "Joule"]], ["_Maschine", ["Bohr", "Eis", "Näh", "Turing"]]], 
    [["Gestreifte Tiere", ["Giraffe", "Hummel", "Tiger", "Zebra"]], ["Thematik", ["Bereich", "Gebiet", "Materie", "Thema"]], ["Machen einen Drachen aus", ["Feuer", "Flügel", "Schatz", "Schuppen"]], ["Enden mit Nominativen", ["Abenteuer", "Dasein", "Gemein", "Kodein"]]], 
    [["In Apollo 13 von Bedeutung", ["Astronaut", "Houston", "Mond", "Rakete"]], ["80er Serien", ["Alf", "Dallas", "Dynasty", "Magnum"]], ["'Verwendet' am Anfang von bestimmten Wochentagen", ["Dienst", "Frei", "Mitte", "Sonne"]], ["Teil von bekannten Backwaren", ["Berlin", "Biene", "Linz", "Schnecke"]]], 
    [["Was eine Kartoffel ist", ["Essbar", "Gelb", "Gesund", "Knolle"]], ["Parteinamen ohne letzten Buchstaben", ["Grün", "Link", "Parte", "Pirate"]], ["Machen einen Schlumpf aus", ["Blau", "Hose", "Klein", "Mütze"]], ["_TV", ["Apple", "Free", "M", "Magenta"]]], 
    [["Brettspiele", ["Dame", "Mühle", "Risiko", "Tabu"]], ["Bei Siedler von Catan zu sehen", ["Erz", "Getreide", "Holz", "Schaf"]], ["Auf Logos von Bundesliga-Teams zu sehen", ["Adler", "Bock", "Lilie", "Löwe"]], ["Beginnen mit Musikgenres", ["Funkuhr", "Metall", "Popel", "Raps"]]],
    [["Römische Zahlen", ["C", "D", "I", "V"]], ["Einheiten im metrischen System", ["G", "L", "M", "T"]], ["Chemische Elemente der 2.Periode", ["B", "F", "N", "O"]], ["Seltenste Buchstaben im Deutschen", ["J", "Q", "X", "Y"]]],
    [["Teile eines Autos", ["Gurt", "Motor", "Sitz", "Tank"]], ["Dinge die von oben kommen", ["Hagel", "Konfetti", "Regen", "Schnee"]], ["Auf Parties zu sehen", ["Clown", "Drink", "Hut", "Kuchen"]], ["Am Anfang von Edelgasen", ["Arg", "Krypto", "Neo", "Rad"]]], 
    [["Teile eines Hauses", ["Dach", "Fenster", "Raum", "Wand"]], ["Auf Toiletten zu finden", ["Becken", "Brille", "Bürste", "Seife"]], ["Haben einen Hals", ["Flasche", "Giraffe", "Mensch", "Wütende"]], ["Klein_", ["Kind", "Kram", "Reden", "Wagen"]]],  
    [["Behältnis", ["Karton", "Kiste", "Schachtel", "Verpackung"]], ["Bei der F1 zu sehen", ["Auto", "Box", "Reifen", "Strecke"]], ["Entfernung", ["Abstand", "Distanz", "Etappe", "Ferne"]], ["Beginnend mit Konjunktiven", ["Aberglaube", "Dabei", "Dennis", "Obacht"]]], 
    [["Einheiten", ["DB", "KG", "NM", "PA"]], ["Chemische Elemente die nach Wissenschaftlern benannt sind", ["ES", "FM", "MD", "NO"]], ["EU-Gründerstaaten", ["BE", "DE", "FR", "NL"]], ["Originaltitel von Filmen", ["IT", "ME", "PI", "UP"]]], 
    [["Einheiten", ["DB", "KG", "NM", "PA"]], ["Chemische Elemente die nach Wissenschaftlern benannt sind", ["ES", "FM", "MD", "NO"]], ["EU-Gründerstaaten", ["BE", "DE", "FR", "NL"]], ["Originaltitel von Filmen", ["IT", "ME", "PI", "UP"]]], 
    [["Einheiten", ["DB", "KG", "NM", "PA"]], ["Chemische Elemente die nach Wissenschaftlern benannt sind", ["ES", "FM", "MD", "NO"]], ["EU-Gründerstaaten", ["BE", "DE", "FR", "NL"]], ["Originaltitel von Filmen", ["IT", "ME", "PI", "UP"]]], 
    [["Einheiten", ["DB", "KG", "NM", "PA"]], ["Chemische Elemente die nach Wissenschaftlern benannt sind", ["ES", "FM", "MD", "NO"]], ["EU-Gründerstaaten", ["BE", "DE", "FR", "NL"]], ["Originaltitel von Filmen", ["IT", "ME", "PI", "UP"]]], 
    [["Einheiten", ["DB", "KG", "NM", "PA"]], ["Häufig bei Brettspielen zu sehen", ["Karte", "FM", "MD", "Würfel"]], ["EU-Gründerstaaten", ["BE", "DE", "FR", "NL"]], ["Originaltitel von Filmen", ["IT", "ME", "PI", "UP"]]], 
    [["Einheiten", ["DB", "KG", "NM", "PA"]], ["Chemische Elemente die nach Wissenschaftlern benannt sind", ["ES", "FM", "MD", "NO"]], ["EU-Gründerstaaten", ["BE", "DE", "FR", "NL"]], ["Originaltitel von Filmen", ["IT", "ME", "PI", "UP"]]], 
    [["Einheiten", ["DB", "KG", "NM", "PA"]], ["Chemische Elemente die nach Wissenschaftlern benannt sind", ["ES", "FM", "MD", "NO"]], ["EU-Gründerstaaten", ["BE", "DE", "FR", "NL"]], ["Originaltitel von Filmen", ["IT", "ME", "PI", "UP"]]], 
    [["Einheiten", ["DB", "KG", "NM", "PA"]], ["Chemische Elemente die nach Wissenschaftlern benannt sind", ["ES", "FM", "MD", "NO"]], ["EU-Gründerstaaten", ["BE", "DE", "FR", "NL"]], ["Originaltitel von Filmen", ["IT", "ME", "PI", "UP"]]], 
    [["Einheiten", ["DB", "KG", "NM", "PA"]], ["Chemische Elemente die nach Wissenschaftlern benannt sind", ["ES", "FM", "MD", "NO"]], ["EU-Gründerstaaten", ["BE", "DE", "FR", "NL"]], ["Originaltitel von Filmen", ["IT", "ME", "PI", "UP"]]], 
    [["Einheiten", ["DB", "KG", "NM", "PA"]], ["Chemische Elemente die nach Wissenschaftlern benannt sind", ["ES", "FM", "MD", "NO"]], ["EU-Gründerstaaten", ["BE", "DE", "FR", "NL"]], ["Originaltitel von Filmen", ["IT", "ME", "PI", "UP"]]], 
    [["Einheiten", ["DB", "KG", "NM", "PA"]], ["Chemische Elemente die nach Wissenschaftlern benannt sind", ["ES", "FM", "MD", "NO"]], ["EU-Gründerstaaten", ["BE", "DE", "FR", "NL"]], ["Originaltitel von Filmen", ["IT", "ME", "PI", "UP"]]], 
    [["Einheiten", ["DB", "KG", "NM", "PA"]], ["Chemische Elemente die nach Wissenschaftlern benannt sind", ["ES", "FM", "MD", "NO"]], ["EU-Gründerstaaten", ["BE", "DE", "FR", "NL"]], ["Originaltitel von Filmen", ["IT", "ME", "PI", "UP"]]], 
    [["Einheiten", ["DB", "KG", "NM", "PA"]], ["Chemische Elemente die nach Wissenschaftlern benannt sind", ["ES", "FM", "MD", "NO"]], ["EU-Gründerstaaten", ["BE", "DE", "FR", "NL"]], ["Originaltitel von Filmen", ["IT", "ME", "PI", "UP"]]], 
    [["Einheiten", ["DB", "KG", "NM", "PA"]], ["Chemische Elemente die nach Wissenschaftlern benannt sind", ["ES", "FM", "MD", "NO"]], ["EU-Gründerstaaten", ["BE", "DE", "FR", "NL"]], ["Originaltitel von Filmen", ["IT", "ME", "PI", "UP"]]], 
    [["Einheiten", ["DB", "KG", "NM", "PA"]], ["Chemische Elemente die nach Wissenschaftlern benannt sind", ["ES", "FM", "MD", "NO"]], ["EU-Gründerstaaten", ["BE", "DE", "FR", "NL"]], ["Originaltitel von Filmen", ["IT", "ME", "PI", "UP"]]], 
    [["Einheiten", ["DB", "KG", "NM", "PA"]], ["Chemische Elemente die nach Wissenschaftlern benannt sind", ["ES", "FM", "MD", "NO"]], ["EU-Gründerstaaten", ["BE", "DE", "FR", "NL"]], ["Originaltitel von Filmen", ["IT", "ME", "PI", "UP"]]], 
    [["Einheiten", ["DB", "KG", "NM", "PA"]], ["Chemische Elemente die nach Wissenschaftlern benannt sind", ["ES", "FM", "MD", "NO"]], ["EU-Gründerstaaten", ["BE", "DE", "FR", "NL"]], ["Originaltitel von Filmen", ["IT", "ME", "PI", "UP"]]], 
    [["Einheiten", ["DB", "KG", "NM", "PA"]], ["Chemische Elemente die nach Wissenschaftlern benannt sind", ["ES", "FM", "MD", "NO"]], ["EU-Gründerstaaten", ["BE", "DE", "FR", "NL"]], ["Originaltitel von Filmen", ["IT", "ME", "PI", "UP"]]], 
    [["Einheiten", ["DB", "KG", "NM", "PA"]], ["Chemische Elemente die nach Wissenschaftlern benannt sind", ["ES", "FM", "MD", "NO"]], ["EU-Gründerstaaten", ["BE", "DE", "FR", "NL"]], ["Originaltitel von Filmen", ["IT", "ME", "PI", "UP"]]], 
    [["Einheiten", ["DB", "KG", "NM", "PA"]], ["Chemische Elemente die nach Wissenschaftlern benannt sind", ["ES", "FM", "MD", "NO"]], ["EU-Gründerstaaten", ["BE", "DE", "FR", "NL"]], ["Originaltitel von Filmen", ["IT", "ME", "PI", "UP"]]], 
    [["Einheiten", ["DB", "KG", "NM", "PA"]], ["Chemische Elemente die nach Wissenschaftlern benannt sind", ["ES", "FM", "MD", "NO"]], ["EU-Gründerstaaten", ["BE", "DE", "FR", "NL"]], ["Originaltitel von Filmen", ["IT", "ME", "PI", "UP"]]], 
    [["Einheiten", ["DB", "KG", "NM", "PA"]], ["Chemische Elemente die nach Wissenschaftlern benannt sind", ["ES", "FM", "MD", "NO"]], ["EU-Gründerstaaten", ["BE", "DE", "FR", "NL"]], ["Originaltitel von Filmen", ["IT", "ME", "PI", "UP"]]], 
    [["Einheiten", ["DB", "KG", "NM", "PA"]], ["Chemische Elemente die nach Wissenschaftlern benannt sind", ["ES", "FM", "MD", "NO"]], ["EU-Gründerstaaten", ["BE", "DE", "FR", "NL"]], ["Originaltitel von Filmen", ["IT", "ME", "PI", "UP"]]], 
    [["Einheiten", ["DB", "KG", "NM", "PA"]], ["Chemische Elemente die nach Wissenschaftlern benannt sind", ["ES", "FM", "MD", "NO"]], ["EU-Gründerstaaten", ["BE", "DE", "FR", "NL"]], ["Originaltitel von Filmen", ["IT", "ME", "PI", "UP"]]], 
    [["Einheiten", ["DB", "KG", "NM", "PA"]], ["Chemische Elemente die nach Wissenschaftlern benannt sind", ["ES", "FM", "MD", "NO"]], ["EU-Gründerstaaten", ["BE", "DE", "FR", "NL"]], ["Originaltitel von Filmen", ["IT", "ME", "PI", "UP"]]], 
    [["Einheiten", ["DB", "KG", "NM", "PA"]], ["Chemische Elemente die nach Wissenschaftlern benannt sind", ["ES", "FM", "MD", "NO"]], ["EU-Gründerstaaten", ["BE", "DE", "FR", "NL"]], ["Originaltitel von Filmen", ["IT", "ME", "PI", "UP"]]], 
    [["Einheiten", ["DB", "KG", "NM", "PA"]], ["Chemische Elemente die nach Wissenschaftlern benannt sind", ["ES", "FM", "MD", "NO"]], ["EU-Gründerstaaten", ["BE", "DE", "FR", "NL"]], ["Originaltitel von Filmen", ["IT", "ME", "PI", "UP"]]], 
    [["Einheiten", ["DB", "KG", "NM", "PA"]], ["Chemische Elemente die nach Wissenschaftlern benannt sind", ["ES", "FM", "MD", "NO"]], ["EU-Gründerstaaten", ["BE", "DE", "FR", "NL"]], ["Originaltitel von Filmen", ["IT", "ME", "PI", "UP"]]], 
    [["Einheiten", ["DB", "KG", "NM", "PA"]], ["Chemische Elemente die nach Wissenschaftlern benannt sind", ["ES", "FM", "MD", "NO"]], ["EU-Gründerstaaten", ["BE", "DE", "FR", "NL"]], ["Originaltitel von Filmen", ["IT", "ME", "PI", "UP"]]], 
    [["Einheiten", ["DB", "KG", "NM", "PA"]], ["Chemische Elemente die nach Wissenschaftlern benannt sind", ["ES", "FM", "MD", "NO"]], ["EU-Gründerstaaten", ["BE", "DE", "FR", "NL"]], ["Originaltitel von Filmen", ["IT", "ME", "PI", "UP"]]], 
    [["Einheiten", ["DB", "KG", "NM", "PA"]], ["Chemische Elemente die nach Wissenschaftlern benannt sind", ["ES", "FM", "MD", "NO"]], ["EU-Gründerstaaten", ["BE", "DE", "FR", "NL"]], ["Originaltitel von Filmen", ["IT", "ME", "PI", "UP"]]], 
    [["Einheiten", ["DB", "KG", "NM", "PA"]], ["Chemische Elemente die nach Wissenschaftlern benannt sind", ["ES", "FM", "MD", "NO"]], ["EU-Gründerstaaten", ["BE", "DE", "FR", "NL"]], ["Originaltitel von Filmen", ["IT", "ME", "PI", "UP"]]], 
    [["Einheiten", ["DB", "KG", "NM", "PA"]], ["Chemische Elemente die nach Wissenschaftlern benannt sind", ["ES", "FM", "MD", "NO"]], ["EU-Gründerstaaten", ["BE", "DE", "FR", "NL"]], ["Originaltitel von Filmen", ["IT", "ME", "PI", "UP"]]], 
    [["Einheiten", ["DB", "KG", "NM", "PA"]], ["Chemische Elemente die nach Wissenschaftlern benannt sind", ["ES", "FM", "MD", "NO"]], ["EU-Gründerstaaten", ["BE", "DE", "FR", "NL"]], ["Originaltitel von Filmen", ["IT", "ME", "PI", "UP"]]], 
    [["Einheiten", ["DB", "KG", "NM", "PA"]], ["Chemische Elemente die nach Wissenschaftlern benannt sind", ["ES", "FM", "MD", "NO"]], ["EU-Gründerstaaten", ["BE", "DE", "FR", "NL"]], ["Originaltitel von Filmen", ["IT", "ME", "PI", "UP"]]], 
    [["Einheiten", ["DB", "KG", "NM", "PA"]], ["Chemische Elemente die nach Wissenschaftlern benannt sind", ["ES", "FM", "MD", "NO"]], ["EU-Gründerstaaten", ["BE", "DE", "FR", "NL"]], ["Originaltitel von Filmen", ["IT", "ME", "PI", "UP"]]], 
    [["Einheiten", ["DB", "KG", "NM", "PA"]], ["Chemische Elemente die nach Wissenschaftlern benannt sind", ["ES", "FM", "MD", "NO"]], ["EU-Gründerstaaten", ["BE", "DE", "FR", "NL"]], ["Originaltitel von Filmen", ["IT", "ME", "PI", "UP"]]], 
    [["Einheiten", ["DB", "KG", "NM", "PA"]], ["Chemische Elemente die nach Wissenschaftlern benannt sind", ["ES", "FM", "MD", "NO"]], ["EU-Gründerstaaten", ["BE", "DE", "FR", "NL"]], ["Originaltitel von Filmen", ["IT", "ME", "PI", "UP"]]], 
    [["Einheiten", ["DB", "KG", "NM", "PA"]], ["Chemische Elemente die nach Wissenschaftlern benannt sind", ["ES", "FM", "MD", "NO"]], ["EU-Gründerstaaten", ["BE", "DE", "FR", "NL"]], ["Originaltitel von Filmen", ["IT", "ME", "PI", "UP"]]], 
    [["Einheiten", ["DB", "KG", "NM", "PA"]], ["Chemische Elemente die nach Wissenschaftlern benannt sind", ["ES", "FM", "MD", "NO"]], ["EU-Gründerstaaten", ["BE", "DE", "FR", "NL"]], ["Originaltitel von Filmen", ["IT", "ME", "PI", "UP"]]], 
    [["Einheiten", ["DB", "KG", "NM", "PA"]], ["Chemische Elemente die nach Wissenschaftlern benannt sind", ["ES", "FM", "MD", "NO"]], ["EU-Gründerstaaten", ["BE", "DE", "FR", "NL"]], ["Originaltitel von Filmen", ["IT", "ME", "PI", "UP"]]], 
    [["Einheiten", ["DB", "KG", "NM", "PA"]], ["Chemische Elemente die nach Wissenschaftlern benannt sind", ["ES", "FM", "MD", "NO"]], ["EU-Gründerstaaten", ["BE", "DE", "FR", "NL"]], ["Originaltitel von Filmen", ["IT", "ME", "PI", "UP"]]], 
    [["Einheiten", ["DB", "KG", "NM", "PA"]], ["Chemische Elemente die nach Wissenschaftlern benannt sind", ["ES", "FM", "MD", "NO"]], ["EU-Gründerstaaten", ["BE", "DE", "FR", "NL"]], ["Originaltitel von Filmen", ["IT", "ME", "PI", "UP"]]], 
    [["Einheiten", ["DB", "KG", "NM", "PA"]], ["Chemische Elemente die nach Wissenschaftlern benannt sind", ["ES", "FM", "MD", "NO"]], ["EU-Gründerstaaten", ["BE", "DE", "FR", "NL"]], ["Originaltitel von Filmen", ["IT", "ME", "PI", "UP"]]], 
    [["Einheiten", ["DB", "KG", "NM", "PA"]], ["Chemische Elemente die nach Wissenschaftlern benannt sind", ["ES", "FM", "MD", "NO"]], ["EU-Gründerstaaten", ["BE", "DE", "FR", "NL"]], ["Originaltitel von Filmen", ["IT", "ME", "PI", "UP"]]], 
    [["Einheiten", ["DB", "KG", "NM", "PA"]], ["Chemische Elemente die nach Wissenschaftlern benannt sind", ["ES", "FM", "MD", "NO"]], ["EU-Gründerstaaten", ["BE", "DE", "FR", "NL"]], ["Originaltitel von Filmen", ["IT", "ME", "PI", "UP"]]], 
    [["Einheiten", ["DB", "KG", "NM", "PA"]], ["Chemische Elemente die nach Wissenschaftlern benannt sind", ["ES", "FM", "MD", "NO"]], ["EU-Gründerstaaten", ["BE", "DE", "FR", "NL"]], ["Originaltitel von Filmen", ["IT", "ME", "PI", "UP"]]], 
    [["Einheiten", ["DB", "KG", "NM", "PA"]], ["Chemische Elemente die nach Wissenschaftlern benannt sind", ["ES", "FM", "MD", "NO"]], ["EU-Gründerstaaten", ["BE", "DE", "FR", "NL"]], ["Originaltitel von Filmen", ["IT", "ME", "PI", "UP"]]], 
    [["Einheiten", ["DB", "KG", "NM", "PA"]], ["Chemische Elemente die nach Wissenschaftlern benannt sind", ["ES", "FM", "MD", "NO"]], ["EU-Gründerstaaten", ["BE", "DE", "FR", "NL"]], ["Originaltitel von Filmen", ["IT", "ME", "PI", "UP"]]], 
    [["Einheiten", ["DB", "KG", "NM", "PA"]], ["Chemische Elemente die nach Wissenschaftlern benannt sind", ["ES", "FM", "MD", "NO"]], ["EU-Gründerstaaten", ["BE", "DE", "FR", "NL"]], ["Originaltitel von Filmen", ["IT", "ME", "PI", "UP"]]], 
    [["Einheiten", ["DB", "KG", "NM", "PA"]], ["Chemische Elemente die nach Wissenschaftlern benannt sind", ["ES", "FM", "MD", "NO"]], ["EU-Gründerstaaten", ["BE", "DE", "FR", "NL"]], ["Originaltitel von Filmen", ["IT", "ME", "PI", "UP"]]], 
    [["Einheiten", ["DB", "KG", "NM", "PA"]], ["Chemische Elemente die nach Wissenschaftlern benannt sind", ["ES", "FM", "MD", "NO"]], ["EU-Gründerstaaten", ["BE", "DE", "FR", "NL"]], ["Originaltitel von Filmen", ["IT", "ME", "PI", "UP"]]], 
    [["Einheiten", ["DB", "KG", "NM", "PA"]], ["Chemische Elemente die nach Wissenschaftlern benannt sind", ["ES", "FM", "MD", "NO"]], ["EU-Gründerstaaten", ["BE", "DE", "FR", "NL"]], ["Originaltitel von Filmen", ["IT", "ME", "PI", "UP"]]], 
    [["Einheiten", ["DB", "KG", "NM", "PA"]], ["Chemische Elemente die nach Wissenschaftlern benannt sind", ["ES", "FM", "MD", "NO"]], ["EU-Gründerstaaten", ["BE", "DE", "FR", "NL"]], ["Originaltitel von Filmen", ["IT", "ME", "PI", "UP"]]], 
    [["Einheiten", ["DB", "KG", "NM", "PA"]], ["Chemische Elemente die nach Wissenschaftlern benannt sind", ["ES", "FM", "MD", "NO"]], ["EU-Gründerstaaten", ["BE", "DE", "FR", "NL"]], ["Originaltitel von Filmen", ["IT", "ME", "PI", "UP"]]], 
    [["Einheiten", ["DB", "KG", "NM", "PA"]], ["Chemische Elemente die nach Wissenschaftlern benannt sind", ["ES", "FM", "MD", "NO"]], ["EU-Gründerstaaten", ["BE", "DE", "FR", "NL"]], ["Originaltitel von Filmen", ["IT", "ME", "PI", "UP"]]], 
    [["Einheiten", ["DB", "KG", "NM", "PA"]], ["Chemische Elemente die nach Wissenschaftlern benannt sind", ["ES", "FM", "MD", "NO"]], ["EU-Gründerstaaten", ["BE", "DE", "FR", "NL"]], ["Originaltitel von Filmen", ["IT", "ME", "PI", "UP"]]], 
    [["Einheiten", ["DB", "KG", "NM", "PA"]], ["Chemische Elemente die nach Wissenschaftlern benannt sind", ["ES", "FM", "MD", "NO"]], ["EU-Gründerstaaten", ["BE", "DE", "FR", "NL"]], ["Originaltitel von Filmen", ["IT", "ME", "PI", "UP"]]], 
    [["Einheiten", ["DB", "KG", "NM", "PA"]], ["Chemische Elemente die nach Wissenschaftlern benannt sind", ["ES", "FM", "MD", "NO"]], ["EU-Gründerstaaten", ["BE", "DE", "FR", "NL"]], ["Originaltitel von Filmen", ["IT", "ME", "PI", "UP"]]], 
    [["Einheiten", ["DB", "KG", "NM", "PA"]], ["Chemische Elemente die nach Wissenschaftlern benannt sind", ["ES", "FM", "MD", "NO"]], ["EU-Gründerstaaten", ["BE", "DE", "FR", "NL"]], ["Originaltitel von Filmen", ["IT", "ME", "PI", "UP"]]], 
    [["Einheiten", ["DB", "KG", "NM", "PA"]], ["Chemische Elemente die nach Wissenschaftlern benannt sind", ["ES", "FM", "MD", "NO"]], ["EU-Gründerstaaten", ["BE", "DE", "FR", "NL"]], ["Originaltitel von Filmen", ["IT", "ME", "PI", "UP"]]], 
    [["Einheiten", ["DB", "KG", "NM", "PA"]], ["Chemische Elemente die nach Wissenschaftlern benannt sind", ["ES", "FM", "MD", "NO"]], ["EU-Gründerstaaten", ["BE", "DE", "FR", "NL"]], ["Originaltitel von Filmen", ["IT", "ME", "PI", "UP"]]], 
    [["Einheiten", ["DB", "KG", "NM", "PA"]], ["Chemische Elemente die nach Wissenschaftlern benannt sind", ["ES", "FM", "MD", "NO"]], ["EU-Gründerstaaten", ["BE", "DE", "FR", "NL"]], ["Originaltitel von Filmen", ["IT", "ME", "PI", "UP"]]], 
    [["Einheiten", ["DB", "KG", "NM", "PA"]], ["Chemische Elemente die nach Wissenschaftlern benannt sind", ["ES", "FM", "MD", "NO"]], ["EU-Gründerstaaten", ["BE", "DE", "FR", "NL"]], ["Originaltitel von Filmen", ["IT", "ME", "PI", "UP"]]], 
    [["Einheiten", ["DB", "KG", "NM", "PA"]], ["Chemische Elemente die nach Wissenschaftlern benannt sind", ["ES", "FM", "MD", "NO"]], ["EU-Gründerstaaten", ["BE", "DE", "FR", "NL"]], ["Originaltitel von Filmen", ["IT", "ME", "PI", "UP"]]], 
    [["Einheiten", ["DB", "KG", "NM", "PA"]], ["Chemische Elemente die nach Wissenschaftlern benannt sind", ["ES", "FM", "MD", "NO"]], ["EU-Gründerstaaten", ["BE", "DE", "FR", "NL"]], ["Originaltitel von Filmen", ["IT", "ME", "PI", "UP"]]], 
    [["Einheiten", ["DB", "KG", "NM", "PA"]], ["Chemische Elemente die nach Wissenschaftlern benannt sind", ["ES", "FM", "MD", "NO"]], ["EU-Gründerstaaten", ["BE", "DE", "FR", "NL"]], ["Originaltitel von Filmen", ["IT", "ME", "PI", "UP"]]], 
    [["Einheiten", ["DB", "KG", "NM", "PA"]], ["Chemische Elemente die nach Wissenschaftlern benannt sind", ["ES", "FM", "MD", "NO"]], ["EU-Gründerstaaten", ["BE", "DE", "FR", "NL"]], ["Originaltitel von Filmen", ["IT", "ME", "PI", "UP"]]], 
    [["Einheiten", ["DB", "KG", "NM", "PA"]], ["Chemische Elemente die nach Wissenschaftlern benannt sind", ["ES", "FM", "MD", "NO"]], ["EU-Gründerstaaten", ["BE", "DE", "FR", "NL"]], ["Originaltitel von Filmen", ["IT", "ME", "PI", "UP"]]], 
    [["Einheiten", ["DB", "KG", "NM", "PA"]], ["Chemische Elemente die nach Wissenschaftlern benannt sind", ["ES", "FM", "MD", "NO"]], ["EU-Gründerstaaten", ["BE", "DE", "FR", "NL"]], ["Originaltitel von Filmen", ["IT", "ME", "PI", "UP"]]], 
    [["Einheiten", ["DB", "KG", "NM", "PA"]], ["Chemische Elemente die nach Wissenschaftlern benannt sind", ["ES", "FM", "MD", "NO"]], ["EU-Gründerstaaten", ["BE", "DE", "FR", "NL"]], ["Originaltitel von Filmen", ["IT", "ME", "PI", "UP"]]], 
    [["Einheiten", ["DB", "KG", "NM", "PA"]], ["Chemische Elemente die nach Wissenschaftlern benannt sind", ["ES", "FM", "MD", "NO"]], ["EU-Gründerstaaten", ["BE", "DE", "FR", "NL"]], ["Originaltitel von Filmen", ["IT", "ME", "PI", "UP"]]], 
    [["Einheiten", ["DB", "KG", "NM", "PA"]], ["Chemische Elemente die nach Wissenschaftlern benannt sind", ["ES", "FM", "MD", "NO"]], ["EU-Gründerstaaten", ["BE", "DE", "FR", "NL"]], ["Originaltitel von Filmen", ["IT", "ME", "PI", "UP"]]], 
    [["Einheiten", ["DB", "KG", "NM", "PA"]], ["Chemische Elemente die nach Wissenschaftlern benannt sind", ["ES", "FM", "MD", "NO"]], ["EU-Gründerstaaten", ["BE", "DE", "FR", "NL"]], ["Originaltitel von Filmen", ["IT", "ME", "PI", "UP"]]], 
    [["Einheiten", ["DB", "KG", "NM", "PA"]], ["Chemische Elemente die nach Wissenschaftlern benannt sind", ["ES", "FM", "MD", "NO"]], ["EU-Gründerstaaten", ["BE", "DE", "FR", "NL"]], ["Originaltitel von Filmen", ["IT", "ME", "PI", "UP"]]]
    ];

    const startDate = new Date('4/11/2024');
    let currentDate = new Date();
    let diffTime = Math.abs(currentDate - startDate);
    let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    let categories = puzzles[diffDays];
    for (let i = 0; i < categories.length; i++) {
        for(let j=0; j < categories[i][1].length; j++) {
            categories[i][1][j] = categories[i][1][j].toUpperCase();
        }
    }
    let words = []; 
    words = categories.map(category => category[1]).flat(); 
    for (let i = 0; i < words.length; i++) {
        words[i] = "<b>" + words[i].toUpperCase() + "</b>";
    }
    let selectedWords = [];
    let tryNumber = 1;
    let triesArray = [];
    let solvedOrder = [];
    let isSolved = [false, false, false, false];
    let isSolvedNumber = 0;
    let attempts = [];
    let attemptsCategories = [];
    const emojis = [
        "\u{1F7E8}", "\u{1F7E9}", "\u{1F7E6}", "\u{1F7EA}" 
    ];

    let isActiveEnterButton = true;
    let isActiveShuffleButton = true;
    let isActiveShareButton = false;

    const isMobile = window.innerWidth <= 768; 

    function generateNewPuzzle() {
        let categories = puzzles[diffDays];
        for (let i = 0; i < categories.length; i++) {
            for(let j=0; j < categories[i][1].length; j++) {
                categories[i][1][j] = categories[i][1][j].toUpperCase();
            }
        }
        let words = []; 
        words = categories.map(category => category[1]).flat();
        for (let i = 0; i < words.length; i++) {
            words[i] = "<b>" + words[i].toUpperCase() + "</b>";
        }
    }

    function shuffleTiles() { 
        let currentIndex = words.length;
        while(currentIndex != 0) {
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex --;

            [words[currentIndex], words[randomIndex]] =
            [words[randomIndex], words[currentIndex]];
        }
        selectedWords = [];
    }

    function createGrid(rows, cols) {
        const shareBtn = document.getElementById('shareButton');
        const enterBtn = document.getElementById('enterButton');
        const shuffleBtn = document.getElementById('shuffleButton');
        if(!isActiveShareButton) {
            makeButtonInvisible(shareBtn);
        }
        else {
            makeButtonVisible(shareBtn);
        }
        if(!isActiveEnterButton) {
            makeButtonInvisible(enterBtn);
            makeButtonInvisible(shuffleBtn);
        }
        else {
            makeButtonVisible(enterBtn);
            makeButtonVisible(shuffleBtn);
        }
        const gridContainer = document.getElementById('gridContainer');
        gridContainer.innerHTML = '';
        let n = 0;
        words = categories.map(category => category[1]).flat(); 
        for (let i = 0; i < words.length; i++) {
            words[i] = "<b>" + words[i].toUpperCase() + "</b>";
        }
        shuffleTiles();
        for(let n=0;n<4;n++) {
            if(isSolved[n] == true) {
                for(let i=0;i<4;i++) {
                    var index = words.indexOf("<b>" + categories[n][1][i] + "</b>");
                    words.splice(index, 1);
                }
            }
        }
        if(isMobile) {
            const cont1 = document.getElementById('container1');
            const cont2 = document.getElementById('container2');
            cont1.style.margin = "0 auto";
            cont2.style.margin = "0 auto";
            cont1.style.top = "20%";
        }
        for(let i=0; i<rows; i++) {
            for(let j=0; j<cols; j++) {
                const gridItem = document.createElement('div');
                gridItem.classList.add('grid-item');
                const text = words[n];
                gridItem.innerHTML = words[n++];
                const fontSize = calculateFontSize(text);
                gridItem.style.fontSize = fontSize;
                if(isMobile) {
                    gridItem.style.height = "50px";
                }
                gridItem.addEventListener('click', function() {
                    if(this.style.backgroundColor == "dimgray") {
                        this.style.backgroundColor = "white";
                        this.style.color = "black";
                        var index = selectedWords.indexOf(this.textContent);
                        selectedWords.splice(index, 1);
                    }
                    else {
                        if(selectedWords.length<4) {
                            this.style.backgroundColor = "dimgray";
                            this.style.color = "white";
                            selectedWords.push(this.textContent);
                        }
                    }
                });
                gridContainer.appendChild(gridItem);
            }
        }
    }

    function calculateFontSize(text) {
        const baseFontSizeDesktop = 4; 
        const minFontSizeDesktop = 0.2; 
        const maxFontSizeDesktop = 80; 
        const lengthFactorDesktop = 0.1; 
    
        const baseFontSizeMobile = 6.5; 
        const minFontSizeMobile = 1.4;
        const maxFontSizeMobile = 40;
        const lengthFactorMobile = 0.23; 
    
        const baseFontSize = isMobile ? baseFontSizeMobile : baseFontSizeDesktop;
        const minFontSize = isMobile ? minFontSizeMobile : minFontSizeDesktop;
        const maxFontSize = isMobile ? maxFontSizeMobile : maxFontSizeDesktop;
        const lengthFactor = isMobile ? lengthFactorMobile : lengthFactorDesktop;
    
        const fontSize = baseFontSize - (text.length * lengthFactor);
    
        return Math.max(minFontSize, Math.min(maxFontSize, fontSize)) + 'vw';
    }

    function shuffleButton() {
        if(isActiveShuffleButton) createGrid(4-isSolvedNumber,4);
    }

    function isEqualArray(arr1, arr2) {
        const sortedArr1 = arr1.slice().sort();
        const sortedArr2 = arr2.slice().sort();

        for (let i = 0; i < sortedArr1.length; i++) {
            if (sortedArr1[i] !== sortedArr2[i]) {
                return false;
            }
        }
        return true;
    }

    function isInCategories(arr) {
        for (let i = 0; i < categories.length; i++) {
            if (isEqualArray(categories[i][1], arr)) {
                return i;
            }
        }
        return -1;
    }

    function closenessChecker(number, tries) {
        switch(number) {
            case 1:
                tries.style.backgroundColor = "paleTurquoise";
                tries.innerHTML += " <br>(SEHR KALT)"
                break;
            case 2:
                tries.style.backgroundColor = "paleGreen";
                tries.innerHTML += " <br>(LAUWARM)"
                break;
            case 3:
                tries.style.backgroundColor = "lightSalmon";
                tries.innerHTML += " <br>(HEIß)"
                break;
        }
    }

    function checkHowMany(inputWords) {
        let howMany = [0, 0, 0, 0];
        for(let i=0;i<4;i++) {
            let word = inputWords[i];
            for(let j=0;j<4;j++) {
                if(categories[j][1].includes(word)) {
                    howMany[j] = howMany[j] + 1;
                    break;
                }
            }
        }
        return Math.max(...howMany);
    }

    function checkWhichCategories(inputWords) {
        let checkCat = [];
        for(let i=0;i<4;i++) {
            let word = inputWords[i];
            for(let j=0;j<4;j++) {
                if(categories[j][1].includes(word)) {
                    checkCat[i] = j;
                    break;
                }
            }
        }
        return checkCat;
    }

    function delay(milliseconds){
        return new Promise(resolve => {
            setTimeout(resolve, milliseconds);
        });
    }

    async function solved(category) {
        const solve = document.createElement('div');
        solve.classList.add('solve');
        switch (category) {
            case 0:
                solve.style.backgroundColor = "#FFFF44";
                break;
            case 1:
                solve.style.backgroundColor = "#88FF88";
                break;
            case 2:
                solve.style.backgroundColor = "lightSkyBlue";
                break;
            case 3:
                solve.style.backgroundColor = "plum";
                break;
        }
        solve.innerHTML = "<b>" + categories[category][0].toUpperCase() + "</b>" + "<br>" + categories[category][1].join(', ');
        isSolved[category] = true;
        solvedOrder.push(category);
        isSolvedNumber+=1;
        createGrid(4-isSolvedNumber,4);
        solvedContainer.appendChild(solve);
        if(isSolvedNumber == 4) {
            const enterButton = document.getElementById('enterButton');
            makeButtonInvisible(enterButton);
            isActiveEnterButton = false;
            const shuffleButton = document.getElementById('shuffleButton');
            makeButtonInvisible(shuffleButton);
            isActiveShuffleButton = false;
            const shareBtn = document.getElementById('shareButton');
            makeButtonVisible(shareBtn);
            isActiveShareButton = true;
            const gridCont = document.getElementById('gridContainer');
            gridCont.style.padding = "0px";
        }
        saveProgress();
    }

    function makeButtonInvisible(buttonName) {
        buttonName.style.display = "none";
    }

    function makeButtonVisible(buttonName) {
        buttonName.style.display = "inline-block";
    }

    async function enterButton() {
        if(isActiveEnterButton) {
            let check = isInCategories(selectedWords);
            if(check != -1) {
                solved(check);
                attemptsCategories.push([check, check, check, check]);
                saveProgress();
            }
            else {
                let tryX = selectedWords.slice().sort();
                if(selectedWords.length == 4) {
                    if(triesArray.length == 0) {
                        const tries = document.createElement('div');
                        tries.classList.add('try');
                        if(isMobile) {
                            let attString = tryX[0] + ", " + tryX[1] + ",<br>" + tryX[2] + ", " + tryX[3];
                            tries.innerHTML = "FEHLVERSUCH " + tryNumber + ": " + "<br>" + attString;
                        }
                        else {
                            tries.innerHTML = "FEHLVERSUCH " + tryNumber + ": " + "<br>" + tryX.join(', ');
                        }
                        attempts.push(tryX);
                        attemptsCategories.push(checkWhichCategories(selectedWords))
                        tryNumber += 1;
                        let howMany = checkHowMany(selectedWords);
                        closenessChecker(howMany, tries);
                        triesContainer.appendChild(tries);
                        triesArray.push(tryX);
                    }
                    else {
                        let x = false;
                        for (let i = 0; i < triesArray.length; i++) {
                            if (isEqualArray(triesArray[i], tryX)) {
                                x = true;
                                break;
                            }
                        }
                        if(x == false) {
                            const tries = document.createElement('div');
                            tries.classList.add('try');
                            let howMany = checkHowMany(selectedWords);
                            if(isMobile) {
                                let attString = tryX[0] + ", " + tryX[1] + ",<br>" + tryX[2] + ", " + tryX[3];
                                tries.innerHTML = "FEHLVERSUCH " + tryNumber + ": " + "<br>" + attString;
                            }
                            else {
                                tries.innerHTML = "FEHLVERSUCH " + tryNumber + ": " + "<br>" + tryX.join(', ');
                            }
                            attempts.push(tryX);
                            attemptsCategories.push(checkWhichCategories(selectedWords))
                            tryNumber += 1;
                            closenessChecker(howMany, tries);
                            triesContainer.appendChild(tries);
                            triesArray.push(tryX);
                            if(tryNumber >= 5) {
                                for(let y=0;y<4;y++) {
                                    while(isSolved[y] == true && y<4) {
                                        y++;
                                    }
                                    if(y<4)  {
                                        await delay(1000);
                                        solved(y);
                                    }
                                    else {
                                        break;
                                    }
                                }
                                const shareBtn = document.getElementById('shareButton');
                                makeButtonVisible(shareBtn);
                                isActiveShareButton = true;
                            }
                        }
                    }
                }
                saveProgress();
                return false;
            }
        }
        saveProgress();
    }

    function shareButton() {
        if(isActiveShareButton) {
            let puzzleNumber = diffDays + 2;
            let shareText = "Connections-DE \n" + "Puzzle #" + puzzleNumber + "\n \n";
            for(let x=0;x<attemptsCategories.length;x++) {
                let attempt = "";
                for(let y=0;y<4;y++) {
                    attempt += emojis[attemptsCategories[x][y]];
                }
                shareText = shareText + attempt + "\n";
            }
            const whatsappUrl = `whatsapp://send?text=${encodeURIComponent(shareText)}`;
            window.location.href = whatsappUrl;
        }
    }

    function displaySolvedCategories() {
        const solvedContainer = document.getElementById('solvedContainer');
        solvedContainer.innerHTML = '';
        for (let i = 0; i < solvedOrder.length; i++) {
            let cat = solvedOrder[i];
            const solve = document.createElement('div');
            solve.classList.add('solve');
            switch (cat) {
                case 0:
                    solve.style.backgroundColor = "#FFFF44";
                    break;
                case 1:
                    solve.style.backgroundColor = "#88FF88";
                    break;
                case 2:
                    solve.style.backgroundColor = "lightSkyBlue";
                    break;
                case 3:
                    solve.style.backgroundColor = "plum";
                    break;
            }
            solve.innerHTML = "<b>" + categories[cat][0].toUpperCase() + "</b>" + "<br>" + categories[cat][1].join(', ');
            solvedContainer.appendChild(solve);
        }
    }

    function displayTries() {
        const triesContainer = document.getElementById('triesContainer');
        triesContainer.innerHTML = ''; 
        let displayTryNumber = 1; 
        for (let i = 0; i < attempts.length; i++) {
            const tries = document.createElement('div');
            tries.classList.add('try');
            if(isMobile) {
                let attString = attempts[i][0] + ", " + attempts[i][1] + ",<br>" + attempts[i][2] + ", " + attempts[i][3];
                tries.innerHTML = "FEHLVERSUCH " + (displayTryNumber++) + ": " + "<br>" + attString;
            }
            else {
                tries.innerHTML = "FEHLVERSUCH " + (displayTryNumber++) + ": " + "<br>" + attempts[i].join(', ');
            }
            closenessChecker(checkHowMany(attempts[i]), tries); 
            triesContainer.appendChild(tries);
        }
    }
    
    function saveProgress() {
        const progress = {
            currDate: currentDate,
            attempts: attempts,
            attemptsCategories,
            isSolved: isSolved,
            isSolvedNumber: isSolvedNumber,
            solvedOrder: solvedOrder,
            tryNumber : tryNumber,
            triesArray : triesArray,
            isActiveEnterButton : isActiveEnterButton,
            isActiveShareButton : isActiveShareButton,
            isActiveShuffleButton : isActiveShuffleButton
        };
        localStorage.setItem('connectionsProgress', JSON.stringify(progress));
    }

    function loadProgress() {
        const savedProgress = localStorage.getItem('connectionsProgress');
        if (savedProgress) {
            const progress = JSON.parse(savedProgress);
            attempts = progress.attempts;
            attemptsCategories = progress.attemptsCategories;
            isSolved = progress.isSolved;
            isSolvedNumber = progress.isSolvedNumber;
            solvedOrder = progress.solvedOrder;
            tryNumber = progress.tryNumber;
            triesArray = progress.triesArray || [];
            isActiveEnterButton = progress.isActiveEnterButton;
            isActiveShareButton = progress.isActiveShareButton;
            isActiveShuffleButton = progress.isActiveShuffleButton;
        }
        else {
            generateNewPuzzle();
        }
    }

    function checkAndResetProgress() {
        const savedDateStr = localStorage.getItem('connectionsDate');
        const savedDate = new Date(savedDateStr);
        const currentDateWithoutTime = new Date(currentDate);
        currentDateWithoutTime.setHours(0, 0, 0, 0); 
        if (!savedDate || savedDate.getTime() !== currentDateWithoutTime.getTime()) {
            localStorage.setItem('connectionsDate', currentDateWithoutTime.toDateString());
            localStorage.removeItem('connectionsProgress');
            location.reload(); 
        }
    }

    checkAndResetProgress();
    loadProgress();
    displaySolvedCategories();
    displayTries();

    window.shuffleButton = shuffleButton;
    window.enterButton = enterButton;
    window.shareButton = shareButton;

    createGrid(4-isSolvedNumber, 4);
});
