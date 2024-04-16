(function laad () {
    const veih = location.pathname;
    for (let raa of Object.keys(raaghyn)) {
        if (veih.endsWith("creshoh.html") || veih.endsWith("screeu.html")) {
            const c = document.createElement("img");
            c.id = veih.endsWith("creshoh.html") ? "caslys-creshoh" : "caslys";
            c.src = raaghyn[raa].caslys;
            raaghyn[raa].caslys = c;
        };
        const s = new Audio(raaghyn[raa].sheean);
        raaghyn[raa].sheean = s;
    };
    screenLaadey = document.getElementById("screen-laadey");
    document.body.onload = () => screenLaadey.remove();
})();

function cloieSheean (s) {
    const context = new AudioContext() || new webkitAudioContext();
    const request = new XMLHttpRequest();
    request.open("GET", s, true);
    request.responseType = "arraybuffer";
    request.onload = () => context.decodeAudioData(request.response, onDecoded);
    function onDecoded(buffer) {
        const bufferSource = context.createBufferSource();
        bufferSource.buffer = buffer;
        bufferSource.connect(context.destination);
        bufferSource.start();
    };
    request.send();
};
