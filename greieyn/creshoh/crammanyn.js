let crammanyn = [];

function soieCrammanyn () {
    crammanyn = [];
    let focklyn = Object.keys(focklynGamman);
    const r = max => Math.floor(Math.random() * max);
    const kiart = r(3);
    focklyn = focklyn.filter(f => f != reihyn[feysht]);
    crammanyn[kiart] = reihyn[feysht];
    for (let i = 0; i < 3; i++) {
        if (!crammanyn[i]) {
            const ynnyd = r(focklyn.length);
            const fockle = focklyn[ynnyd];
            crammanyn[i] = fockle;
            focklyn = focklyn.filter(f => f != fockle);
        };
    };
}