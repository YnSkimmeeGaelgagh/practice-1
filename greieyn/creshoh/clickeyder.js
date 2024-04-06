function clickit () {
    this.style.pointerEvents = "none";
    if (this.textContent == reihyn[feysht]) {
        if (sfxGoll) {
            kiart.play();
            raaghyn[reihyn[feysht]].sheean.play();
        };
        this.style.backgroundColor = "chartreuse";
        feysht++;
        roie++;
        freayllAgg();
        coEarrooagheyAggNoa(this.textContent, 0, .25);
        if (feysht == Object.keys(raaghyn).length) {
            feysht = 0;
            runt++;
            if (runt == 4) {
                if (kiaullGoll) {
                    lhoob.pause();
                    let kiaullJerrinagh = agg >= 108 ? jerreyMie : jerreyCadjin;
                    kiaullJerrinagh.play();
                };
                const nynAgg = (smoo, sloo) => {
                    if (agg >= smoo * earrooFeyshtyn && agg < sloo * earrooFeyshtyn) {
                        caghlaaRoot(null, smoo);
                        return "nyn-agg";
                    } else return "agg-elley";
                };
                const saaghYindyssagh = document.getElementById("saagh-yindyssagh");
                saaghYindyssagh.classList.add(nynAgg(5, 100));
                const saaghNiartal = document.getElementById("saagh-niartal");
                saaghNiartal.classList.add(nynAgg(4, 5));
                const saaghFeerVie = document.getElementById("saagh-feer-vie");
                saaghFeerVie.classList.add(nynAgg(3, 4));
                const saaghBraew = document.getElementById("saagh-braew");
                saaghBraew.classList.add(nynAgg(2, 3));
                const saaghMdl = document.getElementById("saagh-mdl");
                saaghMdl.classList.add(nynAgg(1, 2));
                const aggJerrinagh = document.getElementById("agg-jerrinagh");
                aggJerrinagh.textContent = agg;
                const saaghJeant = document.getElementById("saagh-jeant");
                saaghJeant.style.visibility = "visible";
                return;
            }
            soieReihyn();
        };
        setTimeout(caghlaaMean, 500);
    } else {
        if (sfxGoll) neuChiart.play();
        if (agg > 0) { 
            agg--;
            roie = 0;
            const saaghAgg = document.getElementById("agg");
            saaghAgg.remove();
            const aggNoa = trogAyrn({red: "div", ennym: "agg", cheuSthie: [agg]});
            caghlaaRoot("rgba(255, 69, 0, 0.5)");
            fys.append(aggNoa);
        };
        this.style.backgroundColor = "crimson";
        this.style.color = "white";
    };
};
