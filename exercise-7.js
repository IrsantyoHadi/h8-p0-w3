function hitungJumlahKata(kalimat) {
    // you can only write your code here!
    var splitKalimat=kalimat.split(' ')
    // console.log (splitKalimat)
    var counter = 0
    for (var i=0 ; i< splitKalimat.length ; i++){
        for (var j=i ; j<splitKalimat.length; j++){
            if (splitKalimat[i] == splitKalimat[j]){
                counter += 1
                break
            }
        }
    }
    return (counter)
  }
  
  // TEST CASES
  console.log(hitungJumlahKata('I have a dream')); // 4
  console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
  console.log(hitungJumlahKata('A song to sing')); // 4
  console.log(hitungJumlahKata('I')); // 1
  console.log(hitungJumlahKata('I believe I can code')); // 5