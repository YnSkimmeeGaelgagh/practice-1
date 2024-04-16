let lhoob;

function soieKiaull () {
    const veih = location.pathname;
    switch (true) {
        case (veih.endsWith("creshoh.html")):
            lhoob = new Audio("../../../sheeanyn/lhoob-creshoh.mp3");
            break;
        case (veih.endsWith("screeu.html")):
            lhoob = new Audio("../../../sheeanyn/lhoob-screeu.mp3");
            break;
        case (veih.endsWith("eaishtagh.html")):
            lhoob = new Audio("../../../sheeanyn/lhoob-eaishtagh.mp3");
            break;
        default:
            lhoob = document.getElementById("sheean-lhoob");
    }
    lhoob.loop = true;
}
soieKiaull();

const LhoobCoheks = window.AudioContext || window.webkitAudioContext;
const lhoobCoheks = new AudioContext();
const bolleyLhoob = lhoobCoheks.createMediaElementSource(lhoob);
bolleyLhoob.connect(lhoobCoheks.destination);
