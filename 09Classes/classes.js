var farm;
(function (farm) {
    window.addEventListener("load", handleLoad);
    let interval;
    let index = 1;
    let animals = [];
    function handleLoad() {
        let foodPhoenix = new farm.Food("Mice", 500);
        let phoenix = new farm.Animal("Fawkes", "Phoenixe", foodPhoenix, 10, "Screech!");
        animals.push(phoenix);
        let foodZerberus = new farm.Food("Steaks", 21);
        let zerberus = new farm.Animal("Fluffy", "Hellhound", foodZerberus, 3, "Woof!");
        animals.push(zerberus);
        let foodDragon = new farm.Food("Sheep", 50);
        let dragon = new farm.Animal("Tabaluga", "Dragon", foodDragon, 1, "Roar!");
        animals.push(dragon);
        let foodUnicorn = new farm.Food("Grass", 1000);
        let unicorn = new farm.Animal("Bob", "Unicorn", foodUnicorn, 10, "Weeheehee!");
        animals.push(unicorn);
        let foodKitsune = new farm.Food("Rabbits", 100);
        let kitsune = new farm.Animal("Kurama", "Nine-Tailed-Beast", foodKitsune, 1, "Raw!");
        animals.push(kitsune);
        startString();
    }
    function startString() {
        animals[0].sing();
        animals[0].eat();
        interval = setInterval(makeLyrics, 10000);
    }
    function makeLyrics() {
        animals[index].sing();
        animals[index].eat();
        index++;
    }
})(farm || (farm = {}));
//# sourceMappingURL=classes.js.map