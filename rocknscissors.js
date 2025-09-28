const gameContainer = document.querySelector(".container"),
    userResult = document.querySelector(".user_result img"),
    cpuResult = document.querySelector(".cpu_result img"),
    Result = document.querySelector(".result"),
    optionImages = document.querySelectorAll(".option_image");
const rps = new Audio("seffect02.mp3");


optionImages.forEach((image, index) => {
    image.addEventListener("click", (e) => {
        image.classList.add("active");

        userResult.src = cpuResult.src = "images/rock.png";
        Result.textContent = "Waiting...";


        optionImages.forEach((image2, index2) => {
            index !== index2 && image2.classList.remove("active");
        });

        gameContainer.classList.add("start");
        rps.play();
        rps.volume = 0.5;
        rps.playbackRate = 0.7;

        let time = setTimeout(() => {
            gameContainer.classList.remove("start");
            let imageSrc = e.target.querySelector("img").src;
            userResult.src = imageSrc;

            let randomNumber = Math.floor(Math.random() * 3);
            let cpuImages = ["images/rock.png", "images/paper.png", "images/scissors.png"];
            cpuResult.src = cpuImages[randomNumber];

            let cpuValue = ["R", "P", "S"][randomNumber];
            let userValue = ["R", "P", "S"][index];

            let outcomes = {
                RR: "Draw",
                RP: "Bot",
                RS: "User",
                PP: "Draw",
                PR: "User",
                PS: "Bot",
                SS: "Draw",
                SR: "Bot",
                SP: "User",
            };
            let outComeValue = outcomes[userValue + cpuValue];
            Result.textContent = userValue === cpuValue ? "Match Draw" : `${outComeValue} Won!!`;
        }, 2000);

    });
});

const homeIcon = document.querySelector('.home-icon');
homeIcon.addEventListener('click', () => {
    window.location.href = 'home.html';
});

