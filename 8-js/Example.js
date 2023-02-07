
function rectangle(a, b) {
  
    a = Number(a);
    b = typeof b != "undefined" ? Number(b) : a;
    
    if(isNaN(a) || a <= 0) {
      return "`a` is not a number or is less or equal 0";
    } else if(isNaN(b) || b <= 0) {
      return "`b` is not a number or is less or equal 0";
    }
    
    return a * b;
  }
  
  console.log(rectangle("a"));
  // console.log(rectangle("4", "3"));
  // console.log(rectangle(4));
  // console.log(rectangle("4"));
  // console.log(rectangle(0, 1));
  // console.log(rectangle(1, -4));
  // console.log(rectangle("a", 7));
  
  // // undefined vs null
  
  // let object = {a: "a", b: "b"};
  // console.log(object);
  // object.a = null;
  // console.log(object);
  // object.b = undefined;
  // console.log(object);