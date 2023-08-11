// Variables
const screenOne = document.querySelector(".screenOne")
const screenTwo = document.querySelector(".screenTwo")
const raffle = document.querySelector("#raffle")
const tryAgain = document.querySelector("#tryAgain")
let randomNumber = Math.round(Math.random() * 10)

// Functions
function pickPhrase(number) {
  switch (randomNumber) {
    case 0:
      screenTwo.querySelector("p").innerText =
        "Sem o fogo do entusiasmo, não há o calor da vitória."
      break
    case 1:
      screenTwo.querySelector("p").innerText =
        "Quem quer colher rosas tem de estar preparado para suportar os espinhos"
      break
    case 2:
      screenTwo.querySelector("p").innerText =
        "Uma bela flor é incompleta sem as suas folhas."
      break
    case 3:
      screenTwo.querySelector("p").innerText =
        "Surpreender e ser surpreendido é o segredo do amor."
      break
    case 4:
      screenTwo.querySelector("p").innerText =
        "Espere pelo mais sábio dos conselhos: o tempo."
      break
    case 5:
      screenTwo.querySelector("p").innerText =
        "A inspiração vem dos outros. A motivação vem de dentro de nós."
      break
    case 6:
      screenTwo.querySelector("p").innerText =
        "Realize o óbvio, pense no improvável e conquiste o impossível."
      break
    case 7:
      screenTwo.querySelector("p").innerText =
        "Acredite em milagres, mas não dependa deles."
      break
    case 8:
      screenTwo.querySelector("p").innerText =
        "Motivação não é sinónimo de transformação, mas um passo em sua direção."
      break
    case 9:
      screenTwo.querySelector("p").innerText =
        "O conhecimento é a única virtude e a ignorância é o único vício."
      break
    case 10:
      screenTwo.querySelector("p").innerText =
        "Coragem é a resistência ao medo, domínio do medo, e não a ausência do medo."
      break
    default:
      screenTwo.querySelector("p").innerText =
        "Deixe de lado as preocupações e seja feliz."
  }
}
function toggleScren() {
  screenOne.classList.toggle("hide")
  screenTwo.classList.toggle("hide")
}
function handleTryLuck(event) {
  toggleScren()
  pickPhrase()
}
function handleTryAgain() {
  toggleScren()
  pickPhrase()
  randomNumber = Math.round(Math.random() * 10)
}

// Events
raffle.addEventListener("click", handleTryLuck)
tryAgain.addEventListener("click", handleTryAgain)
document.addEventListener("keydown", function (e) {
  if (e.key == "Enter" && screenTwo.classList.contains("hide")) {
    handleTryAgain()
  } else if (e.key == "Enter" && screenOne.classList.contains("hide")) {
    handleTryLuck()
  }
})
