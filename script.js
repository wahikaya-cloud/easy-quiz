const otazky = [
    {
        otazka: "Co jsou proměnné v jazyce JavaScript?",
        odpovedi: [
            { text: "Názvy pro funkce, které vždy vracejí výsledek", spravne: false },
            { text: "Místo v paměti počítače, kde lze ukládat a měnit data během běhu programu", spravne: true },
            { text: "Speciální znaky pro oddělování řádků kódu", spravne: false },
            { text: "Příkazy, které zašlou žádost na API", spravne: false },
        ]
    },
    {
        otazka: "Co jsou datové typy v programování?",
        odpovedi: [
            { text: "Seznam názvů proměnných", spravne: false },
            { text: "Typy hodnot, které může proměnná obsahovat", spravne: true },
            { text: "Funkce, které naformátují obyčejné číslo na text reprezentující peněžní obnos", spravne: false },
            { text: "Metody, které změní číslo na text", spravne: false },
        ]
    },
    {
        otazka: "Co je funkce v JavaScriptu?",
        odpovedi: [
            { text: "Metoda pro odesílání dat na server", spravne: false },
            { text: "Speciální proměnná pro uchování seznamů", spravne: false },
            { text: "Série příkazů, které mají společný úkol, jsou zabaleny k sobě do společného bloku kódu, který lze opakovaně volat", spravne: true },
            { text: "Podmínka pro porovnání dvou hodnot", spravne: false },
        ]
    }, 
    {
        otazka: "K čemu slouží podmínky v programování",
        odpovedi: [
            { text: "Pro evidenci více vlastností o jedné věci, ve formátu klíč - hodnota", spravne: false },
            { text: "Pro opakované spouštění identických příkazů", spravne: false },
            { text: "K rozhodování, které příkazy se spustí na základě splněných kritérií", spravne: true },
            { text: "Pro uchování více hodnot v jedné proměnné", spravne: false },
        ]
    },
    {
        otazka: "Co jsou pole v JavaScriptu?",
        odpovedi: [
            { text: "Datové typy dovolující uchovat seznam hodnot", spravne: true },
            { text: "Funkce, které vracejí více hodnot na základě splněné podmínky", spravne: false },
            { text: "Proměnné, které obsahují pouze textové řetězce", spravne: false },
            { text: "Smyčky, které dovolují opakovaně spustit některé řádky kódu", spravne: false },
        ]
    },
    {
        otazka: "Co jsou objekty v JavaScriptu?",
        odpovedi: [
            { text: "Metody pro práci s poli", spravne: false },
            { text: "Místo v paměti počítače, kde lze ukládat a měnit data během běhu programu", spravne: false },
            { text: "Datové struktury dovolující evidovat vlastnosti ve formátu klíč-hodnota", spravne: true },
            { text: "Bloky kódu, které se spustí pouze za určité podmínky", spravne: false },
        ]
    },
     {

        otazka: "Co je cyklus v JavaScriptu?",

        odpovedi: [

            { text: "Struktura, která opakuje blok kódu, dokud platí určitá podmínka", spravne: true },

            { text: "Funkce, která kontroluje pravdivost výrazu", spravne: false },

            { text: "Zápis, jehož jediný úkol je zjistit, zda se proměnná je typu pole", spravne: false },
            { text: "Metoda pro získání konkrétní hodnoty z objektu", spravne: false },
        ]
    },
    {
        otazka: "Co znamená API v programování?",
        odpovedi: [
            { text: "Speciální datový typ, který říká, že proměnná je záměrně prázdná", spravne: false },
            { text: "Nástroj pro hledání a opravování chyb v kódu", spravne: false },
            { text: "Rozhraní, které umožňuje aplikacím komunikovat mezi sebou", spravne: true },
            { text: "Operátor pro porovnávání hodnot", spravne: false },
        ]
    },
    {
        otazka: "Co jsou argumenty ve funkci?",
        odpovedi: [
            { text: "Metody pro iterování přes pole", spravne: false },
            { text: "Typy proměnných, kterou jsou schopny evidovat seznam hodnot v určitém pořadí", spravne: false },
            { text: "Operátory pro kontrolu pravdivosti podmínky", spravne: false },
            { text: "Hodnoty, které posíláme funkci, aby je mohla použít při výpočtech", spravne: true },
        ]
    },
    {
        otazka: "Jaký je rozdíl mezi undefined a null v JavaScriptu?",
        odpovedi: [
            { text: "undefined znamená, že hodnota neexistuje; null znamená, že hodnota je záměrně prázdná", spravne: true },
            { text: "undefined je datový typ; null je funkce", spravne: false },
            { text: "mezi undefined a null neexistují rozdíly", spravne: false },
            { text: "null znamená, že proměnná neexistuje; undefined je pole, které v sobě nemá žádné hodnoty", spravne: false },
        ]
    },
    {
        otazka: "K čemu slouží klíčové slovo return ve funkci?",
        odpovedi: [
            { text: "K vrácení hodnoty z funkce zpět do místa, kde byla funkce zavolána", spravne: true },
            { text: "K zastavení cyklu", spravne: false },
            { text: "K vytvoření nové proměnné", spravne: false },
            { text: "Pro porovnávání hodnot v podmínkách", spravne: false },
        ]
    },
    {
        otazka: "K čemu při programování slouží debugger?",
        odpovedi: [
            { text: "Metoda pro testování rychlosti aplikace", spravne: false },
            { text: "Funkce pro automatické odstranění chyb z kódu", spravne: false },
            { text: "Nástroj pro zastavení běhu kódu a kontrolu jeho stavu v daném bodě, často pomáhající s hledáním chyb", spravne: true },
            { text: "Je to série příkazů, které mají společný úkol, jsou zabaleny k sobě do společného bloku kódu, který lze opakovaně volat", spravne: false },
        ]
    },
    {
        otazka: "Co jsou události (events) v JavaScriptu?",
        odpovedi: [
            { text: "Akce, které nastávají na webu, jako kliknutí nebo stisk klávesy", spravne: true },
            { text: "Datové struktury dovolující evidovat vlastnosti ve formátu kľíč-hodnota", spravne: false },
            { text: "Datový typ pro reprezentaci řetězců", spravne: false },
            { text: "Speciální objekty pro ukládání funkcí", spravne: false },
        ]
    },
    {
        otazka: "Co dělá event listener v JavaScriptu?",
        odpovedi: [
            { text: "Zastavuje spouštění funkce, dojde-li k chybě", spravne: false },
            { text: "Opakuje blok kódu za předpokladu, že programátorem určená podmínka zůstává splněna", spravne: false },
            { text: "Čeká na určitou událost (například kliknutí) a spustí funkci, když událost nastane", spravne: true },
            { text: "Přidává hodnoty do pole", spravne: false },
        ]
    },
    {
        otazka: "Co jsou knihovny (libraries) v JavaScriptu?",
        odpovedi: [
            { text: "Sbírky předpřipraveného kódu, které můžeme použít ke zjednodušení programování", spravne: true },
            { text: "Funkce, které zjišťují kolik slov nebo znaků se nachází v textu uloženém v proměnné", spravne: false },
            { text: "Nástroje pro zjišťování syntaxových chyb", spravne: false },
            { text: "Hodnoty, které posíláme funkci, aby je mohla použít při výpočtech", spravne: false },

        ]
    },
    {
        otazka: "Který z následujících zápisů správně vytváří novou proměnnou v JavaScriptu?",
        odpovedi: [
            { text: "variable score = 420", spravne: false },
            { text: "let score = 420", spravne: true },
            { text: "new score := 420", spravne: false },
            { text: "create score 420", spravne: false },
        ]
    },
    {
        otazka: "Který zápis v JavaScriptu spustí cyklus?",
        odpovedi: [
            { text: " loop (i = 0; i < 5; i++) { console.log(i); } ", spravne: false },
            { text: " cycle { i = 0; while i < 5 { i++; } } ", spravne: false },
            { text: " for (let i = 0; i < 5; i++) { console.log(i); } ", spravne: true },
            { text: " for i in 5: print(i) ", spravne: false },
        ]
    },
];

const otazkaElement = document.getElementById("otazka");
const odpovediKontejner = document.getElementById("odpovedi-kontejner");
const dalsiBtn = document.getElementById("dalsi-btn");

let aktualniIndexOtazky = 0;
let skore = 0;

function startKviz() {
    aktualniIndexOtazky = 0;
    skore = 0;
    dalsiBtn.innerHTML = "Další Otázka";
    zobrazOtazku();
}

function zobrazOtazku() {
    resetStavu();
    let aktualniOtazka = otazky[aktualniIndexOtazky];
    let cisloOtazky = aktualniIndexOtazky + 1;
    otazkaElement.innerHTML = cisloOtazky + ". " + aktualniOtazka.otazka;

    aktualniOtazka.odpovedi.forEach(odpoved => {
        const tlacitko = document.createElement("button");
        tlacitko.innerHTML = odpoved.text;
        tlacitko.classList.add("odpoved-btn");
        odpovediKontejner.appendChild(tlacitko);
        if (odpoved.spravne) {
            tlacitko.dataset.spravne = odpoved.spravne;
        }
        tlacitko.addEventListener("click", vyberOdpoved);
    });
}

function resetStavu() {
    dalsiBtn.style.display = "none";
    while(odpovediKontejner.firstChild) {
        odpovediKontejner.removeChild(odpovediKontejner.firstChild);
    }
}

function vyberOdpoved(e) {
    const vybraneTlacitko = e.target;
    const jeSpravne = vybraneTlacitko.dataset.spravne === "true";
    if (jeSpravne) {
        vybraneTlacitko.classList.add("spravne");
        skore++;
    } else {
        vybraneTlacitko.classList.add("spatne");
    }
    Array.from(odpovediKontejner.children).forEach(tlacitko => {
        if(tlacitko.dataset.spravne === "true") {
            tlacitko.classList.add("spravne");
        }
        tlacitko.disabled = true;
    });
    dalsiBtn.style.display = "block";
}

function zobrazSkore() {
    resetStavu();
    otazkaElement.innerHTML = `Dosáhl jsi ${skore} z ${otazky.length} správných odpovědí!`;
    dalsiBtn.innerHTML = "Zkusit znovu";
    dalsiBtn.style.display = "block";

    // Spuštění konfet na konci testu
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
    });
}

function handleDalsiTlacitko() {
    aktualniIndexOtazky++;
    if (aktualniIndexOtazky < otazky.length) {
        zobrazOtazku();
    } else {
        zobrazSkore();
    }
}

dalsiBtn.addEventListener("click", () => {
    if(aktualniIndexOtazky < otazky.length) {
        handleDalsiTlacitko();
    } else {
        startKviz();
    }
});

startKviz();