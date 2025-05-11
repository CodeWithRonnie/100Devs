// *Variables*
// Create a variable and console log the value
let homeWork = 'Done';
console.log(homeWork);
// Create a variable, add 10 to it, and alert the value
let number = 10;
console.log(number);
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtractFourNums(n1,n2,n3,n4){
    let diff = n1-n2-n3-n4
    alert(diff)
}

subtractFourNums(22,20,18,16)
// Create a function that divides one number by another and returns the remainder
function getRemainder(no1, no2){
    let remainder = no1 // no2
    return remainder
}

console.log(getRemainder(12,3))
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function jumanji(num1, num2){
    let sum = num1 + num2

    if (sum >= 50){
        alert('Jumanj!!!')
    }
        else{
        alert('Try again')
    }
}

jumanji(25,25)
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function yellZebra(num1, num2, num3){
    let product = num1 * num2 * num3
     
    if(product % 3 == 0){
        alert('ZEBRAA')
        }else{
            alert('product not divisible by 3')
        }
    
}

yellZebra(2,14,7)