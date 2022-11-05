//Tristan Broghammer
//Quellen: Yannik König, Jonas Atzenhofer

namespace shoppingList {

    export interface ItemAdded {
        newItem: string;
        amount: number;
        comment: string; 
        bought: boolean; 
        date: string; 
    }

    export interface Data {
        [itemNumber: number]: ItemAdded[]; 
    }

    export let data: Data = {
        1: [
            { newItem: "Schokodrink", amount: 1, comment: "nur im Tetrapack", bought: false, date: "5.11.2022" }
        ], 
        2: [
            { newItem: "Orangensaft", amount: 1, comment: "turn up", bought: false, date: "5.11.2022" }
        ]
    }; 
}