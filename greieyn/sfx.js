function cloieSheean (s) {
    const context = new AudioContext() || window.AudioContext || window.webkitAudioContext;
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
