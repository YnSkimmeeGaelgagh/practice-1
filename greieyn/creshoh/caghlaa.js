function caghlaaMean () {
    const daghCramman = document.getElementsByClassName("reih");
    [...daghCramman].forEach(c => c.style.pointerEvents = "auto");
    const caslys = document.getElementById("caslys");
    caslys.remove();
    const caslysNoa = trogAyrn({red: "img", ennym: "caslys", cheuSthie: focklynGamman[reihyn[feysht]].caslys});
    const saaghCaslys = document.getElementById("saagh-caslys");
    saaghCaslys.prepend(caslysNoa);
    const caghlaaCramman = (cramman, earroo) => {
        cramman.textContent = crammanyn[earroo];
        cramman.style.backgroundColor = "white";
        cramman.style.color = "var(--doo)";
    };
    soieCrammanyn();
    const reih1 = document.getElementById("reih-1");
    const reih2 = document.getElementById("reih-2");
    const reih3 = document.getElementById("reih-3");
    caghlaaCramman(reih1, 0);
    caghlaaCramman(reih2, 1);
    caghlaaCramman(reih3, 2);
}