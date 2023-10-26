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
    console.log(nama[i]);
    console.log(cekLowerCase[nama[i]]);
    if (cekLowerCase[nama[i]] != undefined) {
      temp += cekLowerCase[nama[i]];
    } else {
      temp += nama[i];
    }
  }
  return temp;
};

console.log(peserta.length)
const cekNama = () => {
  for (let i = 0; i < peserta.length; i++){
    let temp = convertToLowerCase(peserta[i])
    console.log(temp)
  }
}

cekNama()
