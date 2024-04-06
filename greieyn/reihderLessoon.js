const cleeahyn = [...document.getElementsByClassName("cleeah-cooish")];

cleeahyn.forEach(c => {
    const paitchyn = [...c.children];
    paitchyn.forEach(p => {
        const jalloo = p.childNodes[3].childNodes[1].src;
        p.onclick = t => soieLessoon(t, p.title, jalloo, p.textContent.trim());
    });
});

function soieLessoon (t, cooish, jalloo, ennym) {
    localStorage.setItem("ynnydY", t.target.parentNode.parentNode.parentNode.id);
    if (sfxGoll) foshley.play();
    document.body.style.overflow = "hidden";
    const saaghLessoon = document.getElementById("saagh-lessoon");
    saaghLessoon.style.visibility = "visible";
    const coyrleLessoon = document.getElementById("coyrle-lessoon");
    coyrleLessoon.classList.add("gaase-screeyn");
    const ennymLessoon = document.getElementById("ennym-lessoon");
    ennymLessoon.textContent = ennym;
    const caslysLessoon = document.getElementById("caslys-lessoon");
    caslysLessoon.src = jalloo;
    const saaghRolleyFocklyn = document.getElementById("saagh-rolley-focklyn");
    const hr = document.createElement("hr");
    saaghRolleyFocklyn.append(hr);
    let gammanynJeant = [true, true, true];
    focklynRyYnsagh[cooish].forEach((f, i) => {
        const dG = document.createElement("div");
            dG.textContent = f[0];
            dG.classList.add("fockle-gaelgagh");
            const keayrtyn = localStorage.getItem(f[0]).split(",");
            const aggFocklyn = Math.floor(keayrtyn.reduce((a, b) => a + +b, 0));
            if (+keayrtyn[0] < 1) gammanynJeant[0] = false;
            if (keayrtyn[1] == '0') gammanynJeant[1] = false;
            if (keayrtyn[2] == '0') gammanynJeant[2] = false;
            switch (aggFocklyn) {
                case 3:
                    dG.classList.add("fockle-jeant");
                    break;
                case 2:
                    dG.classList.add("fockle-bunnys");
                    break;
                case 1:
                    dG.classList.add("fockle-toshiaght");
                    break;
                default:
                    dG.classList.add("fockle-noa");
            }
        const dB = document.createElement("div");
            dB.textContent = focklynRyYnsagh[cooish][i][1];
            dB.classList.add("fockle-baarlagh");
        const hr = document.createElement("hr");
        saaghRolleyFocklyn.append(dG, dB, hr);
    });
    const crammanynLessoon = document.getElementById("crammanyn-lessoon");
    const saaghynCrammanLessoon = document.getElementsByClassName("saagh-cramman-lessoon");
    const cowreyJeantCreshoh = [...document.getElementsByClassName("cowrey-jeant")];
    if (cooish == "fEmshyrChaie")  {
        crammanynLessoon.style.gridTemplateColumns = "repeat(2, 1fr)";
        saaghynCrammanLessoon[0].style.display = "none";
    } else {
        crammanynLessoon.style.gridTemplateColumns = "repeat(3, 1fr)";
        saaghynCrammanLessoon[0].style.display = "inline-block";
        const crammanLessoonCreShoh = document.getElementById("cramman-lessoon-creshoh");
        crammanLessoonCreShoh.onclick = t => caghlaaDuillag(t, `lessoonyn/${cooish == "fEmshyrChaie" ? "emshyr-chaie" : cooish[1].toLowerCase() + cooish.substring(2)}/gammanyn/creshoh.html`);
        cowreyJeantCreshoh.forEach((c, i) => {
            if (gammanynJeant[i]) c.style.visibility = "visible"
        });
    }
    const crammanLessoonScreeu = document.getElementById("cramman-lessoon-screeu");
    crammanLessoonScreeu.onclick = t => caghlaaDuillag(t, `lessoonyn/${cooish == "fEmshyrChaie" ? "emshyr-chaie" : cooish[1].toLowerCase() + cooish.substring(2)}/gammanyn/screeu.html`);
    const crammanLessoonEaishtagh = document.getElementById("cramman-lessoon-eaishtagh");
    crammanLessoonEaishtagh.onclick = t => caghlaaDuillag(t, `lessoonyn/${cooish == "fEmshyrChaie" ? "emshyr-chaie" : cooish[1].toLowerCase() + cooish.substring(2)}/gammanyn/eaishtagh.html`);
    const crammanLessoonDoon = document.getElementById("cramman-lessoon-doon");
    function faagailLessoon () {
        if (sfxGoll) dooney.play();
        if (cooish != "fEmshyrChaie") cowreyJeantCreshoh.forEach(c => c.style.visibility = "hidden");
        saaghLessoon.style.visibility = "hidden";
        coyrleLessoon.classList.remove("gaase-screeyn");
        coyrleLessoon.scroll(0, 0);
        saaghRolleyFocklyn.textContent = "";
        document.body.style.overflow = "scroll";
        window.onkeyup = null;
    }
    crammanLessoonDoon.onclick = faagailLessoon;
    window.onkeyup = t => {
        if (t.key == "Escape" || t.keyCode == 27) faagailLessoon();
    }
}
