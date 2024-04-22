const raaghynBufferyn = {};

function laad () {
    const veih = location.pathname;
    let i = 1;
    for (let raa of Object.keys(raaghyn)) {
        if (veih.endsWith("creshoh.html") || veih.endsWith("screeu.html")) {
            const c = document.createElement("img");
            c.id = veih.endsWith("creshoh.html") ? "caslys-creshoh" : "caslys";
            c.src = raaghyn[raa].caslys;
            raaghyn[raa].caslys = c;
        };
        if (!veih.endsWith("creshoh.html") && i < 3) gaarlagheySheeanyn([i, raaghyn[raa].sheean], true);
        else if (veih.endsWith("creshoh.html")) gaarlagheySheeanyn([i, raaghyn[raa].sheean], true);
        i++;
    };
    screenLaadey = document.getElementById("screen-laadey");
    document.body.onload = () => screenLaadey.remove();
};
laad();

for (let s of Object.entries(sfxObj)) {
    gaarlagheySheeanyn(s);
}

const sfxCoheks = new AudioContext() || new webkitAudioContext();
const sfxBufferyn = {};

function gaarlagheySheeanyn (s, veihRaa) {
    const request = new XMLHttpRequest();
    request.open("GET", s[1], true);
    request.responseType = "arraybuffer";
    request.onload = () => sfxCoheks.decodeAudioData(request.response, onDecoded);
    function onDecoded(buffer) {
        const bufferSource = sfxCoheks.createBufferSource();
        bufferSource.buffer = buffer;
        veihRaa ? raaghynBufferyn[s[0]] = bufferSource : sfxBufferyn[s[0]] = bufferSource;
    };
    request.send();
};

function cloieSheean (s, keint, caslys) {
    if (typeof s == "number" && keint != "creShoh") {
        if (!(s % 2)) {
            for (let i = s + 1; i < s + 3; i++) {
                if (i <= Object.keys(raaghyn).length) gaarlagheySheeanyn([i, Object.values(raaghyn)[i - 1].sheean], true);
            };
        };
    }
    const b = typeof s == "number" ? raaghynBufferyn[s] : sfxBufferyn[s];
    try {
        b.start(sfxCoheks.currentTime);
    } catch (marran) {
        if (keint != "reesht") {
            console.log(marran);
            cloieSheean(s + "_jeenane", "reesht");
            return;
        }
        else return;
    }
    b.connect(sfxCoheks.destination);
    b.onended = () => {
        b.stop(sfxCoheks.currentTime);
        b.disconnect(sfxCoheks.destination);
        if (typeof s == "number") {
            if (keint == "eaishtagh") caslys.classList.remove("sheean");
            if (keint == "screeu") curSaaghBack(true);
            if (keint != "creShoh") delete raaghynBufferyn[s];
            else gaarlagheySheeanyn([s, Object.values(raaghyn)[s - 1].sheean], true);
        }
        else gaarlagheySheeanyn([s, sfxObj[s]]);
    };
}
