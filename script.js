const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");

// Yes button action remains the same
yesBtn.addEventListener("click", () => {
  yesBtn.innerText = "Yay! 💖";
  yesBtn.style.backgroundColor = "#ff79a6";
  setTimeout(() => {
    window.location.href = "success.html";
  }, 800);
});

// Function to keep "No" button strictly inside the screen
function moveNo() {
  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;
  const maxX = window.innerWidth - btnWidth - 20;
  const maxY = window.innerHeight - btnHeight - 20;
  
  // Ensure button never goes out of visible bounds
  const x = Math.max(10, Math.random() * maxX);
