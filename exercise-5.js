function palindrome(kata) {
    // you can only write your code here!
    var tampung=''
    for (var i= 0; i < kata.length ; i++ ){
      // console.log (kata)
      tampung = ''
      for (var j= kata.length-1 ; j>= 0; j--){
        tampung += kata[j]
      }
    }
    if (tampung == kata){
      return true
    }
    else{
      return false
    }
  }
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false