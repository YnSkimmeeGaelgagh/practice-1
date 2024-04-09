let kiaullGoll = sessionStorage.getItem("kiaullGoll") == "true" ? true : false;
let sfxGoll = sessionStorage.getItem("sfxGoll") == "true" ? true : false;
const veih = location.pathname;
let foshley;
let dooney;
let ymHeidey;
let glassBrishey;
let clinck;
let kiart;
let neuChiart;
let jerreyMie;
let jerreyCadjin;
if (veih.endsWith("/index.html") && sfxGoll) {
    foshley = new Audio("sheeanyn/foshley.mp3");
    dooney = new Audio("sheeanyn/dooney.mp3");
    ymHeidey = new Audio("sheeanyn/ym-heidey.mp3");
    glassBrishey = new Audio("sheeanyn/glass-brishey.mp3");
} else if (!veih.endsWith("/index.html") && sfxGoll || veih.endsWith("eaishtagh.html")) {
    kiart = new Audio("../../../sheeanyn/clinck.mp3");
    neuChiart = new Audio("../../../sheeanyn/neu-chiart.mp3");
    jerreyMie = new Audio("../../../sheeanyn/jerrey-mie.mp3");
    jerreyCadjin = new Audio("../../../sheeanyn/jerrey-cadjin.mp3");
}
let earrooFeysht = 1;
let agg = 0;

function soieCaghlaaghynYnnydagh () {
    Object.values(focklynRyYnsagh).forEach(v => v.forEach(f => localStorage.setItem(f[0], f[2])));
};

if (!localStorage.getItem("foRaad")) {
    localStorage.setItem("foRaad", false);
    soieCaghlaaghynYnnydagh();
};
