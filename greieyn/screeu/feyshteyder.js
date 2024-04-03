function focklyn () {
    const saaghFocklyn = document.getElementById("saagh-focklyn");
    saaghFocklyn.textContent = "";
    let focklyn = raaghyn[earrooFeysht].gaelg.split(" ");
    const caslys = document.getElementById("caslys");
    caslys.style.visibility = hidden;
    caslys.classList.remove("kiart");
    const rollageyn = [...document.getElementsByClassName("saagh-rollage")];
    rollageyn.forEach(r => r.remove());
    caslys.src = raaghyn[earrooFeysht].caslys;
    caslys.style.visibility = "visible";
    const greinnaghey = document.getElementById("greinnaghey");
    greinnaghey.textContent = raaghyn[earrooFeysht].baarle;
    let rFocklyn = [];
    let focklynElley = [];
    const coipFocklynYnsit = [...focklynYnsit];
    const reihR = arr => Math.floor(Math.random() * arr.length);
    while (focklyn.length > 0) {
        const r = reihR(focklyn);
        rFocklyn.push(focklyn[r]);
        focklyn.splice(r, 1);
    };
    rFocklynBeggey = rFocklyn.map(f => f.toLowerCase());
    while (focklynElley.length < 4) {
        const r = reihR(coipFocklynYnsit);
        if (focklynElley.includes(coipFocklynYnsit[r]) || rFocklynBeggey.includes(coipFocklynYnsit[r])) continue;
        focklynElley.push(coipFocklynYnsit[r]);
        coipFocklynYnsit.splice(r, 1);
    };
    focklynElley.forEach(f => {
        const r = reihR(rFocklyn);
        rFocklyn.splice(r, 0, f);
    });
    rFocklyn.forEach((f, i) => {
        const d = document.createElement("div");
        d.id = `fockle-${i}`;
        d.classList.add("fockle");
        d.textContent = f;
        saaghFocklyn.append(d);
    });
}
