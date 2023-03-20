const array = [1, 2, 4, 2, 5, 5, 5];
const duplicates = [];
for (let i = 0; i < array.length; i++) {
  for (let j = i + 1; j < array.length; j++) {
    if (array[i] === array[j]) {
      duplicates.push(array[i]);
    }
  }
}
console.log(duplicates)




/////////////////////////////////////////////////////////////////



const numbers = [1, 2, 3, 2, 4, 5, 5, 6];

const unique = Array.from(new Set(numbers));

if(numbers.length === unique.length) {
    console.log(`Array doesn't contain duplicates.`);
} else {
    console.log(`Array contains duplicates.`);
}
// Output: Array contains duplicates.


//////////////////////////////////////////////////////////
const numbers = [1, 2, 3, 2, 4, 5, 5, 6];

const isDuplicate = numbers.some((item, index) => index !== numbers.indexOf(item));

if (!isDuplicate) {
    console.log(`Array doesn't contain duplicates.`);
} else {
    console.log(`Array contains duplicates.`);
}
// Output: Array contains duplicates.

////////////////////////////////////////////////////
const array = [1, 2, 4, 2, 5, 5, 5];
const duplicates = [];

for (let i = 0; i < array.length; i++) {
  for (let j = i + 1; j < array.length; j++) {
    if (array[i] === array[j] && !duplicates.includes(array[i])) {
      duplicates.push(array[i]);
      break;
    }
  }
}

console.log(duplicates);