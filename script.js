// Ye pehle wala button ka function hai
function greetUser() {
    alert("Hello! Thanks for visiting my website.");
}

// Ye naya function hai jo form submit hone par chalega
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Isse page refresh nahi hoga
    alert("Shukriya! Aapka message bhej diya gaya hai.");
});
