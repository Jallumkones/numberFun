/* Number Functions */

const isPrime = (num) => {
    for(let i = 2; i < num; i++) {
        if(num % i === 0) {
            return false;
        }
    }
    return true;
}

const isSquare = (num) => {
    return Number.isInteger(Math.sqrt(num));
}

const primeFactors = (num) => {
    let curNum = num;
    let primeFactors = [];
    if(isPrime(num)) {
        primeFactors.push(num);
        return primeFactors;
    }
    let i = 2
    while (i < num) {
        if (Number.isInteger(curNum/i) && isPrime(curNum/i)) {
            primeFactors.push(i);
            primeFactors.push(curNum/i)
            break;
        } else if(Number.isInteger(curNum/i)) {
            primeFactors.push(i);
            curNum = curNum / i;
        } else if (!Number.isInteger(curNum/i)) {
            do {
                i += 1
            } while (!isPrime(i)) 
        }
    }
    return primeFactors;
}

module.exports.isPrime = isPrime;
module.exports.isSquare = isSquare;
module.exports.primeFactors = primeFactors