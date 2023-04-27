
<!DOCTYPE html> - Definuje, že tento dokument je HTML a určuje verzi HTML, kterou by měl prohlížeč použít.
<html lang="en" data-bs-theme="dark"> - Začátek HTML kódu, definuje kořenový prvek stránky a nastavuje jazyk stránky na angličtinu a téma na tmavé.
<head> - Začátek hlavičky dokumentu.
<meta charset="UTF-8"> - Definuje kódování znaků použité v dokumentu jako UTF-8.

<title>Internet Banking</title> - Definuje název stránky, který se zobrazí v záložce prohlížeče.
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous"> - Definuje odkaz na CSS soubor Bootstrap frameworku pro stylování stránky.
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.4/font/bootstrap-icons.css"> - Definuje odkaz na CSS soubor obsahující ikony Bootstrap.

<body> - Začátek těla dokumentu.
<div class="container"> - Začátek kontejneru Bootstrap pro uspořádání prvku na stránce.
<header class="d-flex justify-content-center py-3"> - Začátek hlavičky stránky, která obsahuje odkazy na různé části stránky.

<ul class="nav nav-pills"> - Definuje seznam navigačních odkazů.
<li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Home</a></li> - Definuje navigační odkaz pro úvodní stránku.
<li class="nav-item"><a href="#" class="nav-link">Features</a></li> - Definuje navigační odkaz pro sekci vlastností.
<li class="nav-item"><a href="#" class="nav-link">Pricing</a></li> - Definuje navigační odkaz pro sekci cen.
<li class="nav-item"><a href="#" class="nav-link">FAQs</a></li> - Definuje navigační odkaz pro sekci často kladených otázek.
<li class="nav-item"><a href="#" class="nav-link">About</a></li> - Definuje navigační odkaz pro sekci o nás.
</ul> - Ukončuje seznam navigačních odkazů.
</header> - Ukončuje hlavičku stránky.
</div> - Ukončuje kontejner Bootstrap.
<div class="container m-t-5"> - Začátek dalšího kontejneru Bootstrap.
<div class="row align-items-start py-5">

<div class="container m-t-5">: Vytváří div element s třídou container a m-t-5. Tato třída slouží k umístění obsahu na stránce a m-t-5 znamená "margin-top: 5".

<div class="row align-items-start py-5">: Vytváří div element s třídou row, align-items-start a py-5. row slouží k umístění obsahu na řádek, align-items-start slouží k zarovnání obsahu na začátek a py-5 znamená "padding-top: 5" a "padding-bottom: 5".

<div class="mx-auto col-lg-5">: Vytváří div element s třídou mx-auto a col-lg-5. mx-auto slouží k centrování obsahu a col-lg-5 znamená, že sloupec zabírá 5/12 šířky celé řádky v širších zobrazovacích zařízeních.

<form class="p-4 p-md-5 border rounded-3 bg-body-tertiary">: Vytváří formulář s třídou p-4 p-md-5 border rounded-3 bg-body-tertiary. p-4 a p-md-5 znamená "padding: 4" a "padding-md: 5", border slouží k vytvoření okrajů, rounded-3 znamená, že okraje budou mít zaoblené rohy, a `bg-body-terti
<div class="form-floating mb-3">: začátek definice prvku "div" s třídami "form-floating" a "mb-3"

<span class="form-control">John Doe</span>: definice prvku "span" s třídou "form-control" a textovým obsahem "John Doe"

<label for="name">Name</label>: definice prvku "label" s atributem "for" nastaveným na hodnotu "name" a textovým obsahem "Name"

</div>: ukončení definice prvku "div"

<div class="form-floating mb-3">: začátek definice prvku "div" s třídami "form-floating" a "mb-3"

<span class="form-control">100000</span>: definice prvku "span" s třídou "form-control" a textovým obsahem "100000"

<label for="money">Initial money</label>: definice prvku "label" s atributem "for" nastaveným na hodnotu "money" a textovým obsahem "Initial money"

</div>: ukončení definice prvku "div"

<div class="py-2">: Definuje element s vnitřním odsazením.

<h2>Transactions</h2>: Nadpis pro sekci formuláře, který říká "Transactions".

<form class="p-4 p-md-5 border rounded-3 bg-body-tertiary">: Definuje nový formulář s vnějším odsazením, zaoblenými rohy a pozadím s pozadím těla terciární barvy.

<div class="row g-3">: Vytváří řádek, který bude obsahovat sloupce s dalšími prvky formuláře.
<div class="col">: Definuje sloupec s prvky formuláře, který bude mít stejnou šířku jako ostatní sloupce.
<div class="form-floating mb-3 ">: Vytváří input, který se bude "plavit" nad label a umožní tak lepší zobrazení názvu pole.

<input type="number" class="form-control" id="amount">: Definuje pole pro zadání částky transakce s typem "number" a ID "amount".

<label for="name">Amount</label>: Label pro pole "amount".
<div class="col">: Další sloupec s prvky formuláře.
<div class="form-floating mb-3">: Vytváří dropdown menu.

<select id="currency" class="form-select">: Definuje dropdown menu s ID "currency" a třídou "form-select".

<option>CZK</option>: První položka v dropdown menu s hodnotou "CZK".
<option>EUR</option>: Druhá položka v dropdown menu s hodnotou "EUR".

<label for="currency">Currency</label>: Label pro dropdown menu.

<div class="col">: Vytváří sloupec v řádku. Tento sloupec má velikost odpovídající šířce jedné dvanáctiny (1/12) šířky rodičovského prvku na velkých obrazovkách (large screens).
<div class="form-floating mb-3">: Vytváří obal pro prvky formuláře a přidává vnitřní odsazení. mb-3 nastavuje mezery mezi prvky.

<select id="category" class="form-select">: Vytváří select box, kde uživatel může vybrat jednu z nabízených možností. id="category" nastavuje unikátní identifikátor pro tento prvek. class="form-select" přidává stylizaci do formuláře.

<option>Food</option>: Vytváří jednu položku v nabídce select boxu. Uživatel může vybrat jednu z nabízených možností.

<button class="w-100 btn btn-lg btn-primary" type="submit">Add transaction</button>: Vytváří tlačítko pro odeslání formuláře. class="w-100 btn btn-lg btn-primary" nastavuje stylizaci tlačítka. type="submit" říká, že po kliknutí na tlačítko se má formulář odeslat.

<div class="m-t-2"> - nadřazený kontejner, který má nastavené odstupy (m-t-2 = margin-top: 2rem)
<div class="list-group"> - kontejner seznamu
<div class="list-group-item list-group-item-action d-flex gap-3 py-3 list-group-item-success" aria-current="true"> - první položka seznamu, která má třídu list-group-item-success (zelená barva) a ikonu šipky nahoru (bi bi-arrow-up). Tento řádek zobrazuje jednu transakci, která byla úspěšně dokončena (credit).

<i class="bi bi-arrow-up" style="font-size: 2rem;"></i> - ikona šipky nahoru, která zobrazuje směr transakce (credit).
<div class="d-flex gap-2 w-100 justify-content-between"> - kontejner pro zobrazení názvu transakce a data transakce
<div> - kontejner pro zobrazení názvu transakce (h6) a částku transakce (span)
<small class="opacity-50 text-nowrap">2023-04-18 15:23</small> - zobrazení data a času transakce (malý text, s průhledností 50% a text-nowrap pro zabránění převýšení řádku)
Další položky seznamu jsou podobné, s některými malými rozdíly - změna třídy list-group-item-danger na poslední položce seznamu (červená barva) a ikona šipky dolů pro transakce typu Debit.

<div class="container">: Tento řádek vytváří kontejner, který obaluje patičku a zajišťuje, že se obsah bude vykreslovat uprostřed stránky.
<footer class="py-3 my-4">: Tento řádek definuje element patičky a nastavuje jeho výšku (py-3) a vnitřní odsazení (my-4).
<ul class="nav justify-content-center border-bottom pb-3 mb-3">: Tento řádek definuje seznam (ul) odkazů (li) v menu patičky. Třída nav indikuje navigační menu. justify-content-center umístí seznam na střed. border-bottom přidá dolní ohraničení seznamu. pb-3 a mb-3 nastavují vnitřní odsazení a vnější odsazení (padding a margin) seznamu.

<li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Home</a></li>: Tento řádek definuje položku seznamu v menu patičky. Třída nav-item indikuje položku v navigačním menu. href="#" nastavuje odkaz na stránku, která není definovaná. nav-link nastavuje odkaz jako odkaz navigačního menu. px-2 nastavuje vnitřní odsazení (padding) odkazu. text-body-secondary nastavuje barvu textu na sekundární barvu. V tomto případě je to šedá barva.

<p class="text-center text-body-secondary">© 2023 Company, Inc</p>: Tento řádek definuje textový element s copyright informací. Třída text-center umístí text na střed. text-body-secondary nastavuje barvu textu na sekundární barvu.