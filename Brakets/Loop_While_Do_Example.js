let a, b, c;
do {
    a = Math.floor(Math.random() * 10) + 1;
    b = Math.floor(Math.random() * 10) + 1;
    c = Math.floor(Math.random() * 10) + 1;
} while (a + b <= c || a + c <= b || b + c <= a);
document.write(`Trojúhelník: a = ${a} cm, b = ${b} cm, c = ${c} cm.`);


////////////////////////////////////



// program to display numbers
let i = 1;
const n = 5;

// do...while loop from 1 to 5
do {
    console.log(i);
    i++;
} while(i <= n);

/////////////////////////////////////////



