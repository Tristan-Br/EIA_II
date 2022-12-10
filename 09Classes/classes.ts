namespace farm {

    window.addEventListener("load", handleLoad);

    let interval: number; 
    let index: number = 1; 
    let animals: Animal[] = []; 

    function handleLoad(): void {

        let foodPhoenix: Food = new Food ("Mice", 500);
        let phoenix: Animal = new Animal ("Fawkes", "Phoenixe", foodPhoenix, 10, "Screech!");
        animals.push(phoenix);

        let foodZerberus: Food = new Food ("Steaks", 21);
        let zerberus: Animal = new Animal ("Fluffy", "Hellhound", foodZerberus, 3, "Woof!" );
        animals.push(zerberus);

        let foodDragon: Food = new Food ("Sheep", 50);
        let dragon: Animal = new Animal ("Tabaluga", "Dragon", foodDragon, 1, "Roar!");
        animals.push(dragon);

        let foodUnicorn: Food = new Food ("Grass", 1000);
        let unicorn: Animal = new Animal ("Bob", "Unicorn", foodUnicorn, 10, "Weeheehee!");
        animals.push(unicorn);

        let foodKitsune: Food = new Food ("Rabbits", 100);
        let kitsune: Animal = new Animal ("Kurama", "Nine-Tailed-Beast", foodKitsune, 1, "Raw!");
        animals.push(kitsune);

        startString();
    }

    function startString(): void {
        animals[0].sing();
        animals[0].eat();
        interval = setInterval(makeLyrics, 10000);
    }

    function makeLyrics(): void {
        animals[index].sing();
        animals[index].eat();
        index++;

        }
}