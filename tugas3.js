const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
    if (nilaiAwal < nilaiAkhir) { //pengecekan 1
        if (dataArray.length > 5) { //pengecekan 2
            let temp = []
            for (let  i = nilaiAwal + 1; i < nilaiAkhir; i++) {
                if (dataArray.includes(i)) { //pengecekan 3
                    // temp.push(i)
                    // temp[temp.length] = i;
                    temp = [...temp, i]
                }
            }
            if (temp.length == 0) { //pengecekan 4
                return "Nilai tidak ditemukan";
            }
            return temp
        } else {
            return "Jumlah angka dalam dataArray harus lebih dari 5";
        }
    } else {
        return "Nilai akhir harus lebih besar dari nilai awal";
    }
}

console.log(seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8, 5, 20]))
console.log(seleksiNilai(15, 3 , [2, 25, 4, 14, 17, 30, 8]))
console.log(seleksiNilai(4, 17 , [2, 25, 4]))
console.log(seleksiNilai(5, 17, [2, 25, 4, 1, 30, 18]));