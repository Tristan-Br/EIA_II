var Eventinspector;
(function (Eventinspector) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
        let body = document.querySelector("body");
        body.addEventListener("click", logInfo);
        body.addEventListener("keyup", logInfo);
        let div0 = document.getElementById("div0");
        div0.addEventListener("click", logInfo);
        div0.addEventListener("keyup", logInfo);
        let div1 = document.getElementById("div1");
        div1.addEventListener("click", logInfo);
        div1.addEventListener("keyup", logInfo);
    }
    function setInfoBox(_event) {
        let span = document.querySelector("span");
        let x = _event.clientX;
        let y = _event.clientY;
        let target = _event.target;
        span.style.top = y + 15 + "px";
        span.style.left = x + 10 + "px";
        span.innerHTML = "X: " + x + " Y: " + y + " Objekt: " + target;
    }
    function logInfo(_event) {
        console.log(_event.type);
        console.log(_event.target);
        console.log(_event.currentTarget);
        console.log(_event);
    }
    let button = document.getElementById("button");
    button.addEventListener("click", customEvent);
    function customEvent(_event) {
        let newEvent = new CustomEvent("C-137", { bubbles: true });
        button.dispatchEvent(newEvent);
        document.addEventListener("C-137", log);
    }
    function log(_event) {
        console.log(_event);
    }
})(Eventinspector || (Eventinspector = {}));
//# sourceMappingURL=Eventinspektor.js.map