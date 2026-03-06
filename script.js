// Ye pehle wala button ka function hai
function greetUser() {
    alert("Hello! Thanks for visiting my website.");
}

// Ye naya function hai jo form submit hone par chalega
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Isse page refresh nahi hoga
    alert("Shukriya! Aapka message bhej diya gaya hai.");
});

<div class="game-section">
    <h3>Game: Guess a Number (1-10)</h3>
    <input type="number" id="guessInput" placeholder="Enter number">
    <button onclick="checkGuess()">Guess!</button>
    <p id="gameResult"></p>
</div>
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
