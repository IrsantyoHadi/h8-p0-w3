var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "Berkebun"],
    ["0005", "Winona", "Ambon", "25/12/1965", "Memasak",'asdasdasd'],
    ["0006", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0007", "Winona", "Ambon", "25/12/1965", "Memasak",'asdasdasd'],
    ["0008", "Winona", "Ambon", "25/12/1965", "Memasak"]
]
function dataHandling (input){
for(i=0; i<input.length;i++){
var dataLength = input[i].length
if(dataLength > 5){
console.log('data yang anda masukkan terlalu banyak')
console.log ('')
}
else if (dataLength <5){
console.log('data yang anda masukkan kurang')
console.log ('')
}
for(j=0;j<dataLength;j++){
if( dataLength === 5){
switch(j){
case 0 :
console.log('Nomor ID: ' + input[i][j])
break
case 1 :
console.log('Nama Lengkap: ' + input[i][j])
break
case 2 :
console.log('TTL: '+ input[i][j] + ' ' + input [i][j+1])
break
case 4 :
console.log('Hobi: '+ input[i][j])
console.log('')

}

}  
}

}
return 'Done'
}
dataHandling(input)