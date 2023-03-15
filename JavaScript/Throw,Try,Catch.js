const myTaxes = (income) => {
    if(typeof income === "number"){
        return income * 0.25

    }else{
        throw "Argument musi byt čislo"
    }

}

try {                                   // zkus ukon
    const result = myTaxes('a')
    console.log(result)
} catch (e) {                           //pokud neprojde, vypiš
    console.log("Error")
}


////////////////////////////////////////////////////////////////////////


class StarWars {
  
    planets = [];
    
    constructor(planets) {
      
      if(typeof planets === "undefined") {
        throw "Planets are requred!!!";
      }
      
      if( !planets.length ) {
        throw "Gimme some planets!!!!";
      }
      
      this.planets = planets;
    }
  }
  
  console.log("===== NO ARGUMENT FOR CONSTRUCTOR =====");
  try {
    
    var obj = new StarWars();
    
    console.log(obj.planets);
    
  } catch (err) {
    
    console.log(err);
  }
  
  console.log("===== EMPTY ARRAY FOR CONSTRUCTOR =====");
  try {
    
    var obj = new StarWars([]);
    
    console.log(obj.planets);
    
  } catch (err) {
    
    console.log(err);
  }
  
  console.log("===== AT LEAST ONE PLANET =====");
  try {
    
    var obj = new StarWars([{name: "Tatooine"}]);
    
    console.log(obj.planets);
    
  } catch (err) {
    
    console.log(err);
  }

////////////////////////////////////////////////////////////////////////////////

// try     = tests a block of code for errors.
// catch   = handles the error.
// throw   = creates custom errors. (throw exception)
// finally = execute code, after try and catch, regardless

try{
  let age = promp("Enter your age : ")

  if(age== "")
  throw "You didn't enter in anything!"

  if(isNaN(age))
  throw age + "isn't a number!"

  if(age < 18)
  throw "You need to be 18+ to sign up!"

  console.log("you are now signed up!")
}

catch(error) {
  console.log(error.name);
  console.log(error.message);
}

finally{
  console.log("Thx for visiting")
}