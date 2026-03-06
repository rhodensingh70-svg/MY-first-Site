let secretNum = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
    let input = document.getElementById("guessInput");
    let result = document.getElementById("gameResult");
    let userNum = parseInt(input.value);

    if (isNaN(userNum)) {
        result.innerHTML = "Oye! Pehle number toh likho! 😂";
        result.style.color = "orange";
    } 
    else if (userNum == secretNum) {
        result.innerHTML = "🎉 SHABAASH! Ekdam sahi guess kiya!";
        result.style.color = "white";
        // Naya number sochne do
        secretNum = Math.floor(Math.random() * 10) + 1;
    } 
    else if (userNum < secretNum) {
        result.innerHTML = "📉 Thoda BADA number socho!";
        result.style.color = "yellow";
    } 
    else {
        result.innerHTML = "📈 Thoda CHOTA number socho!";
        result.style.color = "yellow";
    }
}
