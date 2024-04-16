const ardSkirreyderKiaull = document.getElementById("ard-skirreyder-kiaull");
ardSkirreyderKiaull.onchange = () => {
    sessionStorage.setItem("kiaullGoll", ardSkirreyderKiaull.checked);
    kiaullGoll = sessionStorage.getItem("kiaullGoll") == "true" ? true : false;
    kiaullGoll ? lhoob.play() : lhoob.pause();
}
const caghlaaArdSkirreyderKiaull = (stayd) => ardSkirreyderKiaull.checked = stayd;

const ardSkirreyderSFX = document.getElementById("ard-skirreyder-sfx");
ardSkirreyderSFX.onchange = () => {
    sessionStorage.setItem("sfxGoll", ardSkirreyderSFX.checked);
    sfxGoll = sessionStorage.getItem("sfxGoll") == "true" ? true : false;
}
const caghlaaArdSkirreyderSFX = (stayd) => ardSkirreyderSFX.checked = stayd;

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
