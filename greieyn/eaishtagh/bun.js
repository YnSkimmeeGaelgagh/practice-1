const earrooFeyshtyn = Object.keys(raaghyn);
const mooadys = earrooFeyshtyn.length;

function troggDuillag () {
    if (earrooFeysht == 1) {
        prowTrooidGamman();
        trogAyrn({paarant: true, red: "div", ennym: "saagh-toshiaght", cheuSthie: [
            trogAyrn({red: "div", ennym: "coyrle-toshiaght", cheuSthie: [
                "Listen to the recording then choose word blocks to write what you hear!",
                sfxGoll ? [] : trogAyrn({red: "div", ennym: "raueSFX", cheuSthie: ["(Note: You need to have sound effects turned on to play this game. They'll be turned on automatically when you start the game.)"]}),
                trogAyrn({red: "button", ennym: "cramman-toshiaght", cheuSthie: ["ok"], keint: ["reih"], click: t => gowToshiaght(t, "eaishtagh")}),
                trogAyrn({red: "button", ennym: "cramman-faagail", cheuSthie: ["exit game"], keint: ["reih", "cramman-faagail"], click: t => caghlaaDuillag(t, "../../../index.html")})
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
    }
    else eaishtReesht();
    sfxGoll = true;
    soieSaaghFreggyrt();
    focklyn();
    scugh();
};

troggDuillag();
