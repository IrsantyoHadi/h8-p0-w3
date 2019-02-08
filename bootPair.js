function bootPairCount(bootStr) {
  if (typeof bootStr === 'undefined' ){
    return ('Tidak ada sepatu harap cek kembali input anda')
  }
  var panjang = bootStr.length;
  var temp = [];

  for(var i = 0; i<panjang; i++){
    temp.push(bootStr[i]);
  }
  
  // console.log(temp)

  //sort array
  var panjangTemp = temp.length;
  var bbl;
  var sort = [];

  for(var i=1;i<panjangTemp;i++){
    for(var j=0;j<(panjangTemp-i);j++){
      if(temp[j] > temp[j+1]){
        bbl = temp[j];
        temp[j] = temp[j+1];
        temp[j+1] = bbl;
      }
    }
  }

  sort = temp;
  console.log(sort)

  //cek pasangan
  var panjangSort = sort.length;
  var count = 0;

  for(var i=0;i<panjangSort;i++){
    
    if(sort[i] === sort[i+1]){
      count += 1;
      i++
    }


    
  }
  if (count === 0){
  return ('Tidak ada pasangan sepatu boot ditemukan')
  }
  // console.log(sort)
  return count

}

//TEST CASES
console.log(bootPairCount("ABBAACDAB")); // 3
console.log(bootPairCount("ABBCCDAD")); // 4
console.log(bootPairCount("ABCDE")); // Tidak ada pasangan sepatu boot ditemukan
console.log(bootPairCount()); // Tidak ada sepatu boot mohon cek kembali input anda
console.log(bootPairCount("XXXXBIBBA"));