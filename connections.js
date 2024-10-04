document.addEventListener('DOMContentLoaded', function() {

    // List of puzzles - most are currently placeholders
    const puzzles = [
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

    const noPuzzleMessage = document.getElementById('no-puzzle-message');
    noPuzzleMessage.style.display = "none";

    const mainContainer = document.getElementById('mainContainer');
    mainContainer.style.display = "none";

    const addedDays = 177;
    const startDate = new Date('10/3/2024');
    let currentDate = new Date();
    let diffTime = Math.abs(currentDate - startDate);
    let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) - 1;
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

    function isMobileDevice() {
        return /Mobi|Android/i.test(navigator.userAgent);
    }

    function checkForEmptyWords(words) {
        const noPuzzleMessage = document.getElementById('no-puzzle-message');
        const mainContainer = document.getElementById('mainContainer');
    
        // Hide the no puzzle message by default
        noPuzzleMessage.style.display = "none";
        mainContainer.style.display = "none";
        
        // Check for any empty string in the words array
        let hasEmptyString = words.includes("<b></b>"); // Check directly if the array includes an empty string
    
        // Show or hide messages based on the presence of empty strings
        if (hasEmptyString) {
            noPuzzleMessage.style.display = 'block'; // Show message
            mainContainer.style.display = "none"; // Hide main container
        } else {
            noPuzzleMessage.style.display = 'none'; // Hide message
            mainContainer.style.display = "block"; // Show main container
        }
    }

    checkForEmptyWords(words);

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
            let puzzleNumber = addedDays + diffDays + 1;
            let shareText = "Connections-DE \n" + "Puzzle #" + puzzleNumber + "\n \n";
            for (let x = 0; x < attemptsCategories.length; x++) {
                let attempt = "";
                for (let y = 0; y < 4; y++) {
                attempt += emojis[attemptsCategories[x][y]];
                }
                shareText = shareText + attempt + "\n";
            }
            
            if (isMobileDevice) {
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
          let puzzleNumber = addedDays + diffDays + 1;
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
        if(isMobileDevice) {
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
                if(isMobileDevice) {
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

    function calculateFontSize(text, rows, cols) {
        // Create a temporary element to measure text size
        const tempDiv = document.createElement('div');
        tempDiv.style.position = 'absolute';
        tempDiv.style.whiteSpace = 'nowrap';
        tempDiv.style.visibility = 'hidden';  // Hide element for measuring only
        tempDiv.innerText = text;
    
        document.body.appendChild(tempDiv);

        const gridContainer = document.getElementById('gridContainer');
    
        // Measure the container's dimensions (each grid item)
        const containerWidth = gridContainer.offsetWidth / cols; // grid item's width
    
        // Start with a large font size and iteratively reduce until it fits
        let fontSize = 100; // Start with a large font size
        tempDiv.style.fontSize = `${fontSize}px`;
    
        // Reduce font size until the text fits within the container
        while ((tempDiv.offsetWidth > containerWidth) && fontSize > 1) {
            fontSize -= 1;  // Decrease font size by 1px increments
            tempDiv.style.fontSize = `${fontSize}px`;
        }
    
        // Remove the temporary element
        document.body.removeChild(tempDiv);
    
        // Return the calculated font size in pixels
        if(isMobileDevice) fontSize *= 1.2;
        return `${fontSize*1.2}px`;
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
                        if(isMobileDevice) {
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
                            if(isMobileDevice) {
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

    function checkOrientation() {
        const flipMessage = document.getElementById('flip-message');
        const mainContainer = document.getElementById('mainContainer');
    
        // Check if the device is in portrait mode
        if (window.matchMedia("(orientation: landscape)").matches && isMobileDevice) {
            flipMessage.style.display = 'block';  // Show message
            mainContainer.style.display = "none";
        } else {
            flipMessage.style.display = 'none';
            mainContainer.style.display = "block"; // Hide message
            checkForEmptyWords(words);
        }
    }
    
    // Add event listeners to check for orientation change
    window.addEventListener('resize', checkOrientation);
    window.addEventListener('orientationchange', checkOrientation);
    
    // Check orientation on page load
    checkOrientation();

    function displayTries() {
        const triesContainer = document.getElementById('triesContainer');
        triesContainer.innerHTML = ''; 
        let displayTryNumber = 1; 
        for (let i = 0; i < attempts.length; i++) {
            const tries = document.createElement('div');
            tries.classList.add('try');
            if(isMobileDevice) {
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
