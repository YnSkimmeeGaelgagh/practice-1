for (let s of Object.entries(sfxThieObj)) {
    gaarlagheySheeanyn(s);
}

const sfxCoheksThie = new AudioContext() || new webkitAudioContext();
const sfxBufferynThie = {};

function gaarlagheySheeanyn (s, veihRaa) {
    const request = new XMLHttpRequest();
    request.open("GET", s[1], true);
    request.responseType = "arraybuffer";
    request.onload = () => sfxCoheksThie.decodeAudioData(request.response, onDecoded);
    function onDecoded(buffer) {
        const bufferSource = sfxCoheksThie.createBufferSource();
        bufferSource.buffer = buffer;
        veihRaa ? raaghynBufferyn[s[0]] = bufferSource : sfxBufferynThie[s[0]] = bufferSource;
    };
    request.send();
};

function cloieSheean (s) {
    const b =  sfxBufferynThie[s];
    try {
        b.start(sfxCoheksThie.currentTime);
    } catch (marran) {
        return;
    }
    b.connect(sfxCoheksThie.destination);
    b.onended = () => {
        b.stop(sfxCoheksThie.currentTime);
        b.disconnect(sfxCoheksThie.destination);
        gaarlagheySheeanyn([s, sfxThieObj[s]]);
    };
}
