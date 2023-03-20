const numbers = [1, 2, 3, 2, 4, 5, 5, 6];

const isDuplicate = numbers.some(function(item, index){
    return index !== numbers.indexOf(item)
});

if (!isDuplicate) {
    console.log(`Array doesn't contain duplicates.`);
} else {
    console.log(`Array contains duplicates.`);
}
// Output: Array contains duplicates.


