const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");

// ✅ Yes button click effect
yesBtn.addEventListener("click", () => {
  yesBtn.innerText = "Yay! 💖";
  yesBtn.style.backgroundColor = "#ff79a6";
  setTimeout(() => {
    window.location.href = "success.html";
  }, 800);
});

// ✅ Move the "No" button safely within screen
function moveNo() {
  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  // safe area calculation (leaving small margin)
  const maxX = screenWidth - btnWidth - 20;
  const maxY = screenHeight - btnHeight - 20;
  const x = Math.max(10, Math.random() * maxX);
  const y = Math.max(10, Math.random() * maxY);

  // move button smoothly
  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
  noBtn.style.transition = "all 0.25s ease";
}

// ✅ Events (desktop + mobile)
noBtn.addEventListener("mouseenter", moveNo);
noBtn.addEventListener("click", moveNo);
noBtn.addEventListener("touchstart", moveNo);
