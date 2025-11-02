const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const msg = document.getElementById("message");

yesBtn.addEventListener("click", () => {
  msg.innerHTML = "Yay! 🥰 Seema said YES! 💖 You're my world — forever.";

  // 100 floating hearts
  for (let i = 0; i < 100; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.textContent = "💖";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = Math.random() * 100 + "vh";
    heart.style.animationDuration = Math.random() * 2 + 2 + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 3000);
  }
});

noBtn.addEventListener("click", () => {
  alert("Arre Seema 😝, ek baar aur soch lo!");
});
