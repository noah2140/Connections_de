document.addEventListener('DOMContentLoaded', function() {
    const categories = [["Programmiersprachen:", ["Ada", "Lua", "Java", "Python"]], 
                    ["Planeten:", ["Mars", "Merkur", "Saturn", "Venus"]],
                    ["Geliebte des Zeus:", ["Hera", "Pluto", "Rhea", "Thalia"]],
                    ["Götter nach denen Wochentage benannt sind:", ["Freya", "Thor", "Tyr", "Wodan"]]]

    let words = [];
    words = categories.map(category => category[1]).flat();  
    let selectedWords = [];
    let tryNumber = 1;
    let triesArray = [];
    let isSolved = [false, false, false, false];
    let isSolvedNumber = 0;
    let attempts = [];
    const emojis = [
        "\u{1F7E8}", "\u{1F7E9}", "\u{1F7E6}", "\u{1F7EA}" 
    ];

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
        newShareButton.style.backgroundColor = "white";
        newShareButton.style.border = "none";
        newShareButton.style.color = "white";
        newShareButton.textContent = "";
        const gridContainer = document.getElementById('gridContainer');
        gridContainer.innerHTML = '';
        let n = 0;
        shuffleTiles();
    
        for(let i=0; i<rows; i++) {
            for(let j=0; j<cols; j++) {
                const gridItem = document.createElement('div');
                gridItem.classList.add('grid-item');
                gridItem.innerHTML = words[n++];
                gridItem.addEventListener('click', function() {
                    if(this.style.backgroundColor == "lightblue") {
                        this.style.backgroundColor = "white";
                        var index = selectedWords.indexOf(this.textContent);
                        selectedWords.splice(index, 1);
                    }
                    else {
                        if(selectedWords.length<4) {
                            this.style.backgroundColor = "lightblue";
                            selectedWords.push(this.textContent);
                        }
                    }
                });
                gridContainer.appendChild(gridItem);
            }
        }
    }

    function shuffleButton() {
        createGrid(4-isSolvedNumber,4);
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

    async function isInCategories(arr) {
        for (let i = 0; i < categories.length; i++) {
            if (isEqualArray(categories[i][1], arr)) {
                solved(i);
                attempts.push([i, i, i, i]);
                return true;
            }
        }
        let tryX = selectedWords.slice().sort();
        if(selectedWords.length == 4) {
            attempts.push(checkWhichCategories(selectedWords));
            if(triesArray.length == 0) {
                const tries = document.createElement('div');
                tries.classList.add('try');
                let howMany = checkHowMany(selectedWords);
                switch(howMany) {
                    case 1:
                        tries.style.backgroundColor = "lightCoral";
                        break;
                    case 2:
                        tries.style.backgroundColor = "lightSalmon";
                        break;
                    case 3:
                        tries.style.backgroundColor = "lemonChiffon";
                        break;
                }
                tries.innerHTML = "Fehlversuch " + tryNumber++ + ": " + tryX;
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
                    switch(howMany) {
                        case 1:
                            tries.style.backgroundColor = "lightCoral";
                            break;
                        case 2:
                            tries.style.backgroundColor = "lightSalmon";
                            break;
                        case 3:
                            tries.style.backgroundColor = "lemonChiffon";
                            break;
                    }
                    tries.innerHTML = "Fehlversuch " + tryNumber++ + ": " + tryX;
                    triesContainer.appendChild(tries);
                    triesArray.push(tryX);
                    if(tryNumber == 5) {
                        const enterButton = document.getElementById('enterButton');
                        const shuffleButton = document.getElementById('shuffleButton');
                        enterButton.remove();
                        shuffleButton.remove();
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
                        newShareButton.textContent = "Share";
                    }
                }
            }
        }
        return false;
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

    function enterButton() {
        isInCategories(selectedWords);
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
        solve.innerHTML = categories[category][0] + "<br>" + categories[category][1];
        for(let i=0;i<4;i++) {
            var index = words.indexOf(categories[category][1][i]);
            words.splice(index, 1);
        }
        isSolved[category] = true;
        isSolvedNumber+=1;
        createGrid(4-isSolvedNumber,4);
        solvedContainer.appendChild(solve);
    }

    function shareButton() {
        const currentDate = new Date();
        let shareText = "Connections-DE vom " + currentDate.toDateString() + ": \n \n";
        for(let x=0;x<attempts.length;x++) {
            let attempt = "";
            for(let y=0;y<4;y++) {
                attempt += emojis[attempts[x][y]];
            }
            console.log(attempt);
            shareText = shareText + attempt + "\n";
        }
        shareText += "https://html-preview.github.io/?url=https://github.com/noah2140/Connections_de/blob/master/index.html";
        const whatsappUrl = `whatsapp://send?text=${encodeURIComponent(shareText)}`;
        window.location.href = whatsappUrl;
    }

    window.shuffleButton = shuffleButton;
    window.enterButton = enterButton;
    window.shareButton = shareButton;

    createGrid(4, 4);
});
