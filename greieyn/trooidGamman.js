function prowTrooidGamman () {
    sessionStorage.setItem("trooidGamman", localStorage.getItem("trooidGamman"));
    localStorage.removeItem("trooidGamman");
    sessionStorage.setItem("kiaullGoll", localStorage.getItem("kiaullGoll"));
    localStorage.removeItem("kiaullGoll");
    sessionStorage.setItem("sfxGoll", localStorage.getItem("sfxGoll"));
    localStorage.removeItem("sfxGoll");
}