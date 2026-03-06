 let secretNum = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
    let input = document.getElementById("guessInput");
    let result = document.getElementById("gameResult");
    let userNum = parseInt(input.value);

    if (isNaN(userNum)) {
        result.innerHTML = "Pehle number likho! 😂";
    } else if (userNum == secretNum) {
        result.innerHTML = "🎉 Mubarak ho! Sahi guess kiya!";
        secretNum = Math.floor(Math.random() * 10) + 1;
    } else if (userNum < secretNum) {
        result.innerHTML = "📉 Thoda BADA number socho!";
    } else {
        result.innerHTML = "📈 Thoda CHOTA number socho!";
    }
}
function toggleDarkMode() {
    let body = document.body;
    // Agar background green hai toh dark kar do, varna wapas green
    if (body.style.backgroundColor === "rgb(46, 204, 113)" || body.style.backgroundColor === "") {
        body.style.backgroundColor = "#2c3e50";
        body.style.color = "white";
    } else {
        body.style.backgroundColor = "#2ecc71";
        body.style.color = "black";
    }
}
