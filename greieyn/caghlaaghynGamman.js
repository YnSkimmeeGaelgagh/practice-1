let kiaullGoll = sessionStorage.getItem("kiaullGoll") == "true" ? true : false;
let sfxGoll = sessionStorage.getItem("sfxGoll") == "true" ? true : false;
const veih = location.pathname;
let foshley;
let dooney;
let ymHeidey;
let glassBrishey;
let fockleKiart;
let kiart;
let neuChiart;
let jerreyMie;
let jerreyCadjin;

const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioContext = new AudioContext();
const audioElement = document.querySelector("audio");
const track = audioContext.createMediaElementSource(audioElement);
track.connect(audioContext.destination);

if (veih.endsWith("/index.html")) {
    foshley = document.getElementById("sheean-foshley");
    dooney = document.getElementById("sheean-dooney");
    ymHeidey = document.getElementById("sheean-ym-heidey");
    glassBrishey = document.getElementById("glass-brishey");
} else if (!veih.endsWith("/index.html")) {
    fockleKiart = new Audio("../../../sheeanyn/fockle-kiart.mp3");
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
