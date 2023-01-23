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

var newObject = {items: [],
    total_count: object.length,
    pending_count: 0,
    available_count: 0,
    not_available_count: 0
};
  
for (i=0; i<object.length; i++) {


    var item = object[i];
    var newItem ={
        id: i,
        orig_id: item.id,
        category_name: item.category.name,
        images: item.photoUrls.join(", ")
    };

    newObject.items.push(newItem);

    if(item.status == "pending"){
        newObject.pending_count++;
    }else if(item.status == "available"){
        newObject.available_count++;
    };

    for(j=0; j < item.tags.length; j++){

        var tagsId = item.tags[j].id;
        //console.log(tagsId) 

        if( tagsId < 10 && item.status !== "available"){
            newObject.not_available_count++;
            break;
        }
    }
  }

  
  console.log(newObject);

  //Kód z předchozího bodu rozšiřte následovně:

  var tag_names = [];

  for(y = 0; y < item.tags.length; y++){
      var tagName = item.tags[y].name;
      //console.log(tagName)
      tag_names.push(tagName);
      
  };
  //console.log(tag_names)
  
  newItem.tag_names = tag_names.join(", ");
  //console.log(tag_names)

  var dynamic = {};

  //Nejdrive definovat promennou a az pak ji plnit!
    
    var itemCategoryName = item.category.name;
    dynamic[itemCategoryName] = item.category.id;

    var itemCategoryId = item.category.id;
    dynamic[itemCategoryId] = item.category;

  newItem.dynamic = dynamic
  //console.log(dynamic)


  //je dulezite kam se to v kodu vlozi//







