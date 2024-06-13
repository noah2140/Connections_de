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
        for(let j=0; j<4; j++) {
            if(isSolved[j] == false) {
                let rows = 0;
                let cols = 0;
                for(let m=0; m<4-isSolvedNumber; m++) {
                    for(let n=0; n<4; n++) {
                        if(categories[j][1].includes(removeHTMLTags(words[4*m + n]))) {
                            rows+=1;
                            break;
                        }
                    }
                }
                if(isSolvedNumber == 0) {
                    if(rows<3) {
                        return false;
                    }
                }
                else if (isSolvedNumber == 1) {
                    if(rows == 1) {
                        return false;
                    }
                }
                else if (isSolvedNumber == 2) {
                    if(rows<2) {
                        return false;
                    }
                }
                for(let m=0; m<4; m++) {
                    for(let n=0; n<4-isSolvedNumber; n++) {
                        if(categories[j][1].includes(removeHTMLTags(words[4*n + m]))) {
                            cols++;
                            break;
                        }
                    }
                }

                if(isSolvedNumber == 0) {
                    if(cols<3) {
                        return false;
                    }
                }
                else if (isSolvedNumber == 1) {
                    if(cols <= 3 && rows == 2) {
                        return false;
                    }
                }
                else if (isSolvedNumber == 2) {
                    if(cols<3) {
                        return false;
                    }
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
        if(isActiveEnterButton) {
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
                                let attString = tryX[0] + ", " + tryX[1] + ",<br>" + tryX[2] + ", " + tryX[3];
                                tries.innerHTML = "FEHLVERSUCH " + tryNumber + ": " + "<br>" + attString;
                            }
                            else {
                                tries.innerHTML = "FEHLVERSUCH " + tryNumber + ": " + "<br>" + tryX.join(', ');
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
                            }
                        }
                    }
                }
                saveProgress();
                return false;
            }
        }
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
