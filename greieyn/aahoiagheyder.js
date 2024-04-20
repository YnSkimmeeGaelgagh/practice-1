const crammanAahoiaghey = document.getElementById("cramman-aahoiaghey");
crammanAahoiaghey.onclick = () => {
    const raue = document.getElementById("raue");
    raue.style.visibility = "visible";
    const shickyrAahoiaghey = document.getElementById("shickyr-aahoiaghey");
    shickyrAahoiaghey.onclick = () => {
        raue.style.visibility = "hidden";
        soieCaghlaaghynYnnydagh();
        const daghCaslys = [...document.getElementsByClassName("caslys-chooish")];
        daghCaslys.forEach(c => c.classList.add("aahoit"));
        if (sfxGoll) cloieSheean("sheeanAahoit");
        fowRollageyn();
        setTimeout(() => {
            localStorage.clear();
            window.location.reload();
        }, 600);
    };
    const neuHickyrAahoiaghey = document.getElementById("neuhickyr-aahoiaghey");
    neuHickyrAahoiaghey.onclick = () => raue.style.visibility = "hidden";
};
