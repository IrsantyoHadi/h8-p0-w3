function balikString (input){
    var joinArray= []  
    for(var i=input.length-1 ;i>= 0;i--){
    var inputSplit = input.split('')
    var cont = inputSplit [i]
    joinArray.push (cont)
    var output = joinArray.join('')
    
    }
    return output
  }
  
  balikString('ayam goreng')