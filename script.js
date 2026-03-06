let secretNum = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
    let input = document.getElementById("guessInput");
    let result = document.getElementById("gameResult");
    
    // Check if elements exist
    if(!input || !result) {
        console.log("Input or Result box not found!");
        return;
    }

    let userNum = parseInt(input.value);

    if (isNaN(userNum)) {
        result.innerHTML = "Pehle number likho! 😂";
        result.style.color = "orange";
    } else if (userNum == secretNum) {
        result.innerHTML = "🎉 Mubarak ho! Sahi guess kiya!";
        result.style.color = "white";
        secretNum = Math.floor(Math.random() * 10) + 1;
    } else if (userNum < secretNum) {
        result.innerHTML = "📉 Thoda BADA number socho!";
        result.style.color = "yellow";
    } else {
        result.innerHTML = "📈 Thoda CHOTA number socho!";
        result.style.color = "yellow";
    }
}
