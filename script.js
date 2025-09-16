const otazky = [
    {
        otazka: "Čo sú premenné v jazyku JavaScript?",
        odpovedi: [
            { text: "Názvy pre funkcie, ktoré vždy vracajú výsledok", spravne: false },
            { text: "Miesto v pamäti počítača, kde je možné ukladať a meniť dáta počas behu programu", spravne: true },
            { text: "Špeciálne znaky na oddeľovanie riadkov kódu", spravne: false },
            { text: "Príkazy, ktoré pošlú žiadosť na API", spravne: false },
        ]
    },
    {
        otazka: "Čo sú dátové typy v programovaní?",
        odpovedi: [
            { text: "Zoznam názvov premenných", spravne: false },
            { text: "Typy hodnôt, ktoré môže premenná obsahovať", spravne: true },
            { text: "Funkcie, ktoré naformátujú obyčajné číslo na text reprezentujúci peňažný obnos", spravne: false },
            { text: "Metódy, ktoré zmenia číslo na text", spravne: false },
        ]
    },
    {
        otazka: "Čo je funkcia v JavaScripte?",
        odpovedi: [
            { text: "Metóda na odosielanie dát na server", spravne: false },
            { text: "Špeciálna premenná na uchovanie zoznamov", spravne: false },
            { text: "Séria príkazov, ktoré majú spoločnú úlohu, sú zabalené k sebe do spoločného bloku kódu, ktorý je možné opakovane volať", spravne: true },
            { text: "Podmienka na porovnanie dvoch hodnôt", spravne: false },
        ]
    }, // <-- Takto to má být
    {
        otazka: "Na čo slúžia podmienky v programovaní",
        odpovedi: [
            { text: "Na evidenciu viacerých vlastností o jednej veci, vo formáte kľúč - hodnota", spravne: false },
            { text: "Na opakované spúšťanie identických príkazov", spravne: false },
            { text: "Na rozhodovanie, ktoré príkazy sa spustia na základe splnených kritéri", spravne: true },
            { text: "Na uchovanie viacerých hodnôt v jednej premennej", spravne: false },
        ]
    },
    {
        otazka: "Čo sú polia v JavaScripte?",
        odpovedi: [
            { text: "Dátové typy dovoľujúce uchovať zoznam hodnôt", spravne: true },
            { text: "Funkcie, ktoré vracajú viacero hodnôt na základe splnenej podmienky", spravne: false },
            { text: "Premenné, ktoré obsahujú iba textové reťazce", spravne: false },
            { text: "Slučky, ktoré dovoľujú opakovane spustiť niektoré riadky kódu", spravne: false },
        ]
    },
    {
        otazka: "Čo sú objekty v JavaScripte?",
        odpovedi: [
            { text: "Metódy na prácu s poľami", spravne: false },
            { text: "Miesto v pamäti počítača, kde je možné ukladať a meniť dáta počas behu programu", spravne: false },
            { text: "Dátové štruktúry dovoľujúce evidovať vlastnosti vo formáte kľúč-hodnota", spravne: true },
            { text: "Bloky kódu, ktoré sa spustia iba za určitej podmienky", spravne: false },
        ]
    },
     {

        otazka: "Čo je cyklus v JavaScripte?",

        odpovedi: [

            { text: "Štruktúra, ktorá opakuje blok kódu, kým platí určitá podmienka", spravne: true },

            { text: "Funkcia, ktorá kontroluje pravdivosť výrazu", spravne: false },

            { text: "Zápis, ktorého jediná úloha je zistiť, či sa premenná je typu pole", spravne: false },

            { text: "Metóda na získanie konkrétnej hodnoty z objektu", spravne: false },

        ]

    },

    {

        otazka: "Čo znamená API v programovaní?",

        odpovedi: [

            { text: "Špeciálny dátový typ, ktorý hovorí, že premenná je zámerne prázdna", spravne: false },

            { text: "Nástroj na hľadanie a opravovanie chýb v kóde", spravne: false },

            { text: "Rozhranie, ktoré umožňuje aplikáciám komunikovať medzi sebou", spravne: true },

            { text: "Operátor na porovnávanie hodnôt", spravne: false },

        ]

    },

    {

        otazka: "Čo sú argumenty vo funkcii?",

        odpovedi: [

            { text: "Metódy na iterovanie cez pole", spravne: false },

            { text: "Typy premenných, ktorú sú schopné evidovať zoznam hodnôt v určitom poradí", spravne: false },

            { text: "Operátory na kontrolu pravdivosti podmienky", spravne: false },

            { text: "Hodnoty, ktoré posielame funkcii, aby ich mohla použiť pri výpočtoch", spravne: true },

        ]

    },

    {

        otazka: "Aký je rozdiel medzi undefined a null v JavaScripte?",

        odpovedi: [

            { text: "undefined znamená, že hodnota neexistuje; null znamená, že hodnota je zámerne prázdna", spravne: true },

            { text: "undefined je dátový typ; null je funkcia", spravne: false },

            { text: "medzi undefined a null neexistujú rozdiely", spravne: false },

            { text: "null znamená, že premenná neexistuje; undefined je pole, ktoré v sebe nemá žiadne hodnoty", spravne: false },

        ]

    },

    {

        otazka: "Na čo slúži kľúčové slovo return vo funkcii?",

        odpovedi: [

            { text: "Na vrátenie hodnoty z funkcie späť do miesta, kde bola funkcia zavolaná", spravne: true },

            { text: "Na zastavenie cyklu", spravne: false },

            { text: "Na vytvorenie novej premennej", spravne: false },

            { text: "Na porovnávanie hodnôt v podmienkach", spravne: false },

        ]

    },

    {

        otazka: "Na čo pri programovaní slúži debugger?",

        odpovedi: [

            { text: "Metóda na testovanie rýchlosti aplikácie", spravne: false },

            { text: "Funkcia na automatické odstránenie chýb z kódu", spravne: false },

            { text: "Nástroj na zastavenie behu kódu a kontrolu jeho stavu v danom bode, často pomáhajúci s hľadaním chýb", spravne: true },

            { text: "Je to séria príkazov, ktoré majú spoločnú úlohu, sú zabalené k sebe do spoločného bloku kódu, ktorý je možné opakovane volať", spravne: false },

        ]

    },

    {

        otazka: "Čo sú udalosti (events) v JavaScripte?",

        odpovedi: [

            { text: "Akcie, ktoré nastávajú na webe, ako kliknutie alebo stlačenie klávesy", spravne: true },

            { text: "Dátové štruktúry dovoľujúce evidovať vlastnosti vo formáte kľúč-hodnota", spravne: false },

            { text: "Dátový typ na reprezentovanie reťazcov", spravne: false },

            { text: "Špeciálne objekty na ukladanie funkcií", spravne: false },

        ]

    },

    {

        otazka: "Čo robí event listener v JavaScripte?",

        odpovedi: [

            { text: "Zastavuje spúšťanie funkcie, ak dôjde k chybe", spravne: false },

            { text: "Opakuje blok kódu za predpokladu, že programátorom určená podmienka zostáva splnená ", spravne: false },

            { text: "Čaká na určitú udalosť (napríklad kliknutie) a spustí funkciu, keď udalosť nastane", spravne: true },

            { text: "Pridáva hodnoty do poľa", spravne: false },

        ]

    },

    {

        otazka: "Čo sú knižnice (libraries) v JavaScripte?",

        odpovedi: [

            { text: "Zbierky predpripraveného kódu, ktoré môžeme použiť na zjednodušenie programovania", spravne: true },

            { text: "Funkcie, ktoré zisťujú koľko slov alebo znakov sa nachádza v texte uloženom v premennej", spravne: false },

            { text: "Nástroje na zisťovanie syntaxových chýb", spravne: false },

            { text: "Hodnoty, ktoré posielame funkcii, aby ich mohla použiť pri výpočtoch", spravne: false },

        ]

    },

    {

        otazka: "Ktorý z nasledujúcich zápisov správne vytvára novú premennú v JavaScripte?",

        odpovedi: [

            { text: "variable score = 420", spravne: false },

            { text: "let score = 420", spravne: true },

            { text: "new score := 420", spravne: false },

            { text: "create score 420", spravne: false },

        ]

    },

    {

        otazka: "Ktorý zápis v JavaScripte spustí cyklus?",

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