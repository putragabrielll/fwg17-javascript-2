// 1. Array.of()
// Membuat Array dari setiap argumen yang kita bikin
const contoh1 = Array.of(1, 2, 3, 4, 5, 6, 7);
console.log(contoh1);


// 2. Pop
// Digunakan untuk menghapus element terakhir pada sebuah Array
const contoh2 = ["gabriel", "putra", "advent", "yakop", "sihombing"];
let dataBaru2 = contoh2.pop()
console.log(contoh2)


// 3. Shift
// Digunakan untuk menghapus element paling awal pada sebuah Array
const contoh3 = ["gabriel", "putra", "advent", "yakop", "sihombing"];
let dataBaru3 = contoh3.shift()
console.log(contoh3)


// 4 Unshift
// Digunakan untuk menambah element baru di awal pada sebuah Array
const contoh4 = ["putra", "advent", "yakop", "sihombing"];
let dataBaru4 = contoh4.unshift('gabriel')
console.log(contoh4)


// 5. Includes
// Digunakan untuk MENGECEK apakah dalam sebuah Array terdapa element tertentu, dan '0' itu opsional mau mulai dari index keberapa akan di mulai pengecekan, tapi default nya adalah '0'
const contoh5 = ["gabriel", "putra", "advent", "yakop", "sihombing"];
let dataBaru5 = contoh5.includes('yakop', 0)
console.log(dataBaru5)
4
// 6. IndexOf
// Untuk mencari letak dari sebuah element pada Array
const contoh6 = [
    {
        id: 1,
        name: "gabriel"
    }, 
    {
        id: 2,
        name: "putra"
    }, 
    {
        id: 3,
        name: "advent"
    }, 
    {
        id: 4,
        name: "yakop"
    }, 
    {
        id:5, 
        name: "sihombing"
    }
];
let dada = contoh5.indexOf("sihombing");
console.log(dada)

let f = "5"
let dataBaru6 = contoh6.map(x => x.id).indexOf(Number(f))
console.log(contoh6[dataBaru6].name)
console.log(contoh6[dataBaru6])

// 7. Concat
// Digunakan untuk menggabungkan 2 atau lebih Array menjadi 1
const contoh7 = ["gabriel", "putra", "advent", "yakop", "sihombing"];
const school = ["SMA Purwodadi", "Universitas Advent Indonesia"]
let hobby = ["Programing", "Gaming"]
const dataBaru7 = contoh7.concat(school, hobby)
console.log(dataBaru7)


// 8. Slice
// Memotong Array dan membuat yg baru, tapi kita harus tentukan dari index berapa awalnya hingga index berapa akhirnya, contoh = slice(1, 3) =>untuk index awal(1) dia akan terbawa, tapi untuk index akhir(3) dia tidak ikut terbawa.
const contoh8 = ["gabriel", "putra", "advent", "yakop", "sihombing"];
let dataBaru8 = contoh2.slice(1, 3);
console.log(dataBaru8);


// 9. Splice
// Digunakan untuk menambah, menghapus dan mereplace sebuah element dari sebuah Array
const contoh9 = ["gabriel", "putra", "sihombing", "bandung"];
let dataBaru9 = contoh9.splice(3, 0, "jacob")
console.log(dataBaru9)
console.log(contoh9)

// 10. ForEach
// Digunakan untuk melakukan perulangan atau Looping sebanyak data yang ada di Array
const contoh10 = [1, 2, 3, 4, 5, 6, 7];
contoh10.forEach((item) => {
    console.log(item);
});

