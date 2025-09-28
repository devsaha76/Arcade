const wordText = document.querySelector(".word"),
hintText = document.querySelector(".hint span"),
timeText = document.querySelector(".time b"),
inputField = document.querySelector("input"),
refreshBtn = document.querySelector(".refresh-word"),
checkBtn = document.querySelector(".check-word");

let correctWord;
let timer;

const showAlert = (message) => {
    const alertBox = document.querySelector('.alert-message');
    alertBox.querySelector('p').innerText = message;

    clearInterval(timer);

    alertBox.style.display = 'block';

    alertBox.querySelector('.okay-btn').addEventListener('click', () => {
        alertBox.style.display = 'none';
        initGame();
    });

    alertBox.querySelector('.back-to-menu-btn').addEventListener('click', () => {
        window.location.href = 'home.html';
    });
};

const homeIcon = document.querySelector('.home-icon');
homeIcon.addEventListener('click', () => {
    window.location.href = 'home.html';
});

const initTimer = maxTime => {
    clearInterval(timer);
    timer = setInterval(() => {
        if (maxTime > 0) {
            maxTime--;
            return timeText.innerText = maxTime;
        }
        clearInterval(timer);
        showAlert(`Times Up! ${correctWord.toUpperCase()} was the correct word`);
        
    }, 1000);
}

const initGame = () => {
    initTimer(30);
    let randomObj = words[Math.floor(Math.random() * words.length)];
    let wordArray = randomObj.word.split("");
    for (let i = wordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
    wordText.innerText = wordArray.join("");
    hintText.innerText = randomObj.hint;
    correctWord = randomObj.word.toLowerCase();
    inputField.value = "";
    inputField.setAttribute("maxlength", correctWord.length);
}

const resetGame = () => {
    inputField.value = "";
    initGame();
};


const checkWord = () => {
    let userWord = inputField.value.toLocaleLowerCase();
    if(!userWord) return alert("Please enter a word");
    if(userWord !== correctWord) return alert(`Oops! ${userWord} is not a correct word`);
    showAlert(`Congrats! ${userWord.toUpperCase()} is a correct word`);
}

refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord);

initGame();

