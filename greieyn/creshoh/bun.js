let feysht = 0;
let runt = 0;
const earrooFeyshtyn = Object.keys(raaghyn).length * 4;

(function crooDuillag () {
    document.body.style.overflow = "hidden";
    const caghlaaKiaull = t => {
        sessionStorage.setItem("kiaullGoll", t.target.checked);
        kiaullGoll = sessionStorage.getItem("kiaullGoll") == "true" ? true : false;
    };
    const caghlaaSFX = t => {
        sessionStorage.setItem("sfxGoll", t.target.checked);
        sfxGoll = sessionStorage.getItem("sfxGoll") == "true" ? true : false;
    };
    const tG = prowTrooidGamman();
    if (tG == "null") {
        sessionStorage.setItem("kiaullGoll", "true");
        kiaullGoll = true;
        sessionStorage.setItem("sfxGoll", "true");
        sfxGoll = true;
    };
    soieReihyn();
    soieCrammanyn();
    troggJerrey([
        5 * earrooFeyshtyn,
        4 * earrooFeyshtyn,
        3 * earrooFeyshtyn,
        2 * earrooFeyshtyn,
        1 * earrooFeyshtyn
    ]);
    trogAyrn({paarant: true, red: "div", ennym: "saagh-toshiaght", cheuSthie: [
        trogAyrn({red: "div", ennym: "coyrle-toshiaght", cheuSthie: [
            trogAyrn({red: "p", cheuSthie: ["Click the word that matches the picture!"]}),
            trogAyrn({red: "p", cheuSthie: ["Try to get each word as quickly as possible: you get bonus points for speed!"]}),
            trogAyrn({red: "button", ennym: "cramman-toshiaght", cheuSthie: ["ok"], keint: ["reih"], click: t => gowToshiaght(t, "creshoh")}),
            trogAyrn({red: "button", ennym: "cramman-faagail", cheuSthie: ["exit game"], keint: ["reih", "cramman-faagail"], click: t => caghlaaDuillag(t, "../../../index.html")}),
            trogAyrn({red: "div", ennym: "saagh-corragyn", cheuSthie: [
                trogAyrn({red: "div", ennym: "saagh-corrag-kiaull", keint: ["saagh-corrag"], cheuSthie: [
                    trogAyrn({red: "div", ennym: "lipaid-kiaull", keint: ["lipaid"], cheuSthie: ["music"]}),
                    trogAyrn({red: "label", ennym: "corrag-kiaull", keint: ["corrag"], cheuSthie: [
                        trogAyrn({red: "input", ennym: "skirreyder-kiaull", sorch: "checkbox", cowrit: true, caghlaa: t => caghlaaKiaull(t)}),
                        trogAyrn({red: "span", ennym: "far-skirreyder-kiaull", keint: ["skirreyder"]})
                    ]})
                ]}),
                trogAyrn({red: "div", ennym: "saagh-corrag-sfx", keint: ["saagh-corrag"], cheuSthie: [
                    trogAyrn({red: "div", ennym: "lipaid-sfx", keint: ["lipaid"], cheuSthie: ["sfx"]}),
                    trogAyrn({red: "label", ennym: "corrag-sfx", keint: ["corrag"], cheuSthie: [
                        trogAyrn({red: "input", ennym: "skirreyder-sfx", sorch: "checkbox", cowrit: true, caghlaa: t => caghlaaSFX(t)}),
                        trogAyrn({red: "span", ennym: "far-skirreyder-sfx", keint: ["skirreyder"]})
                    ]})
                ]})
            ], taishbynys: `${tG == "null" ? "block" : "none"}`})
        ]})
    ], leayrid: "visible"});
    trogAyrn({paarant: true, red: "div", ennym: "saagh", cheuSthie: [
        trogAyrn({red: "div", ennym: "saagh-stoo-gamman", cheuSthie: [
            trogAyrn({red: "div", ennym: "saagh-mullagh", cheuSthie: [
                trogAyrn({red: "div", ennym: "clag", cheuSthie: [
                    trogAyrn({red: "span", ennym: "clag-minnid", cheuSthie: ["00"]}),
                    trogAyrn({red: "span", cheuSthie: [":"]}),
                    trogAyrn({red: "span", ennym: "clag-grig", cheuSthie: ["00"]})
                ]}),
                trogAyrn({red: "div", ennym: "fys", cheuSthie: [
                    trogAyrn({red: "div", ennym: "feysht", cheuSthie: ["1/" + (Object.keys(raaghyn).length * 4)]}),
                    trogAyrn({red: "div", ennym: "agg", cheuSthie: ["0"]})
                ]})
            ]}),
            trogAyrn({red: "div", ennym: "saagh-mean", cheuSthie: [
                trogAyrn({red: "div", ennym: "saagh-caslys", cheuSthie: [
                    trogAyrn({red: "img", ennym: "caslys-creshoh"})
                ]}),
                trogAyrn({red: "div", ennym: "saagh-reighyn", cheuSthie: [
                    trogAyrn({red: "button", ennym: "reih-1", cheuSthie: [crammanyn[0]], keint: ["reih-creshoh"], click: clickit}),
                    trogAyrn({red: "button", ennym: "reih-2", cheuSthie: [crammanyn[1]], keint: ["reih-creshoh"], click: clickit}),
                    trogAyrn({red: "button", ennym: "reih-3", cheuSthie: [crammanyn[2]], keint: ["reih-creshoh"], click: clickit})
                ]})
            ]})
        ]}),
        trogAyrn({red: "div", ennym: "saagh-dooney", cheuSthie: [
            trogAyrn({red: "button", ennym: "cramman-dooney", cheuSthie: ["exit game"], click: t => caghlaaDuillag(t, "../../../index.html")})
        ]})
    ]});
    const caslysCreshoh = document.getElementById("caslys-creshoh");
    caslysCreshoh.replaceWith(raaghyn[reihyn[0]].caslys);
})();
