//create a function that adds two numbers and alerts the sum
function add(num1, num2){
    alert(num1 + num2)
}

add(12,26);
//create a function that multiplys three numbers and console logs the product
function multiply(num1, num2, num3){
    console.log(num1*num2*num3)
}

multiply(12, 22, 7);
//create a function that divides two numbers and returns the ???
function divide(one, two){
    let result = one / two
    return result
    //return actually spits out the value to where it was called
    //to see it you will have to console log the function call e.g Console.log(divide(26,4))
}

divide(26, 4)