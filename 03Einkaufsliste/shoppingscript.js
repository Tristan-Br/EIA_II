var shoppingList;
(function (shoppingList) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        let add = document.querySelector("button#button");
        add.addEventListener("click", logAdd);
        let check = document.querySelector("input#check");
        check.addEventListener("click", logCheck);
        let edit = document.querySelector("button#edit");
        edit.addEventListener("click", logEdit);
        let deletee = document.querySelector("button#deletee");
        deletee.addEventListener("click", logDelete);
    }
    function logAdd() {
        console.log("Item added");
    }
    function logCheck() {
        console.log("Box checked");
    }
    function logEdit() {
        console.log("Item edited");
    }
    function logDelete() {
        console.log("Item deleted");
    }
})(shoppingList || (shoppingList = {}));
//# sourceMappingURL=shoppingscript.js.map