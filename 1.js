/**
 *  Buatlah program dimana program tersebut akan menghitung panjang string.
 *  Jika panjang adalah bilangan genap, maka akan terprint "WOHO".
 *  Apabila bilangan ganjil, akan terprint "OHOW".
 *  Dan kalau diluar itu, maka akan terprint "ERROR".
 */

let string = 'abcde';
// your code here
if (string.length % 2 == 0) {
    console.log("WOHO");
} else if (string.length % 2 == 1) {
    console.log("OHOW");
} else {
    console.log("ERROR")
}