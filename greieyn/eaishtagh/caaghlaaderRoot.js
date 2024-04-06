function caghlaaRoot (mooadys, towse) {
    switch (true) {
        case (towse == mooadys):
            daah = "rgba(173, 255, 47, 0.5)";
            break;
        case (towse >= mooadys * .8):
            daah = "rgba(0, 191, 255, 0.5)";
            break;
        case (towse >= mooadys * .6):
            daah = "rgba(240, 230, 140, 0.5)";
            break;
        case (towse >= mooadys * .4):
            daah = "rgba(255, 160, 122, 0.5)";
            break;
        default:
            daah = "rgba(255, 69, 0, 0.5)";
    };
    const r = document.querySelector(":root");
    r.style.setProperty("--linney-mooie", daah);
}
