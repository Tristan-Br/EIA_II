var classes;
(function (classes) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        let crc2 = canvas.getContext("2d");
        drawBackground();
        drawSun({ x: randomNumber(50, 300), y: randomNumber(40, 100) });
        drawMountains({ x: 0, y: 400 }, 75, 250, "grey", "white");
        drawMountains({ x: 0, y: 440 }, 50, 150, "grey", "lightgrey");
        drawTree({ x: randomNumber(10, 400), y: 500 }, { x: 10, y: 100 });
        drawSnowman({ x: randomNumber(200, 210), y: 620 });
        drawHouse({ x: 10, y: 10 });
        drawBird({ x: randomNumber(50, 300), y: randomNumber(50, 600) });
        drawBird({ x: randomNumber(50, 300), y: randomNumber(50, 600) });
        drawSnowflakes({ x: canvas.width, y: 800 }, { x: 200, y: 200 });
        function drawBackground() {
            let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
            gradient.addColorStop(0, "lightblue");
            gradient.addColorStop(0.5, "white");
            gradient.addColorStop(1, "HSL(100, 80%, 30%)");
            crc2.fillStyle = gradient;
            crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        }
        function drawSun(_position) {
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
        function drawTree(_position, _size) {
            crc2.fillStyle = "#B07C4F";
            crc2.fillRect(_position.x, _position.y, 20, -100);
            let nBranches = 10;
            let maxRadius = 60;
            let branch = new Path2D();
            branch.arc(0, 0, maxRadius, 0, 2 * Math.PI);
            crc2.fillStyle = "#2e6930";
            crc2.fillRect(_position.x, _position.y, 20, -_size.y);
            crc2.save();
            crc2.translate(_position.x, _position.y);
            do {
                let y = -_size.y - Math.random() * _size.y;
                let x = Math.random() * _size.x;
                crc2.save();
                crc2.translate(x, y);
                crc2.fill(branch);
                crc2.restore();
                nBranches -= 1;
            } while (nBranches > 0);
            crc2.restore();
            crc2.fillStyle = "#4c3228";
            crc2.fillRect(_position.x, _position.y, 20, -100);
        }
        function drawSnowflakes(_position, _size) {
            let snowflakeAmount = 250;
            let snowflakeRadius = 20;
            let snowflake = new Path2D();
            let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, snowflakeRadius);
            snowflake.arc(0, 0, snowflakeRadius, 0, 2 * Math.PI);
            gradient.addColorStop(0, "hsla(0, 100%, 100%, 1)");
            gradient.addColorStop(1, "hsla(0, 100%, 100%, 0)");
            crc2.translate(320, 1000);
            crc2.fillStyle = gradient;
            for (let drawn = 0; drawn < snowflakeAmount; drawn++) {
                crc2.save();
                let x = (Math.random() - 0.5) * 3000;
                let y = -(Math.random() * 1625);
                crc2.translate(x, y);
                crc2.fill(snowflake);
                crc2.restore();
            }
            crc2.restore();
        }
        function drawSnowman(_position) {
            let head = { x: _position.x, y: _position.y - 125 };
            crc2.save();
            crc2.translate(_position.x, _position.y);
            crc2.strokeStyle = "white";
            crc2.fillStyle = "white";
            crc2.lineWidth = 0;
            crc2.beginPath();
            crc2.arc(0, -15, 45, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            crc2.closePath();
            crc2.beginPath();
            crc2.arc(0, -74, 35, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            crc2.closePath();
            crc2.beginPath();
            crc2.arc(0, -125, 25, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            crc2.closePath();
            crc2.restore();
            crc2.save();
            crc2.translate(head.x, head.y + 10);
            crc2.fillStyle = "black";
            crc2.beginPath();
            crc2.arc(-10, -14, 5, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.arc(10, -14, 5, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.lineWidth = 5;
            crc2.moveTo(-10, -3);
            crc2.lineTo(10, -3);
            crc2.closePath();
            crc2.stroke();
            crc2.restore();
        }
        function drawHouse(_position) {
            crc2.save();
            crc2.translate(50, 450);
            crc2.fillStyle = "#B07C4F";
            crc2.fillRect(0, 0, 80, 80);
            crc2.strokeStyle = "brown";
            crc2.beginPath();
            crc2.moveTo(110, 80);
            crc2.lineTo(-30, 80);
            crc2.lineWidth = 12;
            crc2.stroke();
            crc2.beginPath();
            crc2.moveTo(-10, 0);
            crc2.lineTo(90, 0);
            crc2.lineTo(40, -50);
            crc2.fillStyle = "darkbrown";
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.moveTo(40, 80);
            crc2.lineTo(40, 200);
            crc2.lineWidth = 12;
            crc2.stroke();
            crc2.fillStyle = "black";
            crc2.beginPath();
            crc2.arc(40, 30, 20, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
            crc2.restore();
        }
        function drawBird(_position) {
            let head = { x: _position.x, y: _position.y };
            crc2.save();
            crc2.translate(_position.x, _position.y);
            let color = "#" + randomNumber(10, 90) + randomNumber(10, 90) + randomNumber(10, 90);
            crc2.strokeStyle = color;
            crc2.fillStyle = color;
            crc2.lineWidth = 0;
            crc2.beginPath();
            crc2.arc(0, 0, 20, 0, 2 * Math.PI);
            crc2.fillStyle = color;
            crc2.fill();
            crc2.stroke();
            crc2.strokeStyle = color;
            crc2.fillStyle = color;
            crc2.lineWidth = 0;
            crc2.closePath();
            crc2.beginPath();
            crc2.arc(25, -20, 15, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            crc2.closePath();
            crc2.fillStyle = "yellow";
            crc2.beginPath();
            crc2.moveTo(38, -10);
            crc2.lineTo(50, -15);
            crc2.lineTo(40, -25);
            crc2.fill();
            crc2.closePath();
            crc2.restore();
        }
    }
})(classes || (classes = {}));
//# sourceMappingURL=main.js.map