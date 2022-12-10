var farm;
(function (farm) {
    class Food {
        type;
        total;
        constructor(_type, _total) {
            this.type = _type;
            this.total = _total;
        }
        eat(_foodAmount) {
            let newTotal = this.total - _foodAmount;
            this.total = newTotal;
            this.display(_foodAmount);
        }
        display(_foodAmount) {
            let type = document.getElementById("food");
            type.innerHTML = this.type;
            let left = document.getElementById("foodLeft");
            left.innerHTML = this.total.toString();
        }
    }
    farm.Food = Food;
})(farm || (farm = {}));
//# sourceMappingURL=food.js.map