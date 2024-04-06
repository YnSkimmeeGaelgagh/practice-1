let reihyn = [];

function soieReihyn () {
    reihyn = [];
    let nyFocklyn = [];
    for (let f of Object.keys(raaghyn)) nyFocklyn.push(f);
    let j = raaghyn.size - 1;
    while (nyFocklyn.length) {
        let r = Math.floor(Math.random() * nyFocklyn.length);
        reihyn.push(nyFocklyn[r]);
        nyFocklyn.splice(r, 1);
        j--;
    };
    return reihyn;
};
