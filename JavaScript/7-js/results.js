// 1. Vypište 4. výskyt objektu v poli
console.log(object[4]);

//   2. Vypište hodnotu "category"
for(var i = 0;i < object.length; i++){
    console.log(object[i].category);
}

// 3)Vytvořte nové pole objektů, které bude obsahovat jenom objekty se sudými indexy
var even = [];
for(var i = 1; i < object.length; i += 2) {  // Sudy element
    even.push(object[i]);
}
console.log(even)

var filtered = object.filter(function(element, index, array) {
    return (index % 2 === 1);
  });
  console.log(filtered)


//Vytvořte nové pole objektů, které bude obsahovat jenom objekty s lichými indexy
var odd = [];
for(var i = 0; i < object.length; i += 2) {  //Lichy element
    odd.push(object[i]);
}
console.log(odd)


var filtered = object.filter(function(element, index, array) {
    return (index % 2 === 0);
  });
  console.log(filtered)


  //Vytvořte nové pole objektů, které bude obsahovat jenom objekty, které obsahují "status" == "available"

  var arrayResults = object.filter(function(oneObject){
    var weTryFind = oneObject.status.toLowerCase().includes("available")
    return weTryFind
})

console.log(arrayResults)

//Vytvořte nový objekt, který bude mít následující strukturu





