function caghlaaDuillag (t, enmys) {
    localStorage.setItem("trooidGamman", "true");
    localStorage.setItem("kiaullGoll", sessionStorage.getItem("kiaullGoll"));
    localStorage.setItem("sfxGoll", sessionStorage.getItem("sfxGoll"));
    window.location.href = enmys;
}