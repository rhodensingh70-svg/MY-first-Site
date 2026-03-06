
let randomNumber = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
    let userGuess = document.getElementById("guessInput").value;
    let result = document.getElementById("gameResult");

    if (userGuess == "") {
        result.innerHTML = "Pehle koi number toh likho! 😂";
        result.style.color = "orange";
    } else if (userGuess == randomNumber) {
        result.innerHTML = "🎉 Mubarak ho! Sahi guess kiya!";
        result.style.color = "green";
        // Agli baar ke liye naya number generate karna
        randomNumber = Math.floor(Math.random() * 10) + 1;
    } else {
        result.innerHTML = "❌ Galat! Phir se koshish karo.";
        result.style.color = "red";
    }
}
