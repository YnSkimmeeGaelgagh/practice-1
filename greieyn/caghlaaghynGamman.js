const lhoobThie = new Audio("../sheeanyn/lhoob-thie.mp3");
lhoobThie.loop = true;
const lhoobScreeu = new Audio("../sheeanyn/lhoob-screeu.mp3");
lhoobScreeu.loop = true;
const lhoobEaishtagh = new Audio("../sheeanyn/lhoob-eaishtagh.mp3");
lhoobEaishtagh.loop = true;
const lhoobCreshoh = new Audio("../sheeanyn/lhoob-creshoh.mp3");
lhoobCreshoh.loop = true;
const clinck = new Audio("../sheeanyn/clinck.mp3");
const foshley = new Audio("../sheeanyn/foshley.mp3");
const dooney = new Audio("../sheeanyn/dooney.mp3");
const ymHeidey = new Audio("../sheeanyn/ym-heidey.mp3");
const glassBrishey = new Audio("../sheeanyn/glass-brishey.mp3");
const jerreyMie = new Audio("../sheeanyn/jerrey-mie.mp3");
const jerreyCadjin = new Audio("../sheeanyn/jerrey-cadjin.mp3");
let kiaullGoll = sessionStorage.getItem("kiaullGoll") == "true" ? true : false;
let sfxGoll = sessionStorage.getItem("sfxGoll") == "true" ? true : false;
let earrooFeysht = 1;
let agg = 0;

function soieCaghlaaghynYnnydagh () {
    Object.values(focklynRyYnsagh).forEach(v => v.forEach(f => localStorage.setItem(f[0], f[2])));
};

if (!localStorage.getItem("foRaad")) {
    localStorage.setItem("foRaad", false);
    soieCaghlaaghynYnnydagh();
};
