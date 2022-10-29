namespace shoppingList {
    window.addEventListener("load", handleLoad);

    function handleLoad(): void {
        let add: HTMLButtonElement = document.querySelector("button#button");
        add.addEventListener("click", logAdd);

        let check: HTMLElement = document.querySelector("input#check");
        check.addEventListener("click", logCheck);

        let edit: HTMLButtonElement = document.querySelector("button#edit");
        edit.addEventListener("click", logEdit);

        let deletee: HTMLButtonElement = document.querySelector("button#deletee");
        deletee.addEventListener("click", logDelete);
    }

    function logAdd(): void {
        console.log("Item added");
    }

    function logCheck(): void {
        console.log("Box checked");
    }

    function logEdit(): void {
        console.log("Item edited");
    }

    function logDelete(): void {
        console.log("Item deleted");
    }
}