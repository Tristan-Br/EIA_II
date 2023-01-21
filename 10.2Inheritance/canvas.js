var polymorphie;
(function (polymorphie) {
    window.addEventListener("load", handleLoad);
    let moveables = [];
    let background;
    let xStep = 0;
    function handleLoad() {
        polymorphie.canvas = document.querySelector("canvas");
        if (!polymorphie.canvas)
            return;
        polymorphie.crc2 = polymorphie.canvas.getContext("2d");
        drawCanvas();
        createSnowflakes();
        createBirds();
        setInterval(update, 50);
    }
    function randomNumber(_min, _max) {
        return Math.floor(Math.random() * _max) + _min;
    }
    polymorphie.randomNumber = randomNumber;
    function drawCanvas() {
        drawBackground();
        drawSun({ x: randomNumber(50, 300), y: 50 });
        drawMountains({ x: 0, y: 400 }, 75, 250, "grey", "white");
        drawMountains({ x: 0, y: 440 }, 50, 150, "grey", "lightgrey");
        drawTree({ x: randomNumber(10, 400), y: 500 }, { x: 10, y: 100 });
        drawSnowman({ x: 260, y: 620 });
        drawHouse({ x: 10, y: 10 });
        drawBird({ x: randomNumber(50, 300), y: randomNumber(50, 600) });
    }
    function drawBackground() {
        let gradient = polymorphie.crc2.createLinearGradient(0, 0, 0, polymorphie.crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(0.5, "white");
        gradient.addColorStop(1, "HSL(100, 80%, 30%)");
        polymorphie.crc2.fillStyle = gradient;
        polymorphie.crc2.fillRect(0, 0, polymorphie.crc2.canvas.width, polymorphie.crc2.canvas.height);
    }
    function drawSun(_position) {
        let r1 = 30;
        let r2 = 100;
        let gradient = polymorphie.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        polymorphie.crc2.save();
        polymorphie.crc2.translate(_position.x, _position.y);
        polymorphie.crc2.fillStyle = gradient;
        polymorphie.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        polymorphie.crc2.fill();
        polymorphie.crc2.restore();
    }
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        polymorphie.crc2.save();
        polymorphie.crc2.translate(_position.x, _position.y);
        polymorphie.crc2.beginPath();
        polymorphie.crc2.moveTo(0, 0);
        polymorphie.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            polymorphie.crc2.lineTo(x, y);
        } while (x < polymorphie.crc2.canvas.width);
        polymorphie.crc2.lineTo(x, 0);
        polymorphie.crc2.closePath();
        let gradient = polymorphie.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        polymorphie.crc2.fillStyle = gradient;
        polymorphie.crc2.fill();
        polymorphie.crc2.restore();
    }
    function drawTree(_position, _size) {
        polymorphie.crc2.fillStyle = "#B07C4F";
        polymorphie.crc2.fillRect(_position.x, _position.y, 20, -100);
        let nBranches = 10;
        let maxRadius = 60;
        let branch = new Path2D();
        branch.arc(0, 0, maxRadius, 0, 2 * Math.PI);
        polymorphie.crc2.fillStyle = "#2e6930";
        polymorphie.crc2.fillRect(_position.x, _position.y, 20, -_size.y);
        polymorphie.crc2.save();
        polymorphie.crc2.translate(_position.x, _position.y);
        do {
            let y = -_size.y - Math.random() * _size.y;
            let x = Math.random() * _size.x;
            polymorphie.crc2.save();
            polymorphie.crc2.translate(x, y);
            polymorphie.crc2.fill(branch);
            polymorphie.crc2.restore();
            nBranches -= 1;
        } while (nBranches > 0);
        polymorphie.crc2.restore();
        polymorphie.crc2.fillStyle = "#4c3228";
        polymorphie.crc2.fillRect(_position.x, _position.y, 20, -100);
    }
    function drawSnowman(_position) {
        let head = { x: _position.x, y: _position.y - 125 };
        polymorphie.crc2.save();
        polymorphie.crc2.translate(_position.x, _position.y);
        polymorphie.crc2.strokeStyle = "white";
        polymorphie.crc2.fillStyle = "white";
        polymorphie.crc2.lineWidth = 0;
        polymorphie.crc2.beginPath();
        polymorphie.crc2.arc(0, -15, 45, 0, 2 * Math.PI);
        polymorphie.crc2.fill();
        polymorphie.crc2.stroke();
        polymorphie.crc2.closePath();
        polymorphie.crc2.beginPath();
        polymorphie.crc2.arc(0, -74, 35, 0, 2 * Math.PI);
        polymorphie.crc2.fill();
        polymorphie.crc2.stroke();
        polymorphie.crc2.closePath();
        polymorphie.crc2.beginPath();
        polymorphie.crc2.arc(0, -125, 25, 0, 2 * Math.PI);
        polymorphie.crc2.fill();
        polymorphie.crc2.stroke();
        polymorphie.crc2.closePath();
        polymorphie.crc2.restore();
        polymorphie.crc2.save();
        polymorphie.crc2.translate(head.x, head.y + 10);
        polymorphie.crc2.fillStyle = "black";
        polymorphie.crc2.beginPath();
        polymorphie.crc2.arc(-10, -14, 5, 0, 2 * Math.PI);
        polymorphie.crc2.fill();
        polymorphie.crc2.closePath();
        polymorphie.crc2.beginPath();
        polymorphie.crc2.arc(10, -14, 5, 0, 2 * Math.PI);
        polymorphie.crc2.fill();
        polymorphie.crc2.closePath();
        polymorphie.crc2.beginPath();
        polymorphie.crc2.lineWidth = 5;
        polymorphie.crc2.moveTo(-10, -3);
        polymorphie.crc2.lineTo(10, -3);
        polymorphie.crc2.closePath();
        polymorphie.crc2.stroke();
        polymorphie.crc2.restore();
    }
    function drawHouse(_position) {
        polymorphie.crc2.save();
        polymorphie.crc2.translate(50, 450);
        polymorphie.crc2.fillStyle = "#B07C4F";
        polymorphie.crc2.fillRect(0, 0, 80, 80);
        polymorphie.crc2.strokeStyle = "brown";
        polymorphie.crc2.beginPath();
        polymorphie.crc2.moveTo(110, 80);
        polymorphie.crc2.lineTo(-30, 80);
        polymorphie.crc2.lineWidth = 12;
        polymorphie.crc2.stroke();
        polymorphie.crc2.beginPath();
        polymorphie.crc2.moveTo(-10, 0);
        polymorphie.crc2.lineTo(90, 0);
        polymorphie.crc2.lineTo(40, -50);
        polymorphie.crc2.fillStyle = "darkbrown";
        polymorphie.crc2.fill();
        polymorphie.crc2.closePath();
        polymorphie.crc2.beginPath();
        polymorphie.crc2.moveTo(40, 80);
        polymorphie.crc2.lineTo(40, 200);
        polymorphie.crc2.lineWidth = 12;
        polymorphie.crc2.stroke();
        polymorphie.crc2.fillStyle = "black";
        polymorphie.crc2.beginPath();
        polymorphie.crc2.arc(40, 30, 20, 0, 2 * Math.PI);
        polymorphie.crc2.fill();
        polymorphie.crc2.closePath();
        polymorphie.crc2.restore();
    }
    function drawBird(_position) {
        let head = { x: _position.x, y: _position.y };
        polymorphie.crc2.save();
        polymorphie.crc2.translate(_position.x, _position.y);
        let color = "#" + randomNumber(10, 90) + randomNumber(10, 90) + randomNumber(10, 90);
        polymorphie.crc2.strokeStyle = color;
        polymorphie.crc2.fillStyle = color;
        polymorphie.crc2.lineWidth = 0;
        polymorphie.crc2.beginPath();
        polymorphie.crc2.arc(0, 0, 20, 0, 2 * Math.PI);
        polymorphie.crc2.fillStyle = color;
        polymorphie.crc2.fill();
        polymorphie.crc2.stroke();
        polymorphie.crc2.strokeStyle = color;
        polymorphie.crc2.fillStyle = color;
        polymorphie.crc2.lineWidth = 0;
        polymorphie.crc2.closePath();
        polymorphie.crc2.beginPath();
        polymorphie.crc2.arc(25, -20, 15, 0, 2 * Math.PI);
        polymorphie.crc2.fill();
        polymorphie.crc2.stroke();
        polymorphie.crc2.closePath();
        polymorphie.crc2.fillStyle = "yellow";
        polymorphie.crc2.beginPath();
        polymorphie.crc2.moveTo(38, -10);
        polymorphie.crc2.lineTo(50, -15);
        polymorphie.crc2.lineTo(40, -25);
        polymorphie.crc2.fill();
        polymorphie.crc2.closePath();
        polymorphie.crc2.restore();
    }
    function createSnowflakes() {
        for (let index = 0; index < 175; index++) {
            xStep = xStep + 2;
            let snowflake = new polymorphie.Snowflake(1, new polymorphie.Position(xStep, 0));
            snowflake.create();
            moveables.push(snowflake);
        }
    }
    function createBirds() {
        for (let index = 0; index < 25; index++) {
            let velocity = new polymorphie.Position(0, 0);
            velocity.random(100, 250);
            let bird = new polymorphie.Bird(new polymorphie.Position(160, 200), velocity);
            moveables.push(bird);
        }
    }
    function update() {
        polymorphie.crc2.putImageData(background, 0, 0);
        polymorphie.crc2.fillRect(0, 0, polymorphie.crc2.canvas.width, polymorphie.crc2.canvas.height);
        for (let Moveable of moveables) {
            if (Moveable instanceof polymorphie.Snowflake) {
                Moveable.move(1 / 50);
            }
            if (Moveable instanceof polymorphie.Bird) {
                Moveable.move(1 / 50);
            }
        }
    }
})(polymorphie || (polymorphie = {}));
//# sourceMappingURL=canvas.js.map