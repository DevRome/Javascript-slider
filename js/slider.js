import {users} from "./data.js"

const sliderContainer = document.querySelector(".slider-container")

// initialize counter
let counter = 0

console.log(users)
// create cards
window.addEventListener("DOMContentLoaded", ()=>{

    let cardsTemplate = "";

    // create the cards using data in "users"
    users.forEach((user, index)=>{
        let cardTemplate = `
        <div class="card">
            <div class="user-image-box">
                <img src="${user.img}" alt="${user.name}">
            </div>
            <div class="user-data-box">
                <h3 class="user-name">${user.name}</h3>
                <h4 class="user-job">${user.job}</h4>
            </div>
            <div class="user-description-box">
                <p class="user-description">${user.description}</p>
            </div>
            <div class="hidden-fields">
                <input class="user-id" type="hidden" value="${user.id}">
                <input class="card-index" type="hidden" value="${index}">
            </div>
        </div>
        `

        cardsTemplate += cardTemplate
        
    })

    sliderContainer.innerHTML += cardsTemplate
    
    // set cards position at page loading
    const allCards = document.querySelectorAll(".card")
    const numberOfCards = allCards.length - 1

    allCards.forEach((card)=>{
        card.classList.add("lastCard")
    })
    allCards[counter].classList.remove("lastCard")
    allCards[counter].classList.add("active")

    allCards[numberOfCards].classList.remove("active", "lastCard")
    allCards[numberOfCards].classList.add("nextCard")
})


// get btns
const prevBtn = document.querySelector(".prevBtn")
const nextBtn = document.querySelector(".nextBtn")

// next card
nextBtn.addEventListener("click", ()=>{


    const allCards = document.querySelectorAll(".card")
    const numberOfCards = allCards.length - 1

    // increment counter of 1 or restart it
    counter -= 1;
    if(counter < 0) counter = numberOfCards
    console.log(counter)

    // tolgo tutte le classi
    allCards.forEach((card)=>{
        card.classList.remove("active", "lastCard", "nextCard")
    })

    // imposto la classe active
    allCards[counter].classList.add("active")
    
    // imposto la classe nextCard
    if(counter - 1 <= 0){
        allCards[numberOfCards].classList.add("nextCard")
    }else{
        allCards[counter - 1].classList.add("nextCard")
    }

    // aggiungo la class lastCard se la carta non ha class active e nextCard
    allCards.forEach((card)=>{
        if(!card.classList.contains("active") && !card.classList.contains("nextCard")) card.classList.add("lastCard")
    })

})

prevBtn.addEventListener("click", ()=>{

    const allCards = document.querySelectorAll(".card")
    const numberOfCards = allCards.length - 1

    // increment counter of 1 or restart it
    counter += 1;
    if(counter > numberOfCards) counter = 0
    console.log(counter)

    // tolgo tutte le classi
    allCards.forEach((card)=>{
        card.classList.remove("active", "lastCard", "nextCard")
    })

    // imposto la classe active
    allCards[counter].classList.add("active")
    
    // imposto la classe lastCard
    if(counter + 1 <= numberOfCards){
        allCards[counter + 1].classList.add("lastCard")
    }else{
        allCards[0].classList.add("lastCard")
    }

    // aggiungo la class nextCard se la carta non ha class active e lastCard
    allCards.forEach((card)=>{
        if(!card.classList.contains("active") && !card.classList.contains("lastCard")) card.classList.add("nextCard")                                                                             
    })
})


