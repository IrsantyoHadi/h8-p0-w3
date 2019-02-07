function targetTerdekat(arr) {
  var panjang = arr.length;
  var tempO = [];
  var tempX = [];
  var r = [];
  

  for (var i=0;i<panjang;i++){
    if(arr[i] == 'o'){
      tempO.push(i+1)
    }

    if(arr[i] == 'x'){
      tempX.push(i+1);
    }

  }
  if(tempO == 0 || tempX == 0){
    return 0
  }
  // console.log(tempO)
  // console.log(tempX)


  for(var i=0;i<tempO.length;i++){
    for(var j=0;j<tempX.length;j++){
      r.push(Math.abs(tempO[i] - tempX[j]))
    }
  }

  // console.log (r)

  var panjangR = r.length;
  var min = r[0];

  for(var i=0;i<panjangR;i++){
    if(min > r[i]){
      min = r[i]
    }

  }

  return min

}


// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
