let secretNum = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
    let input = document.getElementById("guessInput");
    let result = document.getElementById("gameResult");
    let userNum = parseInt(input.value);

    if (isNaN(userNum)) {
        result.innerHTML = "Oye! Pehle number toh likho! 😂";
        result.style.color = "orange";
    } 
    else if (userNum === secretNum)
    document.body.style.backgroundColor = "#f1c40f"; // Gold color for win!
setTimeout(() => { document.body.style.backgroundColor = "#2ecc71"; }, 1000);{
        result.innerHTML = "🎉 SHABAASH! Ekdam sahi pakde hain!";
        result.style.color = "white";
        // Sahi hone par naya number sochne do computer ko
        secretNum = Math.floor(Math.random() * 10) + 1;
    } 
    else if (userNum < secretNum) {
        result.innerHTML = "📉 Thoda BADA number socho! (Too Low)";
        result.style.color = "yellow";
    } 
    else if (userNum > secretNum) {
        result.innerHTML = "📈 Thoda CHOTA number socho! (Too High)";
        result.style.color = "yellow";
    }
}

