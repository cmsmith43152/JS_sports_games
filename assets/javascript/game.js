console.log('hey')
// The best-practice is to pull all the elements into variables, in order to avoid
// searching the HTML tree for these elements more than once:
//let incrementButton = document.querySelector("#increment"); 
//let decrementButton = document.querySelector("#decrement"); 
//let counter = document.querySelector("#counter"); 

//reset DOM elements//
let resetButton = document.querySelector("#reset-button");
let resetCounter = document.querySelector("#num-resets");
//resetbutton//
resetButton.addEventListener("click", function () {

    console.log("+ reset-button clicked");

    let newCounterValue = Number(resetCounter.innerHTML) + 1;
    resetCounter.innerHTML = newCounterValue;
    teamoneshotCounter.innerHTML = 0
    teamonegoalsCounter.innerHTML = 0
    teamtwoshotCounter.innerHTML = 0
    teamtwogoalsCounter.innerHTML = 0
})

//teamonedom elements//
let teamoneButton = document.querySelector("#teamone-shoot-button");
let teamoneshotCounter = document.querySelector("#teamone-numshots");
let teamonegoalsCounter = document.querySelector("#teamone-numgoals");

teamoneButton.addEventListener("click", function () {
    console.log("shoot-taken team 1 clicked")

    
    
    let newCounterValue = Number(teamoneshotCounter.innerHTML) + 1;
    teamoneshotCounter.innerHTML = newCounterValue;
    let randNum = Math.random ();
    if (randNum < 0.3) {
        console.log("randNum")
    let goalsCounterValue = Number(teamonegoalsCounter.innerHTML) +1;
           teamonegoalsCounter.innerHTML = goalsCounterValue;
    }
    
})
//teamtwoshoot button // 

let teamtwoButton = document.querySelector("#teamtwo-shoot-button");
let teamtwoshotCounter = document.querySelector("#teamtwo-numshots");
let teamtwogoalsCounter = document.querySelector("#teamtwo-numgoals");

teamtwoButton.addEventListener("click", function () {
    console.log("shoot-taken team 2 clicked")
    let randNum = Math.random ();
    if (randNum < 0.3) {
        console.log("randNum")
    let goalsCounterValue = Number(teamtwogoalsCounter.innerHTML) +1;
           teamtwogoalsCounter.innerHTML = goalsCounterValue;
    }


let newCounterValue = Number(teamtwoshotCounter.innerHTML) + 1;
teamtwoshotCounter.innerHTML = newCounterValue;
})

