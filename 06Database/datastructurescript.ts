//Tristan Broghammer
//Quellen: Yannik König, Jonas Atzenhofer

namespace shoppingList06 {
    let itemNumber: number = 0;
    let elementCounter: number = 0;
    let date: Date = new Date();
    let dateNoTime: string = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();
    let url: string = "https://webuser.hs-furtwangen.de/~broghamt/Database/index.php";

    window.addEventListener("load", handleLoad);


    interface ItemAdded {
        newItem: string;
        amount: number;
        comment: string; 
        bought: boolean; 
        date: string; 
    }

    interface Data {
        [id: number]: ItemAdded[]; 
    }

    interface Return {
        status: string;
        data: Data; 
    }

    //"https://github.com/Tristan-Br/EIA_II/blob/main/06Database/Data.json"

    async function handleLoad(_event: Event): Promise<void> {
        let addButton: HTMLButtonElement = document.querySelector("button#add");
        addButton.addEventListener("click", addItem);
        document.addEventListener("keypress", function(event: KeyboardEvent): void {
            if (event.key == "Enter") {
                 addItem(); 
            }
        });  


        let response: Response = await fetch(url + "?command=find&collection=dataList"); 
        let item: string = await response.text();
        let data: Return = JSON.parse(item);

        generateExistingItem(data); 
    }

    function generateExistingItem(_data: Data): void {

        let keys: string[] = Object.keys(_data.data);
        for (let index: number = 0; index < keys.length; index++) {

        let item: string[] = _data.data[keys[index]];  
        let text: string[] = Object.values(item); 

        let newItem: string = text[0];
        let amount: number = parseInt(text[1]);
        let comment: string = text[2];
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

        sendData(formData); 


    }

        async function sendData(_formData: FormData): Promise<void> {

        interface FormDataJSON {
            [key: string]: FormDataEntryValue | FormDataEntryValue[];
          }
        let json: FormDataJSON = {};
        for (let key of _formData.keys())
            if (!json[key]) {
              let values: FormDataEntryValue[] = _formData.getAll(key);
              json[key] = values.length > 1 ? values : values[0];
            } 

        let query: URLSearchParams = new URLSearchParams(); 
        query.set("command", "insert");
        query.set("collection", "dataList");
        query.set("data", JSON.stringify(json));
        let response: Response = await fetch(url + "?" + query.toString());
        let responseText: string = await response.text();
        
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
    
        async function itemBought(_event: Event): void {
            let trigger: string = (_event.target as HTMLInputElement).id;
            let triggerNum: string = trigger.replace(/\D/g, "");
            let identifyer: number = parseInt(triggerNum);
    
            let response0: Response = await fetch(url + "?command=find&collection=dataList"); 
            let itemResponse: string = await response0.text();
            let data: Return = JSON.parse(itemResponse);
    
            let keys: string[] = Object.keys(data.data);
    
            let id: string = keys[identifyer];
    
            let query: URLSearchParams = new URLSearchParams(); 
            query.set("command", "update");
            query.set("collection", "dataList");
            query.set("id", id); 
            query.set("data", "{'bought': true}"); 
            let response1: Response = await fetch(url + "?" + query.toString());
            let responseText: string = await response1.text();
            console.log(responseText); 
    
            if (responseText.includes("success")) {
                alert("Item marked as bought!"); 
            }
            else {
                alert("Error! Try again!");
                    }  
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
}

    

    

