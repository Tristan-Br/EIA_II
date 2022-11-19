//Tristan Broghammer
//Quellen: Yannik König, Jonas Atzenhofer
var shoppingList06;
(function (shoppingList06) {
    let itemNumber = 0;
    let elementCounter = 0;
    let date = new Date();
    let dateNoTime = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();
    let url = "https://webuser.hs-furtwangen.de/~broghamt/Database/index.php";
    window.addEventListener("load", handleLoad);
    //"https://github.com/Tristan-Br/EIA_II/blob/main/06Database/Data.json"
    async function handleLoad(_event) {
        let addButton = document.querySelector("button#add");
        addButton.addEventListener("click", addItem);
        document.addEventListener("keypress", function (event) {
            if (event.key == "Enter") {
                addItem();
            }
        });
        let response = await fetch(url + "?command=find&collection=dataList");
        let item = await response.text();
        let data = JSON.parse(item);
        generateExistingItem(data);
    }
    function generateExistingItem(_data) {
        let keys = Object.keys(_data.data);
        for (let index = 0; index < keys.length; index++) {
            let item = _data.data[keys[index]];
            let text = Object.values(item);
            let newItem = text[0];
            let amount = parseInt(text[1]);
            let comment = text[2];
            let list = document.getElementById("list");
            let newDiv = document.createElement("div");
            let newInput = document.createElement("input");
            let divItemData = document.createElement("div");
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
        async function addItem() {
            let formData = new FormData(document.querySelector("form"));
            let newItem = formData.get("addItem");
            let amount = formData.get("addAmount");
            let comment = formData.get("addComment");
            let list = document.getElementById("list");
            let newDiv = document.createElement("div");
            let newInput = document.createElement("input");
            let divItemData = document.createElement("div");
            let bought = false;
            let date = "10.11.2022";
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
        async function sendData(_formData) {
            let json = {};
            for (let key of _formData.keys())
                if (!json[key]) {
                    let values = _formData.getAll(key);
                    json[key] = values.length > 1 ? values : values[0];
                }
            let query = new URLSearchParams();
            query.set("command", "insert");
            query.set("collection", "dataList");
            query.set("data", JSON.stringify(json));
            let response = await fetch(url + "?" + query.toString());
            let responseText = await response.text();
            console.log();
        }
        function addElement(_parent, _content) {
            let newItemField = document.createElement("p");
            _parent.appendChild(newItemField);
            newItemField.setAttribute("class", "ItemDataFont");
            if (_content) {
                newItemField.innerHTML = _content;
            }
        }
        function addButton(_parent, _identify) {
            let newButton = document.createElement("button");
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
        function createDiv(_element) {
            _element.setAttribute("class", "lister");
            _element.setAttribute("id", "lister" + itemNumber);
        }
        function createInput(_element, _parent) {
            _parent.appendChild(_element);
            _element.setAttribute("class", "bought");
            _element.setAttribute("id", "bought" + itemNumber);
            _element.setAttribute("type", "checkbox");
            _element.addEventListener("change", itemBought);
        }
        function createItemDiv(_element, _parent) {
            _parent.appendChild(_element);
            _element.setAttribute("class", "ItemData");
            _element.setAttribute("id", "ItemData" + itemNumber);
        }
        function itemBought(_event) {
            let trigger = _event.target.id;
            let triggerNum = trigger.replace(/\D/g, "");
            let identifyer = parseInt(triggerNum);
            //to be continued
        }
        function editItem(_event) {
            let trigger = _event.target.id;
            let triggerNumber = trigger.replace(/\D/g, "");
            //to be continued
        }
        function deleteItem(_event) {
            let trigger = _event.target.id;
            let triggerNum = trigger.replace(/\D/g, "");
            let identifyer = parseInt(triggerNum);
            let list = document.getElementById("list");
            let remIt = document.getElementById("lister" + identifyer);
            list.removeChild(remIt);
        }
    }
})(shoppingList06 || (shoppingList06 = {}));
//# sourceMappingURL=datastructurescript.js.map