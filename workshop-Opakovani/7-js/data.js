var object = 
[
    {
        "id": 9223372000001090591,
        "category": {
            "id": 52695439,
            "name": "ipsum"
        },
        "name": "doggie",
        "photoUrls": [
            "pariatur ad consequat dolor ",
            "esse veniam"
        ],
        "tags": [
            {
                "id": 94902596,
                "name": "cupidatat esse in adipisicing"
            },
            {
                "id": -59393355,
                "name": "no"
            }
        ],
        "status": "pending"
    },
    {
        "id": 9223372000001090592,
        "category": {
            "id": 96865621,
            "name": "dolore nulla velit sunt qui"
        },
        "name": "Jamie",
        "photoUrls": [
            "proident L",
            "dolor cillum"
        ],
        "tags": [
            {
                "id": -67157186,
                "name": "n"
            },
            {
                "id": -88140252,
                "name": "dolor la"
            }
        ],
        "status": "available"
    },
    {
        "id": 393245,
        "category": {
            "id": 54664,
            "name": "totvs"
        },
        "name": "Meu Dog",
        "photoUrls": [],
        "tags": [],
        "status": "available"
    },
    {
        "id": 9223372000001090789,
        "category": {
            "id": 0,
            "name": "cats"
        },
        "name": "Bruno",
        "photoUrls": [
            "string"
        ],
        "tags": [
            {
                "id": 1,
                "name": "red"
            }
        ],
        "status": "available"
    },
    {
        "id": 9223372000001090791,
        "category": {
            "id": 0,
            "name": "dogs"
        },
        "name": "Dobby",
        "photoUrls": [
            "string"
        ],
        "tags": [
            {
                "id": 0,
                "name": "string"
            }
        ],
        "status": "sold"
    },
    {
        "id": 9223372000001090845,
        "category": {
            "id": 0,
            "name": "cats"
        },
        "name": "Bruno",
        "photoUrls": [
            "string"
        ],
        "tags": [
            {
                "id": 6,
                "name": "white"
            },
            {
                "id": 80,
                "name": "cat"
            }
        ],
        "status": "pending"
    },
    {
        "id": 9223372000001090847,
        "category": {
            "id": 0,
            "name": "dogs"
        },
        "name": "Dobby",
        "photoUrls": [
            "string"
        ],
        "tags": [
            {
                "id": 6,
                "name": "dogs"
            },
            {
                "id": 3,
                "name": "friendly"
            },
            {
                "id": 9,
                "name": "black"
            }
        ],
        "status": "pending"
    },
    {
        "id": 9223372000001090860,
        "category": {
            "id": 0,
            "name": "cats"
        },
        "name": "Bruno",
        "photoUrls": [
            "string"
        ],
        "tags": [
            {
                "id": 0,
                "name": "string"
            }
        ],
        "status": "pending"
    },
    {
        "id": 9223372000001090865,
        "category": {
            "id": 0,
            "name": "dogs"
        },
        "name": "Dobby",
        "photoUrls": [
            "string"
        ],
        "tags": [
            {
                "id": 11,
                "name": "string"
            }
        ],
        "status": "pending"
    },
    {
        "id": 9223372000001090944,
        "category": {
            "id": 0,
            "name": "cats"
        },
        "name": "Bruno",
        "photoUrls": [
            "string"
        ],
        "tags": [
            {
                "id": 100,
                "name": "string"
            }
        ],
        "status": "pending"
    },
    {
        "id": 9223372000001090946,
        "category": {
            "id": 0,
            "name": "dogs"
        },
        "name": "Dobby",
        "photoUrls": [
            "string"
        ],
        "tags": [
            {
                "id": 7,
                "name": "string"
            }
        ],
        "status": "pending"
    },
    {
        "id": 9223372000001091050,
        "category": {
            "id": 0,
            "name": "cats"
        },
        "name": "Bruno",
        "photoUrls": [
            "string"
        ],
        "tags": [
            {
                "id": 66,
                "name": "string"
            }
        ],
        "status": "pending"
    },
    {
        "id": 9223372000001091055,
        "category": {
            "id": 0,
            "name": "dogs"
        },
        "name": "Dobby",
        "photoUrls": [
            "string"
        ],
        "tags": [
            {
                "id": 3,
                "name": "yellow"
            }
        ],
        "status": "pending"
    },
    {
        "id": 9223372000001091209,
        "category": {
            "id": 0,
            "name": "dogs"
        },
        "name": "Jamie",
        "photoUrls": [
            "string"
        ],
        "tags": [],
        "status": "pending"
    },
    {
        "id": 9223372000001091266,
        "category": {
            "id": 0,
            "name": "cats"
        },
        "name": "Bruno",
        "photoUrls": [
            "string"
        ],
        "tags": [],
        "status": "sold"
    },
    {
        "id": 9223372000001091268,
        "category": {
            "id": 0,
            "name": "dogs"
        },
        "name": "Cucu",
        "photoUrls": [
            "string"
        ],
        "tags": [],
        "status": "available"
    }
]

/*/Vypište 4. výskyt objektu v poli/*/

//console.log(object[4]);


/*/Vypište hodnotu "category"/*/

// for (var i = 0; i < object.length; i++){
// console.log(object[i].category)
// }

//Vytvořte nové pole objektů, které bude obsahovat jenom objekty se sudými indexy


// let odd = object.filter((element, index) => {
//     return index % 2 === 0;
//   })

//   console.log(odd);

//Vytvořte nové pole objektů, které bude obsahovat jenom objekty s lichými indexy

// let even = object.filter((element, index) => {
//     return index % 2 === 1;
//   })

//   console.log(even);

//Vytvořte nové pole objektů, které bude obsahovat jenom objekty, které obsahují "status" == "available"

// var result = object.filter(function(availableStatus){
//     var tryToFind = availableStatus.status.toLowerCase().includes("available")
//     return tryToFind
// });

// console.log(result)

//Vytvořte nový objekt, který bude mít následující strukturu

var newObject = {
    items: [],
    total_count: object.length,
    pending_count: 0,
    available_count: 0,
    not_available_count:0

}


for (i = 0; i < object.length; i++){
    var item = object[i];

    var newItem = {
        id: i,
        orig_id: item.id.toString(),
        category_name: item.category.name,
        images: item.photoUrls.join(", ")

}

newObject.items.push(newItem)

if (item.status == "pending"){
    newObject.pending_count++;
}else if (item.status == "available"){
    newObject.available_count++;
}

for (j = 0, j < 15, j++){
if(item.status !== "available" && item.tags.id < 10){
    newObject.not_available_count++;
}

console.log(newObject)


}








