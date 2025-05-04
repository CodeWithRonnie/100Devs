//Write your pseduo code first! 

//get the celsius value
//convert the celsius value to fahreinheit
//show converted celsius


document.querySelector('#checkTemp').addEventListener('click', convert)

function convert() {
    let temp = document.querySelector('#temp').value
    temp = temp * 9/5 + 32
    document.querySelector('#placeOfValue').innerText = temp

}