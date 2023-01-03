<ul id ="seznam-ovoce">
  <li>Jablka</li>
  <li>Hrušky</li>
  <li>Okurky</li>
  <li>Švestky</li>
</ul>
<script>
let seznamOvoce = document.getElementById('seznam-ovoce');
for (let ovoce of seznamOvoce.childNodes) {
    if (ovoce.textContent === 'Okurky') {
        seznamOvoce.removeChild(ovoce);
        break;
    }
}
</script>
////////////////////////////////

let cislaRetezec = '10,50,abcd,30,9';
// rozložení řetězce do pole
let cislaPole = cislaRetezec.split(',');
let soucet = 0;
for (let cislo of cislaPole) {
    // převedení řetězce na celé číslo
    let celeCislo= parseInt(cislo);
    if (Number.isNaN(celeCislo)) continue; // hodnoty NaN ignorujeme
    soucet += celeCislo;
}
document.write('Součet je: ' + soucet + '.');

////////////////////////////////////////



