(function laad () {
    const veih = location.pathname;
    for (let raa of Object.keys(raaghyn)) {
        if (veih.endsWith("creshoh.html") || veih.endsWith("screeu.html")) {
            const c = document.createElement("img");
            c.id = veih.endsWith("creshoh.html") ? "caslys-creshoh" : "caslys";
            c.src = raaghyn[raa].caslys;
            raaghyn[raa].caslys = c;
        };
    };
    screenLaadey = document.getElementById("screen-laadey");
    document.body.onload = () => screenLaadey.remove();
})();

const sfxCoheks = new AudioContext() || new webkitAudioContext();

function cloieSheean (s) {
    const request = new XMLHttpRequest();
    request.open("GET", s.raad, true);
    request.responseType = "arraybuffer";
    request.onload = () => sfxCoheks.decodeAudioData(request.response, onDecoded);
    function onDecoded(buffer) {
        const bufferSource = sfxCoheks.createBufferSource();
        bufferSource.buffer = buffer;
        bufferSource.connect(sfxCoheks.destination);
        bufferSource.start(sfxCoheks.currentTime);
        if (s.caslys) {
            let mayrnaght = bufferSource.buffer.duration;
            setTimeout(() => {
                s.caslys.classList.remove("sheean");
            }, mayrnaght * 1000);
        };
        bufferSource.onended = () => {
            bufferSource.stop(sfxCoheks.currentTime);
            bufferSource.disconnect(sfxCoheks);
            if (s.screeu) curSaaghBack(true);
        }
    };
    request.send();
};
