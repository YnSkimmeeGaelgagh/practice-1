function focklyn () {
    const saaghFocklyn = document.getElementById("saagh-focklyn");
    saaghFocklyn.textContent = "";
    let strFocklyn = raaghyn[earrooFeysht].gaelg;
    let focklyn = strFocklyn.split(" ");
    const caslys = document.getElementById("caslys-eaishtagh");
    caslys.classList.remove("kiart");
    const crammanFaaue = document.getElementById("cramman-faaue");
    crammanFaaue.classList.remove("cramman-faaue-follit");
    const faaue = document.getElementById("faaue");
    faaue.classList.remove("faaue-neuollit");
    faaue.textContent = "";
    let rFocklyn = [];
    let focklynElley = [];
    const coipFocklynYnsit = [...focklynYnsit];
    const reihR = arr => Math.floor(Math.random() * arr.length);
    while (focklyn.length > 0) {
        const r = reihR(focklyn);
        rFocklyn.push(focklyn[r]);
        focklyn.splice(r, 1);
    };
    // const rFocklynBeggey = rFocklyn.map(f => f.toLowerCase());
    rFocklynBeggey = strFocklyn.toLowerCase();
    while (focklynElley.length < 4) {
        const r = reihR(coipFocklynYnsit);
        if (
            focklynElley.includes(coipFocklynYnsit[r])
            || rFocklynBeggey.includes(coipFocklynYnsit[r].toLowerCase())
            || coipFocklynYnsit[r] == "y" && rFocklynBeggey.includes("yn")
            || coipFocklynYnsit[r] == "yn" && rFocklynBeggey.includes("yn")
            || coipFocklynYnsit[r] == "y" && rFocklynBeggey.includes("y")
            || coipFocklynYnsit[r] == "yn" && rFocklynBeggey.includes("y")
            || coipFocklynYnsit[r] == "y" && rFocklynBeggey.includes("ta'n")
            || coipFocklynYnsit[r] == "yn" && rFocklynBeggey.includes("ta'n")
            || coipFocklynYnsit[r] == "y" && rFocklynBeggey.includes("ta")
            || coipFocklynYnsit[r] == "yn" && rFocklynBeggey.includes("ta")
        ) continue;
        focklynElley.push(coipFocklynYnsit[r]);
        coipFocklynYnsit.splice(r, 1);
    };
    focklynElley.forEach(f => {
        const r = reihR(rFocklyn);
        rFocklyn.splice(r, 0, f);
    });
    rFocklyn.forEach((f, i) => {
        const d = document.createElement("div");
        d.id = `fockle-${i}`;
        d.classList.add("fockle");
        d.textContent = f;
        saaghFocklyn.append(d);
    });
}
