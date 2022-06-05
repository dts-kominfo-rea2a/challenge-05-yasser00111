const names = ["Halo", "Angel", "Nyoman", "Ketut", "Aisyah"];

// TODO: Fungsi utama
// Menerima 2 parameter: list nama dan callback sort
// Mengembalikan array of string dengan format:
// "1. Nama"
// "2. Nama"
// ...
const sorter = (arr, sort) => {
    sortdata = sort(arr);

    let data = []
    for (let index = 0; index < sortdata.length; index++) {
        let loop = ''
        loop += index + 1 + '.' + sortdata[index]
            //tambahkan array
        data.push(loop)
    }
    return data;
};

// TODO: Fungsi untuk mengurutkan array of string secara ascending
// mengembalikan array yang sudah diurutkan

const sortAscending = arr => {
    let data = arr.sort();
    return data;
};

// TODO: Fungsi untuk mengurutkan array of string secara descending
// mengembalikan array yang sudah diurutkan
const sortDescending = (arr) => {
    let data = arr.sort().reverse()
    return data;
};

// ! JANGAN DIMODIFIKASI
(function main() {
    console.log(sorter ? .(names, sortAscending) ? .join("\n"));
    console.log(sorter ? .(names, sortDescending) ? .join("\n"));
})();

module.exports = {
    sorter,
    sortAscending,
    sortDescending,
    names,
};