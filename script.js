// script.js
// Basic interactivity + falling hearts effect

const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const final = document.getElementById('final');
const card = document.getElementById('card');
const heartsEl = document.getElementById('hearts');
const restart = document.getElementById('restart');

/* MOVE 'No' button away on hover/touch */
function moveNoButton() {
  // move within visible viewport area
  const rangeX = Math.min(window.innerWidth * 0.5, 260);
  const randomX = Math.floor(Math.random() * rangeX) - (rangeX / 2);
  const randomY = Math.floor(Math.random() * 120) - 60;
  noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
}
noBtn.addEventListener('mouseover', moveNoButton);
noBtn.addEventListener('touchstart', (e) => { moveNoButton(); e.preventDefault(); }, { passive: false });

/* YES clicked -> show final screen + hearts */
yesBtn.addEventListener('click', () => {
  // small pop animation
  yesBtn.style.transform = 'scale(0.96)';
  setTimeout(()=> yesBtn.style.transform = '', 140);

  // show final overlay
  final.classList.add('show');

  // launch many hearts
  launchHearts(20);
});

/* restart */
restart.addEventListener('click', () => {
  final.classList.remove('show');
  // clear hearts
  heartsEl.innerHTML = '';
});

/* create falling heart element and animate with CSS transitions */
function createHeart(xPercent,leftOffset){
  const el = document.createElement('div');
  el.className = 'heart';
  // position near top using random left
  const left = (Math.random() * 100) + leftOffset;
  el.style.left = `${left}%`;
  el.style.top = '-30px';
  // random size and rotation
  const size = 14 + Math.random() * 22;
  el.style.width = `${size}px`;
  el.style.height = `${size}px`;
  el.style.borderRadius = '4px';
  el.style.transform = `translateX(-50%) rotate(${10 + Math.random()*40}deg)`;
  el.style.background = `linear-gradient(135deg, rgba(255,78,136,1), rgba(255,191,217,0.95))`;
  el.style.opacity = 0.95;
  heartsEl.appendChild(el);

  // animate using requestAnimationFrame and CSS transitions
  const duration = 3500 + Math.random()*1600;
  el.style.transition = `transform ${duration}ms cubic-bezier(.2,.9,.2,1), top ${duration}ms linear, opacity ${duration}ms`;
  // force reflow then set final position
  requestAnimationFrame(()=>{
    el.style.top = `${80 + Math.random()*30}%`;
    const xMove = (Math.random()*200 - 100);
    el.style.transform = `translateX(${xMove}px) rotate(${Math.random()*720}deg)`;
    el.style.opacity = 0;
  });

  // remove after animation
  setTimeout(()=> el.remove(), duration + 200);
}

/* launch multiple hearts from top */
function launchHearts(count=12){
  for(let i=0;i<count;i++){
    setTimeout(()=> createHeart(), i*120);
  }
}

/* small continuous gentle heart rain (background) */
let rainInterval = setInterval(()=> {
  createHeart();
}, 900);

/* optional: add keyboard shortcut (for testing): press Y to trigger Yes */
document.addEventListener('keydown', (e)=>{
  if(e.key.toLowerCase() === 'y') yesBtn.click();
});

/* make sure 'no' button stays visible on screen on resize */
window.addEventListener('resize', ()=> {
  noBtn.style.transform = '';
});
