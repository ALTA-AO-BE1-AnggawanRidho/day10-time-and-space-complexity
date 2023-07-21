// Tugas Problem 1 - Bilangan Prima

function primeNumber(number) {
    // your code here
    if (number <= 1) {
        return false;
    }
    
    if (number <= 3) {
        return true;
    }
    
    // Jika bilangan memiliki faktor prima yang lebih besar dari akar kuadratnya, maka bukan bilangan prima
    const sqrtNum = Math.floor(Math.sqrt(number));
    for (let i = 2; i <= sqrtNum; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    
    return true;
}


console.log(primeNumber(1000000007)) // true
console.log(primeNumber(1500450271)) // true
console.log(primeNumber(1000000000)) // false
console.log(primeNumber(10000000019)) // true
console.log(primeNumber(10000000033)) // true