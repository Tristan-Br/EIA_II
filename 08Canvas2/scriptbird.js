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
        drawMountains({ x: 0, y: 500 }, 75, 250, "grey", "white");
        drawMountains({ x: 0, y: 500 }, 50, 150, "grey", "lightgrey");
        drawTree({ x: randomNumber(10, 2000), y: 530 }, { x: 10, y: 100 });
        drawTree({ x: randomNumber(10, 2000), y: 510 }, { x: 10, y: 100 });
        drawTree({ x: randomNumber(10, 2000), y: 550 }, { x: 10, y: 100 });
        drawTree({ x: randomNumber(10, 2000), y: 510 }, { x: 10, y: 100 });
        drawTree({ x: randomNumber(10, 2000), y: 550 }, { x: 10, y: 100 });
        drawTree({ x: randomNumber(10, 2000), y: 550 }, { x: 10, y: 100 });
        drawTree({ x: randomNumber(10, 2000), y: 520 }, { x: 10, y: 100 });
        drawTree({ x: randomNumber(10, 2000), y: 550 }, { x: 10, y: 100 });
        drawTree({ x: randomNumber(10, 2000), y: 510 }, { x: 10, y: 100 });
        drawTree({ x: randomNumber(10, 2000), y: 550 }, { x: 10, y: 100 });
        drawTree({ x: randomNumber(10, 2000), y: 520 }, { x: 10, y: 100 });
        drawTree({ x: randomNumber(10, 2000), y: 550 }, { x: 10, y: 100 });
        drawTree({ x: randomNumber(10, 2000), y: 530 }, { x: 10, y: 100 });
        drawTree({ x: randomNumber(10, 2000), y: 540 }, { x: 10, y: 100 });
        drawTree({ x: randomNumber(10, 2000), y: 530 }, { x: 10, y: 100 });
        drawTree({ x: randomNumber(10, 2000), y: 530 }, { x: 10, y: 100 });
        drawTree({ x: randomNumber(10, 2000), y: 510 }, { x: 10, y: 100 });
        drawTree({ x: randomNumber(10, 2000), y: 550 }, { x: 10, y: 100 });
        drawTree({ x: randomNumber(10, 2000), y: 510 }, { x: 10, y: 100 });
        drawTree({ x: randomNumber(10, 2000), y: 550 }, { x: 10, y: 100 });
        drawTree({ x: randomNumber(10, 2000), y: 550 }, { x: 10, y: 100 });
        drawTree({ x: randomNumber(10, 2000), y: 520 }, { x: 10, y: 100 });
        drawTree({ x: randomNumber(10, 2000), y: 550 }, { x: 10, y: 100 });
        drawTree({ x: randomNumber(10, 2000), y: 510 }, { x: 10, y: 100 });
        drawTree({ x: randomNumber(10, 2000), y: 550 }, { x: 10, y: 100 });
        drawTree({ x: randomNumber(10, 2000), y: 520 }, { x: 10, y: 100 });
        drawTree({ x: randomNumber(10, 2000), y: 550 }, { x: 10, y: 100 });
        drawTree({ x: randomNumber(10, 2000), y: 530 }, { x: 10, y: 100 });
        drawTree({ x: randomNumber(10, 2000), y: 540 }, { x: 10, y: 100 });
        drawTree({ x: randomNumber(10, 2000), y: 530 }, { x: 10, y: 100 });
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
        function drawTree(_position, _size) {
            crc2.fillStyle = "#4c3228";
            crc2.fillRect(_position.x, _position.y, 20, -100);
            let gradientTree = crc2.createLinearGradient(0, 0, 0, -180);
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
    }
})(birds || (birds = {}));
//# sourceMappingURL=scriptbird.js.map