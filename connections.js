document.addEventListener('DOMContentLoaded', function() {

    // List of puzzles
    const puzzles = [
    [["'Weiße' Metalle", ["Aluminium", "Nickel", "Platin", "Silber"]], ["Mit der Zahl 3 zu verbinden", ["Bronze", "Grundfarbe", "Lithium", "Terz"]], ["Kommen in der Geschichte zu Jesus Geburt vor", ["Engel", "Gold", "Stall", "Stern"]], ["_Karte", ["Gruß", "Land", "Schatz", "Spiel"]]], 
    [["Sportarten", ["Boxen", "Golf", "Polo", "Rennen"]], ["Kleidungsstücke", ["Anzug", "Hemd", "Jacke", "Maske"]], ["Haben Krallen", ["Adler", "Bagger", "Hummer", "Katze"]], ["Bett_", ["Decke", "Fertig", "Ruhe", "Wäsche"]]],
    [["Homophone von Buchstaben", ["Haar", "Kuh", "Tee", "Zeh"]], ["Sind i.d.R. braun", ["Kaffee", "Karamell", "Schokolade", "Stuhl"]], ["_Note", ["Bank", "Duft", "Fuß", "Zeugnis"]], ["Enthalten europäische Hauptstädte", ["Albern", "Aroma", "Origami", "Soziopathen"]]],
    [["Sportarten mit nicht-kügelförmigen Spielobjekten", ["Darts", "Eishockey", "Rugby", "Speerwerfen"]], ["Haben 4 Beine", ["Hund", "Katze", "Stuhl", "Tisch"]], ["Im Zusammenhang mit Netz verwendet", ["Fischer", "Internet", "Spinne", "Tennis"]], ["Was mit Au gemeint sein kann", ["Australien", "Gold", "Krankheit", "Schmerz"]]], 
    [["Schachfiguren", ["Bauer", "Dame", "König", "Turm"]], ["Beim Tennis verwendete Begriffe", ["Ass", "Aufschlag", "Netz", "Satz"]], ["Im Zusammenhang mit Hörnern verwendet", ["Kuh", "Instrument", "Teufel", "Ziege"]], ["_Tor", ["Eigen", "Fußball", "Joker", "Sieg"]]], 
    [["Historie", ["Geschichte", "Lebensweg", "Vergangenheit", "Vita"]], ["Orte an/auf denen Sport ausgeübt wird", ["Halle", "Laufbahn", "Piste", "Rasen"]], ["Haben eine Spitze", ["Berg", "Pyramide", "Speer", "Zunge"]], ["Werden durch Ändern des ersten Buchstabens zu Essensutensilien", ["Besser", "Fabel", "Gesteck", "Keller"]]],
    [["Art und Weise", ["Form", "Gestalt", "Typ", "Version"]], ["2-Dimensionale geometrische Formen", ["Kreis", "Linie", "Punkt", "Quadrat"]], ["Wachs_", ["Figur", "Kerze", "Politur", "Tum"]], ["Am Ende von Computerzubehör zu finden", ["Aus", "Hörer", "Statur", "Tor"]]], 
    [["Zum Abwischen von etwas verwendet", ["Lappen", "Schwamm", "Serviette", "Tuch"]], ["Haben typischerweise 5 von etwas", ["Arbeitswoche", "Fuß", "Hand", "Seestern"]], ["_Form", ["Kuchen", "Pass", "Uni", "Zeit"]], ["Bäume ohne ersten oder letzten Buchstaben", ["Anne", "Buch", "Hase", "Horn"]]], 
    [["I.d.R. Weiß und 'fluffig'", ["Schaf", "Schnee", "Watte", "Wolke"]], ["Barttypen", ["Kinn", "Schnauzer", "Voll", "Ziege"]], ["Bezeichnung für Personen mit bestimmten Hobbies", ["Boxer", "Darsteller", "Läufer", "Schütze"]], ["In Disney Filmnamen", ["Biest", "Dalmatiner", "Dschungel", "König"]]],
    [["Ausstattung eines Autos", ["Gurt", "Klimaanlage", "Sitz", "Spiegel"]], ["Pracht", ["Ausstrahlung", "Glamour", "Glanz", "Zauber"]], ["_Bild", ["Blut", "Feind", "Profil", "Stern"]], ["Im Zusammenhang mit Mitgehen verwendet", ["Demo", "Diebstahl", "Enthusiasmus", "Zeit"]]], 
    [["Düster", ["Dunkel", "Finster", "Obskur", "Ominös"]], ["Kriminell", ["Illegal", "Schwarz", "Untersagt", "Verboten"]], ["Auf der US-Amerikanischen Flagge zu sehen", ["Blau", "Rot", "Stern", "Streifen"]], ["Taschen_", ["Dieb", "Geld", "Tuch", "Uhr"]]], 
    [["Was Äpfel haben", ["Fruchtfleisch", "Kern", "Schale", "Stiel"]], ["Haben Deckel", ["Flasche", "Klo", "Mülltonne", "Topf"]], ["Nahe Ski-Pisten zu sehen", ["Hütte", "Lift", "Markierung", "Raupe"]], ["_Baum", ["Apfel", "Kirmes", "Stamm", "Turnier"]]], 
    [["Worauf man sitzt", ["Hocker", "Sessel", "Sitz", "Stuhl"]], ["Werden bei Filmverleihungen ausgezeichnet", ["Film", "Musik", "Regisseur", "Schauspieler"]], ["Was Leonardo da Vinci war", ["Architekt", "Erfinder", "Ingenieur", "Maler"]], ["Park_", ["Bank", "Haus", "Platz", "Uhr"]]], 
    [["Dinge von denen Glas ein wichtiger Bestandteil ist", ["Brille", "Spiegel", "Uhr", "Vitrine"]], ["Enden mit 'Niederschlag'", ["Ausguss", "Bierdusche", "Geldregen", "Zuschauer"]], ["_Block", ["Beton", "Fan", "Notiz", "Rezept"]], ["Was mit 'Laden' gemeint sein kann", ["Antanzen", "Download", "Geschäft", "Unternehmen"]]], 
    [["Olympische Wasserdisziplinen", ["Kanu", "Rudern", "Segeln", "Wasserball"]], ["Werden gelöscht", ["Daten", "Durst", "Feuer", "Tinte"]], ["_Bad", ["Breaking", "Dampf", "Frei", "Fuß"]], ["Alle meine Entchen", ["Alle", "Schwimmen", "See", "Wasser"]]], 
    [["Sind Präterita in der 1./3. Person Singular", ["Hob", "Lag", "Sah", "Tat"]], ["Palindrome mit O", ["Bob", "Lol", "Tot", "Wow"]], ["In bestimmten Sportarten verwendete Begriffe", ["Box", "Par", "Pin", "Tor"]], ["Anfänge von Zahlen", ["Ach", "Ein", "Sie", "Zeh"]]], 
    [["Kniff", ["Lösung", "Schlüssel", "Trick", "Weg"]], ["Teiles eines Bettes", ["Latte", "Kissen", "Matratze", "Rahmen"]], ["Wunsch_", ["Kind", "Konzert", "Liste", "Vorstellung"]], ["Beginnen mit lokalen Präpositionen", ["Auftritt", "Hintern", "Input", "Nebensatz"]]], 
    [["Schützen vor bestimmten Sachen", ["Handschuh", "Helm", "Regenschirm", "Sonnencreme"]], ["Am Anfang von chemischen Elementen, die mit 'Stoff' enden", ["Kohle", "Sauer", "Stick", "Wasser"]], ["Haben Fassungen", ["Brille", "Glühbirne", "Lampe", "Ring"]], ["Arm_", ["Band", "Brust", "Gelenk", "Länge"]]], 
    [["Können schmelzen", ["Eis", "Gletscher", "Kerze", "Schokolade"]], ["Werden bei Gebrauch leer", ["Batterie", "Feuerlöscher", "Handy", "Portemonnaie"]], ["Enthalten Kartenspiele", ["Cambridge", "Pokerface", "Skaten", "Unordnung"]], ["Werden im Zusammenhang mit 'Wellen' verwendet", ["Corona", "Haare", "Stimmung", "Surfen"]]], 
    [["Essen, die häufig geteilt werden", ["Brot", "Kuchen", "Pizza", "Schokolade"]], ["Können brechen", ["Ei", "Glas", "Herz", "Spiegel"]], ["Dinge die 'Fallen'", ["Bombe", "Entscheidung", "Licht", "Münze"]], ["Schwarz_", ["Geld", "Markt", "Wald", "Weiß"]]], 
    [["Oben auf Häusern", ["Dach", "Rinne", "Schornstein", "Schüssel"]], ["Dinge, die man im Haus immer verliert/nicht findet", ["Brille", "Fernbedienung", "Schlüssel", "Socken"]], ["Können platzen", ["Blase", "Luftballon", "Reifen", "Traum"]], ["_Wahl", ["Brief", "Kreis", "Protest", "Wieder"]]], 
    [["In 4 aufgeteilt", ["Basketballspiel", "Himmelsrichtung", "Rechenart", "Spielkarte"]], ["Beginnen mit Zeitabschnitten", ["Jahreszeit", "Stundenlohn", "Tagung", "Wochentag"]], ["Werden in bestimmten Situationen gedreht", ["Flasche", "Kopf", "Schlüssel", "Schraube"]], ["Werden 'abgegeben'", ["Geruch", "Löffel", "Rezension", "Verpflichtung"]]], 
    [["Himmel", ["Horizont", "Paradies", "Weltall", "Wolken"]], ["Herstellung von Stoff oder Garn", ["Filzen", "Knüpfen", "Spinnen", "Weben"]], ["Kreative Hobbies", ["Malen", "Nähen", "Stricken", "Zeichnen"]], ["Zeitungs_", ["Anzeige", "Artikel", "Beilage", "Bote"]]], 
    [["In Drogeriemärkten zu kaufen", ["Coronatest", "Deo", "Rasierschaum", "Windeln"]], ["An Geburtstagen zu sehen", ["Geschenk", "Karte", "Kerze", "Torte"]], ["Haribo-Artikel", ["Fläschchen", "Gurke", "Schnecke", "Schnuller"]], ["Hoch_", ["Adel", "Druck", "Haus", "Zeit"]]], 
    [["In Flugzeugen zu sehen", ["Fenster", "Gurt", "Schwimmweste", "Sitz"]], ["Kann man spielen", ["Ball", "Golf", "Harfe", "Schach"]], ["_Bruch", ["Aus", "Baum", "Bein", "Deich"]], ["Am Anfang deutscher Moderatoren", ["Gott", "Kern", "Welk", "Winter"]]], 
    [["", ["Irre", "Komisch", "Schräg", "Verrückt"]], ["Anagramme", ["Liste", "Steil", "Stiel", "Teils"]], ["Kann man anhalten", ["Atem", "Auto", "Musik", "Uhr"]], ["Wofür der erste Buchstabe stehen kann in Abkürzungen mit 'KW' am Ende", ["Atom", "Kern", "Last", "Personen"]]], 
    [["", ["", "", "", ""]], ["", ["", "", "", ""]], ["Kann man spielen", ["Fußball", "Instrument", "Rolle", "Spiel"]], ["", ["", "", "", ""]]], 
    [["", ["", "", "", ""]], ["", ["", "", "", ""]], ["", ["", "", "", ""]], ["", ["", "", "", ""]]], 
    [["", ["", "", "", ""]], ["", ["", "", "", ""]], ["", ["", "", "", ""]], ["", ["", "", "", ""]]], 
    [["", ["", "", "", ""]], ["", ["", "", "", ""]], ["", ["", "", "", ""]], ["", ["", "", "", ""]]], 
    [["", ["", "", "", ""]], ["", ["", "", "", ""]], ["", ["", "", "", ""]], ["", ["", "", "", ""]]], 
    [["", ["", "", "", ""]], ["", ["", "", "", ""]], ["", ["", "", "", ""]], ["", ["", "", "", ""]]], 
    [["", ["", "", "", ""]], ["", ["", "", "", ""]], ["", ["", "", "", ""]], ["", ["", "", "", ""]]], 
    [["", ["", "", "", ""]], ["", ["", "", "", ""]], ["", ["", "", "", ""]], ["", ["", "", "", ""]]], 
    [["", ["", "", "", ""]], ["", ["", "", "", ""]], ["", ["", "", "", ""]], ["", ["", "", "", ""]]], 
    [["", ["", "", "", ""]], ["", ["", "", "", ""]], ["", ["", "", "", ""]], ["", ["", "", "", ""]]], 
    [["", ["", "", "", ""]], ["", ["", "", "", ""]], ["", ["", "", "", ""]], ["", ["", "", "", ""]]], 
    [["", ["", "", "", ""]], ["", ["", "", "", ""]], ["", ["", "", "", ""]], ["", ["", "", "", ""]]], 
    [["", ["", "", "", ""]], ["", ["", "", "", ""]], ["", ["", "", "", ""]], ["", ["", "", "", ""]]], 
    [["", ["", "", "", ""]], ["", ["", "", "", ""]], ["", ["", "", "", ""]], ["", ["", "", "", ""]]], 
    [["", ["", "", "", ""]], ["", ["", "", "", ""]], ["", ["", "", "", ""]], ["", ["", "", "", ""]]], 
    [["", ["", "", "", ""]], ["", ["", "", "", ""]], ["", ["", "", "", ""]], ["", ["", "", "", ""]]]
    ];

    // Make it so that nothing is displayed, until the check for a current puzzle is displayed
    const noPuzzleMessage = document.getElementById('no-puzzle-message');
    noPuzzleMessage.style.display = "none";
    const mainContainer = document.getElementById('mainContainer');
    mainContainer.style.display = "none";

    // Calculation for which puzzle to pick, and displaying the number of the puzzle
    const addedDays = 177;
    const startDate = new Date('10/3/2024');
    let currentDate = new Date();
    let diffTime = Math.abs(currentDate - startDate);
    let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) - 1;

    // Creates the puzzle and its categories from the puzzles list
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

    // Defining some variables used for logic later on
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

    let darkMode = false;
    let showTries = false;

    var toggleDarkModeButton = document.getElementById("toggle-dark-mode");
    var toggleIndicator = document.getElementById("toggle-indicator");

    function applyDarkMode() {
        if (darkMode) {
            document.body.classList.add('dark-mode');  // Add dark-mode class
            toggleIndicator.textContent = 'I';         // Change toggle indicator
            darkModeActivation();                      // Apply dark mode styles
        } else {
            document.body.classList.remove('dark-mode'); // Remove dark-mode class
            toggleIndicator.textContent = 'O';           // Change toggle indicator
            darkModeDeactivation();                      // Apply light mode styles
        }
    }

    function initiateSettings() {
        loadSettings(); 
        applyDarkMode();
    }

    toggleDarkModeButton.onclick = function() {
        darkMode = !darkMode;         // Toggle dark mode state
        applyDarkMode();              // Apply the updated mode
        saveSettings();               // Save the updated settings to localStorage
    };

    toggleDarkModeButton.onclick = function() {
        darkMode = !darkMode;         // Toggle dark mode state
        applyDarkMode();              // Apply the updated mode
        saveSettings();               // Save the updated settings to localStorage
    };

    function darkModeActivation() {
        document.body.style.backgroundColor = "#222";
        const texts = document.querySelectorAll(".text");
        texts.forEach(text => {
            text.style.backgroundColor = "#222";
            text.style.color = "white";
        });
    }

    function darkModeDeactivation() {
        document.body.style.backgroundColor = "white";
        const texts = document.querySelectorAll(".text");
        texts.forEach(text => {
            text.style.backgroundColor = "white";
            text.style.color = "black";
        });
    }

    initiateSettings();

    // Sets initial status of buttons
    let isActiveEnterButton = true;
    let isActiveShuffleButton = true;
    let isActiveShareButton = false;

    // function to determine if a phone or computer device is used
    function isMobileDevice() {
        const userAgent = navigator.userAgent;

        const isMobile = /Mobi|Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(userAgent);
        const isDesktop = /Macintosh|Windows NT|Linux/i.test(userAgent);

        return isMobile && !isDesktop;
    }

    // Checks, if the puzzle is not completely defined, so that there isn't a puzzle displayed in case of this
    function checkForEmptyWords(words) {
        const noPuzzleMessage = document.getElementById('no-puzzle-message');
        const mainContainer = document.getElementById('mainContainer');
    
        noPuzzleMessage.style.display = "none";
        mainContainer.style.display = "none";
    
        let hasEmptyString = words.includes("<b></b>"); 
    
        if (hasEmptyString) {
            noPuzzleMessage.style.display = 'block'; 
            mainContainer.style.display = "none"; 
        } else {
            noPuzzleMessage.style.display = 'none'; 
            mainContainer.style.display = "block";
        }
    }

    checkForEmptyWords(words);

    // Determines what to display as the results, and what the button to share should do
    function showModal(shareText) {
        const modal = document.getElementById('myModal');
        const modalText = document.getElementById('modalText');
        const formattedText = shareText.replace(/\n/g, '<br>');
        modalText.innerHTML = formattedText;
        modal.style.display = 'block';

        const closeBtn = document.getElementById('closeShare');
        closeBtn.onclick = function() {
        modal.style.display = 'none';
        };

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        };
        const shareBtn = document.getElementById('teilenButton');
        shareBtn.onclick = function() {
            let puzzleNumber = addedDays + diffDays + 1;
            let shareText = "Connections-DE \n" + "Puzzle #" + puzzleNumber + "\n \n";
            for (let x = 0; x < attemptsCategories.length; x++) {
                let attempt = "";
                for (let y = 0; y < 4; y++) {
                attempt += emojis[attemptsCategories[x][y]];
                }
                shareText = shareText + attempt + "\n";
            }
            
            if (navigator.share) {
                navigator.share({
                    title: 'Share Results',
                    text: shareText,
                    url: window.location.href
                }).then(() => {
                    console.log('Shared successfully');
                }).catch((error) => {
                    console.error('Error sharing:', error);
                    if (isMobileDevice()) {
                        const whatsappUrl = `whatsapp://send?text=${encodeURIComponent(shareText)}`;
                        window.location.href = whatsappUrl;
                    } else {
                        copyToClipboard(formattedText);
                    }
                });
            } else if (isMobileDevice()) {
                const whatsappUrl = `whatsapp://send?text=${encodeURIComponent(shareText)}`;
                window.location.href = whatsappUrl;
            } else {
                copyToClipboard(formattedText);
            }
            
            function copyToClipboard(text) {
                navigator.clipboard.writeText(text)
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
  
    // Determines the results screen and opens it
    function shareButton() {
        if (isActiveShareButton) {
          let puzzleNumber = addedDays + diffDays + 1;
          let shareText = "<b>Connections-DE \n" + "Puzzle #" + puzzleNumber + "</b> \n \n";
          for (let x = 0; x < attemptsCategories.length; x++) {
            let attempt = "";
            for (let y = 0; y < 4; y++) {
              attempt += emojis[attemptsCategories[x][y]];
            }
            shareText = shareText + attempt + "\n";
          }
          showModal(shareText);
        }
      }

    // Function to generate a new puzzle, used if there is already a puzzle present, to compare it to
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
        return words; 
    }
    
    // Shuffles the tiles, if they are well distributed
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

    // Checks if the tiles of different categories are decently well distributed
    function isWellDistributed() {
        for (let j = 0; j < 4; j++) {
            if (!isSolved[j]) { 
                let rows = 0;
                let cols = 0;
                for (let m = 0; m < 4 - isSolvedNumber; m++) {
                    for (let n = 0; n < 4; n++) {
                        if (categories[j][1].includes(removeHTMLTags(words[4 * m + n]))) {
                            rows++;
                            break;
                        }
                    }
                }
    
                for (let m = 0; m < 4; m++) {
                    for (let n = 0; n < 4 - isSolvedNumber; n++) {
                        if (categories[j][1].includes(removeHTMLTags(words[4 * n + m]))) {
                            cols++;
                            break; 
                        }
                    }
                }
    
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
    
    // Main function to create the grid with all the words
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
            const container2 = document.getElementById('container2');
            const triesInfo = document.getElementById('triesInfo');
            container2.removeChild(triesInfo);
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
        if(isMobileDevice()) {
            const cont1 = document.getElementById('container1');
            const cont2 = document.getElementById('container2');
            cont1.style.margin = "0 auto";
            cont2.style.margin = "0 auto";
            cont1.style.top = "20%";
        }
        for(let i=0; i<rows; i++) {
            for(let j=0; j<cols; j++) {
                const text = words[n];
                const gridItem = document.createElement('div');
                const fontSize = calculateFontSize(text, rows, cols);
                gridItem.classList.add('grid-item');
                gridItem.innerHTML = words[n++];
                gridItem.style.fontSize = fontSize;
                if(isMobileDevice()) {
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

    // Calculates the font size for all different words, so they are more readable
    function calculateFontSize(text, rows, cols) {
        const tempDiv = document.createElement('div');
        tempDiv.style.position = 'absolute';
        tempDiv.style.whiteSpace = 'nowrap';
        tempDiv.style.visibility = 'hidden'; 
        tempDiv.innerText = text;
    
        document.body.appendChild(tempDiv);
        const gridContainer = document.getElementById('gridContainer');
        const containerWidth = gridContainer.offsetWidth / cols; 
    
        let fontSize = 100;
        tempDiv.style.fontSize = `${fontSize}px`;
    
        while ((tempDiv.offsetWidth > containerWidth) && fontSize > 1) {
            fontSize -= 1; 
            tempDiv.style.fontSize = `${fontSize}px`;
        }
        document.body.removeChild(tempDiv);
    
        if(isMobileDevice()) fontSize *= 1.2;
        return `${fontSize*1.2}px`;
    }

    // Function to shuffle the tiles
    function shuffleButton() {
        if(isActiveShuffleButton) createGrid(4-isSolvedNumber,4);
    }

    // Compares two arrays, to determine if a guess is equal to a category
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

    // Checks if a category is equal to a guess
    function isInCategories(arr) {
        for (let i = 0; i < categories.length; i++) {
            if (isEqualArray(categories[i][1], arr)) {
                return i;
            }
        }
        return -1;
    }

    // Determines the background color of a guess
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

    // Determines how close a guess is to a category
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

    // Function to check in which category a word is (used for closeness check)
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

    // Animates the swap function for when there is a solve
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

    // Determines what to do, if a correct category has been guessed
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
        const minLength = Math.min(selectedIndices.length, firstRowIndices.length);
        const swapIndices = selectedIndices.slice(0, minLength);
        const swapFirstRowIndices = firstRowIndices.slice(0, minLength);

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
            saveProgress();
            const container2 = document.getElementById('container2');
            const triesInfo = document.getElementById('triesInfo');
            container2.removeChild(triesInfo);
        }
        saveProgress();
    }

    function makeButtonInvisible(buttonName) {
        buttonName.style.display = "none";
    }

    function makeButtonVisible(buttonName) {
        buttonName.style.display = "inline-block";
    }

    // Small animation when a guess is entered
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

    // Makes sure a notification can be shown at the top of the screen
    function showNotification(message) {
        var notification = document.createElement("div");
        notification.className = "notification";
        notification.textContent = message;
        document.getElementById("notificationContainer").appendChild(notification);
        setTimeout(function() {
            notification.classList.add("minimize"); 
            setTimeout(function() {
                notification.remove(); 
            }, 500);
        }, 4000);
    }

    // Deselects all tiles
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

    // Determines what to do, when the enter button is pressed
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
                        const mainContainer = document.getElementById('mainContainer');
                        mainContainer.classList.add('shake');
                
                        setTimeout(function() {
                            mainContainer.classList.remove('shake');
                        }, 200);

                        const tries = document.createElement('div');
                        tries.classList.add('try');
                        if(isMobileDevice()) {
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
                            const mainContainer = document.getElementById('mainContainer');
                            mainContainer.classList.add('shake');
                    
                            setTimeout(function() {
                                mainContainer.classList.remove('shake');
                            }, 200);
                            const tries = document.createElement('div');
                            tries.classList.add('try');
                            let howMany = checkHowMany(selectedWords);
                            if(isMobileDevice()) {
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
                            triesArray.push(tryX);
                            deselectAllTiles();
                            if(tryNumber >= 5) {
                                const container2 = document.getElementById('container2');
                                const triesInfo = document.getElementById('triesInfo');
                                container2.removeChild(triesInfo);
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

    var modal = document.getElementById("settings-modal");
    var gearIcon = document.getElementById("gear-icon");
    var closeBtn = document.getElementById("closeSettings");

    // When the gear icon is clicked, open the modal
    gearIcon.onclick = function() {
        modal.style.display = "flex";
    }

    // When the close button is clicked, close the modal
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    // When clicking anywhere outside the modal content, close the modal
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }

    // Small animation, to ease a try element into the screen
    function animateTryDrop(tryElement) {
        tryElement.style.transform = 'translateY(5px)';
        tryElement.style.transition = 'transform 0.5s ease';
        requestAnimationFrame(() => {
            tryElement.style.transform = 'translateY(0)';
        });
    }

    function updateTriesVisual() {
        const remainingTries = 4 - tryNumber; 
        const tryCircles = document.querySelectorAll('.try-circle');
        tryCircles.forEach((circle, index) => {
            if (index <= remainingTries) {
                circle.style.backgroundColor = 'darkgray';
            } else {
                circle.style.backgroundColor = 'white';
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

    function checkOrientation() {
        const flipMessage = document.getElementById('flip-message');
        const mainContainer = document.getElementById('mainContainer');
    
        if (window.matchMedia("(orientation: landscape)").matches && isMobileDevice()) {
            flipMessage.style.display = 'block';
            mainContainer.style.display = "none";
        } else {
            flipMessage.style.display = 'none';
            mainContainer.style.display = "block";
            createGrid(4-isSolvedNumber, 4);
            checkForEmptyWords(words);
        }
    }
    
    window.addEventListener('resize', checkOrientation);
    window.addEventListener('orientationchange', checkOrientation);
    
    checkOrientation();

    function displayTries() {
        const triesContainer = document.getElementById('triesContainer');
        triesContainer.innerHTML = ''; 
        let displayTryNumber = 1; 
        for (let i = 0; i < attempts.length; i++) {
            const tries = document.createElement('div');
            tries.classList.add('try');
            if(isMobileDevice()) {
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

    function saveSettings() {
        const settings = {
            darkMode: darkMode,
            showTries: showTries
        };
        localStorage.setItem('connectionsSettings', JSON.stringify(settings));
    }

    function loadSettings() {
        const savedSettings = localStorage.getItem('connectionsSettings');
        if (savedSettings) {
            const settings = JSON.parse(savedSettings);
            darkMode = settings.darkMode;
            showTries = settings.showTries;
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
