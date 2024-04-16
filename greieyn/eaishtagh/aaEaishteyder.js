function eaishtReesht () {
    const caslysEaishtagh = document.getElementById("caslys-eaishtagh");
    caslysEaishtagh.classList.add("sheean");
    setTimeout(() => {
        setTimeout(() => {
            caslysEaishtagh.classList.remove("sheean");
        }, raaghyn[earrooFeysht].sheean.duration * 1000);
    }, 100);
    cloieSheean(raaghyn[earrooFeysht].sheean);
}
