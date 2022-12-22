let dny = ["Neděle", "Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota"];
let d = new Date();
let den = d.getDay(); // vrátí číslo 0 - 6
document.write("Dnes je " + dny[den]);