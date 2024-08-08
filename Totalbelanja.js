let barang = [
    {nama : "Beras", harga: 10000, jumlah : 5},
    {nama : "Gula", harga: 14000, jumlah : 5},
    {nama : "Telur", harga: 20000, jumlah : 2},
    {nama : "Minyak Goreng", harga: 9000, jumlah : 10}
];

let Total = 0;

for (let item of belanja) {
    let subtotal = item.hargaPerUnit * item.jumlah;
    Total = subtotal;
}
console.log("Subtotal belanja : " + subtotal )



