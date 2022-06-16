/**
 *  Buatlah program dimana program tersebut akan mem-filter harga ( number ).
 *  Apabila angka yang dimasukan kurang dari 1, maka akan terprint "TIDAK VALID".
 *  Dan apabila angka yang dimasukan lebih besar sama dengan 1 dan lebih kecil sama dengan 100000, maka   akan terprint "MURAH BANGET".
 *  Apabila lebih dari 100000, akan terprint "MAHAL BANGET".

 */

let harga = 100000;
// your code here

if (harga < 1) {
    console.log("TIDAK VALID");
} else if (harga >= 1 && harga <= 100000) {
    console.log("MURAH BANGET");
} else if (harga > 100000) {
    console.log("MAHAL BANGET");
} else {
    console.log("Silakan masukan nominal harga dalam angka")
}