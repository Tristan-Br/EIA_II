//Tristan Broghammer
//Quellen: Yannik König, Robert Schindler, Jonas Atzenhofer

namespace shoppingList05 {

    window.addEventListener("load", handleLoad);

    let itemNumber: number = 0;

    interface ItemAdded {
        newItem: string;
        amount: number;
        comment: string; 
        bought: boolean; 
        date: string; 
    }

    interface Data {
        [1]: ItemAdded[]; 
    }

    async function handleLoad(_event: Event): Promise<void> {

        let addButton: HTMLButtonElement = document.querySelector("button#button");
        addButton.addEventListener("click", addItem);

        let response: Response = await fetch ("https://github.com/Tristan-Br/EIA_II/blob/main/05Client/Data.json");
        let item: string = await response.text();
        let data: Data = JSON.parse(item);

        generateExistingItem(data); 

        
    }

    function generateExistingItem(_data: Data): void {
        let values: ItemAdded[] = _data[1];
        console.log(values[0].newItem);  

        let newItem: string = values[0].newItem;
        let amount: number = values[0].amount;
        let comment: string = values[0].comment;
        let list: HTMLElement = document.getElementById("list");
        let newDiv: HTMLDivElement = document.createElement("div");
        let newInput: HTMLInputElement = document.createElement("input");
        let divItemData: HTMLDivElement = document.createElement("div");


        createInput(newInput, newDiv); 

        createDiv(newDiv); 

        createItemDiv(divItemData, newDiv); 

        addElement(divItemData);

        addElement(divItemData, newItem.toString());

        addElement(divItemData, amount.toString());

        addElement(divItemData, comment.toString()); 

        addButton(newDiv, "edit"); 

        addButton(newDiv, "delete"); 

        list.appendChild(newDiv);


    }

    async function addItem(): Promise<void> {
        let formData: FormData = new FormData(document.querySelector("form"));
        let newItem: FormDataEntryValue = formData.get("addItem");
        let amount: FormDataEntryValue = formData.get("addAmount");
        let comment: FormDataEntryValue = formData.get("addComment");
        let list: HTMLElement = document.getElementById("list");
        let newDiv: HTMLDivElement = document.createElement("div");
        let newInput: HTMLInputElement = document.createElement("input");
        let divItemData: HTMLDivElement = document.createElement("div");
        let bought: boolean = false;
        let date: string = "10.11.2022";
        itemNumber++;

        createInput(newInput, newDiv); 

        createDiv(newDiv); 

        createItemDiv(divItemData, newDiv); 

        addElement(divItemData);

        addElement(divItemData, newItem.toString());

        addElement(divItemData, amount.toString());

        addElement(divItemData, comment.toString()); 

        addElement(divItemData, date); 

        addButton(newDiv, "edit"); 

        addButton(newDiv, "delete"); 

        list.appendChild(newDiv);

        let query: URLSearchParams = new URLSearchParams(<any>formData);
        await fetch("shoppinglist.html?" + query.toString());
        alert("Item added!");

    }
    function addElement(_parent: HTMLElement, _content?: string): void {
        let newItemField: HTMLElement = document.createElement("p");
        _parent.appendChild(newItemField);
        newItemField.setAttribute("class", "ItemDataFont");
        if (_content) {
            newItemField.innerHTML = (_content as string);
        }
    
    }
    
    function addButton(_parent: HTMLElement, _identify: string): void {
        let newButton: HTMLElement = document.createElement("button");
        _parent.appendChild(newButton);
        newButton.setAttribute("class", _identify);
        newButton.setAttribute("id", _identify + itemNumber);
        newButton.setAttribute("type", "button");
        newButton.innerHTML = _identify;
        switch (_identify) {
            case "edit":
                newButton.addEventListener("click", editItem);
                break;
            case "delete": 
                newButton.addEventListener("click", deleteItem);
            default:
                break;
        }
    }
    
    function createDiv(_element: HTMLElement): void {
        _element.setAttribute("class", "lister");
        _element.setAttribute("id", "lister" + itemNumber);
    }
    
    function createInput(_element: HTMLElement, _parent: HTMLElement): void {
        _parent.appendChild(_element);
        _element.setAttribute("class", "bought");
        _element.setAttribute("id", "bought" + itemNumber);
        _element.setAttribute("type", "checkbox");
        _element.addEventListener("change", itemBought);
    }
    
    function createItemDiv(_element: HTMLElement, _parent: HTMLElement): void {
        _parent.appendChild(_element);
        _element.setAttribute("class", "ItemData");
        _element.setAttribute("id", "ItemData" + itemNumber);
    }
    
    function itemBought(_event: Event): void {
        let trigger: string = (_event.target as HTMLInputElement).id;
        let triggerNum: string = trigger.replace(/\D/g, "");
        let identifyer: number = parseInt(triggerNum);
        //to be continued
    }
    
    function editItem(_event: Event): void {
        let trigger: string = (_event.target as HTMLButtonElement).id;
        let triggerNumber: string = trigger.replace(/\D/g, "");
        //to be continued
    }
    
    function deleteItem(_event: Event): void {
        let trigger: string = (_event.target as HTMLButtonElement).id;
        let triggerNum: string = trigger.replace(/\D/g, "");
        let identifyer: number = parseInt(triggerNum);
    
        let list: HTMLElement = document.getElementById("list");
        let remIt: HTMLElement = document.getElementById("lister" + identifyer);
        list.removeChild(remIt);
        
}
}

    

