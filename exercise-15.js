function groupAnimals(animals) {
    // you can only write your code here
  
      //sort array
    var panjang = animals.length;
    var bbl;
    var sort = [];
  
    for(var i=1;i<panjang;i++){
      for(var j=0;j<(panjang-i);j++){
        if(animals[j] > animals[j+1]){
          bbl = animals [j];
          animals[j] = animals [j+1];
          animals[j+1] = bbl;
        }
      }
    }
    sort = animals
    console.log(sort)
  
    var panjangSort = sort.length
    var counter = []
    var counterFinal=[]
    var huruf = animals[0][0]
  
  
    for (i = 0 ; i<panjangSort ; i++){
      // console.log (sort[i][0])
      if (sort[i][0] === huruf){
        counter.push(sort[i])
        // return counter
      }
  
      else{
        counterFinal.push(counter)
        counter = []
        huruf = sort[i][0]
        counter.push(sort[i])
      }
    }
      counterFinal.push(counter)
      return counterFinal
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  // console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]