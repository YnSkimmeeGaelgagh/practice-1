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

function cloieSheean (s) {
    const context = new AudioContext() || new webkitAudioContext();
    const request = new XMLHttpRequest();
    request.open("GET", s.raad, true);
    request.responseType = "arraybuffer";
    request.onload = () => context.decodeAudioData(request.response, onDecoded);
    function onDecoded(buffer) {
        const bufferSource = context.createBufferSource();
        bufferSource.buffer = buffer;
        bufferSource.connect(context.destination);
        bufferSource.stop();
        bufferSource.start(context.currentTime + s.traa);
        if (s.caslys) {
            let mayrnaght = bufferSource.buffer.duration;
            setTimeout(() => {
                s.caslys.classList.remove("sheean");
            }, mayrnaght * 1000);
        };
        if (s.screeu) {
            bufferSource.onended = () => curSaaghBack(true);
        }
    };
    request.send();
};
