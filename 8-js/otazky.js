// Jde napřimo porovnavat dva prvky v arr? nebo to musom vzdy prevest?
// (arr[1]=== arr[2])???
// (arr[i]=== arr[j])???

var sentence = a.split(' ')
console.log(sentence)
var yodaSentence = [];

for(i = sentence.length-1; i >=0; i--){
yodaSentence.push(sentence[i])
};
var yodaSentence2 = yodaSentence.join(" ").toLowerCase()
//yodaSentence.charAt(0).toUpperCase()
var result = yodaSentence2[0].toUpperCase() + yodaSentence2.slice(1)
console.log(result)

};

};

yoda("Can i go to toilet!")