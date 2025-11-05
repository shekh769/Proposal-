// ✅ Button references
const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");

// ✅ "Yes" Button Action
yesBtn.addEventListener("click", () => {
  yesBtn.innerText = "Yay! 💖";
  yesBtn.style.backgroundColor = "#ff79a6";
  setTimeout(() => {
    window.location.href = "success.html"; // Redirect after 1s
  }, 800);
});

// ✅ Function to move "No" button randomly (safe range)
function moveNo() {
  const maxX = window.innerWidth - noBtn.offsetWidth - 20;
  const maxY = window.innerHeight - noBtn.offsetHeight - 20;
  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
  noBtn.style.transition = "all 0.2s ease";
}

// ✅ Move button on hover, click, or touch
noBtn.addEventListener("mouseenter", moveNo);
noBtn.addEventListener("click", moveNo);
noBtn.addEventListener("touchstart", moveNo);
