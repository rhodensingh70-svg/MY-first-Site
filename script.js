 let secretNum = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
    let input = document.getElementById("guessInput");
    let result = document.getElementById("gameResult");
    let userNum = parseInt(input.value);

    if (isNaN(userNum)) {
        result.innerHTML = "Pehle number likho! 😂";
    } else if (userNum == secretNum) {
        result.innerHTML = "🎉 Mubarak ho! Sahi guess kiya!";
     let winSound = new Audio('https://www.myinstants.com/media/sounds/victory.mp3');
winSound.play();
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


function showTime() {
    let date = new Date();
    let h = date.getHours(); 
    let m = date.getMinutes(); 
    let s = date.getSeconds(); 
    
    // Time format sahi karne ke liye (01:05:09)
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    let time = h + ":" + m + ":" + s;
    document.getElementById("clockDisplay").innerText = time;
    
    setTimeout(showTime, 1000); // Har 1 second mein update hoga
}
showTime(); // Clock chalu karne ke liye


let song = document.getElementById("mySong");

function playMusic() {
    song.play();
}

function pauseMusic() {
    song.pause();
}

function changeVolume() {
    let vol = document.getElementById("volumeControl").value;
    song.volume = vol;
}





