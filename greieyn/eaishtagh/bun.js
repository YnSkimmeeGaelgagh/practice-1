const earrooFeyshtyn = Object.keys(raaghyn);
const mooadys = earrooFeyshtyn.length;

function troggDuillag () {
    const caghlaaKiaull = t => {
        sessionStorage.setItem("kiaullGoll", t.target.checked);
        kiaullGoll = sessionStorage.getItem("kiaullGoll") == "true" ? true : false;
    };
    if (earrooFeysht == 1) {
        document.body.style.overflow = "hidden";
        const tG = prowTrooidGamman();
        if (tG == "null") {
            sessionStorage.setItem("kiaullGoll", "true");
            kiaullGoll = true;
            sessionStorage.setItem("sfxGoll", "true");
            sfxGoll = true;
        };
        trogAyrn({paarant: true, red: "div", ennym: "saagh-toshiaght", cheuSthie: [
            trogAyrn({red: "div", ennym: "coyrle-toshiaght", cheuSthie: [
                trogAyrn({red: "p", cheuSthie: ["Listen to the Manx sentence then choose word blocks to write what you hear!"]}),
                trogAyrn({red: "p", cheuSthie: ["If you miss a word, hold down on a word block until it turns orange"]}),
                trogAyrn({red: "div", cheuSthie: ["example"], keint: ["greim-sampleyr"]}),
                trogAyrn({red: "p", cheuSthie: ["then click in the space you'd like to place it."]}),
                trogAyrn({red: "p", cheuSthie: ["Aigh vie!"]}),
                sfxGoll ? [] : trogAyrn({red: "div", ennym: "raueSFX", cheuSthie: ["(Note: You need to have sound effects turned on to play this game. They'll be turned on automatically when you start the game.)"]}),
                trogAyrn({red: "button", ennym: "cramman-toshiaght", cheuSthie: ["ok"], keint: ["reih"], click: t => gowToshiaght(t, "eaishtagh")}),
                trogAyrn({red: "button", ennym: "cramman-faagail", cheuSthie: ["exit game"], keint: ["reih", "cramman-faagail"], click: t => caghlaaDuillag(t, "../../../index.html")}),
                trogAyrn({red: "div", ennym: "saagh-corragyn", cheuSthie: [
                    trogAyrn({red: "div", ennym: "saagh-corrag-kiaull", keint: ["saagh-corrag"], cheuSthie: [
                        trogAyrn({red: "div", ennym: "lipaid-kiaull", keint: ["lipaid"], cheuSthie: ["music"]}),
                        trogAyrn({red: "label", ennym: "corrag-kiaull", keint: ["corrag"], cheuSthie: [
                            trogAyrn({red: "input", ennym: "skirreyder-kiaull", sorch: "checkbox", cowrit: true, caghlaa: t => caghlaaKiaull(t)}),
                            trogAyrn({red: "span", ennym: "far-skirreyder-kiaull", keint: ["skirreyder"]})
                        ]})
                    ]})
                ], taishbynys: `${tG == "null" ? "block" : "none"}`})
            ]})
        ], leayrid: "visible"});
        let ayrn = 1;
        const deanyn = [];
        for (let i = 0; i < 5; i++) {
            const earroo = Math.round(mooadys * ayrn);
            deanyn.push(earroo);
            ayrn -= .2;
        }
        troggJerrey(deanyn);
        trogAyrn({paarant: true, red: "div", ennym: "saagh", cheuSthie: [
            trogAyrn({red: "div", ennym: "cleeah", cheuSthie: [
                trogAyrn({red: "div", ennym: "saagh-greinnaghey", cheuSthie: [
                    trogAyrn({red: "div", ennym: "saagh-caslys", cheuSthie: [
                        trogAyrn({red: "img", ennym: "caslys-eaishtagh", cheuSthie: "../../../caslyssyn/cramman-eaishtagh-100px.webp", click: eaishtReesht}),
                        trogAyrn({red: "div", ennym: "saraghyn-eaishtagh", cheuSthie: ["Click on the speaker to listen again."]}),
                        trogAyrn({red: "div", ennym: "saagh-faaue", cheuSthie: [
                            trogAyrn({red: "div", ennym: "faaue"}),
                            trogAyrn({red: "div", ennym: "cramman-faaue", cheuSthie: ["Need a hint?"], click: t => {
                                t.target.classList.add("cramman-faaue-follit");
                                const faaue = t.target.previousSibling;
                                faaue.textContent = `The sentence in English is, "${raaghyn[earrooFeysht].baarle}"`;
                                faaue.classList.add("faaue-neuollit");
                            }})
                        ]})
                    ]})
                ]}),
                trogAyrn({red: "div", ennym: "saagh-freggyrt"}),
                trogAyrn({red: "div", ennym: "saagh-cramman", cheuSthie: [
                    trogAyrn({red: "button", ennym: "cramman-freggyrt", cheuSthie: ["check"]})
                ]}),
                trogAyrn({red: "div", ennym: "saagh-focklyn"})
            ]}),
            trogAyrn({red: "div", ennym: "saagh-dooney", cheuSthie: [
                trogAyrn({red: "button", ennym: "cramman-dooney", cheuSthie: ["exit game"], click: t => caghlaaDuillag(t, "../../../index.html")})
            ]})
        ]});
        const saaghToshiaght = document.getElementById("saagh-toshiaght");
        const coyrleToshiaght = document.getElementById("coyrle-toshiaght");
        const yrjysCoyrle = coyrleToshiaght.offsetHeight;
        let y = window.matchMedia(`(max-height: ${yrjysCoyrle}px)`);
        if (y.matches) saaghToshiaght.style.justifyContent = "start";
        else saaghToshiaght.style.justifyContent = "center";
    }
    else eaishtReesht();
    soieSaaghFreggyrt();
    focklyn();
    scugh();
};

troggDuillag();
