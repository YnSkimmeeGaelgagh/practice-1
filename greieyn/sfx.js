for (let s of Object.entries(sfxThieObj)) {
    gaarlagheySheeanyn(s);
}

const sfxCoheksThie = new AudioContext() || new webkitAudioContext();
const sfxBufferynThie = {};
let ayrnJeant = false;
let ooilleyJeant = false;

function gaarlagheySheeanyn (s) {
    const request = new XMLHttpRequest();
    request.open("GET", s[1], true);
    request.responseType = "arraybuffer";
    request.onload = () => sfxCoheksThie.decodeAudioData(request.response, onDecoded);
    function onDecoded(buffer) {
        const bufferSource = sfxCoheksThie.createBufferSource();
        bufferSource.buffer = buffer;
        sfxBufferynThie[s[0]] = bufferSource;
        if (s[0] == "ymHeidey" && ayrnJeant) {
            ayrnJeant = false;
            cloieSheean(s[0]);
        };
        if (s[0] == "jerreyMie" && ooilleyJeant) {
            ooilleyJeant = false;
            cloieSheean(s[0]);
        };
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
