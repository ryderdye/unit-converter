/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("button-el")
let inputEl = document.getElementById("input-el")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

const meterToFeet = 3.281
const literToGallon = 0.264
const kiloToPound = 2.204

convertBtn.addEventListener("click", function(){
    
    let userInput = inputEl.value
    
    let convertedMeters = userInput * meterToFeet
    let convertedFeet = userInput / meterToFeet
    let convertedLiters = userInput * literToGallon
    let convertedGallons = userInput / literToGallon
    let convertedPounds = userInput * kiloToPound
    let convertedKilos = userInput / kiloToPound
    
    lengthEl.textContent = `${userInput} meters = ${convertedMeters.toFixed(3)} |
                            ${userInput} feet = ${convertedFeet.toFixed(3)}`
    
    volumeEl.textContent = `${userInput} liters = ${convertedLiters.toFixed(3)} |
                            ${userInput} gallons = ${convertedGallons.toFixed(3)}`
                            
    massEl.textContent = `${userInput} pounds = ${convertedPounds.toFixed(3)} |
                          ${userInput} kilos = ${convertedKilos.toFixed(3)}`
})
    
   
   
   
    /* I originally was going to do it like this because it requires writing much less code 
        but I couldn't figure out how to add .toFixed onto the string, I tried but it wasn't working

                                                                                
                                                                                
                                                                                ????????    */
    
    /* lengthEl.textContent = `${userInput} meters = ${userInput * meterToFeet.tofixed(3)} |
                            ${userInput} feet = ${userInput / meterToFeet}`
    
    volumeEl.textContent = `${userInput} liters = ${userInput * literToGallon} |
                            ${userInput} gallons = ${userInput / literToGallon}`
                            
    massEl.textContent = `${userInput} pounds = ${userInput * kiloToPound} |
                          ${userInput} kilos = ${userInput / kiloToPound}` */
    
