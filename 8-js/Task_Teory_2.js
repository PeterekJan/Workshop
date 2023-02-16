//e) Funkce

// 1. Co je to funkce

// 2. Jak ji zapíšeme a zavoláme
//    - vytvořte fci s názvem ``greetings`` a v jejím těle definujte proměnnou s názvem ``text`` a hodnotou ``Hello there!``.
//Obsah této proměnné vypište do konzole (přímo v těle fce).

function greetings(){
   var text = "Hallo there!"
console.log(text)
 
}
greetings()

// 3. Návratová hodnota 
//    - funkci z předchozího bodu upravte tak aby nevypisovala do konzolze hodnotu promenné ``text``, ale aby ji vrátila
function greetings(){
    return text = "Hallo there!"
}
greetings()

// 4. Funkce bez argumentů
// 5. Funkce s argumenty
// 6. Argumenty funkce (jak funkci předáme argumenty a jak s nimi pracujeme)
//    - upravte fci ``greetings`` tak, na vstupu měla argument s názvem ``name``.
//    - fci zavolejte jako ``greetings("Anakin")``, kdy očekávaný výstup fce bude ``Anakin, hello there!``
// 7. (optional) Anonymní funkce a jak je možné je zavolat automaticky bez jejich zavolání