const ardSkirreyderKiaull = document.getElementById("ard-skirreyder-kiaull");
ardSkirreyderKiaull.onchange = () => {
    sessionStorage.setItem("kiaullGoll", ardSkirreyderKiaull.checked);
    kiaullGoll = sessionStorage.getItem("kiaullGoll") == "true" ? true : false;
    kiaullGoll ? lhoob.play() : lhoob.pause();
}
const caghlaaArdSkirreyderKiaull = (stayd) => ardSkirreyderKiaull.checked = stayd;

const ardSkirreyderSFX = document.getElementById("ard-skirreyder-sfx");
ardSkirreyderSFX.onchange = () => {
    sessionStorage.setItem("sfxGoll", ardSkirreyderSFX.checked);
    sfxGoll = sessionStorage.getItem("sfxGoll") == "true" ? true : false;
}
const caghlaaArdSkirreyderSFX = (stayd) => ardSkirreyderSFX.checked = stayd;
