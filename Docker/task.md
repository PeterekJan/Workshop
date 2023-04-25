-kontejner .. sbira informace o nastaveni a verzich ke spusteni app v dockeru
kontejner se chova jinak nez virtualizace systemu 

na virtualnim OS mužeme spouštět app izolovaně na rozdilných prostředích na stejném fyzickem stroji
Docker nabizi stejne izolovane prostredi bez nutnosti OS.
pouziva architekturu klientskeho serveru


DockerFile
- Kod
- Kazdý řádek je vrstva(Layer)
- Předpis pro Docker Image
- mužeme ukladat do GIT a sdílet
- každý muže jednoduše  videt naše kconfigurace kontejneru

DockerImage
- binární reprezentace, soubor nebo předpis jak vypada konkretni docker kontejner
- je vytvořen vrstvami (zaznam změn od předchozí vrstvy)
- image je jen předpis, plán toho konkretneho kontejneru. pomoci image umime vytvařet kontejneru kolik chceme (je vicepoužitelny)

DockerKontejner
-


Příkazy

- docker image ls -> vypise vsech image v dockeru
- docker ps -> vypiše všechny kontejnery
- 
- 

Docker Image

- $ docker run --name some-wordpress --network some-network -d wordpress -> spuštění a stažení image
- $ docker run --name some-wordpress -p 8080:80 -d wordpress  -> mapovani portu do dockeru

