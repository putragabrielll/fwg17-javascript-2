// 1. Array.of()
// Membuat Array dari setiap argumen yang kita bikin
const contoh1 = Array.of(1, 2, 3, 4, 5, 6, 7);
console.log(contoh1);


// 2. Slice
// Memotong Array dan membuat yg baru, tapi kita harus tentukan dari index berapa awalnya hingga index berapa akhirnya, contoh = slice(1, 3) =>untuk index awal(1) dia akan terbawa, tapi untuk index akhir(3) dia tidak ikut terbawa.
const contoh2 = ["gabriel", "putra", "advent", "yakop", "sihombing"];
let dataBaru2 = contoh2.slice(1, 3);
console.log(dataBaru2);


// 3. Pop
// Digunakan untuk menghapus element terakhir pada sebuah Array
const contoh3 = ["gabriel", "putra", "advent", "yakop", "sihombing"];
let dataBaru3 = contoh3.pop()
console.log(contoh3)


// 4. Shift
// Digunakan untuk menghapus element paling awal pada sebuah Array
const contoh4 = ["gabriel", "putra", "advent", "yakop", "sihombing"];
let dataBaru4 = contoh4.shift()
console.log(contoh4)


// 5 Unshift
// Digunakan untuk menambah element baru di awal pada sebuah Array
const contoh5 = ["putra", "advent", "yakop", "sihombing"];
let dataBaru5 = contoh5.unshift('gabriel')
console.log(contoh5)


// 6. Includes
// Digunakan untuk mengecek apakah dalam sebuah Array terdapa element tertentu, dan '0' itu opsional mau mulai dari index keberapa akan di mulai pengecekan, tapi default nya adalah '0'
const contoh6 = ["gabriel", "putra", "advent", "yakop", "sihombing"];
let dataBaru6 = contoh6.includes('yakop', 1)
console.log(dataBaru6)


// 7. IndexOf
// Untuk mencari letak dari sebuah element pada Array
const contoh7 = ["gabriel", "putra", "advent", "yakop", "sihombing"];
let dataBaru7 = contoh7.indexOf('yakop', 4)
console.log(dataBaru7)


// 8. Concat
// Digunakan untuk menggabungkan 2 atau lebih Array menjadi 1
const contoh8 = ["gabriel", "putra", "advent", "yakop", "sihombing"];
const school = ["SMA Purwodadi", "Universitas Advent Indonesia"]
let hobby = ["Programing", "Gaming"]
const dataBaru8 = contoh8.concat(school, hobby)
console.log(dataBaru8)


// 9. 
// 
const contoh9 = ["gabriel", "putra", "advent", "yakop", "sihombing"];