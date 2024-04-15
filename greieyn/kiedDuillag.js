const saaghToshiaght = document.getElementById("kied-saagh-toshiaght");
const arraghToshiaght = () => {
    saaghToshiaght.remove();
    window.onkeyup = null;
};

function gowToshiaght (sk, sfx) {
    sessionStorage.setItem("trooidGamman", "true");
    localStorage.setItem("foRaad", true);
    sessionStorage.setItem("kiaullGoll", sk.checked);
    kiaullGoll = sessionStorage.getItem("kiaullGoll") == "true" ? true : false;
    if (kiaullGoll) lhoob.play();
    sessionStorage.setItem("sfxGoll", sfx.checked);
    sfxGoll = sessionStorage.getItem("sfxGoll") == "true" ? true : false;
    arraghToshiaght();
    document.body.style.overflow = "scroll";
};

const skirreyderKiaull = document.getElementById("skirreyder-kiaull");
const skirreyderSFX = document.getElementById("skirreyder-sfx");

if (localStorage.getItem("trooidGamman")) {
    const boayl = document.getElementById(localStorage.getItem("ynnydY"));
    boayl.scrollIntoView();
    prowTrooidGamman();
    arraghToshiaght();
    caghlaaArdSkirreyderKiaull(sessionStorage.getItem("kiaullGoll") == "true" ? true : false);
    caghlaaArdSkirreyderSFX(skirreyderSFX.checked = sessionStorage.getItem("sfxGoll") == "true" ? true : false);
    if (kiaullGoll) lhoob.play();
}
else {
    saaghToshiaght.style.visibility = "visible";
    document.body.style.overflow = "hidden";
    skirreyderKiaull.onchange = () => caghlaaArdSkirreyderKiaull(skirreyderKiaull.checked);
    skirreyderSFX.onchange = () => caghlaaArdSkirreyderSFX(skirreyderSFX.checked);
    const crammanToshiaght = document.getElementById("cramman-toshiaght");
    crammanToshiaght.onclick = () => gowToshiaght(skirreyderKiaull, skirreyderSFX);
    window.onkeyup = t => {
        if (t.key == "Escape" || t.keyCode == 27 || t.key == "Enter" || t.keyCode == 13) gowToshiaght(skirreyderKiaull, skirreyderSFX);
    };
}

function soieRollageyn (cooish, caslys) {
    const aggChooish = focklynRyYnsagh[cooish]
        .map(f => localStorage.getItem(f[0])
        .split(","))
        .flat()
        .reduce((a, b) => a + +b, 0);
    const trass = focklynRyYnsagh[cooish].length;
    switch (true) {
        case aggChooish >= trass * 3:
            caslys.src = "caslyssyn/rollage-geayney.webp";
            localStorage.setItem(cooish, "geayney");
            break;
        case aggChooish >= trass * 2:
            caslys.src = "caslyssyn/rollage-gorrym.webp";
            localStorage.setItem(cooish, "gorrym");
            break;
        case aggChooish >= trass && cooish != "fEmshyrChaie":
            caslys.src = "caslyssyn/rollage-jiarg.webp";
            localStorage.setItem(cooish, "jiarg");
            break;
        default:
            caslys.src = "";
    }
}

function fowRollageyn () {
    const caslyssyn = [...document.getElementsByClassName("rollage")];
    mooie("mean fowRollageyn");
    Object.keys(focklynRyYnsagh).forEach((k, i) => soieRollageyn(k, caslyssyn[i].childNodes[1]));
}
fowRollageyn();

function nahAyrn () {
    mooie("toshiaght function");
    const linnaghynScarrey = document.getElementsByClassName("linney-scarrey");
    const glassyn = document.getElementsByClassName("glass");
    const cleeahyn = document.getElementsByClassName("cleeah-cooish");
    function foshilGlass (earroo) {
        linnaghynScarrey[earroo].classList.add("nah-ayrn");
        if (sfxGoll) ymHeidey.play();
        setTimeout(() => {
            glassBrishey.play();
            glassyn[earroo].src = "../caslyssyn/glass-brisht.webp";
            glassyn[earroo].classList.add("glass-brisht");
            linnaghynScarrey[earroo].style.visibility = "hidden";
            cleeahyn[earroo + 1].classList.add("ayrn-jeant");
            cleeahyn[earroo + 1].style.pointerEvents = "auto";
            setTimeout(() => cleeahyn[earroo + 1].scrollIntoView({behavior: "smooth"}), 500);
        }, 1800);
    };
    for (let i = 0; i < 3; i++) {
        if (localStorage.getItem(`ayrn-${i + 1}`) == "jeant") {
            linnaghynScarrey[i].style.visibility = "hidden";
            glassyn[i].style.visibility = "hidden";
            cleeahyn[i + 1].style.filter = "none";
            cleeahyn[i + 1].style.pointerEvents = "auto";
        }
    };
    let staydCooishyn = [
        prowCooishyn(["fEnnaghtyn", "fEarrooyn10", "fBuill"]),
        prowCooishyn(["fBee", "fLaaghyn", "fEmshyr", "fRoortyssyn"]),
        prowCooishyn(["fEmshyrChaie", "fBigginyn", "fEarrooyn20", "fDaahyn"])
    ];
    function prowCooishyn (cooishyn) {
        let cArr = [];
        cooishyn.forEach(c => {
            if (localStorage.getItem(c)) cArr.push(localStorage.getItem(c));
        });
        return cArr;
    };
    mooie(staydCooishyn[0]);
    mooie(staydCooishyn[1]);
    mooie(staydCooishyn[2]);
    mooie(cleeahyn[0].children.length);
    // prow dagh cooish d'akin vel ad er n'gheddyn gorrym ny ny share
    for (let i = 0; i < staydCooishyn.length; i++) {
        if (!localStorage.getItem(`ayrn-${i + 1}`) && staydCooishyn[i].length == cleeahyn[i].children.length && !staydCooishyn[i].includes("jiarg")) {
            localStorage.setItem(`ayrn-${i + 1}`, "jeant");
            if (i < staydCooishyn.length - 1) foshilGlass(i);
            else {
                jerreyMie.play();
                const saaghOoilleyJeant = document.getElementById("saagh-ooilley-jeant");
                saaghOoilleyJeant.style.visibility = "visible";
                const coyrleOoilleyJeant = document.getElementById("coyrle-ooilley-jeant");
                coyrleOoilleyJeant.classList.add("gaase-screeyn");
                const crammanOoilleyJeant = document.getElementById("cramman-ooilley-jeant");
                crammanOoilleyJeant.onclick = () => saaghOoilleyJeant.remove();
            };
        };
    }
}
nahAyrn();
