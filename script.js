const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");

// "Yes" Button Action
yesBtn.addEventListener("click", () => {
  yesBtn.innerText = "Yay! 💖";
  yesBtn.style.backgroundColor = "#ff79a6";
  setTimeout(() => {
    window.location.href = "success.html";
  }, 800);
});

// Function to move "No" button
