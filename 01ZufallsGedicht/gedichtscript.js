var RandomPoem;
(function (RandomPoem) {
    //Arrays
    let subjekt = ["Klaus", "Victor", "Hassan", "Kurt", "Herbert", "Dimitri"];
    let praedikat = ["feiert", "beendet", "klaut", "begutachtet", "liebt", "verkloppt"];
    let objekt = ["die Ukraine", "ansteigenden Leankonsum", "den berliner Fernsehturm", "Kurt", "Veganer", "Major Monogwaem"];
    //console.log(subjekt, praedikat, objekt);
    //For-Schleife
    for (let i = 6; i >= 1; i--) {
        let randomsSatz = getVerse(subjekt, praedikat, objekt);
        console.log(randomsSatz);
    }
    //Funktion-getVerse
    function getVerse(_subjekt, _praedikat, _objekt) {
        let randomSubjekt = Math.floor(Math.random() * _subjekt.length);
        let randomPraedikat = Math.floor(Math.random() * _praedikat.length);
        let randomObjekt = Math.floor(Math.random() * _objekt.length);
        let verse = _subjekt[randomSubjekt] + " " + _praedikat[randomPraedikat] + " " + _objekt[randomObjekt] + ".";
        _subjekt.splice(randomSubjekt, 1);
        _praedikat.splice(randomPraedikat, 1);
        _objekt.splice(randomObjekt, 1);
        return verse;
    }
})(RandomPoem || (RandomPoem = {}));
//# sourceMappingURL=gedichtscript.js.map