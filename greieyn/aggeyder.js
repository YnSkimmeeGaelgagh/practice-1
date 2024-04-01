function coEarrooagheyAggNoa(f, e, troggal) {
    let keayrtyn = localStorage.getItem(f).split(",");
    if (keayrtyn[e] < 1) keayrtyn[e] = +keayrtyn[e] + troggal;
    localStorage.setItem(f, keayrtyn);
};