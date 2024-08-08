class bola {
    constructor(r, tinggi) {
        this.r = r;
        this.tinggi = tinggi
    }

    volume() {
        return Math.PI * 4 * r * r * (1/3)
    }

    luasPermukaan() {
        return Math.PI * 4 * r * this.r
    }
}

class Tabung {
    constructor(jr, ting) {
        this.jr = jr
        this.ting = ting
    }

    volume() {
        return Math.PI * this.jr * this.jr * this.ting
    }

    luasPermukaan() {
        return (this.jr * Math.PI) + (this.jr * this.ting * 2 * Math.PI) ;
    }
}

class Kerucut {
    constructor(jari, gi) {
        this.jari = jari;
        this.gi = gi;
    }

    volume() {
        return Math.PI * jari * jari * this.tinggi * 1/3
    }

    luasPermukaan() {
        return 2 * Math.PI * this.jariJari * (this.jariJari + this.tinggi);
    }
}

let bola = new bola(5);
let Tabung = new Tabung(7.5, 50);
let Kerucut = new Kerucut(10, 40);

console.log("Bola           : ")
console.log("Volume         : " + bola.volume())
console.log("Luas Permukaan : " + bola.luasPermukaan)

console.log("Tabung         : ")
console.log("Volume Tabung  : " + Tabung.volume)
console.log("Luas Permukaan : " + Tabung.luasPermukaan)

console.log("Kerucut        : ")
console.log("Volume Kerucut : " + Kerucut.volume)
console.log("Luas Permukaan : " + Kerucut.luasPermukaan)