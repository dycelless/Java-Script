let berat = 90
let tinggi = 170

let tinggim = tinggi / 100
let BMI = berat / (tinggim * tinggim)

let category;
if (BMI < 18.5) {
    category = 'Kekurangan berat badan';
} else if (BMI < 24.9) {
    category = 'Berat badan normal';
} else if (BMI < 29.9) {
    category = 'Kelebihan berat badan';
} else {
    category = 'Kegemukan (Obesitas)';
}

console.log("berat badan        : " + berat)
console.log("tinggi badan       : " + tinggi)
console.log(BMI)
console.log("status berat badan : " + category)