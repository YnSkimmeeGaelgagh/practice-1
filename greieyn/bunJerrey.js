function troggJerrey (aggDeanyn) {
    trogAyrn({leayrid: "hidden", paarant: true, red: "div", ennym: "saagh-jeant", cheuSthie: [
        trogAyrn({red: "h2", ennym: "teks-agg-jerrinagh", cheuSthie: ["Final Score"]}),
        trogAyrn({red: "div", ennym: "agg-jerrinagh"}),
        trogAyrn({red: "div", ennym: "moylley", cheuSthie: ["Jeant dy mie!"]}),
        trogAyrn({red: "div", cheuSthie: [
            trogAyrn({red: "button", ennym: "cramman-reesht", cheuSthie: ["again"], click: () => location.reload()}),
            trogAyrn({red: "button", ennym: "cramman-jeant", cheuSthie: ["finish"], click: t => caghlaaDuillag(t,  "../../../index.html")})
        ]}),
        trogAyrn({red: "div", ennym: 'boayrd-agg', cheuSthie: [
            trogAyrn({red: "div", ennym: "saagh-yindyssagh", cheuSthie: [
                trogAyrn({red: "div", ennym: "yindyssagh", cheuSthie: ["yindyssagh"], keint: ["agg-ennym"]}),
                trogAyrn({red: "div", ennym: "agg-yindyssagh", cheuSthie: [aggDeanyn[0]]})
            ], keint: ["aggyn"]}),
            trogAyrn({red: "div", ennym: "saagh-niartal", cheuSthie: [
                trogAyrn({red: "div", ennym: "niartal", cheuSthie: ["niartal"], keint: ["agg-ennym"]}), 
                trogAyrn({red: "div", ennym: "agg-niartal", cheuSthie: [aggDeanyn[1]]})
            ], keint: ["aggyn"]}),
            trogAyrn({red: "div", ennym: "saagh-feer-vie", cheuSthie: [
                trogAyrn({red: "div", ennym: "feer-vie", cheuSthie: ["feer vie"], keint: ["agg-ennym"]}),
                trogAyrn({red: "div", ennym: "agg-feer-vie", cheuSthie: [aggDeanyn[2]]})
            ], keint: ["aggyn"]}),
            trogAyrn({red: "div", ennym: "saagh-braew", cheuSthie: [
                trogAyrn({red: "div", ennym: "braew", cheuSthie: ["braew"], keint: ["agg-ennym"]}),
                trogAyrn({red: "div", ennym: "agg-braew", cheuSthie: [aggDeanyn[3]]})
            ], keint: ["aggyn"]}),
            trogAyrn({red: "div", ennym: "saagh-mdl", cheuSthie: [
                trogAyrn({red: "div", ennym: "mdl", cheuSthie: ["mie dy liooar"], keint: ["agg-ennym"]}), 
                trogAyrn({red: "div", ennym: "agg-mdl", cheuSthie: [aggDeanyn[4]]})
            ], keint: ["aggyn"]})
        ]})
    ]})
}