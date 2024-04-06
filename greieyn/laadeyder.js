(function laad () {
    const veih = location.pathname;
    const lI = veih.lastIndexOf("/");
    const cour = veih.substring(lI);
    for (let raa of Object.keys(raaghyn)) {
        if (cour == "/creshoh.html" || cour == "/screeu.html") {
            const c = document.createElement("img");
            c.id = cour == "/creshoh.html" ? "caslys-creshoh" : "caslys";
            c.src = raaghyn[raa].caslys;
            raaghyn[raa].caslys = c;
        };
        if (sfxGoll) {
            const s = new Audio(raaghyn[raa].sheean);
            raaghyn[raa].sheean = s;
        };
    };
    screenLaadey = document.getElementById("screen-laadey");
    document.body.onload = () => screenLaadey.remove();
})();