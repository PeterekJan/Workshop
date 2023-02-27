var array = [5,-5,5,5,2,2,2,10,101,10,-5]


function getMode(array) {
  var frequency = []; // array of frequency.
  var maxFreq = 0; // holds the max frequency.
  var modes = [];
  for (var i in array) {
    frequency[array[i]] = (frequency[array[i]] || 0) + 1; // increment frequency.
    if (frequency[array[i]] > maxFreq) { // is this frequency > max so far ?
      maxFreq = frequency[array[i]]; // update max.
    };
  };
  for (var k in frequency) {
    if (frequency[k] == maxFreq) {
      modes.push(k);
    };
    //console.log(maxFreq)
    //console.log(frequency[k],[k])
    
    //console.log(modes)
  };
  return modes;
};

  var newArray = [];
  newArray = getMode(array).sort()

  //console.log(newArray)

