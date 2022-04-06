const vasarlas = document.querySelector(".vasarlas");
const diakJegy = document.querySelector(".diak");
const felnottJegy = document.querySelector(".felnott");
const felugro = document.querySelector(".felugro");
const osszeg = document.querySelector(".osszeg");
const felugrouzenet = document.querySelector(".felugrouzenet");
let diakPluszFelnottJegy;

function tranzakcioUzenet() {
  felugro.style.visibility = "visible";

  if (
    diakPluszFelnottJegy > 0 &&
    (diakJegy.value > 0 || felnottJegy.value > 0)
  ) {
    felugro.style.backgroundColor = "green";
    felugrouzenet.innerHTML = "Sikeres tranzakció!";
  } else {
    felugro.style.backgroundColor = "red";
    felugrouzenet.innerHTML = "Sikertelen tranzakció!";
  }

  let pozicio = 0;

  let animacio = setInterval(() => {
    if (pozicio != 10) {
      felugro.style.bottom = `${pozicio++}%`;
    }

    if (pozicio === 10) {
      clearInterval(animacio);
      setTimeout(() => {
        felugro.style.visibility = "hidden";
      }, 1000);
    }
  }, 15);
}

// a beviteli mező hossza nem lehet 2-nél nagyobb és nem lehet negatív szám
function inputJavit(jegy) {
  if (jegy.value.length > jegy.maxLength) {
    jegy.value = jegy.value.slice(0, jegy.maxLength);
  }
  jegy.value = Math.abs(jegy.value);
}

vasarlas.addEventListener("click", () => {
  diakPluszFelnottJegy = diakJegy.value * 2000 + felnottJegy.value * 3000;

  if (diakPluszFelnottJegy > 0) {
    tranzakcioUzenet();
    osszeg.innerHTML = `Fizetett összeg: ${diakPluszFelnottJegy} FT`;
  } else {
    tranzakcioUzenet();
    osszeg.innerHTML = "";
  }
});