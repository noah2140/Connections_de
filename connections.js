document.addEventListener('DOMContentLoaded', function() {

    const puzzles = [
    [["Weißes Pulver", ["Kokain", "Mehl", "Salz", "Zucker"]], ["Allergien", ["Gras", "Haar", "Milch", "Nuss"]], ["Vorkommend in Breaking Bad", ["Labor", "Maske", "Methamphetamin", "Wohnmobil"]], ["Homographen", ["Collagen", "Heroin", "Modern", "Umfahren"]]],
    [["Häufig während Halloween gesehen", ["Fledermaus", "Geist", "Skelett", "Spinne"]], ["Gesunde Beschreibung des Kopfs einer Person", ["Birne", "Kürbis", "Nuss", "Tomate"]], ["Bestandteil von Chips", ["Essig", "Kartoffel", "Öl", "Salz"]], ["Motor_", ["Boot", "Leistung", "Rad", "Raum"]]],
    [["Schachfiguren", ["Bauer", "Dame", "König", "Turm"]], ["Küchengeräte", ["Mühle", "Presse", "Reibe", "Sieb"]], ["Am Ende von Künstlern mit Nummer-1 Alben", ["Berg", "Fischer", "Hosen", "Park"]], ["_Klub", ["Automobil", "Buch", "Fussball", "Schach"]]],
    [["Einheiten", ["DB", "KG", "NM", "PA"]], ["Chemische Elemente die nach Wissenschaftlern benannt sind", ["ES", "FM", "MD", "NO"]], ["EU-Gründerstaaten", ["BE", "DE", "FR", "NL"]], ["Originaltitel von Filmen", ["IT", "ME", "PI", "UP"]]]
    ];

    const startDate = new Date('4/11/2024');
    let currentDate = new Date();
    let diffTime = Math.abs(currentDate - startDate);
    let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    let categories = puzzles[diffDays];
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
        let words = []; 
        words = categories.map(category => category[1]).flat();
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
        if(!isActiveEnterButton) {
            makeButtonInvisible(enterBtn);
            makeButtonInvisible(shuffleBtn);
        }
        const gridContainer = document.getElementById('gridContainer');
        gridContainer.innerHTML = '';
        let n = 0;
        words = categories.map(category => category[1]).flat(); 
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
            enterBtn.style.fontSize = "15px";
            shuffleBtn.style.fontSize = "15px";
            newShareButton.style.fontSize = "15px";
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
        const baseFontSizeDesktop = 3; 
        const minFontSizeDesktop = 0.2; 
        const maxFontSizeDesktop = 80; 
        const lengthFactorDesktop = 0.1; 
    
        const baseFontSizeMobile = 3.8; 
        const minFontSizeMobile = 0.2;
        const maxFontSizeMobile = 40;
        const lengthFactorMobile = 0.1; 
    
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
                tries.innerHTML += " (Sehr Kalt)"
                break;
            case 2:
                tries.style.backgroundColor = "paleGreen";
                tries.innerHTML += " (Lauwarm)"
                break;
            case 3:
                tries.style.backgroundColor = "lightSalmon";
                tries.innerHTML += " (Heiß)"
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
                solve.style.backgroundColor = "moccasin";
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
        solve.innerHTML = "<b>" + categories[category][0]+ "</b>" + "<br>" + categories[category][1];
        if(isMobile == true) {
            solve.style.fontSize = "15px";
        }
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
            newShareButton.style.backgroundColor = "beige";
            newShareButton.style.border = "thin solid black";
            newShareButton.style.color = "black";
            newShareButton.textContent = "Teilen";
            isActiveShareButton = true;
            const gridCont = document.getElementById('gridContainer');
            gridCont.style.padding = "0px";
        }
        saveProgress();
    }

    function makeButtonInvisible(buttonName) {
        buttonName.style.backgroundColor = "white";
        buttonName.style.border = "none";
        buttonName.style.color = "white";
        buttonName.textContent = "";
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
                attempts.push(tryX);
                attemptsCategories.push(checkWhichCategories(selectedWords))
                if(selectedWords.length == 4) {
                    if(triesArray.length == 0) {
                        const tries = document.createElement('div');
                        tries.classList.add('try');
                        if(isMobile == true) {
                            tries.style.fontSize = "20px";
                        }
                        tries.innerHTML = "Fehlversuch " + tryNumber + ": " + "<br>" + tryX;
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
                            tries.innerHTML = "Fehlversuch " + tryNumber + ": " + "<br>" + tryX;
                            tryNumber += 1;
                            closenessChecker(howMany, tries);
                            if(isMobile == true) {
                                tries.style.fontSize = "20px";
                            }
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
                                newShareButton.style.backgroundColor = "beige";
                                newShareButton.style.border = "thin solid black";
                                newShareButton.style.color = "black";
                                newShareButton.textContent = "Teilen";
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
                    solve.style.backgroundColor = "moccasin";
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
            solve.innerHTML = "<b>" + categories[cat][0]+ "</b>" + "<br>" + categories[cat][1];
            if (isMobile == true) {
                solve.style.fontSize = "15px";
            }
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
            if (isMobile == true) {
                tries.style.fontSize = "20px";
            }
            tries.innerHTML = "Fehlversuch " + (displayTryNumber++) + ": " + "<br>" + attempts[i].join(', '); 
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
        console.log(savedDateStr + " " + currentDateWithoutTime);
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
