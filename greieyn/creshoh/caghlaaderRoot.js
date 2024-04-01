function caghlaaRoot (daah, earroo) {
    if (!daah) {
        switch (earroo) {
            case 5:
                daah = "rgba(173, 255, 47, 0.5)";
                break;
            case 4:
                daah = "rgba(0, 191, 255, 0.5)";
                break;
            case 3:
                daah = "rgba(240, 230, 140, 0.5)";
                break;
            case 2:
                daah = "rgba(255, 160, 122, 0.5)";
                break;
            default:
                daah = "rgba(255, 69, 0, 0.5)";
        }
    }
    const r = document.querySelector(":root");
    r.style.setProperty("--linney-mooie", daah);
}