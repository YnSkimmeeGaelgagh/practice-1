function caghlaaDuillag (t, enmys) {
    if (!enmys.endsWith("index.html")) {
        const screenLaadey = document.getElementById("screen-laadey-thie");
        screenLaadey.style.visibility = "visible";
    };
    localStorage.setItem("trooidGamman", "true");
    localStorage.setItem("kiaullGoll", sessionStorage.getItem("kiaullGoll"));
    localStorage.setItem("sfxGoll", sessionStorage.getItem("sfxGoll"));
    window.location.href = enmys;
}
