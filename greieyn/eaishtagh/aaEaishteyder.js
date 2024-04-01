function eaishtReesht () {
    const caslysEaishtagh = document.getElementById("caslys-eaishtagh");
    caslysEaishtagh.classList.add("sheean");
    const raa = new Audio(raaghyn[earrooFeysht].sheean);
    setTimeout(() => {
        setTimeout(() => {
            caslysEaishtagh.classList.remove("sheean");
        }, raa.duration * 1000);
    }, 100);
    raa.play();
}