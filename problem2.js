// Tugas Problem 2 - Angka Muncul Sekali done!

function munculSekali(angka) {
    // Membuat objek untuk menyimpan frekuensi kemunculan setiap angka
    const angkaCount = {};
    
    // Menghitung frekuensi kemunculan setiap angka dalam input
    for (let i = 0; i < angka.length; i++) {
        const digit = angka[i];
        angkaCount[digit] = (angkaCount[digit] || 0) + 1;
    }
    
    // Menyaring angka-angka yang hanya muncul satu kali
    const angkaSekali = [];
    for (const digit in angkaCount) {
        if (angkaCount[digit] === 1) {
            angkaSekali.push(parseInt(digit));
        }
    }
    
    return angkaSekali;   
}

console.log(munculSekali("1234123"))    // [4]
console.log(munculSekali("76523752"))   // [6, 3]
console.log(munculSekali("12345"))      // [1 2 3 4 5]
console.log(munculSekali("1122334455")) // []
console.log(munculSekali("0872504"))    // [8 7 2 5 4]