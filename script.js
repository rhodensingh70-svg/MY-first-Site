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
