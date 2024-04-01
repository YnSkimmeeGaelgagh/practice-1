let feysht = 0;
let runt = 0;
const earrooFeyshtyn = Object.keys(focklynGamman).length * 4;

(function crooDuillag () {
    prowTrooidGamman();
    soieReihyn();
    soieCrammanyn();
    troggJerrey([
        5 * earrooFeyshtyn,
        4 * earrooFeyshtyn,
        3 * earrooFeyshtyn,
        2 * earrooFeyshtyn,
        1 * earrooFeyshtyn
    ]);
    trogAyrn({paarant: true, red: "div", ennym: "saagh", cheuSthie: [
        trogAyrn({red: "div", ennym: "saagh-toshiaght", cheuSthie: [
            trogAyrn({red: "div", ennym: "coyrle-toshiaght", cheuSthie: [
                "Click the word that matches the picture!",
                trogAyrn({red: "button", ennym: "cramman-coyrle", cheuSthie: ["ok"], keint: ["reih"], click: t => gowToshiaght(t, "creshoh", true)}),
                trogAyrn({red: "button", ennym: "cramman-faagail", cheuSthie: ["exit game"], keint: ["reih", "cramman-faagail"], click: t => caghlaaDuillag(t, "../../../index.html")})
            ]})
        ], leayrid: "visible"}),
        trogAyrn({red: "div", ennym: "saagh-stoo-gamman", cheuSthie: [
            trogAyrn({red: "div", ennym: "saagh-mullagh", cheuSthie: [
                trogAyrn({red: "div", ennym: "clag", cheuSthie: [
                    trogAyrn({red: "span", ennym: "clag-minnid", cheuSthie: ["00"]}),
                    trogAyrn({red: "span", cheuSthie: [":"]}),
                    trogAyrn({red: "span", ennym: "clag-grig", cheuSthie: ["00"]})
                ]}),
                trogAyrn({red: "div", ennym: "fys", cheuSthie: [
                    trogAyrn({red: "div", ennym: "feysht", cheuSthie: ["1/" + (Object.keys(focklynGamman).length * 4)]}),
                    trogAyrn({red: "div", ennym: "agg", cheuSthie: ["0"]})
                ]})
            ]}),
            trogAyrn({red: "div", ennym: "saagh-mean", cheuSthie: [
                trogAyrn({red: "div", ennym: "saagh-caslys", cheuSthie: [
                    trogAyrn({red: "img", ennym: "caslys", cheuSthie: focklynGamman[reihyn[0]].caslys})
                ]}),
                trogAyrn({red: "button", ennym: "reih-1", cheuSthie: [crammanyn[0]], keint: ["reih"], click: clickit}),
                trogAyrn({red: "button", ennym: "reih-2", cheuSthie: [crammanyn[1]], keint: ["reih"], click: clickit}),
                trogAyrn({red: "button", ennym: "reih-3", cheuSthie: [crammanyn[2]], keint: ["reih"], click: clickit})
            ]}),
            trogAyrn({red: "div", ennym: "saagh-dooney", cheuSthie: [
                trogAyrn({red: "button", ennym: "cramman-dooney", cheuSthie: ["exit game"], click: t => caghlaaDuillag(t, "../../../index.html")})
            ]})
        ]})
    ]});
})();