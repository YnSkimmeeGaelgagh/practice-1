let pointeryn = [];

function scugh () {
    let kiedHuittym = true;
    let fockleGreimmit;
    let erBayrney = false;
    const saaghFreggyrt = document.getElementById("saagh-freggyrt");
    const saaghFocklyn = document.getElementById("saagh-focklyn");
    const focklyn = [...document.getElementsByClassName("fockle")];
    const sheeanClick = new Audio("../../../sheeanyn/click.mp3");
    const sheeanArraghey = new Audio("../../../sheeanyn/arraghey.mp3");
    let pointRyGheddyn = true;
    focklyn.forEach(w => w.onpointerdown = greim);
    function curFockleStiagh (f) {
        if (sfxGoll) sheeanClick.play();
        const cloan = f.cloneNode(true);
        const cloanXY = [f.offsetWidth, f.offsetHeight];
        [cloan.style.width, cloan.style.height] = [cloanXY[0] + "px", cloanXY[1] + "px"];
        cloan.id = f.id + "-cloan";
        cloan.classList.add("cloan");
        saaghFocklyn.replaceChild(cloan, f);
        f.onpointerdown = () => {
            if (sfxGoll) sheeanArraghey.play();
            f.remove();
            f.onpointerdown = greim;
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
            saaghFreggyrt.style.color = "black";
            saaghFreggyrt.style.justifyContent = "start";
            saaghFreggyrt.style.alignItems = "start";
            kiedHuittym = false;
        };
        curFockleStiagh (taghyrt.target);
        saaghFreggyrt.append(taghyrt.target);
    };
    function greim (taghyrt) {
        if (taghyrt.target.parentNode.id == "saagh-freggyrt") return;
        pointeryn.push(taghyrt.pointerId);
        if (pointeryn.length > 1) return;
        let lughHeese = true;
        taghyrt.target.setPointerCapture(taghyrt.pointerId);
        const ynnydPointer = pointeryn.indexOf(taghyrt.pointerId);
        taghyrt.target.onpointerup = () => {
            lughHeese = false;
            pointeryn.splice(ynnydPointer, 1);
            reihit(taghyrt);
        };
        taghyrt.target.onpointercancel = () => {
            lughHeese = false;
            pointeryn.splice(ynnydPointer, 1);
        };
        taghyrt.target.ondragstart = () => false;
        setTimeout(() => {
            const focklynAyn = saaghFreggyrt.children;
            const earrooFocklynAyn = focklynAyn.length;
            taghyrt.target.onpointerup = () => {
                lughHeese = false;
                pointeryn.splice(ynnydPointer, 1);
            };
            if (earrooFocklynAyn == 0) return;
            else if (lughHeese && !fockleGreimmit) {
                [...focklynAyn].forEach(f => f.style.pointerEvents = "none");
                fockleGreimmit = taghyrt.target;
                fockleGreimmit.classList.add("greim");
                for (let i = 0; i < earrooFocklynAyn * 2; i += 2) {
                    const s = document.createElement("div");
                    s.textContent = "...";
                    s.classList.add("eddyr-focklyn");
                    s.onpointerdown = t => {
                        t.target.setPointerCapture(t.pointerId);
                        erBayrney = true;
                        fockleGreimmit.classList.remove("greim");
                        curFockleStiagh(fockleGreimmit);
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
        erBayrney = false;
        const bayrnaghyn = [...document.getElementsByClassName("eddyr-focklyn")];
        bayrnaghyn.forEach(b => b.remove());
    }
    function prowGreim () {
        setTimeout(() => {
            if (fockleGreimmit && !erBayrney) scrysseyGreim();
        }, 50);
    };
    window.onpointerdown = prowGreim;
    const crammanFreggyrt = document.getElementById("cramman-freggyrt");
    const cleeah = document.getElementById("cleeah");
    const saagh = document.getElementById("saagh");
    function caghlaaSaagh (daah, farkiaght = 500) {
        cleeah.style.outlineColor = daah;
        crammanFreggyrt.classList.remove("smooinaghtyn");
        crammanFreggyrt.style.backgroundColor = daah;
        if (daah == "crimson") crammanFreggyrt.classList.add("sheeigit");
        else crammanFreggyrt.classList.add("meekey");
        setTimeout(() => {
            if (earrooFeysht - 1 == Object.keys(raaghyn).length) {
                jerreyGamman();
                return;
            };
            crammanFreggyrt.classList.remove("cramman-reihit", "meekey", "sheeigit");
            crammanFreggyrt.style.backgroundColor = "lightblue";
            crammanFreggyrt.style.color = "black";
            crammanFreggyrt.textContent = "check";
            cleeah.style.outlineColor = "transparent";
            [...saaghFreggyrt.children].forEach(c => {
                c.style.pointerEvents = "all";
                c.classList.remove("fockle-kiart", "fockle-neuchiart");
            });
            [...saaghFocklyn.children].forEach(f => f.style.pointerEvents = "all");
            if (daah == "#B3D334") troggDuillag();
        }, farkiaght);
    }
    crammanFreggyrt.onclick = t => {
        const arrCurStiagh = [...saaghFreggyrt.children].map(c => c.textContent);
        const curStiagh = arrCurStiagh.join(" ");
        const freggyrt = raaghyn[earrooFeysht].gaelg;
        crammanFreggyrt.classList.add("cramman-reihit");
        const arrFreggyrtKiart = freggyrt.split(" ");
        function prowFreggyrt () {
            [...saaghFocklyn.children].forEach(f => f.style.pointerEvents = "none");
            t.target.textContent = "";
            t.target.classList.add("smooinaghtyn");
            if (arrCurStiagh.length == 0) {
                if (sfxGoll) neuChiart.play();
                freggyrtNeuChiart();
                return;
            };
            [...saaghFreggyrt.children].forEach(f => f.style.pointerEvents = "none");
            let i = 0;
            const nahReggyrt = () => {
                if (arrCurStiagh[i] == arrFreggyrtKiart[i]) {
                    if (sfxGoll) fockleKiart.play();
                    saaghFreggyrt.children[i].classList.add("fockle-kiart");
                    if (i < arrCurStiagh.length - 1) setTimeout(nahReggyrt, fockleKiart.duration * 2000);
                    else {
                        if (freggyrt == curStiagh) freggyrtKiart();
                        else freggyrtNeuChiart();
                        return;
                    };
                    i++;
                }
                else {
                    saaghFreggyrt.children[i].classList.add("fockle-neuchiart");
                    freggyrtNeuChiart();
                    return;
                }
            }
            nahReggyrt();
        }
        prowFreggyrt();
        function freggyrtKiart () {
            if (sfxGoll) kiart.play();
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
            if (sfxGoll) raaghyn[earrooFeysht].sheean.play();
            let farkiaght = sfxGoll ? raaghyn[earrooFeysht].sheean.duration * 1000 : 500;
            if (pointRyGheddyn) {
                agg++;
                raaghyn[earrooFeysht].focklyn.forEach(f => coEarrooagheyAggNoa(f, 1, 1));
            };
            earrooFeysht++;
            kiedHuittym = true;
            caghlaaSaagh("#B3D334", farkiaght);
        }
        function freggyrtNeuChiart () {
            if (sfxGoll) neuChiart.play();
            saagh.classList.add("freggyrt-neuchiart");
            Promise.all(saagh.getAnimations().map(a => a.finished)).then(() => saagh.classList.remove("freggyrt-neuchiart"));
            pointRyGheddyn = false;
            caghlaaSaagh("crimson");
        };
    }
};
