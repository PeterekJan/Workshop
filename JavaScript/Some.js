const numbers = [1, 2, 3, 2, 4, 5, 5, 6];

const isDuplicate = numbers.some((item, index) => index !== numbers.indexOf(item));

if (!isDuplicate) {
    console.log(`Array doesn't contain duplicates.`);
} else {
    console.log(`Array contains duplicates.`);
}
// Output: Array contains duplicates.

// The some() method checks if any array elements pass a test (provided as a callback function).

// The some() method executes the callback function once for each array element.

// The some() method returns true (and stops) if the function returns true for one of the array elements.

// The some() method returns false if the function returns false for all of the array elements.

// The some() method does not execute the function for empty array elements.

// The some() method does not change the original array.