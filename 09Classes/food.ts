namespace farm {
    export class Food {
        type: string;
        total: number; 

        constructor(_type: string, _total: number) {
            this.type = _type;
            this.total = _total; 
        }

        eat(_foodAmount: number): void {
           let newTotal: number = this.total - _foodAmount;
           this.total = newTotal; 
           this.display(_foodAmount); 
        }

        display(_foodAmount: number): void {
            let type: HTMLElement = document.getElementById("food");
            type.innerHTML = this.type; 
            let left: HTMLElement = document.getElementById("foodLeft");
            left.innerHTML = this.total.toString();
        }
    }
}