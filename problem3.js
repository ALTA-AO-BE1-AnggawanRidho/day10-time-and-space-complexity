// Problem 3 - Pair With Target Sum

function PairSum(arr, target) {
    // your code here
    const seenElements = {};

    for (let i = 0; i < arr.length; i++) {
        const currentElement = arr[i];
        const complement = target - currentElement;

        // Periksa apakah komplement sudah dilihat sebelumnya
        if (seenElements[complement] !== undefined) {
            return [seenElements[complement], i];
        }

        // Tandai elemen saat ini sebagai dilihat
        seenElements[currentElement] = i;
    }

    return null; // Jika tidak ada pasangan yang ditemukan
}


console.log(PairSum([1, 2, 3, 4, 6], 6)) // [1, 3]
console.log(PairSum([2, 5, 9, 11], 11))  // [0, 2]
console.log(PairSum([1, 3, 5, 7], 12))   // [2, 3]
console.log(PairSum([1, 4, 6, 8], 10))   // [1, 2]
console.log(PairSum([1, 5, 6, 7], 6))    // [0, 1]