// oroginal data
var object = [
    {
      id: 101, 
      name: "Jan", 
      address: {street: "Komárovská 12", city: "Opava"}, 
      shoes: [
        {id:1, type: "sneakers", size: 44},
        {id:2, type: "boots", size: 44.5},
        {id:3, type: "ski boots", size: 43.5},
      ], 
      friends: ["Dan", "Petr"], 
      status: "married", 
      dimensions: [16, 45, 80]
    },
    {
      id: 102, 
      name: "Daniel", 
      address: {street: "Někde v parku", city: "Praha"}, 
      shoes: [
        {id:1, type: "sneakers", size: 44},
        {id:2, type: "boots", size: 44.5},
        {id:3, type: "ski boots", size: 43.5},
      ],
      friends: ["Jan", "Petr"], 
      status: "married", 
      dimensions: [1, 12, 13]
    },
    {
      id: 103, 
      name: "Petr", 
      address: {street: "Krnovská 2", city: "Opava"}, 
      shoes: [
        {id:1, type: "sneakers", size: 44},
        {id:2, type: "boots", size: 44.5},
        {id:3, type: "ski boots", size: 43.5},
      ],
      friends: ["Dan", "Jan"], 
      status: "engaged", 
      dimensions: [25, 1, 123]
    },
    {
      id: 104, 
      name: "Eliška", 
      address: {street: "Ulice", city: "Ludgeřovice"},
      shoes: [
        {id:1, type: "sneakers", size: 44},
        {id:2, type: "boots", size: 44.5},
        {id:3, type: "ski boots", size: 43.5},
      ],
      friends: ["Dan", "Jan", "Petr"], 
      status: "single", 
      dimensions: [35, 549, 88]
    }
];

// new object
var newObject = {
  items: [], 
  totalCount: object.length, 
  married: 0, 
  engaged: 0, 
  single: 0,
  dimensionsOver20: 0
};

var engaged = 0;

for(i=0;i<object.length;i++) {
  
  // store current item into separate variable, means value of object on i-th index
  var item = object[i];
  
  // initiate new variable with custom structure
  var newItem = {
    id: i,
    stringId: item.id.toString() + "-customized-id",
    name: item.name,
    city: item.address.city,
    friends: item.friends.join(", ")
  };
  
  // check it contains at least one dimension over 20
  for(j=0;j<item.dimensions.length;j++) {
    
    // store current dimension
    var dimension = item.dimensions[j];
    
    // if dimension over 20 found, increase counter + stop cycle
    if(dimension >= 20) {
      newObject.dimensionsOver20++;
      break;
    }
  }
  
  // shoes size concat
  var shoesSizes = [];

  for(s=0;s<item.shoes.length;s++) {
    let shoeObject = item.shoes[s];
    
    shoesSizes.push(shoeObject.size);
  }
  
  // convert array to comma separated string
  newItem.shoeSizes = shoesSizes.join(", ");
  
  // push new item into our object
  newObject.items.push(newItem);
  
  // do some calculations
  if(item.status == "married") {
    // eq: newObject.married = newObject.married + 1
    newObject.married++;
  } else if(item.status == "engaged") {
    engaged = engaged + 1;
  }
  
  // same but using switch
  switch(item.status) {
    case "single":
      newObject.single++;
      break;
    default:
      break;
  }
}

newObject.engaged = engaged;

console.log(newObject);