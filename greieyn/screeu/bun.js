const earrooFeyshtyn = Object.keys(raaghyn);
const mooadys = earrooFeyshtyn.length;

function troggDuillag () {
    const caghlaaKiaull = t => {
        sessionStorage.setItem("kiaullGoll", t.target.checked);
        kiaullGoll = sessionStorage.getItem("kiaullGoll") == "true" ? true : false;
    };
    const caghlaaSFX = t => {
        sessionStorage.setItem("sfxGoll", t.target.checked);
        sfxGoll = sessionStorage.getItem("sfxGoll") == "true" ? true : false;
    };
    if (earrooFeysht == 1) {
        const tG = prowTrooidGamman();
        if (tG == "null") {
            sessionStorage.setItem("kiaullGoll", "true");
            kiaullGoll = true;
            sessionStorage.setItem("sfxGoll", "true");
            sfxGoll = true;
        };
        trogAyrn({paarant: true, red: "div", ennym: "saagh-toshiaght", cheuSthie: [
            trogAyrn({red: "div", ennym: "coyrle-toshiaght", cheuSthie: [
                "Click the word blocks to complete the sentences!",
                trogAyrn({red: "button", ennym: "cramman-toshiaght", cheuSthie: ["ok"], keint: ["reih"], click: t => gowToshiaght(t, "screeu")}),
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
                        trogAyrn({red: "img", ennym: "caslys"})
                    ]}),
                    trogAyrn({red: "div", ennym: "greinnaghey"})
                ]}),
                trogAyrn({red: "div", ennym: "saagh-freggyrt"}),
                trogAyrn({red: "div", ennym: "saagh-cramman", cheuSthie: [
                    trogAyrn({red: "button", ennym: "cramman-freggyrt", cheuSthie: ["check"]})
                ]}),
                trogAyrn({red: "div", ennym: "saagh-focklyn"})
            ]}),
            trogAyrn({red: "div", ennym: "saagh-dooney", cheuSthie: [
                trogAyrn({red: "button", ennym: "cramman-dooney", cheuSthie: ["exit game"], click: t => caghlaaDuillag(t, "../../../index.html")})
            ]}),
            trogAyrn({red: "div", ennym: "console"})
        ]})
    };
    soieSaaghFreggyrt();
    focklyn();
    scugh();
};

troggDuillag();
