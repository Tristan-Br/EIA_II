var animation;
(function (animation) {
    window.addEventListener("load", handleLoad);
    let snowflakes = [];
    let birds = [];
    let background;
    let xStep = 0;
    function handleLoad() {
        animation.canvas = document.querySelector("canvas");
        if (!animation.canvas)
            return;
        animation.crc2 = animation.canvas.getContext("2d");
        drawCanvas();
        createSnowflakes();
        createBirds();
        setInterval(update, 50);
    }
    function randomNumber(_min, _max) {
        return Math.floor(Math.random() * _max) + _min;
    }
    animation.randomNumber = randomNumber;
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
        let gradient = animation.crc2.createLinearGradient(0, 0, 0, animation.crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(0.5, "white");
        gradient.addColorStop(1, "HSL(100, 80%, 30%)");
        animation.crc2.fillStyle = gradient;
        animation.crc2.fillRect(0, 0, animation.crc2.canvas.width, animation.crc2.canvas.height);
    }
    function drawSun(_position) {
        let r1 = 30;
        let r2 = 100;
        let gradient = animation.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        animation.crc2.save();
        animation.crc2.translate(_position.x, _position.y);
        animation.crc2.fillStyle = gradient;
        animation.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        animation.crc2.fill();
        animation.crc2.restore();
    }
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        animation.crc2.save();
        animation.crc2.translate(_position.x, _position.y);
        animation.crc2.beginPath();
        animation.crc2.moveTo(0, 0);
        animation.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            animation.crc2.lineTo(x, y);
        } while (x < animation.crc2.canvas.width);
        animation.crc2.lineTo(x, 0);
        animation.crc2.closePath();
        let gradient = animation.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        animation.crc2.fillStyle = gradient;
        animation.crc2.fill();
        animation.crc2.restore();
    }
    function drawTree(_position, _size) {
        animation.crc2.fillStyle = "#B07C4F";
        animation.crc2.fillRect(_position.x, _position.y, 20, -100);
        let nBranches = 10;
        let maxRadius = 60;
        let branch = new Path2D();
        branch.arc(0, 0, maxRadius, 0, 2 * Math.PI);
        animation.crc2.fillStyle = "#2e6930";
        animation.crc2.fillRect(_position.x, _position.y, 20, -_size.y);
        animation.crc2.save();
        animation.crc2.translate(_position.x, _position.y);
        do {
            let y = -_size.y - Math.random() * _size.y;
            let x = Math.random() * _size.x;
            animation.crc2.save();
            animation.crc2.translate(x, y);
            animation.crc2.fill(branch);
            animation.crc2.restore();
            nBranches -= 1;
        } while (nBranches > 0);
        animation.crc2.restore();
        animation.crc2.fillStyle = "#4c3228";
        animation.crc2.fillRect(_position.x, _position.y, 20, -100);
    }
    function drawSnowman(_position) {
        let head = { x: _position.x, y: _position.y - 125 };
        animation.crc2.save();
        animation.crc2.translate(_position.x, _position.y);
        animation.crc2.strokeStyle = "white";
        animation.crc2.fillStyle = "white";
        animation.crc2.lineWidth = 0;
        animation.crc2.beginPath();
        animation.crc2.arc(0, -15, 45, 0, 2 * Math.PI);
        animation.crc2.fill();
        animation.crc2.stroke();
        animation.crc2.closePath();
        animation.crc2.beginPath();
        animation.crc2.arc(0, -74, 35, 0, 2 * Math.PI);
        animation.crc2.fill();
        animation.crc2.stroke();
        animation.crc2.closePath();
        animation.crc2.beginPath();
        animation.crc2.arc(0, -125, 25, 0, 2 * Math.PI);
        animation.crc2.fill();
        animation.crc2.stroke();
        animation.crc2.closePath();
        animation.crc2.restore();
        animation.crc2.save();
        animation.crc2.translate(head.x, head.y + 10);
        animation.crc2.fillStyle = "black";
        animation.crc2.beginPath();
        animation.crc2.arc(-10, -14, 5, 0, 2 * Math.PI);
        animation.crc2.fill();
        animation.crc2.closePath();
        animation.crc2.beginPath();
        animation.crc2.arc(10, -14, 5, 0, 2 * Math.PI);
        animation.crc2.fill();
        animation.crc2.closePath();
        animation.crc2.beginPath();
        animation.crc2.lineWidth = 5;
        animation.crc2.moveTo(-10, -3);
        animation.crc2.lineTo(10, -3);
        animation.crc2.closePath();
        animation.crc2.stroke();
        animation.crc2.restore();
    }
    function drawHouse(_position) {
        animation.crc2.save();
        animation.crc2.translate(50, 450);
        animation.crc2.fillStyle = "#B07C4F";
        animation.crc2.fillRect(0, 0, 80, 80);
        animation.crc2.strokeStyle = "brown";
        animation.crc2.beginPath();
        animation.crc2.moveTo(110, 80);
        animation.crc2.lineTo(-30, 80);
        animation.crc2.lineWidth = 12;
        animation.crc2.stroke();
        animation.crc2.beginPath();
        animation.crc2.moveTo(-10, 0);
        animation.crc2.lineTo(90, 0);
        animation.crc2.lineTo(40, -50);
        animation.crc2.fillStyle = "darkbrown";
        animation.crc2.fill();
        animation.crc2.closePath();
        animation.crc2.beginPath();
        animation.crc2.moveTo(40, 80);
        animation.crc2.lineTo(40, 200);
        animation.crc2.lineWidth = 12;
        animation.crc2.stroke();
        animation.crc2.fillStyle = "black";
        animation.crc2.beginPath();
        animation.crc2.arc(40, 30, 20, 0, 2 * Math.PI);
        animation.crc2.fill();
        animation.crc2.closePath();
        animation.crc2.restore();
    }
    function drawBird(_position) {
        let head = { x: _position.x, y: _position.y };
        animation.crc2.save();
        animation.crc2.translate(_position.x, _position.y);
        let color = "#" + randomNumber(10, 90) + randomNumber(10, 90) + randomNumber(10, 90);
        animation.crc2.strokeStyle = color;
        animation.crc2.fillStyle = color;
        animation.crc2.lineWidth = 0;
        animation.crc2.beginPath();
        animation.crc2.arc(0, 0, 20, 0, 2 * Math.PI);
        animation.crc2.fillStyle = color;
        animation.crc2.fill();
        animation.crc2.stroke();
        animation.crc2.strokeStyle = color;
        animation.crc2.fillStyle = color;
        animation.crc2.lineWidth = 0;
        animation.crc2.closePath();
        animation.crc2.beginPath();
        animation.crc2.arc(25, -20, 15, 0, 2 * Math.PI);
        animation.crc2.fill();
        animation.crc2.stroke();
        animation.crc2.closePath();
        animation.crc2.fillStyle = "yellow";
        animation.crc2.beginPath();
        animation.crc2.moveTo(38, -10);
        animation.crc2.lineTo(50, -15);
        animation.crc2.lineTo(40, -25);
        animation.crc2.fill();
        animation.crc2.closePath();
        animation.crc2.restore();
    }
    function createSnowflakes() {
        for (let index = 0; index < 175; index++) {
            xStep = xStep + 5;
            let snowflake = new animation.Snowflake(1);
            snowflake.create(xStep);
            snowflakes.push(snowflake);
        }
    }
    function createBirds() {
        for (let index = 0; index < 15; index++) {
            xStep = xStep + 5;
            let bird = new animation.Bird();
            birds.push(bird);
        }
    }
    function update() {
        animation.crc2.putImageData(background, 0, 0);
        animation.crc2.fillRect(0, 0, animation.crc2.canvas.width, animation.crc2.canvas.height);
        for (let snowflake of snowflakes) {
            snowflake.move(1 / 50);
        }
        for (let bird of birds) {
            bird.move(1 / 50);
        }
    }
})(animation || (animation = {}));
//# sourceMappingURL=canvas.js.map