const score = document.getElementsByClassName("container__score")

score[0].addEventListener("click", () => {
    console.log("presionaste el numero 1")
    score[0].classList.toggle("background_selection")
})
score[1].addEventListener("click", () => {
    console.log("presionaste el numero 2")
    score[1].classList.toggle("background_selection")
})
score[2].addEventListener("click", () => {
    console.log("presionaste el numero 3")
    score[2].classList.toggle("background_selection")
})
score[3].addEventListener("click", () => {
    console.log("presionaste el numero 4")
    score[3].classList.toggle("background_selection")
})
score[4].addEventListener("click", () => {
    console.log("presionaste el numero 5")
    score[4].classList.toggle("background_selection")
})