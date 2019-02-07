function tentukanDeretAritmatika(arr) {
  // you can only write your code here!
//   console.log(arr)
  var deviation = arr[1] - arr[0]
//   console.log(deviation)
  for (var i =1; i< arr.length-1;i++){
      if (arr[i] !== arr[i-1]+deviation){
          return false
      }
  }
  return true
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false