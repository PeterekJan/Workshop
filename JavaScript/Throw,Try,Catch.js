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

