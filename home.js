const typingTextElement = document.querySelector(".typing-text");
const text = "Javascript Arcade";
const cursorElement = document.querySelector(".typing-cursor");
let index = 0;

const form = document.getElementById("game-form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    if (!name) {
        alert("Please enter your name!");
        return;
    }

    if (!selectedGame) {
        alert("Please select a game!");
        return;
    }

    localStorage.setItem("playerName", name);

    window.location.href = selectedGame;
});

const musicButton = document.getElementById("music-button");
const musicIcon = musicButton.querySelector("i");
const backgroundMusic = document.getElementById("background-music");

let isPlaying = false;

musicButton.addEventListener("click", () => {
    if (isPlaying) {
        backgroundMusic.pause();
        musicIcon.classList.replace("bx-pause", "bx-play");
    } else {
        backgroundMusic.play();
        musicIcon.classList.replace("bx-play", "bx-pause");
    }
    isPlaying = !isPlaying;
});

const dropdown = document.querySelector('.custom-dropdown');
const selected = dropdown.querySelector('.dropdown-selected');
const dropdownList = dropdown.querySelector('.dropdown-list');
const StartButton = document.querySelector("#game-form button");

let selectedGame = null;

selected.addEventListener('click', (e) => {
    dropdownList.style.display = dropdownList.style.display === 'block' ? 'none' : 'block';
    selected.classList.toggle('active');
});

dropdownList.addEventListener('click', (e) => {
    const selectedItem = e.target.closest('li');
    if (selectedItem) {
        selected.querySelector('span').textContent = selectedItem.textContent.trim();
        selectedGame = selectedItem.getAttribute('data-game');
        dropdownList.style.display = 'none';
        selected.classList.remove('active');
    }
});

document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) {
        dropdownList.style.display = 'none';
        selected.classList.remove('active');
    }
});

function submitName() {
    var name = document.getElementById("name").value;

    localStorage.setItem("name", name);

    window.location.href = "rockndscissors.html";
}