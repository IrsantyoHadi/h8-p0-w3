function pasanganTerbesar(num) {
    // you can only write your code here!
    var numString = String(num)
    var numStringLength = numString.length
    var splitNumString = numString.split("")
    // console.log(splitNumString[0].concat(splitNumString[1]))
    for ( var j=0; j < numStringLength ; j++){
        var tampung = []

        for (var i=0 ; i < numStringLength-1 ;i++){
            var newNumber = splitNumString[i].concat(splitNumString[i+1])
            var realNumber = Number(newNumber)
            tampung.push(realNumber)
            // console.log(newNumber)
        }
    }
    tampung.sort(function(a, b){return b - a})
    return (tampung[0])
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99