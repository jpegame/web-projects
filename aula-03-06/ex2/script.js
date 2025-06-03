const nave = document.querySelector(".nave");
let x = 0;
let y = 0;
const speed = 20;
const bulletSpeed = 5;

const spawnBullet = () => {
  const bullet = document.createElement("span");
  let bulletY = y - 55;

  bullet.classList.add("bullet");
  bullet.style.left = `${x + 47}px`;
  bullet.style.top = `${bulletY}px`;

  document.body.appendChild(bullet);

  const interval = setInterval(() => {
    bulletY -= bulletSpeed;
    if (bulletY < -20) {
      bullet.remove();
      clearInterval(interval);
    } else {
      bullet.style.top = `${bulletY}px`;
    }
  }, 20);
};

document.addEventListener("keydown", (e) => {
  if (e.key === " ") {
    spawnBullet();
  }
  if (e.key === "ArrowUp") {
    y -= speed;
  }
  if (e.key === "ArrowDown") {
    y += speed;
  }
  if (e.key === "ArrowLeft") {
    x -= speed;
  }
  if (e.key === "ArrowRight") {
    x += speed;
  }
  nave.style.left = `${x}px`;
  nave.style.top = `${y}px`;
});
