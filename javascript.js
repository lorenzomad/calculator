let first = '';
let second = '';
let operator = '';

const main_display = document.querySelector('.bottom')
const top_diplay = document.querySelector('.top')



const add = (first, second) =>{
    return first + second;
}

const subtract = (first, second) => {
    return first - second;
}

const multiply = (first, second) =>{
    return first * second;
}

const divide = (first, second) =>{
    if( second == 0){
        return 'error'
    }
    return first / second;
}


const operate = (first, second, operator) => {
    if (operator === "+") {
        return add(first, second);
    }
    if (operator === "-") {
        return subtract(first, second);
    }
    if (operator === "*") {
        return multiply(first, second);
    }
    if (operator === "/") {
        return add(first, second);
    }
}

const numbers = document.querySelectorAll(".number")

numbers.forEach(element => {
    element.addEventListener('click', () =>{
        second += element.textContent.trim();
        main_display.textContent = second;

    });
})

const functions = document.querySelectorAll('.operator')

functions.forEach(element => {

    element.addEventListener('click', () =>{
        sign = element.textContent.trim()
        
        if (operator === '') {
            // if the button is pressed for the 1st time
            first = parseInt(second);
            second = '';
            top_diplay.textContent = first + ' ' + sign ;
            operator = sign
            

        } else {
            // second button press
            
            first = operate(first, parseInt(second), operator) 

            if (first === 'error'){
                main_display.textContent = "ERROR don\'t divide by 0";
                console.log("ERROR don\'t divide by 0");
            } else{
                top_diplay.textContent = first;
                main_display.textContent = 0
                operator = sign;
            
            }
            
        }
    })
})

equal = document.querySelector('.equal')

equal.addEventListener('click', ()=>{
    if (operator != ''){
        first = operate(first, parseInt(second), operator) 

            if (first === 'error'){
                main_display.textContent = "ERROR don\'t divide by 0";
            } else{
                top_diplay.textContent = first;
                operator = ''
            
            }
        
    } 
})
