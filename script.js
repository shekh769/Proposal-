const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");

// When user clicks "Yes"
yesBtn.addEventListener("click", () => {
  window.location.href = "success.html"; // open new page
});

// Move "No" button randomly when hovered or touched
function moveNo() {
  const x = Math.random() * 300 - 150;
  const y = Math.random() * 300 - 150;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

noBtn.addEventListener("mouseenter", moveNo);
noBtn.addEventListener("click", moveNo);
noBtn.addEventListener("touchstart", moveNo);
