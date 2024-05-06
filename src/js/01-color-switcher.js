// Funcție pentru a genera o culoare hexagonală aleatorie
function getRandomHexColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

// Referințe către butoane
const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');

let intervalId; // Variabilă pentru a stoca ID-ul intervalului pentru oprirea ulterioară

// Funcție pentru schimbarea culorii de fundal la fiecare secundă
function changeBackgroundColor() {
    document.body.style.backgroundColor = getRandomHexColor();
}

// Evenimentul de clic pe butonul "Start"
startButton.addEventListener('click', function() {
    startButton.disabled = true; // Dezactivarea butonului "Start"
    stopButton.disabled = false; // Activarea butonului "Stop"

    intervalId = setInterval(changeBackgroundColor, 1000); // Pornirea intervalului de schimbare a culorii
});

// Evenimentul de clic pe butonul "Stop"
stopButton.addEventListener('click', function() {
    startButton.disabled = false; // Activarea butonului "Start"
    stopButton.disabled = true; // Dezactivarea butonului "Stop"

    clearInterval(intervalId); // Oprirea schimbării culorii
});

