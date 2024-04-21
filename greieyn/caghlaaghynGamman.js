let kiaullGoll = sessionStorage.getItem("kiaullGoll") == "true" ? true : false;
let sfxGoll = sessionStorage.getItem("sfxGoll") == "true" ? true : false;
const veih = location.pathname;
const sfxThieObj = {
    foshley: "sheeanyn/foshley_reduced.mp3",
    dooney: "sheeanyn/dooney_reduced.mp3",
    ymHeidey: "sheeanyn/ym-heidey_reduced.mp3",
    glassBrishey: "sheeanyn/glass-brishey_reduced.mp3",
    sheeanAahoit: "sheeanyn/aahoit_reduced.mp3",
    jerreyMie: "sheeanyn/jerrey-mie.mp3"
};
const sfxObj = {
    fockleKiart: "../../../sheeanyn/fockle-kiart_reduced.mp3",
    fockleKiart_jeenane: "../../../sheeanyn/fockle-kiart_reduced.mp3",
    kiart: "../../../sheeanyn/clinck.mp3",
    kiart_jeenane: "../../../sheeanyn/clinck.mp3",
    sheeanClick: "../../../sheeanyn/click_reduced.mp3",
    sheeanClick_jeenane: "../../../sheeanyn/click_reduced.mp3",
    sheeanArraghey: "../../../sheeanyn/arraghey_reduced.mp3",
    sheeanArraghey_jeenane: "../../../sheeanyn/arraghey_reduced.mp3",
    neuChiart: "../../../sheeanyn/neu-chiart.mp3",
    neuChiart_jeenane: "../../../sheeanyn/neu-chiart.mp3",
    jerreyMie: "../../../sheeanyn/jerrey-mie.mp3",
    jerreyCadjin: "../../../sheeanyn/jerrey-cadjin.mp3"
};

let earrooFeysht = 1;
let agg = 0;

function soieCaghlaaghynYnnydagh () {
    Object.values(focklynRyYnsagh).forEach(v => v.forEach(f => localStorage.setItem(f[0], f[2])));
};

if (!localStorage.getItem("foRaad")) {
    localStorage.setItem("foRaad", false);
    soieCaghlaaghynYnnydagh();
};
