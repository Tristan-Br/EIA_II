var birds;
(function (birds) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        let crc2 = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        drawBackground();
        drawSun({ x: 150, y: 120 });
        function drawBackground() {
            let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
            gradient.addColorStop(0, "lightblue");
            gradient.addColorStop(0.5, "white");
            gradient.addColorStop(1, "HSL(100, 80%, 30%)");
            crc2.fillStyle = gradient;
            crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        }
        function drawSun(_position) {
            console.log("Sun", _position);
            let r1 = 30;
            let r2 = 100;
            let gradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
            gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
            gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
            crc2.save();
            crc2.translate(_position.x, _position.y);
            crc2.fillStyle = gradient;
            crc2.arc(0, 0, r2, 0, 2 * Math.PI);
            crc2.fill();
            crc2.restore();
        }
    }
})(birds || (birds = {}));
//# sourceMappingURL=scriptbird.js.map