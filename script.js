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
    },
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
    }
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