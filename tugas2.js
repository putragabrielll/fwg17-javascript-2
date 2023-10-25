const name = [
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

function sarchName(search, jumlah, callback) {
  let data = name.filter((b) => b.toLowerCase().includes(search));
  return callback(data, jumlah);
}
function Mencari(data, jumlah) {
  data = data.slice(0, jumlah);
  return data;
}
console.log(sarchName("an", 3, Mencari));
