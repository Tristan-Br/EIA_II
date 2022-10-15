namespace RandomPoem {
//Arrays

 let subjekt: string[] = ["Klaus", "Victor", "Hassan", "Kurt", "Herbert", "Dimitri"];
 let praedikat: string[] = ["feiert", "beendet", "klaut", "begutachtet", "liebt", "verkloppt"];
 let objekt: string[] = ["die Ukraine", "ansteigenden Leankonsum", "den berliner Fernsehturm", "Kurt", "Veganer", "Major Monogwaem"];

 //console.log(subjekt, praedikat, objekt);

 //For-Schleife

 for (let i: number = 6; i >= 1; i--) {let randomsSatz: string = getVerse(subjekt, praedikat, objekt);
                                       console.log(randomsSatz);
}

//Funktion-getVerse

 function getVerse (_subjekt: string[], _praedikat: string[], _objekt: string[]): string {

    let randomSubjekt: number = Math.floor(Math.random() * _subjekt.length);
    let randomPraedikat: number = Math.floor(Math.random() * _praedikat.length);
    let randomObjekt: number = Math.floor(Math.random() * _objekt.length );
 
    let verse: string = _subjekt[randomSubjekt] + " " + _praedikat[randomPraedikat] + " " + _objekt[randomObjekt] + ".";

    _subjekt.splice(randomSubjekt, 1);
    _praedikat.splice(randomPraedikat, 1);
    _objekt.splice(randomObjekt, 1);

    return verse;
}
}
