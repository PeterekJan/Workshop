// oroginal data
var object = [
    {id: 101, name: "Jan", address: {street: "Komárovská 12", city: "Opava"}, friends: ["Dan", "Petr"], status: "married"},
    {id: 102, name: "Daniel", address: {street: "Někde v parku", city: "Praha"}, friends: ["Jan", "Petr"], status: "married"},
    {id: 103, name: "Petr", address: {street: "Krnovská 2", city: "Opava"}, friends: ["Dan", "Jan"], status: "engaged"},
    {id: 104, name: "Eliška", address: {street: "Ulice", city: "Ludgeřovice"}, friends: ["Dan", "Jan", "Petr"], status: "single"},
];

// new object
var newObject = {
  items: [], 
  totalCount: object.length, 
  married: 0, 
  engaged: 0, 
  single: 0
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