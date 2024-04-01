const veih = location.pathname;
const lhoobThie = new Audio(`${veih == "/practice-1/index.html" ? "sheeanyn/lhoob-thie.mp3" : "../../../sheeanyn/lhoob-thie.mp3"}`);
lhoobThie.loop = true;
const lhoobScreeu = new Audio(`${veih == "/practice-1/index.html" ? "sheeanyn/lhoob-screeu.mp3" : "../../../sheeanyn/lhoob-screeu.mp3"}`);
lhoobScreeu.loop = true;
const lhoobEaishtagh = new Audio(`${veih == "/practice-1/index.html" ? "sheeanyn/lhoob-eaishtagh.mp3" : "../../../sheeanyn/lhoob-eaishtagh.mp3"}`);
lhoobEaishtagh.loop = true;
const lhoobCreshoh = new Audio(`${veih == "/practice-1/index.html" ? "sheeanyn/lhoob-creshoh.mp3" : "../../../sheeanyn/lhoob-creshoh.mp3"}`);
lhoobCreshoh.loop = true;
const clinck = new Audio(`${veih == "/practice-1/index.html" ? "sheeanyn/clinck.mp3" : "../../../sheeanyn/clinck.mp3"}`);
const foshley = new Audio(`${veih == "/practice-1/index.html" ? "sheeanyn/foshley.mp3" : "../../../sheeanyn/foshley.mp3"}`);
const dooney = new Audio(`${veih == "/practice-1/index.html" ? "sheeanyn/dooney.mp3" : "../../../sheeanyn/dooney.mp3"}`);
const ymHeidey = new Audio(`${veih == "/practice-1/index.html" ? "sheeanyn/ym-heidey.mp3" : "../../../sheeanyn/ym-heidey.mp3"}`);
const glassBrishey = new Audio(`${veih == "/practice-1/index.html" ? "sheeanyn/glass-brishey.mp3" : "../../../sheeanyn/glass-brishey.mp3"}`);
const jerreyMie = new Audio(`${veih == "/practice-1/index.html" ? "sheeanyn/jerrey-mie.mp3" : "../../../sheeanyn/jerrey-mie.mp3"}`);
const jerreyCadjin = new Audio(`${veih == "/practice-1/index.html" ? "sheeanyn/jerrey-cadjin.mp3" : "../../../sheeanyn/jerrey-cadjin.mp3"}`);
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
