let secretNum = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
    let input = document.getElementById("guessInput");
    let result = document.getElementById("gameResult");
    let userNum = parseInt(input.value);

    if (isNaN(userNum)) {
        result.innerHTML = "Pehle number toh likho! 😂";
        result.style.color = "orange";
    } else if (userNum == secretNum) {
        result.innerHTML = "🎉 Mubarak ho! Sahi guess kiya!";
        result.style.color = "white";
        // Naya number set karein agli baar ke liye
        secretNum = Math.floor(Math.random() * 10) + 1;
    } else {
        result.innerHTML = "❌ Galat! Phir se koshish karo.";
        result.style.color = "yellow";
    }
}

