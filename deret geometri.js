let x = 4
let n = 3
let y = 10 

let geometri = (x, n, y) => {
    let hitung = 0;

    for (let i = 0; i < n; i++) {
        const term = a * Math.pow(r, i); // Menghitung suku ke-i
        hitung += term; // Menambahkan suku ke jumlah total
    }

    return hitung;
}

let totalhitung = geometri(x, n, y);

// Menampilkan hasil
console.log("Deret Geometri : " + totalhitung)