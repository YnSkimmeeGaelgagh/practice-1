function scugh () {
    let kiedHuittym = true;
    let lughHeese = "";
    let fockleGreimmit;
    let erBayrney = false;
    const saaghFreggyrt = document.getElementById("saagh-freggyrt");
    const saaghFocklyn = document.getElementById("saagh-focklyn");
    const focklyn = [...document.getElementsByClassName("fockle")];
    const sheeanClick = new Audio("../../../sheeanyn/click.mp3");
    const sheeanArraghey = new Audio("../../../sheeanyn/arraghey.mp3");
    const kiart = new Audio("../../../sheeanyn/clinck.mp3");
    const neuChiart = new Audio("../../../sheeanyn/neu-chiart.mp3");
    const raa = new Audio(raaghyn[earrooFeysht].sheean);
    let pointRyGheddyn = true;
    focklyn.forEach(w => {
        w.onmousedown = greim;
        w.ontouchstart = greim;
        w.onmouseup = reihit;
        w.ontouchend = reihit;
    });
    function curFockleStiagh (f) {
        if (sfxGoll) sheeanClick.play();
        const cloan = f.cloneNode(true);
        const cloanXY = [f.offsetWidth, f.offsetHeight];
        [cloan.style.width, cloan.style.height] = [cloanXY[0] + "px", cloanXY[1] + "px"];
        cloan.id = f.id + "-cloan";
        cloan.classList.add("cloan");
        saaghFocklyn.replaceChild(cloan, f);
        f.onclick = () => {
            if (sfxGoll) sheeanArraghey.play();
            f.remove();
            f.onclick = reihit;
            f.classList.remove("reihit");
            if ([...saaghFreggyrt.childNodes].length == 0) {
                soieSaaghFreggyrt();
                kiedHuittym = true;
            }
            saaghFocklyn.replaceChild(f, cloan);
        };
        f.classList.add("reihit");
    }
    function reihit (taghyrt) {
        if (kiedHuittym) {
            saaghFreggyrt.textContent = "";
            saaghFreggyrt.style.display = "block";
            saaghFreggyrt.style.color = "black";
            saaghFreggyrt.style.textAlign = "left";
            kiedHuittym = false;
        };
        curFockleStiagh (taghyrt.target);
        taghyrt.target.onmousedown = "";
        taghyrt.target.onmouseup = "";
        taghyrt.target.ontouchstart = "";
        taghyrt.target.ontouchend = "";
        saaghFreggyrt.append(taghyrt.target);
    };
    function greim (taghyrt) {
        if (taghyrt.target.parentNode.id == "saagh-freggyrt") return;
        lughHeese = taghyrt.target;
        setTimeout(() => {
            const focklynAyn = saaghFreggyrt.children;
            const earrooFocklynAyn = focklynAyn.length;
            if (lughHeese == taghyrt.target && earrooFocklynAyn > 0) {
                [...focklynAyn].forEach(f => f.style.pointerEvents = "none");
                taghyrt.target.classList.add("greim");
                fockleGreimmit = taghyrt.target;
                for (let i = 0; i < earrooFocklynAyn * 2; i += 2) {
                    const s = document.createElement("div");
                    s.textContent = "...";
                    s.classList.add("eddyr-focklyn");
                    s.onclick = () => {
                        erBayrney = true;
                        fockleGreimmit.classList.remove("greim");
                        curFockleStiagh(fockleGreimmit);
                        fockleGreimmit.onmousedown = "";
                        fockleGreimmit.onmouseup = "";
                        fockleGreimmit.ontouchstart = "";
                        fockleGreimmit.ontouchend = "";
                        saaghFreggyrt.replaceChild(fockleGreimmit, s);
                        scrysseyGreim();
                    };
                    focklynAyn[i].parentNode.insertBefore(s, focklynAyn[i]);
                }
            };
        }, 1000);
    };
    function scrysseyGreim () {
        [...saaghFreggyrt.children].forEach(f => f.style.pointerEvents = "all");
        fockleGreimmit.classList.remove("greim");
        fockleGreimmit = null;
        const bayrnaghyn = [...document.getElementsByClassName("eddyr-focklyn")];
        bayrnaghyn.forEach(b => b.remove());
    }
    window.onmousedown = prowGreim;
    window.ontouchstart = prowGreim;
    function prowGreim () {
        setTimeout(() => {
            if (fockleGreimmit && !erBayrney) {
                scrysseyGreim();
            };
        }, 50);
    };
    const scrysseyHeese = () => lughHeese = "";
    window.onmouseup = scrysseyHeese;
    window.ontouchend = scrysseyHeese;
    const crammanFreggyrt = document.getElementById("cramman-freggyrt");
    const cleeah = document.getElementById("cleeah");
    function caghlaaSaagh (daah, farkiaght = 500) {
        cleeah.style.borderColor = daah;
        crammanFreggyrt.style.backgroundColor = daah;
        if (daah == "crimson") crammanFreggyrt.style.color = "white";
        else {
            const focklynFreggyrt = [...document.getElementsByClassName("reihit")];
            focklynFreggyrt.forEach(f => f.style.backgroundColor = daah);
        }
        setTimeout(() => {
            if (earrooFeysht - 1 == Object.keys(raaghyn).length) {
                jerreyGamman();
                return;
            };
            crammanFreggyrt.classList.remove("cramman-reihit");
            crammanFreggyrt.style.backgroundColor = "lightblue";
            crammanFreggyrt.style.color = "black";
            cleeah.style.borderColor = "transparent";
            if (daah == "chartreuse") troggDuillag();
        }, farkiaght);
    }
    crammanFreggyrt.onclick = t => {
        const curStiagh = [...saaghFreggyrt.children].map(c => c.textContent).join(" ");
        const freggyrt = raaghyn[earrooFeysht].gaelg;
        const freggyrtElley = raaghyn[earrooFeysht].gaelgB;
        crammanFreggyrt.classList.add("cramman-reihit");
        if (curStiagh == freggyrt || curStiagh == freggyrtElley || curStiagh.length == 0) {
            const caslys = document.getElementById("caslys");
            caslys.classList.add("kiart");
            for (let i = 0; i < 6; i++) {
                const daahR = Math.floor(Math.random() * 3);
                const daahRollage = daahR == 0 ? "geayney" : daahR == 1 ? "gorrym" : "jiarg";
                if (i < 3) {
                    const saaghRollageYesh = trogAyrn({red: "div", keint: ["saagh-rollage", "saagh-rollage-yesh"], cheuSthie: [
                        trogAyrn({red: "img", keint: ["rollage-beggey", "rollage-beggey-yesh"], cheuSthie: `../../../caslyssyn/rollage-${daahRollage}.webp`})
                    ], baare: `${i * 2.5}rem`, yesh: `${i + 7 + daahR}rem`});
                    const saaghCaslys = document.getElementById("saagh-caslys");
                    saaghCaslys.append(saaghRollageYesh);
                ;}
                else {
                    const saaghRollageHoshtal = trogAyrn({red: "div", keint: ["saagh-rollage", "saagh-rollage-hoshtal"], cheuSthie: [
                        trogAyrn({red: "img", keint: ["rollage-beggey", "rollage-beggey-hoshtal"], cheuSthie: `../../../caslyssyn/rollage-${daahRollage}.webp`})
                    ], baare: `${(i - 3) * 2.5}rem`, hoshtal: `${i + 4 + daahR}rem`});
                    const saaghCaslys = document.getElementById("saagh-caslys");
                    saaghCaslys.append(saaghRollageHoshtal);
                }
            };
            let farkiaght = sfxGoll ? raa.duration * 1000 : 500;
            if (sfxGoll) {
                kiart.play();
                raa.play();
            }
            if (pointRyGheddyn) {
                agg++;
                raaghyn[earrooFeysht].focklyn.forEach(f => coEarrooagheyAggNoa(f, 1, 1));
            };
            earrooFeysht++;
            kiedHuittym = true;
            caghlaaSaagh("chartreuse", farkiaght);
        }
        else {
            pointRyGheddyn = false;
            if (sfxGoll) neuChiart.play();
            caghlaaSaagh("crimson");
        }
    }
};
