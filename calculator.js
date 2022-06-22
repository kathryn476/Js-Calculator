let num1 = parseFloat( prompt("Enter first number "));
let operator = prompt("Enter operator (+ ,- ,* ,/ )"); //read operators
let num2 = parseFloat( prompt("Enter second numbe)"));

let result = 0;
if(isNaN(num1) || isNaN(num2)) {
    alert('wrong input! Refresh and try again'); //if not anumber is passed in the prompts
}else{
                                            // assigning the operators
    if(operator == "+"){
        result = num1 + num2;                             
    }else if(operator == "-"){
        result = num1 - num2;
    }else if(operator == "*"){
        result = num1 *  num2;
    }else if (operator == "/"){
        result = num1 / num2;
    }
    
    document.write(num1 + operator + num2 + '=' + result); // its gona write  the result in the document
} 


