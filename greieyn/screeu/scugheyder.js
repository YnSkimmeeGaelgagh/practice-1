function scugh () {
    let kiedHuittym = true;
    const saaghFreggyrt = document.getElementById("saagh-freggyrt");
    const saaghFocklyn = document.getElementById("saagh-focklyn");
    const focklyn = [...document.getElementsByClassName("fockle")];
    const sheeanClick = new Audio("../../../sheeanyn/click.mp3");
    const sheeanArraghey = new Audio("../../../sheeanyn/arraghey.mp3");
    const kiart = new Audio("../../../sheeanyn/clinck.mp3");
    const neuChiart = new Audio("../../../sheeanyn/neu-chiart.mp3");
    const raa = new Audio(raaghyn[earrooFeysht].sheean);
    let pointRyGheddyn = true;
    focklyn.forEach(w => w.onclick = reihit);
    function reihit (taghyrt) {
        if (kiedHuittym) {
            saaghFreggyrt.textContent = "";
            saaghFreggyrt.style.display = "block";
            saaghFreggyrt.style.color = "black";
            saaghFreggyrt.style.textAlign = "left";
            kiedHuittym = false;
        };
        if (sfxGoll) sheeanClick.play();
        const cloan = taghyrt.target.cloneNode(true);
        const cloanXY = [taghyrt.target.offsetWidth, taghyrt.target.offsetHeight];
        [cloan.style.width, cloan.style.height] = [cloanXY[0] + "px", cloanXY[1] + "px"];
        cloan.id = taghyrt.target.id + "-cloan";
        cloan.classList.add("cloan");
        saaghFocklyn.replaceChild(cloan, taghyrt.target);
        taghyrt.target.onclick = () => {
            if (sfxGoll) sheeanArraghey.play();
            taghyrt.target.remove();
            taghyrt.target.onclick = reihit;
            taghyrt.target.classList.remove("reihit");
            if ([...saaghFreggyrt.childNodes].length == 0) {
                soieSaaghFreggyrt();
                kiedHuittym = true;
            }
            saaghFocklyn.replaceChild(taghyrt.target, cloan);
        };
        taghyrt.target.classList.add("reihit");
        saaghFreggyrt.append(taghyrt.target);
    }
    const crammanFreggyrt = document.getElementById("cramman-freggyrt");
    function caghlaaSaagh (daah, farkiaght = 500) {
        const cleeah = document.getElementById("cleeah");
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
        if (curStiagh == freggyrt || curStiagh == freggyrtElley) {
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
