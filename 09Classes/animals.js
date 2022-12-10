var farm;
(function (farm) {
    class Animal {
        name;
        species;
        food;
        foodAmount;
        sound;
        constructor(_name, _species, _food, _foodAmount, _sound) {
            this.name = _name;
            this.species = _species;
            this.food = _food;
            this.foodAmount = _foodAmount;
            this.sound = _sound;
        }
        eat() {
            this.food.eat(this.foodAmount);
        }
        sing() {
            let nameText = document.getElementById("name");
            nameText.innerHTML = this.name;
            let speciesText = document.getElementById("animal");
            speciesText.innerHTML = this.species + "s";
            for (let index = 0; index < 5; index++) {
                let sound = document.getElementById("sound" + index);
                sound.innerHTML = this.sound;
            }
        }
    }
    farm.Animal = Animal;
})(farm || (farm = {}));
//# sourceMappingURL=animals.js.map