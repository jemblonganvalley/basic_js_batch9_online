// console.info("basic js - fadliselaz");

// dibaris ini, text tidak akan di eksekusi
// ini adalah catatan

/**
 * disini kita bisa
 * membuat komentar
 * dengan banyak baris
 */

// Variable
// deklarasi
// assigment

// KEYWORD ( var, let, const ) VARIABLE_NAME ;
var username;
var email;
var phone;
var age;

//syarat penamaan variable
/**
 * 1. Tidak boleh DIAWALI dengan angka
 * 2. Tidak boleh menggunakan spasi
 * 3. Tidak boleh menggunakan special char kecuali _ dan $
 * 4. Tidak boleh sama dengan KEYWORD javascript
 */

// proses assigment / penugasan
username = "fadliselaz";
email = "fadliselaz@gmail.com";
phone = "081213655573";
age = 32;

// proses declare sekaligus assigment
var married = true; // tipe data boolean ( true , false )
var address = "Jemblongan";

// console.info(married);
// console.info(address);

// Perbedaan var, let dan const
/**
 * var :
 * - Bisa di declarasikan kembali dengan nama variable yang sama
 * - Bisa di tugaskan / assigment dengan value yang berbeda
 */

var secret = "iniSecretSaya";
var secret = "iniBukanSecretSaya";

// console.info(secret);

/**
 * let :
 * - Tidak Bisa di deklarasikan kembali
 * - Tapi masih bisa di tugaskan dengan value yang berbeda
 */

let passwd = "123";
passwd = "321";
passwd = "001";
passwd = "123";

/**
 * const :
 * - Tidak Bisa di deklarasikan kembali
 * - Tidak bisa di isi data lain
 * - Harus langsung dilakukan proses declare dan assigment
 */

const text = "123123123";
// console.info(text);
