let panjang = 20.5;
let lebar = 30;
let hargaMeter = 1500000; 
let persen = 15; 

let luasTanah = panjang * lebar

let totalHargaSebelumPPN = luasTanah * hargaMeter

let ppn = (persen / 100) * totalHargaSebelumPPN

let totalHargaSetelahPPN = totalHargaSebelumPPN + ppn

console.log("Luas tanah             : " + luasTanah + " meter persegi")
console.log("Total harga sebelum PPN: Rp " + totalHargaSebelumPPN)
console.log("Jumlah PPN             : Rp " + ppn)
console.log("Total harga setelah PPN: Rp " + totalHargaSetelahPPN)