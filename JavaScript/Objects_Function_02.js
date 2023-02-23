var vladniNarizeni = false;

var school = {
    type: "Gymnazium",          //property
    street: "Ucencova 25",      //property
    city: "Tabor",              //property
    capacity: 135,              //property
    open: function(){
        console.log(`Skola ${this.type} ${this.city} je otevrena`)          //metody
    },
    closed: function(){
        console.log(`Skola ${this.type} ${this.city} je zavrena`)           //metody
    }
}

if(vladniNarizeni){
    school.closed()
}else{
    school.open()
}

