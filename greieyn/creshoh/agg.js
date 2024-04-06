let roie = 0;
let traaToshiaght = Date.now();
let traaJerrey = 0;

function freayllAgg () {
    loggyrTraa();
    gowTraaToshiaght();
}

function loggyrTraa () {
    gowTraaJerrey();
    const caghlaaTraa = traaJerrey - traaToshiaght;
    let daah = "";
    let brash = 0;
    let focklynCoyrle = "";
    switch (true) {
        case (caghlaaTraa < 1000):
            brash = 5;
            daah = "rgba(173, 255, 47, 0.5)";
            focklynCoyrle = "feer tappee!"
            break;
        case (caghlaaTraa < 2000):
            brash = 4;
            daah = "rgba(0, 191, 255, 0.5)";
            focklynCoyrle = "tappee!"
            break;
        case (caghlaaTraa < 3000):
            brash = 3;
            daah = "rgba(240, 230, 140, 0.5)";
            focklynCoyrle = "mdl!"
            break;
        case (caghlaaTraa < 4000):
            brash = 2;
            daah = "rgba(255, 160, 122, 0.5)";
            focklynCoyrle = "moal!"
            break;
        default:
            brash = 1;
            daah = "rgba(255, 69, 0, 0.5)";
            focklynCoyrle = "feer voal!"
    };
    const loggyrRoie = roie > 2 ? Math.ceil(roie * 0.4) : 0;
    brash += loggyrRoie;
    const saaghLoggyrRoie = trogAyrn({red: "div", ennym: "loggyr-roie", cheuSthie: [`loggyr roie ${roie}x`]});
    const saaghMean = document.getElementById("saagh-mean");
    const shennLoggyr = document.getElementById("loggyr-roie");
    if (shennLoggyr) shennLoggyr.remove();
    if (loggyrRoie > 0) {
        const kishteyReih = document.getElementById("saagh-reighyn");
        saaghMean.insertBefore(saaghLoggyrRoie, kishteyReih);
    };
    agg += brash;
    caghlaaRoot(daah);
    const oirrClag = document.getElementById("clag");
    oirrClag.remove();
    const oirrNoa = trogAyrn({red: "div", ennym: "clag", cheuSthie: [
        trogAyrn({red: "span", ennym: "clag-minnid", cheuSthie: [traa()]}),
        trogAyrn({red: "span", cheuSthie: [":"]}),
        trogAyrn({red: "span", ennym: "clag-grig", cheuSthie: [traa()]}),
        trogAyrn({red: "div", ennym: "pointyn", cheuSthie: [
            trogAyrn({red: "div", ennym: "coyrle", cheuSthie: [focklynCoyrle]}),
            "+" + brash
        ], keint: ["bieauid"]})
    ]});
    const mullagh = document.getElementById("saagh-mullagh");
    mullagh.append(oirrNoa);
    const fys = document.getElementById("fys");
    const saaghAgg = document.getElementById("agg");
    saaghAgg.remove();
    const aggNoa = trogAyrn({red: "div", ennym: "agg", cheuSthie: [agg]});
    fys.append(aggNoa);
    const saaghFeysht = document.getElementById("feysht");
    const coonteyFeysht = 1 + feysht + (runt * Object.keys(raaghyn).length);
    saaghFeysht.textContent = coonteyFeysht + "/" + (Object.keys(raaghyn).length * 4);
}

const gowTraaToshiaght = () => traaToshiaght = Date.now();
const gowTraaJerrey = () => traaJerrey = Date.now();
