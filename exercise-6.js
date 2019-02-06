function angkaPalindrome(num) {
  // you can only write your code here!
  while(true){
    num++
    var stringNum = String(num)

    for (var i = 0; i<stringNum.length;i++){
    var counter = ''
      for (var j=stringNum.length-1; j>=0;j--){
          counter += stringNum[j]
      }
    }
    if(stringNum === counter){
      return num
    }
  }
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001