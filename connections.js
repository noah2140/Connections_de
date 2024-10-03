document.addEventListener('DOMContentLoaded', function() {

    // List of puzzles - most are currently placeholders
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
    [["Afrikanische Tiere", ["Büffel", "Elefant", "Flusspferd", "Giraffe"]], ["In  Schulen zu finden", ["Kreide", "Lehrer", "Rucksack", "Turnhalle"]], ["Kreative Werke", ["Bild", "Buch", "Gedicht", "Lied"]], ["Schokoladen_", ["Brunnen", "Hase", "Riegel", "Tafel"]]], 
    [["Erfindungen des 19. Jahrhunderts", ["Dampflokomotive", "Fotografie", "Glühlampe", "Telefon"]], ["Bei Wahlen zu sehen", ["Kandidat", "Kreuz", "Plakat", "Urne"]], ["Auf Fußballfeld zu sehen", ["Kreis", "Linie", "Punkt", "Tor"]], ["Wörter deren Mehrzahl durch -ta erzeugt wird", ["Komma", "Schema", "Stigma", "Trauma"]]], 
    [["Gespräch", ["Austausch", "Debatte", "Kolloquium", "Unterhaltung"]], ["Schmuck", ["Brosche", "Kette", "Krone", "Reif"]], ["Von Boxern häufig verwendet", ["Handschuh", "Mundschutz", "Ring", "Sack"]], ["1, 2, 3, 4 Präfixe", ["Dialog", "Monopol", "Tetraeder", "Trilogie"]]], 
    [["Geschickt", ["Elegant", "Flink", "Gewandt", "Schlau"]], ["Nach Physikern benannte Einheiten", ["Ampère", "Hertz", "Joule", "Volt"]], ["Katzennahe Begriffe", ["Baum", "Pfote", "Schrödinger", "Vibrisse"]], ["Enden mit Körperteilen", ["Bohr", "Dortmund", "Lauge", "Warm"]]], 
    [["Licht", ["Glanz", "Schein", "Schimmer", "Strahl"]], ["Bei Brettspielen zu sehen", ["Anleitung", "Karte", "Sanduhr", "Würfel"]], ["Werden häufig gesammelt", ["Autogramm", "Briefmarke", "Münze", "Schallplatte"]], ["_Raum", ["Innen", "Motor", "Tresor", "Welt"]]], 
    [["Bezeichnung", ["Ausdruck", "Begriff", "Expression", "Vokabel"]], ["Abweichung", ["Ausnahme", "Irregularität", "Modifikation", "Umweg"]], ["Korrekturzeichen im Deutsch-Unterricht", ["Grammatik", "Inhalt", "Rechtschreibung", "Zeichensetzung"]], ["Enthalten Grundrechenarten", ["Anomalie", "Aufplustern", "Terminus", "Zweigeteilt"]]], 
    [["Öffnung", ["Einlass", "Pforte", "Portal", "Tür"]], ["Zum Reinigen verwendet", ["Mopp", "Staubsauger", "Tuch", "Wedel"]], ["Beim Icehockey gesehen", ["Bande", "Puck", "Schläger", "Tor"]], ["Schnee_", ["Ball", "Besen", "Fall", "Weiß"]]], 
    [["Durch Riechen wahrgenommen", ["Aroma", "Duft", "Geruch", "Gestank"]], ["Halt die/den _", ["Gosche", "Klappe", "Schnabel", "Schnauze"]], ["In Stadionzuschauerrängen zu finden", ["Fahne", "Megafon", "Schal", "Trikot"]], ["Am Ende dt. Großtädte zu finden", ["Berg", "Burg", "Dorf", "Mund"]]], 
    [["Bekleidung", ["Dress", "Hülle", "Kleider", "Tracht"]], ["Haben Tasten", ["Aufzug", "Fernbedienung", "Handy", "Klavier"]], ["Was mit Anordnung gemeint sein kann", ["Befehl", "Formation", "Order", "Zusammenstellung"]], ["Haben Augen", ["Gesicht", "Nadel", "Tornado", "Würfel"]]], 
    [["Krankheiten", ["Cholera", "Herpes", "Krebs", "Polio"]], ["Zum Messen verwendet", ["Lineal", "Sonde", "Uhr", "Waage"]], ["Bei Kurvendiskussionen gesehen", ["Ableitung", "Monotonie", "Symmetrie", "Wendepunkt"]], ["Mond_", ["Fisch", "Landung", "Phase", "Schein"]]], 
    [["Nachleben", ["Fegefeuer", "Jenseits", "Paradies", "Valhalla"]], ["Blautöne", ["Eis", "Himmel", "Ozean", "Stahl"]], ["Beim Stabhochsprung zu sehen", ["Anlauf", "Matte", "Stab", "Stange"]], ["Bus_", ["Fahrt", "Geld", "Linie", "Station"]]], 
    [["Tierkreiszeichen", ["Löwe", "Stier", "Waage", "Widder"]], ["Verlangen", ["Bock", "Hunger", "Laune", "Lust"]], ["Tiere mit 8 Beinen/Fühlern", ["Oktopus", "Skorpion", "Spinne", "Zecke"]], ["Anagramme", ["Liste", "Steil", "Stiel", "Teils"]]], 
    [["Währungen", ["Krone", "Mark", "Pfund", "Real"]], ["Typisch Japanisch", ["Karaoke", "Manga", "Ramen", "Sushi"]], ["In Kirchen zu sehen", ["Altar", "Bank", "Kreuz", "Orgel"]], ["_Bild", ["Blut", "Feind", "Licht", "Stern"]]], 
    [["Komponenten in Verbrennungsmotoren", ["Kolben", "Kühler", "Ventil", "Zündkerze"]], ["Wegerichgewächse", ["Bartfaden", "Fettblatt", "Löwenmaul", "Schildblume"]], ["Monopoly Spielfiguren", ["Fingerhut", "Schiff", "Schubkarre", "Zylinder"]], ["Am Anfang von politischen Führungskräften zu finden", ["Diktat", "Für", "Kai", "Kanz"]]], 
    [["Beuteltiere", ["Känguru", "Koala", "Opossum", "Wombat"]], ["Zur Orientierung verwendet", ["Karte", "Kompass", "Sonne", "Sternbild"]], ["Sternbilder", ["Hase", "Herkules", "Phönix", "Wassermann"]], ["Homophone dt. Städte", ["Kiel", "Lage", "Meins", "Zelle"]]],  
    [["Abteilungen im Supermarkt", ["Fisch", "Fleisch", "Getränke", "Wurst"]], ["Typische Eigenschaften/Bestandteile von Pokermatten", ["Aufrollbar", "Flach", "Grün", "Gummi"]], ["Mondphasen", ["Halb", "Neu", "Sichel", "Voll"]], ["_Bären/Beeren", ["Braun", "Brom", "Eis", "Holunder"]]],
    [["Weibliche Tiere", ["Aue", "Geiß", "Henne", "Sau"]], ["Zum Erreichen eines Ziels", ["Instrument", "Methode", "Mittel", "Werkzeug"]], ["Kann man sich rein versenken", ["Arbeit", "Buch", "Gespräch", "Meditation"]], ["_Gut", ["Export", "Gedanken", "Leer", "Sehr"]]], 
    [["Abgrenzung", ["Mauer", "Rand", "Wall", "Wand"]], ["Teile einer Geige", ["Decke", "Schnecke", "Steg", "Wirbel"]], ["Am Anfang großer deutscher Seen", ["Boden", "Eder", "König", "Wann"]], ["_ - _", ["Bla", "Brumm", "Piep", "Tom"]]], 
    [["Bereich", ["Gebiet", "Sphäre", "Thema", "Zone"]], ["Eigenschaften von Eis", ["Farblos", "Glatt", "Hart", "Kalt"]], ["Überlegenheit", ["Führung", "Oberwasser", "Vorsprung", "Vorteil"]], ["Wasser_", ["Fall", "Leitung", "Melone", "Stoff"]]], 
    [["In Küchen zum Messen verwendet", ["Becher", "Löffel", "Thermometer", "Waage"]], ["Teil von Medikamenten", ["Blister", "Packung", "Tablette", "Zettel"]], ["Haben Stufen", ["Alter", "Gehalt", "Sprache", "Treppe"]], ["Ober_", ["Begriff", "Körper", "Stufe", "Wasser"]]], 
    [["Toll", ["Exzellent", "Prima", "Phänomenal", "Super"]], ["Arche Noah - nahe Begriffe", ["Boot", "Flut", "Noah", "Tier"]], ["Palindrome", ["Ebbe", "Ehe", "Hannah", "Rentner"]], ["Anagramme von Monaten", ["Mia", "Pilar", "Saugut", "Urfarbe"]]], 
    [["Präsentation", ["Deklamation", "Demonstration", "Inszenierung", "Vortrag"]], ["Homophone von Tieren", ["Hi", "Lax", "Lux", "Wahl"]], ["Gesetzes-nahe Begriffe", ["Artikel", "Entschluss", "Paragraph", "Verfassung"]], ["_skraft", ["Anzug", "Arbeit", "Leben", "Vorstellung"]]], 
    [["Heute Abend zu sehen", ["Adler", "Ball", "Stadion", "Trikot"]], ["Gehört zur Ausrüstung eines Schiedsrichters", ["Karte", "Notizblock", "Pfeife", "Stift"]], ["Auf vielerlei Flaggen zu sehen", ["Kreuz", "Stern", "Streifen", "Tier"]], ["Stadion_", ["Atmosphäre", "Loge", "Rang", "Sprecher"]]], 
    [["Teile eines Schiffs", ["Brücke", "Deck", "Kiel", "Rumpf"]], ["Hilfsgeräte", ["Brille", "Gehstock", "Prothese", "Rollstuhl"]], ["_Frequenz", ["Kanal", "Radio", "Takt", "Ton"]], ["Wörter mit 2 Umlauten", ["Hörgerät", "Müllbehälter", "Ölgemälde", "Rückwärts"]]], 
    [["Hinterhalte", ["Fallen", "Gruben", "Schlingen", "Stricke"]], ["Was Pflanzen machen", ["Blühen", "Ranken", "Sprossen", "Wachsen"]], ["Müll_", ["Halde", "Mann", "Sack", "Tonne"]], ["Deutsche Bedeutung bekannter Schokoriegel", ["Aufheben", "Knabbern", "Kopfgeld", "Milchstraße"]]], 
    [["Kann man hoch-/runtergehen", ["Leiter", "Rampe", "Stufe", "Treppe"]], ["In Stadien zu sehen", ["Platz", "Rang", "Rasen", "Tafel"]], ["Knöpfe im Aufzug", ["Alarm", "Etage", "Öffnen", "Schließen"]], ["_Turm", ["Eiffel", "Funk", "Glocken", "Wach"]]], 
    [["Weise", ["Art", "Kaliber", "Stil", "Typ"]], ["Außen an Autos", ["Griff", "Haube", "Kennzeichen", "Rad"]], ["Können Patronen enthalten", ["Drucker", "Füller", "Kaffeemaschine", "Magazin"]], ["Enthalten Fortbewgungsmittel", ["Abzug", "Autor", "Bambus", "Brüskieren"]]], 
    [["Ist gesund", ["Gemüse", "Obst", "Schlaf", "Sport"]], ["Zum Fangen von Fischen verwendet", ["Angel", "Netz", "Reuse", "Speer"]], ["Beim Golf zu sehen", ["Ball", "Grün", "Loch", "Schläger"]], ["Obst_", ["Baum", "Garten", "Plantage", "Stand"]]], 
    [["Sakramente im Christentum", ["Beichte", "Firmung", "Salbung", "Taufe"]], ["Bei Olympia zu sehen", ["Feuer", "Medaille", "Podest", "Wettkampf"]], ["_Frau/Mann", ["Ehe", "Fach", "Haus", "Traum"]], ["Akkusative am Anfang", ["Dichtung", "Eucharistie", "Sieb", "Unsinn"]]], 
    [["Zack Zack!", ["Los", "Schnell", "Tempo", "Vorwärts"]], ["Teil von wiss. Arbeiten", ["Index", "Quelle", "Titel", "Überschrift"]], ["Mittelpunkt", ["Nabel", "Pol", "Puls", "Zentrum"]], ["_Feuer", ["Kreuz", "Lager", "Signal", "Wald"]]], 
    [["Auf vielerlei Karnevalsveranstaltungen zu finden", ["Bier", "Bühne", "Kostüm", "Rede"]], ["Haben Löcher", ["Donut", "Golfplatz", "Käse", "Schwamm"]], ["Auf Sperrbildschirmen zu sehen", ["Datum", "Hintergrund", "Uhrzeit", "Wochentag"]], ["Mutter_", ["Mal", "Milch", "Sprache", "Tag"]]], 
    [["Beleidigungen", ["Flasche", "Lappen", "Lauch", "Pfeife"]], ["Saugen Dinge auf", ["Reis", "Schwamm", "Staubsauger", "Windel"]], ["Filmtitel ohne Zahlen", ["Apollo", "Dalmatiner", "Stunden", "Tage"]], ["Teil bekannter deutscher Memes", ["Alarm", "Habicht", "Migrations-hintergrund", "Stroh"]]], 
    [["Gattung", ["Familie", "Genre", "Gruppe", "Klasse"]], ["Werden häufig verliehen", ["Abzeichen", "Buch", "Medaille", "Preis"]], ["In Harry-Potter Titeln", ["Kammer", "Kelch", "Orden", "Stein"]], ["Bestehend aus 2 Länderabkürzungen", ["Alge", "Etat", "Kram", "Robe"]]], 
    [["Drehen sich", ["Karussell", "Planet", "Rad", "Ventilator"]], ["Können vor viele Verben gesetzt werden", ["Ab", "An", "Auf", "Um"]], ["Auf Monopoly-Feldern zu sehen", ["Bahnhof", "Gefängnis", "Los", "Straße"]], ["In Namen von Bundesländern", ["Berg", "Halt", "Rhein", "Stein"]]], 
    [["Absicht", ["Entwurf", "Idee", "Konzept", "Plan"]], ["Kann man Lesen", ["Buch", "Gedanken", "Mimik", "Zeitung"]], ["In Namen von bekannten Brett-/Kartenspielen", ["Mau", "Monopol", "Phase", "Sonne"]], ["Namen von Oscar-Hauptdarsteller-Gewinnern", ["Douglas", "Guinness", "Peck", "Schell"]]], 
    [["Aus A, B, E, G, L gebildet", ["Bagel", "Beagle", "Belag", "Gabel"]], ["Jemandem hinterher_n", ["Dackel", "Laufe", "Trauer", "Werfe"]], ["_Wohl", ["Allgemein", "Ja", "Pudel", "So"]], ["Können (auf-/be-/ver-)schlagen", ["Boxer", "Brille", "Sprache", "Tennisspieler"]]], 
    [["Einfall", ["Erleuchtung", "Idee", "Impuls", "Intuition"]], ["An Flughäfen zu sehen", ["Flugzeug", "Koffer", "Kontrolle", "Tafel"]], ["Enthalten Ton", ["Bleistift", "Gesichtsmaske", "Topf", "Ziegel"]], ["Enthalten Namen von Wetterphänomena", ["Anregend", "Dortorkandidat", "Geistesblitz", "Schlossturm"]]], 
    [["Vor Allem für Ü60/70 Menschen verwendet", ["Alt", "Pensionär", "Plegebedürftig", "Rentner"]], ["Klassiche Catan-Spielfiguren", ["Räuber", "Ritter", "Stadt", "Straße"]], ["_Romantik", ["Dorf", "Früh", "Neu", "Spät"]], ["Wörtliche Übersetzung von Arztserien", ["Haus", "Herzschlag", "Kittel", "Notaufnahme"]]], 
    [["Vage Häufigkeitsangabe", ["Gelegentlich", "Häufig", "Manchmal", "Oft"]], ["Kreative Berufe", ["Autor", "Designer", "Maler", "Schauspieler"]], ["Am Ende deutscher Castingshows zu finden", ["Germany", "Model", "Star", "Talent"]], ["Enhtalten Ländernamen", ["Begabung", "Einmalig", "Inkubator", "Piranha"]]], 
    [["Kann man Dinge drin waschen", ["Becken", "Dusche", "Spüle", "Wanne"]], ["Aus dem Französischem stammende Wörter", ["Buffet", "Genre", "Restaurant", "Toilette"]], ["Lager_", ["Bier", "Feuer", "Halle", "Raum"]], ["Beginnen mit W-Wörtern", ["Waschen", "Werben", "Wieder", "Woche"]]], 
    [["Riese", ["Baum", "Hüne", "Koloss", "Titan"]], ["Staatstypen", ["Binnen", "Insel", "Wüsten", "Zwerg"]], ["In Namen der sieben alten Weltwunder", ["Grabmal", "Leuchtturm", "Pyramiden", "Tempel"]], ["_Raum", ["Tor", "Warte", "Welt", "Zeit"]]], 
    [["Universum", ["All", "Erde", "Kosmos", "Welt"]], ["In Der Herr der Ringe vorkommende Fabelwesen", ["Elf", "Drache", "Hobbit", "Zwerg"]], ["Haben mit 1 assoziierte Präfixe", ["Einhorn", "Monopol", "Primärfarbe", "Universum"]], ["In Namen von Heißgetränken", ["Cap", "Chia", "Fee", "Ok"]]], 
    [["Vorführung", ["Akt", "Auftritt", "Inszenierung", "Spiel"]], ["US-Amerikanische Maßinheiten", ["Fahrenheit", "Gallone", "Meile", "Pfund"]], ["Sportarten minus Ball", ["Fuß", "Hand", "Volley", "Wasser"]], ["Am Anfang von brennbaren Chemikalien zu finden", ["Ben", "Meth", "Pro", "Spirit"]]], 
    [["Stellt man sich vor", ["Illusion", "Traum", "Utopie", "Wunsch"]], ["Wofür man Urlaub macht", ["Abschalten", "Besichtigen", "Erholen", "Feiern"]], ["Typische Abteilungen in Buchhandlungen", ["Fantasie", "Historisch", "Krimi", "Reisen"]], ["_szeit", ["Amt", "Arbeit", "Jahre", "Ort"]]], 
    [["(Typisch) Spanisch", ["Alhambra", "Dali", "Paella", "Sangria"]], ["Inselstaaten", ["Jamaika", "Japan", "Kuba", "Malta"]], ["_Form", ["Kon", "Kuchen", "Pro", "Uni"]], ["Gibt es sowohl Nord als auch Süd", ["Aldi", "Amerika", "Korea", "Pol"]]], 
    [["Im 19. Jahrhundert populäre Accessoires", ["Fächer", "Gehstock", "Monokel", "Zylinder"]], ["Klo_", ["Brille", "Bürste", "Papier", "Schüssel"]], ["Findet man Gerichte drauf/drin", ["Karte", "Teller", "Tisch", "Topf"]], ["Abkürzungen von Büchern in der Bibel", ["Bar", "Ex", "Gen", "Sir"]]], 
    [["Mehlsorten", ["Erbsen", "Mais", "Reis", "Weizen"]], ["Typisch Mexikanisch", ["Bohnen", "Salsa", "Sombrero", "Tacos"]], ["Was Brokkoli ist", ["Gemüse", "Gesund", "Grün", "Kalorienarm"]], ["_Garten", ["Bier", "Kinder", "Kräuter", "Obst"]]], 
    [["Mitglieder der Aggregatzustände", ["Feststoff", "Flüssigkeit", "Gas", "Plasma"]], ["Auf/An Straßen zu sehen", ["Ampel", "Auto", "Markierung", "Schild"]], ["Als besonders umweltschädlich gesehen", ["Diesel", "Flugzeug", "Öl", "Plastik"]], ["_Kraft", ["Atom", "Kern", "Schwer", "Super"]]], 
    [["Wetterphänomena", ["Orkan", "Regen", "Sturm", "Tornado"]], ["Resistenz", ["Abwehr", "Defensive", "Verteidigung", "Widerstand"]], ["Auf Rennposition bezogene Begriffe", ["Führung", "Mittelfeld", "Podium", "Schluss"]], ["Am Anfang fossiler Brennstoffe zu finden", ["Braun", "Erd", "Stein", "Tor"]]], 
    [["Stufe in der Gesellschaft", ["Position", "Reputation", "Status", "Stellung"]], ["Teile vom Lebenslauf", ["Anschrift", "Erfahrung", "Name", "Telefonnummer"]], ["Enthalten Körperteile", ["Adresskopf", "Beinhalten", "Bohrer", "Kalorienarm"]], ["In Star Wars Filmtiteln zu finden", ["Angriff", "Krieg", "Macht", "Rache"]]], 
    [["Zum Richten von Haaren verwendet", ["Bürste", "Eisen", "Gel", "Kamm"]], ["Wetterphänomena", ["Föhn", "Front", "Wind", "Zyklone"]], ["_Kugel", ["Blei", "Bowling", "Eis", "Lotto"]], ["Typischerweise Rot und Schwarz", ["Gefahrenzeichen", "Kartenspiel", "Marienkäfer", "Roulette"]]], 
    [["Laubbäume/Laubsträucher", ["Ahorn", "Birke", "Kastanie", "Weide"]], ["An verschiedenen Kleidungsstücken zu finden", ["Bund", "Haken", "Knopf", "Tasche"]], ["Am Ende von menschlichen Knochen zu finden", ["Bein", "Blatt", "Bügel", "Kiefer"]], ["Enthalten körperliche 'Attacken'", ["Auftritt", "Eckstoß", "Kick-Off", "Ratschlag"]]], 
    [["Kleine Fantasiegestalten", ["Gnom", "Hobbit", "Schlumpf", "Zwerg"]], ["Automodelle", ["Golf", "Käfer", "Mini", "Polo"]], ["Beginnen mit Zahlen", ["Achtung", "Einsam", "Elfe", "Zweifel"]], ["Am Anfang großbritannischer Städte", ["Aber", "Glas", "Live", "Manch"]]], 
    [["Währungen", ["Balboa", "Krone", "Mark", "Pfund"]], ["Rottöne", ["Blut", "Rosen", "Rubin", "Sommer"]], ["In Chemielaboren zu sehen", ["Gasbrenner", "Kolben", "Schutzbrille", "Trichter"]], ["Können brechen", ["Eis", "Glas", "Keks", "Knochen"]]], 
    [["Wird auf Tischen gespielt", ["Billard", "Ping-Pong", "Poker", "Pool"]], ["Kann man drin schwimmen", ["Becken", "Geld", "Ozean", "See"]], ["Haben häufig Vorhänge", ["Bühne", "Dusche", "Fenster", "Umkleidekabine"]], ["Sonnen_", ["Bad", "Brand", "Brille", "Schutz"]]], 
    [["Gehirn/Köpfchen", ["Birne", "Hirn", "Kopf", "Schädel"]], ["Typisches Pferdefutter", ["Apfel", "Gras", "Heu", "Möhre"]], ["Haben Schalen, die man eher nicht isst", ["Banane", "Bundesliga", "Ei", "Nuss"]], ["_Hut", ["Cowboy", "Filz", "Finger", "Stroh"]]], 
    [["Langsame Tiere", ["Faultier", "Schnecke", "Seepferdchen", "Seestern"]], ["Kann man sich im Fußball 'fangen'", ["Bude", "Kiste", "Packung", "Treffer"]], ["Fangen mit Wochentagsabkürzungen an", ["Diva", "Frachter", "Minze", "Mona"]], ["Beginnen mit 'mittelalterlicher' Kampfausrüstung", ["Helmut", "Lanzelot", "Schildkröte", "Schwertfisch"]]], 
    [["Anstellung", ["Arbeit", "Beruf", "Job", "Position"]], ["Angaben, bzgl. wo man wohnt", ["Haus", "Land", "Stadt", "Straße"]], ["Enthalten viel Wasser", ["Fluss", "Gurke", "Melone", "Ozean"]], ["Am Anfang bekannter deutscher Märchen zu finden", ["Asche", "Dorn", "Rap", "Schnee"]]], 
    [["Zum Feuermachen verwendet", ["Feuerzeug", "Gas", "Holz", "Kohle"]], ["Zutaten eines Mojitos", ["Limette", "Minze", "Rum", "Wasser"]], ["Elektro_", ["Auto", "Mechaniker", "Schrott", "Zaun"]], ["Werden durch -er zu häufigen dt. Nachnamen", ["Bau", "Fisch", "Müll", "Schneid"]]], 
    [["Letzte 4 Weltmeister", ["ARG", "FRA", "GER", "SPA"]], ["Währungen", ["CHF", "EUR", "GBP", "JPY"]], ["Große europäische Flughäfen", ["AMS", "CDG", "IST", "LHR"]], ["Akademische Grade", ["BED", "MBA", "MPA", "PHD"]]],
    [["Biersorten", ["Dunkel", "Hell", "Lager", "Weizen"]], ["_Brötchen", ["Baguette", "Kaiser", "Mohn", "Sesam"]], ["Was eine Limette ist", ["Grün", "Obst", "Rund", "Sauer"]], ["Am Anfang von typischer Kinoverpflegung", ["Chi", "Nach", "Pop", "Soft"]]], 
    [["Gliederfüßer", ["Ameise", "Krebs", "Skorpion", "Spinne"]], ["Mario Kart Items", ["Banane", "Panzer", "Pilz", "Stern"]], ["_Kampf", ["Box", "Fünf", "Stier", "Wahl"]], ["Was mit I gemeint sein kann", ["Eins", "Information", "Intelligenz", "Iod"]]], 
    [["Handyaccessoires", ["Folie", "Hülle", "Kopfhörer", "Ladekabel"]], ["Sind (in der Regel) blau", ["Himmel", "Jeans", "Ozean", "Polizei"]], ["Unter_", ["Arm", "Hemd", "Hose", "Ton"]], ["Im Zusammenhang mit Würfeln verwendet", ["Auge", "Kubik", "Seite", "Werfen"]]],
    [["Haben Sand", ["Golfplatz", "Strand", "Stundenglas", "Wüste"]], ["Haben Zeiger", ["Kompass", "Metronom", "Tacho", "Uhr"]], ["Wo man Bedienungen finden kann", ["Bar", "Flugzeug", "Hotel", "Restaurant"]], ["E-_", ["Auto", "Fahrrad", "Scooter", "Zigarette"]]], 
    [["Was man beim Triathlon macht", ["Fahrradfahren", "Laufen", "Schwimmen", "Sport"]], ["Kommen in Namen von mehreren Ländern vor", ["Guinea", "Kongo", "Korea", "Sudan"]], ["Im Zusammenhang mit Ringen verwendet", ["Boxen", "Olympia", "Planet", "Schmuck"]], ["Fangen mit Zustimmungswörtern an", ["Genauigkeit", "Japan", "Klartext", "Sicherheit"]]], 
    [["Aktionen von Fußballern", ["Pass", "Schuss", "Sprint", "Tor"]], ["Mischgetränke mit Bier", ["Alster", "Diesel", "Krefelder", "Radler"]], ["Haben Kronen", ["Baum", "Bier", "König", "Zahn"]], ["_(n)korn", ["Gerste", "Hagel", "Mais", "Sand"]]],
    [["Toll", ["Mega", "Sauber", "Spitze", "Stark"]], ["Haben Flügel", ["Biene", "Flugzeug", "Gebäude", "Vogel"]], ["_meter", ["Ampere", "Kilo", "Mikro", "Quadrat"]], ["Enthalten Geschichtsformen", ["Absagen", "Deposition", "Fabelhaft", "Irreparabel"]]], 
    [["Afrikanische Tiere", ["Elefant", "Giraffe", "Löwe", "Nashorn"]], ["Wahrheiten", ["Axiom", "Echtheit", "Realität", "Tatsache"]], ["Hat kurze Beine", ["Ameise", "Chihuahua", "Lüge", "Schildkröte"]], ["_Frage", ["Ab", "Fang", "Nach", "Quiz"]]], 
    [["Sind blau", ["Himmel", "Jeans", "Ozean", "Schlumpf"]], ["Kann man trinken", ["Bier", "Cola", "Wasser", "Weizen"]], ["Was mit 'Kurzer' gemeint sein kann", ["Gnom", "Pimpf", "Schnapps", "Zwerg"]], ["Sand_", ["Bank", "Kasten", "Mann", "Uhr"]]],
    [["Geometrische Formen/Körper", ["Kugel", "Linie", "Parabel", "Zylinder"]], ["Haben einen Kopf", ["Flasche", "Mensch", "Münze", "Schraube"]], ["_Sucht", ["Drogen", "Gelb", "Kauf", "Mager"]], ["Am Anfang von Hunderassen zu finden", ["Bea", "Chi", "Gold", "Pin"]]], 
    [["Zeitpunkt", ["Augenblick", "Datum", "Moment", "Termin"]], ["Häufig im TV zu sehen", ["Nachrichten", "Quiz", "Sport", "Werbung"]], ["Dinge die man stellt", ["Antrag", "Frage", "Ultimatum", "Wecker"]], ["Viertel_", ["Finale", "Kreis", "Note", "Stunde"]]], 
    [["Bereich", ["Gebiet", "Raum", "Revier", "Sektor"]], ["Teile eines Baums", ["Ast", "Krone", "Stamm", "Zweig"]], ["In der Mathematik relevant", ["Operation", "Winkel", "Wurzel", "Zahl"]], ["_Fahrt", ["Ab", "Achterbahn", "Heim", "Zu"]]],
    [["Naturwissenschaften", ["Astronomie", "Biologie", "Chemie", "Physik"]], ["Erfundene Erzählung", ["Geschichte", "Lüge", "Märchen", "Story"]], ["Unbewiesene Bereiche/Dinge", ["Astrologie", "Homöopathie", "Reiki", "Telepathie"]], ["Am Anfang von Quizduell-Kategorien", ["Draußen", "Im", "Kunst", "Sport"]]], 
    [["Namen", ["Birke", "Jasmin", "Mark", "Roman"]], ["Kann zur Ausrüstung eines Jägers gehören", ["Fernglas", "Gewehr", "Köder", "Tarnung"]], ["Geometrie Begriffe", ["Fläche", "Form", "Körper", "Winkel"]], ["_Buch", ["Comic", "Foto", "Tage", "Text"]]], 
    [["Am Anfang von Wochentagen", ["Dienst", "Donner", "Frei", "Mit"]], ["Bringen einen zum Schwitzen", ["Angst", "Fieber", "Hitze", "Sport"]], ["Können laut sein", ["Autobahn", "Flugzeug", "Gewitter", "Musik"]], ["Sesam_", ["Brötchen", "Öl", "Samen", "Straße"]]],
    [["Schulfächer", ["Chemie", "Kunst", "Musik", "Sport"]], ["Packt man auf den Grill", ["Fackel", "Fleisch", "Kohle", "Spieß"]], ["Aus dem Französischen stammende Wörter", ["Accessoire", "Charme", "Medaille", "Restaurant"]], ["Augen_", ["Arzt", "Farbe", "Paar", "Ring"]]], 
    [["Bedeutung", ["Gewicht", "Kraft", "Macht", "Stärke"]], ["Variation", ["Abwandlung", "Form", "Variante", "Version"]], ["Enthalten Spielkarten", ["Fassung", "Königtum", "Lausbube", "Madame"]], ["Kleider_", ["Bügel", "Größe", "Sack", "Schrank"]]], 
    [["Schnell", ["Fix", "Flink", "Rasant", "Rasch"]], ["Enthalten Richtungen", ["Abgehoben", "Blinksignal", "Lunten", "Rechtsspruch"]], ["Stellt man auf", ["Gerüst", "Leiter", "Schild", "Ziel"]], ["_Land", ["Deutsch", "Industrie", "Neu", "Rhein"]]],
    [["Süßigkeiten-Marken", ["Duplo", "Mars", "Merci", "Pick-up"]], ["Sind rund", ["Ball", "Erde", "Kugel", "Sonne"]], ["Am Ende von Ländern zu finden", ["Land", "Mark", "Tan", "Wegen"]], ["Um_n", ["Falle", "Frage", "Hülle", "Kippe"]]], 
    [["In Verbindung mit Flügen verwendet", ["Koffer", "Kontrolle", "Landung", "Stewardess"]], ["Zeitraum", ["Ära", "Dauer", "Intervall", "Phase"]], ["_Projekt", ["Bau", "Pilot", "Schul", "Test"]], ["Enden mit Artikeln", ["Alleine", "Hoodie", "Schein", "Wieder"]]], 
    [["Eigenart", ["Charakter", "Merkmal", "Note", "Typ"]], ["Kann man (drauf) drücken", ["Knopf", "Pedal", "Taste", "Touchscreen"]], ["Haben Zähne", ["Kamm", "Mensch", "Reißverschluss", "Säge"]], ["_Punkt", ["Höhe", "Stich", "Tief", "Weg"]]], 
    [["Verwenden Netze", ["Fischer", "Spinne", "Tennis", "Volleyball"]], ["Enthalten Zahlen", ["Dreieck", "Einsam", "Klavier", "Palmzweig"]], ["Haben Ecken", ["Fußball", "Puzzle", "Pyramide", "Quadrat"]], ["Taschen_", ["Dieb", "Geld", "Rechner", "Uhr"]]],
    [["Tiere die als 'Beleidigungen' verwendet werden können", ["Affe", "Kuh", "Ratte", "Schwein"]], ["Geräte die sich mit dem Computer verbinden können", ["Lautsprecher", "Maus", "Mikrofon", "Webcam"]], ["Haben Tore", ["Eishockey", "Fußball", "Garage", "Handball"]], ["_Korb", ["Basketball", "Geschenk", "Papier", "Obst"]]], 
    [["Können einen zum Weinen bringen", ["Allergie", "Lachen", "Schmerz", "Zwiebel"]], ["'Du gehst mir auf den/die'", ["Leim", "Nerven", "Wecker", "Zeiger"]], ["Haben Schalen", ["Banane", "Ei", "Muschel", "Nuss"]], ["Fuß_", ["Ball", "Matte", "Pilz", "Spur"]]],
    [["'Amerikanisch'", ["Adler", "Dollar", "Hamburger", "Waffen"]], ["Auf britischen Krönungsportraits zu finden", ["Adel", "Krone", "Mantel", "Zepter"]], ["Haben Wurzeln", ["Baum", "Haar", "Mathematik", "Zahn"]], ["_Zone", ["Cal", "Euro", "Grau", "Zeit"]]], 
    [["'Geliebte/r'", ["Flamme", "Liebe", "Partner", "Schatz"]], ["Dinge die man Menschen in Trauer 'spendet'", ["Kraft", "Stärke", "Trost", "Wärme"]], ["Werden 'gelöscht'", ["Brand", "Daten", "Durst", "Tinte"]], ["Ehe_", ["Bruch", "Frau", "Glück", "Mals"]]], 
    [["Belegtes Brot", ["Bemme", "Scheibe", "Schnitte", "Stulle"]], ["Schwimmarten", ["Brust", "Rücken", "Schmetterling", "Seiten"]], ["Wovon meist von 2 Stück die Rede ist", ["Auge", "Flügel", "Niere", "Schuh"]], ["_Sam", ["Acht", "Gewalt", "Rat", "Wach"]]],
    [["Auf dem Oktoberfest zu sehen", ["Bier", "Brezel", "Dirndl", "Karussell"]], ["Kleine Körner die i.d.R. in großer Zahl zu finden sind", ["Mohn", "Reis", "Salz", "Sand"]], ["_Form", ["Kuchen", "Nudel", "Uni", "Zeit"]], ["In Namen von Musikinstrumenten zu finden", ["Akkord", "Klar", "Kontra", "Vier"]]], 
    [["'Seite an Seite'", ["Eins", "Miteinander", "Vereinigt", "Zusammen"]], ["Identisch", ["Analog", "Gleich", "Konform", "Wie"]], ["Am Anfang von klassischen Brett-/Gesellschaftsspielen zu finden", ["Mau", "Mensch", "Mono", "Vier"]], ["Gib (mir) _", ["Acht", "Fünf", "Gas", "Her"]]], 
    [["'Ich bin Fertig'", ["Durch", "Kaputt", "Platt", "Tot"]], ["Mit weniger verbunden", ["Defizit", "Mangel", "Minus", "Verlust"]], ["Schönheitsmakel", ["Blase", "Fleck", "Mal", "Pickel"]], ["_Punkt", ["Anker", "Kosten", "Plus", "Wende"]]],
    [["Was man im Auto macht", ["Blinken", "Fahren", "Rasen", "Sitzen"]], ["Mittelpunkt", ["Herz", "Kern", "Nabel", "Puls"]], ["Plural von Insekten", ["Bremsen", "Fliegen", "Grillen", "Käfer"]], ["Bier_", ["Bank", "Bauch", "Garten", "Preis"]]], 
    [["Behältnisse", ["Mappe", "Ranzen", "Tasche", "Tüte"]], ["Beleidigungen", ["Narr", "Ochse", "Sack", "Schwein"]], ["Beim Bowling zu sehen", ["Bahn", "Kugel", "Pin", "Wurf"]], ["Eck_", ["Ball", "Punkt", "Stoß", "Zahn"]]], 
    [["Ertrag", ["Ernte", "Gewinn", "Lohn", "Umsatz"]], ["Dienst", ["Arbeit", "Fron", "Leistung", "Mühe"]], ["Was mit 'Rechts' gemeint sein kann", ["Dumm", "Kapitalistisch", "Konservativ", "Ost"]], ["Am Anfang dt. Vornamen zu finden", ["Alf", "Christi", "Man", "Rom"]]],
    [["Zur Zubereitung von Paniertem Schnitzel verwendet", ["Ei", "Fleisch", "Mehl", "Panko"]], ["Sind typischerweise weiß", ["Birke", "Eisbär", "Papier", "Wolke"]], ["Haben Nadeln", ["Kiefer", "Kompass", "Tacho", "Tanne"]], ["Sieg_", ["Burg", "Linde", "Reich", "Tor"]]], 
    [["Im Schwimmbad zu sehen", ["Bahn", "Becken", "Handtuch", "Rutsche"]], ["Sind schlecht für die Umwelt", ["Auto", "Flugzeug", "Kuh", "Plastik"]], ["Haben 'Haare'", ["Kiwi", "Kokosnuss", "Kopf", "Pinsel"]], ["_Spinne", ["Kreuz", "Vogel", "Wäsche", "Web"]]], 
    [["'Geld'", ["Asche", "Kies", "Kohle", "Kröte"]], ["Produzieren Licht", ["Birne", "Lampe", "Scheinwerfer", "Sonne"]], ["Wo das Wort 'Kette' verwendet wird", ["Fahrrad", "Reaktion", "Restaurant", "Schmuck"]], ["Am Ende deutscher Bands zu finden", ["Hotel", "Mond", "Stein", "Vier"]]],
    [["Übrig gebliebenes", ["Müll", "Neige", "Rest", "Ruinen"]], ["Worauf man schreibt", ["Blatt", "Block", "Computer", "Papier"]], ["_Fleisch", ["Bio", "Grill", "Rind", "Zahn"]], ["Enthalten Teile eines Baums", ["Abstammung", "Abzweigung", "Plastik", "Quadratwurzel"]]], 
    [["Kann man auf dem Kopf haben", ["Haar", "Helm", "Hut", "Krone"]], ["Verwendet man zum Bezahlen", ["Euro", "Karte", "Münze", "Schein"]], ["_Nah", ["Bei", "Haut", "Heimat", "Zeit"]], ["Aus dem spanischem stammende Wörter", ["Chili", "Embargo", "Macho", "Tango"]]], 
    [["Hirn", ["Birne", "Dach", "Kopf", "Schädel"]], ["Grüntöne", ["Apfel", "Billard", "Smaragd", "Wiesen"]], ["Am Ende von Kinder-Schokoladen Artikeln zu finden", ["Bon", "Country", "Ei", "Riegel"]], ["_Krieg", ["Blitz", "Bürger", "Golf", "Welt"]]],
    [["Werden durch -er zu Essen", ["Berlin", "Hamburg", "Nürnberg", "Wien"]], ["Typischerweise Teil von Clownkostümen", ["Nase", "Perücke", "Schminke", "Schuhe"]], ["Mit Karneval verbunden", ["Elf", "Köln", "Kostüm", "Venedig"]], ["Schlaf_", ["Anzug", "Labor", "Maske", "Mütze"]]], 
    [["Dorf", ["Kommune", "Nest", "Ort", "Weiler"]], ["Am Ende von Städten zu finden", ["Bach", "Berg", "Burg", "Dorf"]], ["Pinocchio Figuren", ["Fuchs", "Kater", "Marionette", "Tischler"]], ["_Schaukel", ["Affen", "Baby", "Hollywood", "Schiff"]]], 
    [["Anlage", ["Atelier", "Einrichtung", "Konzern", "Werk"]], ["Teesorten", ["Ingwer", "Kräuter", "Pfefferminz", "Zitrone"]], ["Sonnen_", ["Bank", "Gruß", "Hut", "Tau"]], ["Am Anfang von Handwerksberufen zu finden", ["Anlagen", "Bau", "Glas", "Tisch"]]], 
    [["Sportarten bei denen man schlägt", ["Badminton", "Baseball", "Boxen", "Golf"]], ["Auf dem Golfplatz zu sehen", ["Ball", "Eisen", "Grün", "Loch"]], ["Beginnen mit Körperteilen", ["Armut", "Beinah", "Handball", "Kopfball"]], ["_Arm", ["Greif", "Ober", "Tennis", "Unter"]]], 
    [["Unterart", ["Arm", "Ast", "Gattung", "Zweig"]], ["In Krankenhäusern zu finden", ["Arzt", "Bett", "Patient", "Schwester"]], ["_Buch", ["Dschungel", "Foto", "Hand", "Stamm"]], ["Frère Jacques", ["Bruder", "Dong", "Glocken", "Noch"]]],
    [["Schmal", ["Dünn", "Eng", "Knapp", "Kompakt"]], ["Milchsorten/-typen", ["Kuh", "Mager", "Mandel", "Soja"]], ["Sieht man beim Tennis", ["Ball", "Netz", "Platz", "Schläger"]], ["_Darm", ["Blind", "Dick", "Mast", "Wurst"]]], 
    [["Aktionen der Polizei", ["Ermittlung", "Fahndung","Kontrolle", "Sperre"]], ["Was man beim Spielen für Erfolg braucht", ["Geschick", "Glück", "Können", "Wissen"]], ["Haben Töne", ["Alarm", "Farbe", "Musik", "Sprache"]], ["Ein bisschen _", ["Freude", "Frieden", "Sonne", "Wärme"]]], 
    [["Sind blau", ["Avatar", "Dory", "Himmel", "Schlumpf"]], ["Lange blonde Haare", ["Barbie", "Elsa", "Rapunzel", "Thor"]], ["_Papier", ["Alt", "Drucker", "Reis", "Sand"]], ["Berühmte Schiffe", ["Beagle", "Bismarck", "Nautilus", "Titanic"]]], 
    [["Behältnisse", ["Dose", "Fass", "Schüssel", "Tasche"]], ["Was mit M gemeint sein kann", ["Masse", "Meter", "Molybdän", "Tausend"]], ["Beim Basketball zu sehen", ["Ball", "Korb", "Linie", "Wurf"]], ["Beginnen mit Tieren", ["Haiti", "Hundert", "Reha", "Schafott"]]], 
    [["Sporadisch", ["Kaum", "Rar", "Selten", "Wenig"]], ["Zustände von Fleisch", ["Durch", "Gar", "Medium", "Roh"]], ["_Stellen", ["Dar", "Fertig", "Sammel", "Tank"]], ["Anfang europäischer Hauptstädte", ["Par", "Stock", "War", "Wie"]]],
    [["Zylinderförmige Behältnisse", ["Becher", "Eimer", "Fass", "Tonne"]], ["Was Hunde oft im Mund haben", ["Ball", "Fressen", "Knochen", "Stock"]], ["Worauf man hinarbeitet", ["Erfolg", "Rente", "Traum", "Ziel"]], ["_Sack", ["Box", "Dreck", "Müll", "Ruck"]]], 
    [["Kriegt man oft nicht aus dem Kopf", ["Bild", "Gedanke", "Ohrwurm", "Spruch"]], ["Monopoly Figuren", ["Bügeleisen", "Fingerhut", "Schubkarre", "Zylinder"]], ["Beginnen mit Körperteilen", ["Armut", "Beiname", "Handy", "Zehn"]], ["_Körper", ["Adonis", "Anti", "Fremd", "Ober"]]], 
    [["Knapp", ["Beschränkt", "Kurz", "Straff", "Wenig"]], ["Häufigkeitsangaben in Fragebögen", ["Immer", "Nie", "Oft", "Selten"]], ["_Arbeit", ["Fach", "Fein", "Gruppen", "Hand"]], ["Deutsche Übersetzung amerikanischer Firmennamen", ["Amazonas", "Apfel", "Fenster", "Information"]]], 
    [["In Lebensläufen zu finden", ["Adresse", "Bildung", "Erfahrung", "Name"]], ["Zeitungen/Zeitschriften", ["Bild", "Spiegel", "Welt", "Zeit"]], ["Blau_", ["Kraut", "Licht", "Mann", "Wal"]], ["Was mit X gemeint sein kann", ["Horizontal", "Mal", "Twitter", "Zehn"]]],
    [["Häufig als Süßstoff verwendet", ["Honig", "Sirup", "Stevia", "Zucker"]], ["Im Wald zu finden", ["Baum", "Laub", "Stock", "Weg"]], ["Dinge gegen die es gängig Allergien gibt", ["Haar", "Milch", "Nuss", "Pollen"]], ["Mit 6 (Ecken/Seiten) zu verbinden", ["Davidstern", "Lotto", "Wabe", "Würfel"]]], 
    [["Produkte aus Getreide", ["Bier", "Brot", "Mehl", "Pasta"]], ["Was Betten haben", ["Decke", "Kissen", "Matratze", "Seite"]], ["Können 'glänzen'", ["Auge", "Edelstein", "Haar", "Stern"]], ["_Berg", ["Eis", "Papier", "Wäsche", "Wein"]]], 
    [["Jemandes Interesse", ["Faszination", "Hobby", "Leidenschaft", "Passion"]], ["Sind i.d.R. heiß", ["Feuer", "Kaffee", "Sonne", "Wüste"]], ["Können pfeifen", ["Kessel", "Mensch", "Vogel", "Wind"]], ["Ton_", ["Band", "Leiter", "Signal", "Waren"]]], 
    [["Was mit 'Richtung' gemeint sein kann", ["Ecke", "Feld", "Gebiet", "Gegend"]], ["Kommen aus dem Französischem", ["Buffet", "Cousin", "Genre", "Regie"]], ["Können brechen", ["Glas", "Herz", "Knochen", "Welle"]], ["Tinten_", ["Blau", "Fisch", "Killer", "Patrone"]]], 
    [["Abgrenzung", ["Mauer", "Sperre", "Wall", "Wand"]], ["Haben Federn", ["Füller", "Matratze", "Pfeil", "Vogel"]], ["Dach_", ["Boden", "Fenster", "Geschoss", "Rinne"]], ["Was manche Tiere bauen", ["Damm", "Hügel", "Nest", "Netz"]]], 
    [["Fußball spielen", ["Bolzen", "Kicken", "Pöhlen", "Spielen"]], ["Was man mit Waffen macht", ["Laden", "Schießen", "Warten", "Zielen"]], ["Werden geschossen", ["Fußball", "Kugel", "Pfeil", "Rakete"]], ["Zaun_", ["Eidechse", "König", "Pfahl", "Pfosten"]]], 
    [["Hörorgan", ["Gehör", "Lauscher", "Löffel", "Ohr"]], ["Handy-Apps", ["Kalender", "Kamera", "Uhr", "Wetter"]], ["Haben vier 'Gliedmaße' (Arme, Zacken, ...)", ["Gabel", "Kreuzschlüssel", "Rechen", "Schraubenzieher"]], ["Tafel_", ["Berg", "Bild", "Messer", "Obst"]]],
    [["Schmarre", ["Blessur", "Kratzer", "Narbe", "Schramme"]], ["In der Mathematik verwendet", ["Bruch", "Differenz", "Faktor", "Produkt"]], ["Haben Verschlüsse", ["Dose", "Flasche", "Helm", "Jacke"]], ["Biss_", ["Fest", "Spur", "Verletzung", "Wunde"]]], 
    [["Was man mit Autos macht", ["Fahrt", "Reise", "Tour", "Trip"]], ["Schachfiguren", ["Bauer", "Dame", "König", "Turm"]], ["Beim 100m Rennen zu sehen", ["Bahn", "Läufer", "Start", "Ziel"]], ["_Bahn", ["Auto", "Flug", "Modell", "Schuss"]]], 
    [["Relation", ["Beziehung", "Chemie", "Draht", "Verbindung"]], ["Wo man Noten hat", ["Duft", "Musik", "Schule", "Währung"]], ["Wo '+' zum Einsatz kommt", ["Batterie", "Blutgruppe", "Mathematik", "Vorwahl"]], ["Welt_", ["Bild", "Klasse", "Meer", "Religion"]]], 
    [["Die aktuelle Form", ["Situation", "Stand", "Verfassung", "Version"]], ["Wörter mit B, die auf einer Kirmes zu sehen sind", ["Baum", "Bier", "Bon", "Bühne"]], ["Campingzubehör", ["Lampe", "Tasche", "Topf", "Zelt"]], ["Tor_", ["Hüter", "Jubel", "Pedo", "Schuss"]]],
    [["Geometrische Formen", ["Kugel", "Pyramide", "Würfel", "Zylinder"]], ["Hüne", ["Berg", "Koloss", "Schrank", "Wand"]], ["Worauf man Schritte macht", ["Balken", "Boden", "Leiter", "Treppe"]], ["_Boden", ["Dach", "Fuß", "Kuchen", "Wald"]]], 
    [["Können in Scherben zerbrechen", ["Glas", "Keramik", "Porzellan", "Vase"]], ["Bei der Division verwendet", ["Bruch", "Rest", "Teiler", "Zähler"]], ["Werden i.d.R. aus Holz gemacht", ["Fass", "Klavier", "Papier", "Schachbrett"]], ["_Eimer", ["Abfall", "Müll", "Plastik", "Putz"]]],
    [["Aus Weizen hergestellt", ["Bier", "Brot", "Bulgur", "Mehl"]], ["Spezialitäten der jüdischen Küche", ["Hummus", "Kugel", "Pastrami", "Strudel"]], ["_Ball", ["Golf", "Kostüm", "Pin", "Wasser"]], ["Ergeben auch Sinn, wenn sie 2 mal hintereinandergesetzt werden", ["April", "Bar", "Bon", "Pur"]]], 
    [["'Woher kommst du?'", ["Dorf", "Land", "Metropole", "Stadt"]], ["In Steckbriefen zu sehen", ["Alter", "Gewicht", "Größe", "Name"]], ["Fließen", ["Blut", "Fluss", "Strom", "Verkehr"]], ["_Blick", ["Meer", "Röntgen", "Tunnel", "Weit"]]],
    [["Bei der F1 zu sehen", ["Auto", "Box", "Reifen", "Strecke"]], ["Blech_", ["Büchse", "Dose", "Instrument", "Schaden"]], ["Im Zusammenhang mit Drogen(konsum) verwendet", ["Gras", "Pfeife", "Trip", "Tüte"]], ["Verwendet in Redewendungen zur Beschreibung alter Menschen", ["Eisen", "Hase", "Sack", "Schachtel"]]], 
    [["Sind kalt", ["Eis", "Schnee", "Tundra", "Winter"]], ["Sind/blühen Lila", ["Aubergine", "Iris", "Lavendel", "Salbei"]], ["Was man aussäht", ["Blumen", "Gemüse", "Kräuter", "Rasen"]], ["_Erde", ["Braun", "Garten", "Mittel", "Ton"]]],
    [["Anzahl", ["Frequenz", "Häufigkeit", "Vorkommen", "Zahl"]], ["Japanische Marken", ["Honda", "Nintendo", "Sony", "Toyota"]], ["Haben mehrere Ringe", ["Audi", "Ehe", "Olympia", "Saturn"]], ["In Namen von Bundesliga Stadien zu finden", ["Allianz", "Signal", "Volkswagen", "Weser"]]], 
    [["Bootstypen", ["Kahn", "Kanu", "Kutter", "Yacht"]], ["Palindrome", ["Gig", "Kajak", "Radar", "Uhu"]], ["Werden durch Anhängen eines e zu Tieren", ["Grill", "Löw", "Scholl", "Taub"]], ["Beginnen mit Synonymen für Schlaff", ["Matthäus", "Schlappohr", "Schwachsinn", "Trägerhemd"]]], 
    [["Mehrwert", ["Nutzen", "Sinn", "Ziel", "Zweck"]], ["Auf Zeichnungen/Gemälden zu sehen", ["Farbe", "Hintergrund", "Motiv", "Vordergrund"]], ["Film_", ["Riss", "Set", "Start", "Titel"]], ["Was mit Her(t)z gemeint sein kann", ["Frequenz", "Mut", "Organ", "Zentrum"]]], 
    [["'Weiße' Metalle", ["Aluminium", "Nickel", "Platin", "Silber"]], ["Mit der Zahl 3 zu verbinden", ["Bronze", "Grundfarbe", "Lithium", "Terz"]], ["Kommen in der Geschichte zu Jesus Geburt vor", ["Engel", "Gold", "Stall", "Stern"]], ["_Karte", ["Gruß", "Land", "Schatz", "Spiel"]]], 
    [["Sportarten", ["Boxen", "Golf", "Polo", "Rennen"]], ["Kleidungsstücke", ["Anzug", "Hemd", "Jacke", "Maske"]], ["Haben Krallen", ["Adler", "Bagger", "Hummer", "Katze"]], ["Bett_", ["Decke", "Fertig", "Ruhe", "Wäsche"]]],
    [["", ["", "", "", ""]], ["Sind braun", ["Kaffee", "Karamell", "Schokolade", "Stuhl"]], ["_Note", ["Bank", "Duft", "Fuß", "Zeugnis"]], ["Enthalten europäische Hauptstädte", ["Albern", "Aroma", "Origami", "Soziopathen"]]],
    [["", ["", "", "", ""]], ["Haben 4 Beine", ["Hund", "Katze", "Stuhl", "Tisch"]], ["Im Zusammenhang mit Netz verwendet", ["Fischer", "Internet", "Spinne", "Tennis"]], ["Was mit Au gemeint sein kann", ["Australien", "Gold", "Krankheit", "Schmerz"]]], 
    [["", ["", "", "", ""]], ["Beim Tennis verwendete Begriffe", ["Ass", "Aufschlag", "Netz", "Satz"]], ["Im Zusammenhang mit Hörnern verwendet", ["Kuh", "Instrument", "Teufel", "Ziege"]], ["_Tor", ["Eigen", "Fußball", "Joker", "Sieg"]]], 
    [["", ["", "", "", ""]], ["", ["", "", "", ""]], ["", ["", "", "", ""]], ["Werden durch Ändern des ersten Buchstabens zu Essensutensilien", ["Gesteck", "Keller", "", ""]]],
    [["", ["", "", "", ""]], ["", ["", "", "", ""]], ["", ["", "", "", ""]], ["Wachs_", ["Figur", "Kerze", "Politur", "Tum"]]], 
    [["", ["", "", "", ""]], ["", ["", "", "", ""]], ["", ["", "", "", ""]], ["Bäume ohne ersten oder letzten Buchstaben", ["Buch", "Horn", "", ""]]], 
    [["", ["", "", "", ""]], ["", ["", "", "", ""]], ["", ["", "", "", ""]], ["", ["", "", "", ""]]],
    [["", ["", "", "", ""]], ["", ["", "", "", ""]], ["", ["", "", "", ""]], ["", ["", "", "", ""]]], 
    [["", ["", "", "", ""]], ["", ["", "", "", ""]], ["", ["", "", "", ""]], ["", ["", "", "", ""]]], 
    [["", ["", "", "", ""]], ["", ["", "", "", ""]], ["", ["", "", "", ""]], ["", ["", "", "", ""]]]
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

    function showModal(shareText) {
        const modal = document.getElementById('myModal');
        const modalText = document.getElementById('modalText');
    
        const formattedText = shareText.replace(/\n/g, '<br>');
    
        modalText.innerHTML = formattedText;
    
        // Display the modal
        modal.style.display = 'block';
    
        // Close modal when the close button is clicked
        const closeBtn = document.getElementsByClassName('close')[0];
        closeBtn.onclick = function() {
        modal.style.display = 'none';
        };
    
        // Close modal if user clicks outside of modal content
        window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
        };
        const shareBtn = document.getElementById('teilenButton');
        shareBtn.onclick = function() {
            let puzzleNumber = diffDays + 2;
            let shareText = "Connections-DE \n" + "Puzzle #" + puzzleNumber + "\n \n";
            for (let x = 0; x < attemptsCategories.length; x++) {
                let attempt = "";
                for (let y = 0; y < 4; y++) {
                attempt += emojis[attemptsCategories[x][y]];
                }
                shareText = shareText + attempt + "\n";
            }
            
            if (isMobile) {
                // Mobile: Redirect to WhatsApp
                const whatsappUrl = `whatsapp://send?text=${encodeURIComponent(shareText)}`;
                window.location.href = whatsappUrl;
            } else if (navigator.share) {
                // Web Share API is supported (typically on mobile devices)
                navigator.share({
                    title: 'Share Results',
                    text: shareText,
                    url: window.location.href // URL anpassen oder leer lassen
                }).then(() => {
                    console.log('Shared successfully');
                }).catch((error) => {
                    console.error('Error sharing:', error);
                });
            } else {
                // Clipboard fallback (typically on desktop)
                const textToCopy = formattedText; // HTML-Inhalt hier einfügen
                navigator.clipboard.writeText(textToCopy)
                    .then(() => {
                        alert('Copied to clipboard');
                    })
                    .catch((error) => {
                        console.error('Error copying to clipboard:', error);
                        alert('Failed to copy to clipboard');
                    });
            }
        };             
    }
  
    function shareButton() {
        if (isActiveShareButton) {
          let puzzleNumber = diffDays + 2;
          let shareText = "<b>Connections-DE \n" + "Puzzle #" + puzzleNumber + "</b> \n \n";
          for (let x = 0; x < attemptsCategories.length; x++) {
            let attempt = "";
            for (let y = 0; y < 4; y++) {
              attempt += emojis[attemptsCategories[x][y]];
            }
            shareText = shareText + attempt + "\n";
          }
          
          // Show modal with shareText
          showModal(shareText);
        }
      }

    function generateNewPuzzle() {
        let categories = puzzles[diffDays];
        for (let i = 0; i < categories.length; i++) {
            for(let j = 0; j < categories[i][1].length; j++) {
                categories[i][1][j] = categories[i][1][j].toUpperCase();
            }
        }
        let words = categories.map(category => category[1]).flat();
        for (let i = 0; i < words.length; i++) {
            words[i] = "<b>" + words[i].toUpperCase() + "</b>";
        }
        return words; // Return formatted words
    }
    

    function shuffleTiles() {
        while(!isWellDistributed()) {
            let currentIndex = words.length;
            for (let i = currentIndex - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [words[i], words[j]] = [words[j], words[i]];
            }
        }
        selectedWords = [];
    }

    function isWellDistributed() {
        for (let j = 0; j < 4; j++) {
            if (!isSolved[j]) { // Only check if category j is not solved
                let rows = 0;
                let cols = 0;
    
                // Check rows
                for (let m = 0; m < 4 - isSolvedNumber; m++) {
                    for (let n = 0; n < 4; n++) {
                        if (categories[j][1].includes(removeHTMLTags(words[4 * m + n]))) {
                            rows++;
                            break; // Found in this row, move to the next
                        }
                    }
                }
    
                // Check columns
                for (let m = 0; m < 4; m++) {
                    for (let n = 0; n < 4 - isSolvedNumber; n++) {
                        if (categories[j][1].includes(removeHTMLTags(words[4 * n + m]))) {
                            cols++;
                            break; // Found in this column, move to the next
                        }
                    }
                }
    
                // Check if rows and columns are well distributed
                if (isSolvedNumber === 0 && (rows < 3 || cols < 3)) {
                    return false;
                } else if (isSolvedNumber === 1 && (rows < 3 || cols < 3)) {
                    return false;
                } else if (isSolvedNumber === 2 && (rows < 2 || cols < 2)) {
                    return false;
                }
            }
        }
        return true;
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
                const text = words[n];
                const fontSize = calculateFontSize(text);
                const gridItem = document.createElement('div');
                gridItem.classList.add('grid-item');
                gridItem.innerHTML = words[n++];
                gridItem.style.fontSize = fontSize;
                if(isMobile) {
                    gridItem.style.height = "50px";
                }
                gridItem.addEventListener('click', function() {
                    if(this.style.backgroundColor == "dimgray") {
                        this.style.backgroundColor = "lightgray";
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
    
        const baseFontSizeMobile = 7.5; 
        const minFontSizeMobile = 2;
        const maxFontSizeMobile = 40;
        const lengthFactorMobile = 0.26; 
    
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

    function removeHTMLTags(text) {
        return text.replace(/<\/?[^>]+(>|$)/g, "");
    }

    async function swapTilesAnimated(selectedIndices, firstRowIndices) {
        const gridItems = document.querySelectorAll('.grid-item');
        const animationPromises = [];
    
        for (let i = 0; i < selectedIndices.length; i++) {
            const selectedIdx = selectedIndices[i];
            const firstEmptyIdx = firstRowIndices[i];
    
            const selectedTile = gridItems[selectedIdx];
            const firstEmptyTile = gridItems[firstEmptyIdx];
    
            const selectedRect = selectedTile.getBoundingClientRect();
            const firstEmptyRect = firstEmptyTile.getBoundingClientRect();
    
            const deltaX = firstEmptyRect.left - selectedRect.left;
            const deltaY = firstEmptyRect.top - selectedRect.top;

            const delay = i * 50;

            const animationPromise = new Promise(resolve => {
                setTimeout(() => {
                    selectedTile.style.transition = 'transform 0.5s';
                    firstEmptyTile.style.transition = 'transform 0.5s';
                    requestAnimationFrame(() => {
                        selectedTile.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
                        firstEmptyTile.style.transform = `translate(${-deltaX}px, ${-deltaY}px)`;
                        selectedTile.addEventListener('transitionend', () => {
                            const selectedTileContent = selectedTile.innerHTML;
                            const selectedTileBgColor = selectedTile.style.backgroundColor;
                            const selectedTileTextColor = selectedTile.style.color;
                            const selectedTileTextSize = selectedTile.style.fontSize;
    
                            const firstEmptyTileContent = firstEmptyTile.innerHTML;
                            const firstEmptyTileBgColor = firstEmptyTile.style.backgroundColor;
                            const firstEmptyTileTextColor = firstEmptyTile.style.color;
                            const firstEmptyTileTextSize = firstEmptyTile.style.fontSize;
    
                            selectedTile.innerHTML = firstEmptyTileContent;
                            selectedTile.style.backgroundColor = firstEmptyTileBgColor;
                            selectedTile.style.color = firstEmptyTileTextColor;
                            selectedTile.style.fontSize = firstEmptyTileTextSize;
    
                            firstEmptyTile.innerHTML = selectedTileContent;
                            firstEmptyTile.style.backgroundColor = selectedTileBgColor;
                            firstEmptyTile.style.color = selectedTileTextColor;
                            firstEmptyTile.style.fontSize = selectedTileTextSize;

                            selectedTile.style.transition = '';
                            selectedTile.style.transform = '';
                            firstEmptyTile.style.transition = '';
                            firstEmptyTile.style.transform = '';
    
                            resolve();
                        }, { once: true });
                    });
                }, delay);
            });
            animationPromises.push(animationPromise);
        }
        await Promise.all(animationPromises);
    }

    async function solved(category) {
        const solvedContainer = document.getElementById('solvedContainer');
        const selectedIndices = [];
        const firstRowIndices = [];

        for(let i=1;i<words.length / 4;i++) {
            let checkedWords = [];
            checkedWords.push(words[i*4], words[i*4 + 1], words[i*4 + 2], words[i*4 + 3]);
            checkedWords = checkedWords.map(word => removeHTMLTags(word));
            let n = checkWhichCategories(checkedWords);
            for(let j=0; j<4; j++) {
                if(n[j] == category) selectedIndices.push(i*4 + j);
            }
        }

        let checkedWords = [];
        checkedWords.push(words[0], words[1], words[2], words[3]);
        checkedWords = checkedWords.map(word => removeHTMLTags(word));
        let x = checkWhichCategories(checkedWords);
        for(let n=0;n<4;n++) {
            if(x[n] != category) firstRowIndices.push(n);
        }

        // Ensure that we have equal number of indices to swap
        const minLength = Math.min(selectedIndices.length, firstRowIndices.length);
        const swapIndices = selectedIndices.slice(0, minLength);
        const swapFirstRowIndices = firstRowIndices.slice(0, minLength);

        // Animate swapping of tiles
        await swapTilesAnimated(swapIndices, swapFirstRowIndices);

        const solve = document.createElement('div');
        solve.classList.add('solve');
        switch (category) {
            case 0:
                solve.style.backgroundColor = "#FAE06E";
                break;
            case 1:
                solve.style.backgroundColor = "#A1C45B";
                break;
            case 2:
                solve.style.backgroundColor = "#B2C6F1";
                break;
            case 3:
                solve.style.backgroundColor = "#B980C4";
                break;
        }
        solve.innerHTML = "<b>" + categories[category][0].toUpperCase() + "</b>" + "<br>";
        for(let n=0; n<3; n++) {
            solve.innerHTML += categories[category][1][n].replace('-', '') + ", ";
        }
        solve.innerHTML += categories[category][1][3].replace('-', '');
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

    function animateGuess(tiles) {
        tiles.forEach((tile, index) => {
            setTimeout(() => {
                tile.style.transition = 'transform 0.3s';
                tile.style.transform = 'translateY(-10px)';
                setTimeout(() => {
                    tile.style.transform = '';
                    setTimeout(() => {
                        tile.style.transition = '';
                    }, 200);
                }, 200);
            }, index * 100);
        });
    }

    function showNotification(message) {
        var notification = document.createElement("div");
        notification.className = "notification";
        notification.textContent = message;
        document.getElementById("notificationContainer").appendChild(notification);
    
        setTimeout(function() {
          notification.style.top = "0px"; // Move down
          setTimeout(function() {
            notification.classList.add("minimize"); // Minimize after 3 seconds
            setTimeout(function() {
              notification.remove(); // Remove after minimize animation
            }, 500);
          }, 4000);
        }, 100); // Delay to ensure animation starts
      }

      function deselectAllTiles() {
        const selectedTiles = document.querySelectorAll('.grid-item');
        selectedTiles.forEach(tile => {
            if(tile.style.backgroundColor == "dimgray") {
                tile.style.backgroundColor = "lightgray";
                tile.style.color = "black";
            }
        });
        selectedWords = [];
    }    

    async function enterButton() {
        const enterButtonElement = document.getElementById('enterButton');
        const shuffleButtonElement = document.getElementById('shuffleButton');
        if(isActiveEnterButton) {
            enterButtonElement.disabled = true;
            shuffleButtonElement.disabled = true;
            let check = isInCategories(selectedWords);
            if(check != -1) {
                const selectedTiles = Array.from(gridContainer.querySelectorAll('.grid-item')).filter(tile => selectedWords.includes(tile.textContent));
                animateGuess(selectedTiles);
                await delay(1000);
                solved(check);
                attemptsCategories.push([check, check, check, check]);
                selectedWords = [];
                saveProgress();
            }
            else {
                let tryX = selectedWords.slice().sort();
                if(selectedWords.length == 4) {
                    if(triesArray.length == 0) {
                        const selectedTiles = Array.from(gridContainer.querySelectorAll('.grid-item')).filter(tile => selectedWords.includes(tile.textContent));
                        animateGuess(selectedTiles);
                        await delay(1000);
                        document.body.classList.add('shake');
                
                        setTimeout(function() {
                            document.body.classList.remove('shake');
                        }, 200);

                        const tries = document.createElement('div');
                        tries.classList.add('try');
                        if(isMobile) {
                            let attString = tryX[0].replace('-', '') + ", " + tryX[1].replace('-', '') + ",<br>" + tryX[2].replace('-', '') + ", " + tryX[3].replace('-', '');
                            tries.innerHTML = "FEHLVERSUCH " + tryNumber + ": " + "<br>" + attString;
                        }
                        else {
                            tries.innerHTML = "FEHLVERSUCH " + tryNumber + ": " + "<br>";
                            for(let n=0; n<3; n++) {
                                tries.innerHTML += tryX[n].replace('-', '') + ", ";
                            }
                            tries.innerHTML += tryX[3].replace('-', '');
                        }
                        attempts.push(tryX);
                        attemptsCategories.push(checkWhichCategories(selectedWords))
                        tryNumber += 1;
                        let howMany = checkHowMany(selectedWords);
                        closenessChecker(howMany, tries);
                        triesContainer.appendChild(tries);
                        animateTryDrop(tries);
                        triesArray.push(tryX);
                        deselectAllTiles();
                        updateTriesVisual();
                    }
                    else {
                        let x = false;
                        for (let i = 0; i < triesArray.length; i++) {
                            if (isEqualArray(triesArray[i], tryX)) {
                                showNotification("Bereits geraten!");
                                x = true;
                                break;
                            }
                        }
                        if(x == false) {
                            const selectedTiles = Array.from(gridContainer.querySelectorAll('.grid-item')).filter(tile => selectedWords.includes(tile.textContent));
                            animateGuess(selectedTiles);
                            await delay(1000);
                            document.body.classList.add('shake');
                    
                            setTimeout(function() {
                                document.body.classList.remove('shake');
                            }, 200);
                            const tries = document.createElement('div');
                            tries.classList.add('try');
                            let howMany = checkHowMany(selectedWords);
                            if(isMobile) {
                                let attString = tryX[0].replace('-', '') + ", " + tryX[1].replace('-', '') + ",<br>" + tryX[2].replace('-', '') + ", " + tryX[3].replace('-', '');
                                tries.innerHTML = "FEHLVERSUCH " + tryNumber + ": " + "<br>" + attString;
                            }
                            else {
                                tries.innerHTML = "FEHLVERSUCH " + tryNumber + ": " + "<br>";
                                for(let n=0; n<3; n++) {
                                    tries.innerHTML += tryX[n].replace('-', '') + ", ";
                                }
                                tries.innerHTML += tryX[3].replace('-', '');
                            }
                            attempts.push(tryX);
                            attemptsCategories.push(checkWhichCategories(selectedWords))
                            tryNumber += 1;
                            updateTriesVisual();
                            closenessChecker(howMany, tries);
                            triesContainer.appendChild(tries);
                            animateTryDrop(tries);
                            triesArray.push(tryX);
                            deselectAllTiles();
                            if(tryNumber >= 5) {
                                for(let y=0;y<4;y++) {
                                    while(isSolved[y] == true && y<4) {
                                        y++;
                                    }
                                    if(y<4)  {
                                        await delay(1500);
                                        solved(y);
                                    }
                                    else {
                                        break;
                                    }
                                }
                                const shareBtn = document.getElementById('shareButton');
                                makeButtonVisible(shareBtn);
                                isActiveShareButton = true;
                                shareButton();
                            }
                        }
                    }
                }
                saveProgress();
                enterButtonElement.disabled = false;
                shuffleButtonElement.disabled = false;
                return false;
            }
        }
        enterButtonElement.disabled = false;
        shuffleButtonElement.disabled = false;
        updateTriesVisual();
        saveProgress();
    }

    function animateTryDrop(tryElement) {
        tryElement.style.transform = 'translateY(-25px)';
        tryElement.style.transition = 'transform 0.5s ease';
        requestAnimationFrame(() => {
            tryElement.style.transform = 'translateY(0)';
        });
    }

    function updateTriesVisual() {
        const remainingTries = 4 - tryNumber; // Berechne die verbleibende Anzahl der Versuche
        const tryCircles = document.querySelectorAll('.try-circle');
        tryCircles.forEach((circle, index) => {
            if (index <= remainingTries) {
                circle.style.backgroundColor = 'darkgray'; // Ändere die Hintergrundfarbe der Kreise entsprechend
            } else {
                circle.style.backgroundColor = 'white'; // Graue Farbe für nicht verwendete Versuche
            }
        });
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
                    solve.style.backgroundColor = "#FAE06E";
                    break;
                case 1:
                    solve.style.backgroundColor = "#A1C45B";
                    break;
                case 2:
                    solve.style.backgroundColor = "#B2C6F1";
                    break;
                case 3:
                    solve.style.backgroundColor = "#B980C4";
                    break;
            }
            solve.innerHTML = "<b>" + categories[cat][0].toUpperCase() + "</b>" + "<br>";
            for(let n=0; n<3; n++) {
                solve.innerHTML += categories[cat][1][n].replace('-', '') + ", ";
            }
            solve.innerHTML += categories[cat][1][3].replace('-', '');
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
                let attString = attempts[i][0].replace('-', '') + ", " + attempts[i][1].replace('-', '') + ",<br>" + attempts[i][2].replace('-', '') + ", " + attempts[i][3].replace('-', '');
                tries.innerHTML = "FEHLVERSUCH " + (displayTryNumber++) + ": " + "<br>" + attString;
            }
            else {
                tries.innerHTML = "FEHLVERSUCH " + (displayTryNumber++) + ": " + "<br>";
                for(let n=0; n<3; n++) {
                    tries.innerHTML += attempts[i][n].replace('-', '') + ", ";
                }
                tries.innerHTML += attempts[i][3].replace('-', '')
            }
            closenessChecker(checkHowMany(attempts[i]), tries); 
            triesContainer.appendChild(tries);
        }
        updateTriesVisual();
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
        if(isSolvedNumber == 4) shareButton();
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
