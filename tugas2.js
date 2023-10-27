const peserta = [
  "Abigail",
  "Alexandra",
  "Alison",
  "Amanda",
  "Angela",
  "Bella",
  "Carol",
  "Caroline",
  "Carolyn",
  "Deirdre",
  "Diana",
  "Elizabeth",
  "Ella",
  "Faith",
  "Olivia",
  "Penelope",
];

const convertToLowerCase = (nama) => {
  const cekLowerCase = {
    A: "a",
    B: "b",
    C: "c",
    D: "d",
    E: "e",
    F: "f",
    G: "g",
    H: "h",
    I: "i",
    J: "j",
    K: "k",
    L: "l",
    M: "m",
    N: "n",
    O: "o",
    P: "p",
    Q: "q",
    R: "r",
    S: "s",
    T: "t",
    U: "u",
    V: "v",
    W: "w",
    X: "x",
    Y: "y",
    Z: "z",
  };

  // temp = g
  let temp = "";
  for (let i = 0; i < nama.length; i++) {
    // console.log(nama[i]);
    // console.log(cekLowerCase[nama[i]]);
    if (cekLowerCase[nama[i]] != undefined) {
      temp += cekLowerCase[nama[i]];
    } else {
      temp += nama[i];
    }
  }
  return temp;
};

const cekNama = (search, jumlah, callback) => {
  let hasil = []
  // for untuk ambil index[0] dari variable peserta, berarti mengambil pertama "Abigail" karena index[0].
  for (let i = 0; i < peserta.length; i++) {
    let temp = convertToLowerCase(peserta[i]);
    // temp[i] = convertToLowerCase(peserta[i]);
    //console.log(temp)
    
    // setelah "Abigail" didapatkan maka "Abigail" sendiri akan di cek length nya.
    // peserta[0] = Abigail
    for (let j = 0; j < temp.length; j++){
      // setelah didapatkan length nya maka menyamakan apakah "Abigail" dengan index[0] == dengan search dengan index[0].
      if (temp[j] == search[0]) {
        for (let k = 0; k < search.length; k++) {}
      }
    }
  }
  
  // for (let j = 0; j < temp.length; j++){
  //   let temp2 = temp[j]
  //   // temp2 = abigail
  //   for (let k = 0; k < temp2.length; k++){
  //   let temp3 = ''
  //     for (let l = 0; l < search.length + 1; l++){
  //       if (temp2[k] == search[l]){
  //       }
  //     }
  //   }
  // }
  console.log(hasil)
};
cekNama('an')








// function sarchName(search, jumlah, callback) {
//   let data = name.filter((b) => b.toLowerCase().includes(search));
//   return callback(data, jumlah);
// }
// function Mencari(data, jumlah) {
//   data = data.slice(0, jumlah);
//   return data;
// }
// console.log(sarchName("an", 3, Mencari));