namespace Eventinspector {

    window.addEventListener("load", handleLoad);

    let button: HTMLElement;

    function handleLoad(_event: Event): void {
        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);

        let body: HTMLElement = <HTMLElement>document.querySelector("body");

        body.addEventListener("click", logInfo);
        body.addEventListener("keyup", logInfo);

        let div0: HTMLElement = <HTMLElement>document.getElementById("div0");

        div0.addEventListener("click", logInfo);
        div0.addEventListener("keyup", logInfo);

        let div1: HTMLElement = <HTMLElement>document.getElementById("div1");

        div1.addEventListener("click", logInfo);
        div1.addEventListener("keyup", logInfo);

        button = <HTMLElement>document.querySelector("#button");

        button.addEventListener("click", customEvent);
    }

    function setInfoBox(_event: MouseEvent): void {
        let span: HTMLElement = <HTMLElement>document.querySelector("span");
        let x: number = _event.clientX;
        let y: number = _event.clientY;
        let target: HTMLElement = <HTMLElement>_event.target;

        span.style.top = y + 15 + "px";
        span.style.left = x + 10 + "px";
        span.innerHTML = "X: " + x + " Y: " + y + " Objekt: " + target;
    }

    function logInfo(_event: Event): void {
        console.log(_event.type);
        console.log(_event.target);
        console.log(_event.currentTarget);
        console.log(_event);
    }

    function customEvent(_event: Event): void {
        let newEvent: CustomEvent = new CustomEvent("customEvent", { bubbles: true });
        button.dispatchEvent(newEvent);
    }

    function catchEvent(_event: CustomEvent): void {
        console.log("Hallo Erde C-137");
    }
}
