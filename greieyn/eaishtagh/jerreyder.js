function jerreyGamman () {
    if (kiaullGoll) {
        lhoob.pause();
        let kiaullJerrinagh = agg > Math.round(mooadys / 2) ? "jerreyMie" : "jerreyCadjin";
        cloieSheean("kiaullJerrinagh");
    };
    const saaghJeant = document.getElementById("saagh-jeant");
    saaghJeant.style.visibility = "visible";
    const aggJerrinagh = document.getElementById("agg-jerrinagh");
    aggJerrinagh.textContent = agg;
    const nynAgg = towse => {
        if (agg % 2) agg--;
        if (towse == agg) {
            caghlaaRoot(mooadys, towse);
            return "nyn-agg";
        } else return "agg-elley";
    };
    const aggyn = [...document.getElementsByClassName("aggyn")];
    let ayrn = 1;
    for (let i = 0; i < 5; i++) {
        const earroo = Math.round(mooadys * ayrn);
        aggyn[i].classList.add(nynAgg(earroo));
        ayrn -= .2;
    }
    const moylley = document.getElementById("moylley");
    if (agg < 2) moylley.textContent = "Prow reesht!"
}
