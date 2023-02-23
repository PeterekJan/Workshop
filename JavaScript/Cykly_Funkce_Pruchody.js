/* ================= FUNCTIONS ================= */

/* (array) list */
function counter(list) {

    var counts = {};


    list.forEach(function(a) {

        if(counts[a] === undefined) {
            counts[a] = 0;
            console.log("Initializing counts["+a+"]");
        }

        console.log("Incrementing counts["+a+"]")

        ++counts[a];

        console.log(counts);
    });

    return counts;
}

/* ================= VARIABLES ================= */

var greetings = "Ahoj Ahoj Honzo jak se máš Máš se";
var arra = greetings.split(" ");


/* ================= CODE ================= */

var arr = [1,9,8,7,6,7,8,9,54,2,1,86];


counter(arr);