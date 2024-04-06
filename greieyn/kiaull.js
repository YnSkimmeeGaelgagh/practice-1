let lhoob;

function soieKiaull () {
    const veih = location.pathname;
    const lI = veih.lastIndexOf("/");
    const cour = veih.substring(lI);
    switch (cour) {
        case "/creshoh.html":
            lhoob = new Audio("../../../sheeanyn/lhoob-creshoh.mp3");
            break;
        case "/screeu.html":
            lhoob = new Audio("../../../sheeanyn/lhoob-screeu.mp3");
            break;
        case "/eaishtagh.html":
            lhoob = new Audio("../../../sheeanyn/lhoob-eaishtagh.mp3");
            break;
        default:
            lhoob = new Audio("sheeanyn/lhoob-thie.mp3");
    }
    lhoob.loop = true;
}
if (kiaullGoll) soieKiaull();