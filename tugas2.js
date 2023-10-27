const peserta = [
  "Nurohman",
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

// lower = n u r o h m a n
const cekNama = (search, jumlah, callback) => {
  let cekInput = convertToLowerCase(search)
  let hasil = []
  for (let i = 0; i < peserta.length; i++){
    let lower = convertToLowerCase(peserta[i])
    console.log(lower)

    for (let j = 0; j < lower.length; j++){
      let temp = ''
      // untuk mencari berdasarkan banyak index dari parameter search
      for (let k = 0; k < cekInput.length; k++) {
        temp += lower[j + k];
      }
      if (temp == cekInput) {
        console.log(hasil.length);
        // hasil.push(peserta[i])
        hasil[hasil.length] = peserta[i];
      }

    }
  }
  return callback (hasil, jumlah)
}

const limitasi = (hasil, jumlah) => {
  let temp2 = []
  for (let l = 0; l < jumlah; l++){
    temp2[temp2.length] = hasil[l]
  }
  return temp2
}

console.log(cekNama('an', 3, limitasi))