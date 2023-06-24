'use strict'

// DOM Elements
const waterBtnsContainer = document.querySelector('.water-buttons')
const waterGoalForm = document.querySelector('.form')
const waterGoalInput = document.querySelector('.form #waterGoal')
const waterGoalText = document.querySelector('#waterGoalText')
const amountWaterDrankText = document.querySelector('#amountWaterDrankText')
const percOfGoalText = document.querySelector('#percOfGoalText')
const timesWaterGoalCompletedText = document.querySelector('#timesWaterGoalCompletedText')

let waterGoal = 0
let amountWaterDrank = 0
let percOfGoal = waterGoal !== 0 ? Math.round(amountWaterDrank / waterGoal * 100) : 0
let timesWaterGoalCompleted = 0
let waterIntakeGoal = waterGoal
let waterHadToday = 0
let lastTimeWaterGoalCompleted

let waterBtnsArr = [8, 16, 24, 32, 40, 48, 56, 64]

// Set Watter Buttons 
waterBtnsArr.map((amount) => {
  
  let waterBtn = document.createElement('button')
  waterBtn.classList.add('btn', 'water-btn')

  waterBtn.innerText = `${amount} oz`

  waterBtnsContainer.appendChild(waterBtn)
})

// Set Text for sentence elements at the bottom of the page 
waterGoalText.innerText = `Your goal is to drink ${waterGoal} amount of water today`
amountWaterDrankText.innerHTML = `You've Drank ${amountWaterDrank} Ounces of Water Today`
percOfGoalText.innerHTML = `You've completed ${percOfGoal}% of your water intake goal`
timesWaterGoalCompletedText.innerHTML = `You've reached your water goal ${timesWaterGoalCompleted} amount of days`

// Handle Input Goal Form 
waterGoalForm.addEventListener('submit', (e) => {
  e.preventDefault() 

  console.log(waterGoalInput.value)

  waterGoal = waterGoalInput.value
  percOfGoal = Math.round(amountWaterDrank / waterGoal * 100)

  waterGoalText.innerText = `Your goal is to drink ${waterGoal} amount of water today`
  percOfGoalText.innerHTML = `You've completed ${percOfGoal}% of your water intake goal`

  waterGoalInput.value = ''
})

// Adding event listener on water buttons 
let waterBtns = waterBtnsContainer.children

const getDate = () => {
  let date = new Date() 
  date = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
  return date 
}

Array.from(waterBtns).forEach((btn) => {
  btn.addEventListener('click', (e) => {
    amountWaterDrank = amountWaterDrank + Number(btn.innerText.replace(/\D/g,'')) 

    if (waterGoal !== 0) {
      percOfGoal = Math.round(amountWaterDrank / waterGoal * 100)
    }

    if (percOfGoal >= 100) {
      const lastTimeWaterGoalCompleted = getDate() 

      if (timesWaterGoalCompleted === 0) {
        timesWaterGoalCompleted++ 
        timesWaterGoalCompletedText.innerHTML = `You've reached your water goal ${timesWaterGoalCompleted} amount of days`
      } else if (lastTimeWaterGoalCompleted !== getDate()) {
        timesWaterGoalCompleted++ 
        timesWaterGoalCompletedText.innerHTML = `You've reached your water goal ${timesWaterGoalCompleted} amount of days`
      }
    }
    
    amountWaterDrankText.innerHTML = `You've Drank ${amountWaterDrank} Ounces of Water Today`
    percOfGoalText.innerHTML = `You've completed ${percOfGoal}% of your water intake goal`
    
  })
})