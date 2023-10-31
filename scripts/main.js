const score = document.getElementsByClassName("container__score")
const btnSubmit = document.getElementById("submit")
const principalContainer = document.getElementById("principalContainer")
const secondaryContainer = document.getElementById("secondaryContainer")
const finalMessage = document.getElementById("finalMessage")

let scoreValue = 0

score[0].addEventListener("click", () => {
    scoreValue = score[0].innerText
    score[1].classList.remove("background_selection")    
    score[2].classList.remove("background_selection")    
    score[3].classList.remove("background_selection")    
    score[4].classList.remove("background_selection")    
    score[0].classList.add("background_selection")   
    console.log(scoreValue)
})
score[1].addEventListener("click", () => {
    scoreValue = score[1].innerText
    score[0].classList.remove("background_selection")    
    score[2].classList.remove("background_selection")    
    score[3].classList.remove("background_selection")    
    score[4].classList.remove("background_selection")    
    score[1].classList.add("background_selection")   
    console.log(scoreValue)
})
score[2].addEventListener("click", () => {
    scoreValue = score[2].innerText
    score[0].classList.remove("background_selection")    
    score[1].classList.remove("background_selection")    
    score[3].classList.remove("background_selection")    
    score[4].classList.remove("background_selection")    
    score[2].classList.add("background_selection")   
    console.log(scoreValue)
})
score[3].addEventListener("click", () => {
    scoreValue = score[3].innerText
    score[0].classList.remove("background_selection")    
    score[1].classList.remove("background_selection")    
    score[2].classList.remove("background_selection")    
    score[4].classList.remove("background_selection")   
    score[3].classList.add("background_selection")    
    console.log(scoreValue)
})
score[4].addEventListener("click", () => {
    scoreValue = score[4].innerText
    score[0].classList.remove("background_selection")    
    score[1].classList.remove("background_selection")    
    score[2].classList.remove("background_selection")    
    score[3].classList.remove("background_selection")    
    score[4].classList.add("background_selection")    
    console.log(scoreValue)
})

btnSubmit.addEventListener("click", () => {
    // principalContainer.classList.add("hide")
    finalMessage.innerText = `You selected ${scoreValue} out of 5`
    principalContainer.style.display="none"
    secondaryContainer.style.display="flex"
})