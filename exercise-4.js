var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input){
  input[1] = 'Roman Alamsyah Elsharawy'
  input[2] = 'Provinsi Bandar Lampung'
  input.splice(4,1, "Pria","SMA Internasional Metro")

  
console.log(input)


var splitKata = input[3].split('/')
// console.log(splitKata)
switch(splitKata[1]){
    case "01" : bulan =('Januari'); break;  
    case "02" : bulan =('Februari'); break;
    case "03" : bulan =('Maret'); break;
    case '04' : bulan =('April'); break;
    case "05" : bulan =('Mei'); break;
    case "06" : bulan =('Juni'); break;
    case "07" : bulan =('Juli'); break;
    case "08" : bulan =('Agustus'); break;
    case "09" : bulan =('September'); break;
    case "10": bulan =('Oktober'); break;
    case "11": bulan =('November'); break;
    case "12": bulan =('Desember'); break;
  break

}
console.log(bulan)


var descendingKata = splitKata.sort(function(a, b){return a - b})
descendingKata = splitKata.reverse()

console.log(descendingKata)


splitKata = input[3].split('/')
var joinKata = splitKata.join('-')

console.log(joinKata)


var nama15 = input[1].slice(0,15)

console.log(nama15)
}

dataHandling2(input)

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */