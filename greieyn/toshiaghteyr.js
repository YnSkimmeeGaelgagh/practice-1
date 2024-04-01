function gowToshiaght (t, keintGamman) {
    if (kiaullGoll) {
        switch (keintGamman) {
            case "creshoh":
                lhoobCreshoh.play();
                traa();
                break;
            case "screeu":
                lhoobScreeu.play();
                break;
            case "eaishtagh":
                lhoobEaishtagh.play();
                setTimeout(eaishtReesht, 500);
                break;
            default:
                lhoobThie.play();
        };
    };
    saaghToshiaght = document.getElementById("saagh-toshiaght");
    saaghToshiaght.remove();
};