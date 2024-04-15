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
        const newShareButton = document.getElementById('shButton');
        const enterBtn = document.getElementById('enterButton');
        const shuffleBtn = document.getElementById('shuffleButton');
        if(!isActiveShareButton) {
            makeButtonInvisible(newShareButton);
        }
        else {
            makeButtonVisible(newShareButton);
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
                    var index = words.indexOf(categories[n][1][i]);
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
    
        const baseFontSizeMobile = 6; 
        const minFontSizeMobile = 0.2;
        const maxFontSizeMobile = 40;
        const lengthFactorMobile = 0.2; 
    
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
                solve.style.backgroundColor = "#FFFF66";
                break;
            case 1:
                solve.style.backgroundColor = "paleGreen";
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
            const newShareButton = document.getElementById('shButton');
            makeButtonVisible(newShareButton);
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
        console.log(selectedWords + " " + categories);
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
                                const newShareButton = document.getElementById('shButton');
                                makeButtonVisible(newShareButton);
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
            let shareText = "Connections-DE vom " + currentDate.toDateString() + ": \n \n";
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
                    solve.style.backgroundColor = "#FFFF66";
                    break;
                case 1:
                    solve.style.backgroundColor = "paleGreen";
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
