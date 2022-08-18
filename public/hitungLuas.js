// applikasi untuk menghitung luas
// luas = panjang * lebar

// tangkap value dari user dengan prompt
let panjang = prompt("Masukan Panjang : ");
let lebar = prompt("Masukan Lebar : ");

// merubah tipe data string menjadi integer / number
// menghitung luas dengan operator aritmatika * (pengkalian)
let luas = parseInt(panjang) * parseInt(lebar); // + - * / %

// menampilkan ke console
console.info("Luas Persegi anda adalah : " + luas + " cm");
