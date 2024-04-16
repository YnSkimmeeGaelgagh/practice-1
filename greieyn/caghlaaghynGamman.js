let kiaullGoll = sessionStorage.getItem("kiaullGoll") == "true" ? true : false;
let sfxGoll = sessionStorage.getItem("sfxGoll") == "true" ? true : false;
const veih = location.pathname;
const foshley = "sheeanyn/foshley.mp3";
const dooney = "sheeanyn/dooney.mp3";
const ymHeidey = "sheeanyn/ym-heidey.mp3";
const glassBrishey = "sheeanyn/glass-brishey.mp3";
const sheeanAahoit = "sheeanyn/aahoit.mp3";
const fockleKiart = "../../../sheeanyn/fockle-kiart.mp3";
const kiart = "../../../sheeanyn/clinck.mp3";
const neuChiart = "../../../sheeanyn/neu-chiart.mp3";
const jerreyMie = "../../../sheeanyn/jerrey-mie.mp3";
const jerreyCadjin = "../../../sheeanyn/jerrey-cadjin.mp3";

// if (veih.endsWith("/index.html") || veih.endsWith("/")) {
    // foshley = document.getElementById("sheean-foshley");
    // dooney = document.getElementById("sheean-dooney");
    // ymHeidey = document.getElementById("sheean-ym-heidey");
    // glassBrishey = document.getElementById("glass-brishey");
// } else if (!veih.endsWith("/index.html")) {
    // fockleKiart = new Audio("../../../sheeanyn/fockle-kiart.mp3");
    // kiart = new Audio("../../../sheeanyn/clinck.mp3");
    // neuChiart = new Audio("../../../sheeanyn/neu-chiart.mp3");
    // jerreyMie = new Audio("../../../sheeanyn/jerrey-mie.mp3");
    // jerreyCadjin = new Audio("../../../sheeanyn/jerrey-cadjin.mp3");
// }
let earrooFeysht = 1;
let agg = 0;

function soieCaghlaaghynYnnydagh () {
    Object.values(focklynRyYnsagh).forEach(v => v.forEach(f => localStorage.setItem(f[0], f[2])));
};

if (!localStorage.getItem("foRaad")) {
    localStorage.setItem("foRaad", false);
    soieCaghlaaghynYnnydagh();
};
