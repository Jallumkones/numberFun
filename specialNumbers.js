/* Run in Node */

const {isPrime, isSquare, primeFactors} = require('./numberFunctions');

// console.log(isPrime);
// console.log(isSquare);
// console.log(primeFactors);

// User Input / Output Logic
/////////////////////////////////////////////


const getFunctionMethod = () => {
    let functionMethod;
    const functionType = process.argv[2];
    if(functionType === 'prime') {
        functionMethod = isPrime;
    } else if (functionType === 'square') {
        functionMethod = isSquare;
    } else if (functionType === 'primefactors') {
        functionMethod = primeFactors;
    } else {
        process.stdout.write(`Try again with a valid function argument. \n`);
        process.exit();
    }
    
    return functionMethod;
}

const getNumber = () => {
    let number = process.argv[3];
    number = parseInt(number)
    if(!Number.isInteger(number)) {
        process.stdout.write(`Try again with a valid number. \n`);
        process.exit();
    } 
    return number;
}

const displayResult = (functionMethod, number) => {
    let output = functionMethod(number);
    process.stdout.write(`your results are ${output} \n`);
    process.exit();
}


const functionMethod = getFunctionMethod();
const number = getNumber();
console.log(functionMethod);
console.log(number);
displayResult(functionMethod,number);