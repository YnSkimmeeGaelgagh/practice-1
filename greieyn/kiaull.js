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
            lhoob = new Audio("sheeanyn/lhoob-thie.mp3");
    }
    lhoob.loop = true;
}
soieKiaull();
