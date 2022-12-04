var birds;
(function (birds) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        let crc2 = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        drawBackground();
        drawSun({ x: randomNumber(100, 1650), y: randomNumber(40, 100) });
        drawMountains({ x: 0, y: 300 }, 75, 200, "grey", "white");
        drawMountains({ x: 0, y: 300 }, 50, 150, "grey", "lightgrey");
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
        function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
            console.log("Mountains");
            let stepMin = 50;
            let stepMax = 150;
            let x = 0;
            crc2.save();
            crc2.translate(_position.x, _position.y);
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.lineTo(0, -_max);
            do {
                x += stepMin + Math.random() * (stepMax - stepMin);
                let y = -_min - Math.random() * (_max - _min);
                crc2.lineTo(x, y);
            } while (x < crc2.canvas.width);
            crc2.lineTo(x, 0);
            crc2.closePath();
            let gradient = crc2.createLinearGradient(0, 0, 0, -_max);
            gradient.addColorStop(0, _colorLow);
            gradient.addColorStop(0.7, _colorHigh);
            crc2.fillStyle = gradient;
            crc2.fill();
            crc2.restore();
        }
        function randomNumber(_min, _max) {
            return Math.floor(Math.random() * _max) + _min;
        }
    }
})(birds || (birds = {}));
//# sourceMappingURL=scriptbird.js.map