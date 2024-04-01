// traa mie dy roshtyn y jerrey = 1:30.

function traa () {
    let toshiaght = Date.now();
    function caghlaaClag (clouagTraa) {
        requestAnimationFrame(caghlaaClag);
        const clagErDuillag = document.getElementById("clag");
        const clagMinnid = document.getElementById("clag-minnid");
        const clagGrig = document.getElementById("clag-grig");
        if (clagErDuillag) {
            let corrillagh = Math.floor(Date.now() - toshiaght);
            let grig = Math.floor(corrillagh / 1000);
            let minnid = Math.floor(grig / 60);
            let oor = Math.floor(minnid / 60);
            function earrooynTraa (earroo, nah = 0) {
                const earrooKiartit = "" + (earroo - (nah * 60));
                switch (true) {
                    case (earrooKiartit.length > 2):
                        return earrooKiartit.substring(earrooKiartit.length - 2);
                    case (earrooKiartit.length < 2):
                        return "0" + earrooKiartit;
                    default:
                        return earrooKiartit;
                };
            };
            clagGrig.textContent = earrooynTraa(grig, minnid);
            clagMinnid.textContent = earrooynTraa(minnid, oor);
        };
        return clouagTraa;
    };
    return requestAnimationFrame(caghlaaClag);
}