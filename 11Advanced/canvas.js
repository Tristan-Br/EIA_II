var advanced;
(function (advanced) {
    window.addEventListener("load", handleLoad);
    let moveables = [];
    let background;
    let xStep = 0;
    function handleLoad() {
        advanced.canvas = document.querySelector("canvas");
        if (!advanced.canvas)
            return;
        advanced.crc2 = advanced.canvas.getContext("2d");
        drawCanvas();
        createSnowflakes();
        createBirds();
        setInterval(update, 50);
        advanced.canvas.addEventListener("click", clickCanvas);
    }
    function randomNumber(_min, _max) {
        return Math.floor(Math.random() * _max) + _min;
    }
    advanced.randomNumber = randomNumber;
    function drawCanvas() {
        drawBackground();
        drawSun({ x: randomNumber(50, 300), y: 50 });
        drawMountains({ x: 0, y: 400 }, 75, 250, "grey", "white");
        drawMountains({ x: 0, y: 440 }, 50, 150, "grey", "lightgrey");
        drawTree({ x: 150, y: 500 }, { x: 10, y: 100 });
        drawSnowman({ x: 260, y: 620 });
        drawHouse({ x: 10, y: 10 });
        background = advanced.crc2.getImageData(0, 0, advanced.crc2.canvas.width, advanced.crc2.canvas.height);
    }
    function drawBackground() {
        let gradient = advanced.crc2.createLinearGradient(0, 0, 0, advanced.crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(0.5, "white");
        gradient.addColorStop(1, "HSL(100, 80%, 30%)");
        advanced.crc2.fillStyle = gradient;
        advanced.crc2.fillRect(0, 0, advanced.crc2.canvas.width, advanced.crc2.canvas.height);
    }
    function drawSun(_position) {
        let r1 = 30;
        let r2 = 100;
        let gradient = advanced.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        advanced.crc2.save();
        advanced.crc2.translate(_position.x, _position.y);
        advanced.crc2.fillStyle = gradient;
        advanced.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        advanced.crc2.fill();
        advanced.crc2.restore();
    }
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        advanced.crc2.save();
        advanced.crc2.translate(_position.x, _position.y);
        advanced.crc2.beginPath();
        advanced.crc2.moveTo(0, 0);
        advanced.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            advanced.crc2.lineTo(x, y);
        } while (x < advanced.crc2.canvas.width);
        advanced.crc2.lineTo(x, 0);
        advanced.crc2.closePath();
        let gradient = advanced.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        advanced.crc2.fillStyle = gradient;
        advanced.crc2.fill();
        advanced.crc2.restore();
    }
    function drawTree(_position, _size) {
        advanced.crc2.fillStyle = "#B07C4F";
        advanced.crc2.fillRect(_position.x, _position.y, 20, -100);
        let nBranches = 10;
        let maxRadius = 60;
        let branch = new Path2D();
        branch.arc(0, 0, maxRadius, 0, 2 * Math.PI);
        advanced.crc2.fillStyle = "#2e6930";
        advanced.crc2.fillRect(_position.x, _position.y, 20, -_size.y);
        advanced.crc2.save();
        advanced.crc2.translate(_position.x, _position.y);
        do {
            let y = -_size.y - Math.random() * _size.y;
            let x = Math.random() * _size.x;
            advanced.crc2.save();
            advanced.crc2.translate(x, y);
            advanced.crc2.fill(branch);
            advanced.crc2.restore();
            nBranches -= 1;
        } while (nBranches > 0);
        advanced.crc2.restore();
        advanced.crc2.fillStyle = "#4c3228";
        advanced.crc2.fillRect(_position.x, _position.y, 20, -100);
    }
    function drawSnowman(_position) {
        let head = { x: _position.x, y: _position.y - 125 };
        advanced.crc2.save();
        advanced.crc2.translate(_position.x, _position.y);
        advanced.crc2.strokeStyle = "white";
        advanced.crc2.fillStyle = "white";
        advanced.crc2.lineWidth = 0;
        advanced.crc2.beginPath();
        advanced.crc2.arc(0, -15, 45, 0, 2 * Math.PI);
        advanced.crc2.fill();
        advanced.crc2.stroke();
        advanced.crc2.closePath();
        advanced.crc2.beginPath();
        advanced.crc2.arc(0, -74, 35, 0, 2 * Math.PI);
        advanced.crc2.fill();
        advanced.crc2.stroke();
        advanced.crc2.closePath();
        advanced.crc2.beginPath();
        advanced.crc2.arc(0, -125, 25, 0, 2 * Math.PI);
        advanced.crc2.fill();
        advanced.crc2.stroke();
        advanced.crc2.closePath();
        advanced.crc2.restore();
        advanced.crc2.save();
        advanced.crc2.translate(head.x, head.y + 10);
        advanced.crc2.fillStyle = "black";
        advanced.crc2.beginPath();
        advanced.crc2.arc(-10, -14, 5, 0, 2 * Math.PI);
        advanced.crc2.fill();
        advanced.crc2.closePath();
        advanced.crc2.beginPath();
        advanced.crc2.arc(10, -14, 5, 0, 2 * Math.PI);
        advanced.crc2.fill();
        advanced.crc2.closePath();
        advanced.crc2.beginPath();
        advanced.crc2.lineWidth = 5;
        advanced.crc2.moveTo(-10, -3);
        advanced.crc2.lineTo(10, -3);
        advanced.crc2.closePath();
        advanced.crc2.stroke();
        advanced.crc2.restore();
    }
    function drawHouse(_position) {
        advanced.crc2.save();
        advanced.crc2.translate(50, 450);
        advanced.crc2.fillStyle = "#B07C4F";
        advanced.crc2.fillRect(0, 0, 80, 80);
        advanced.crc2.strokeStyle = "brown";
        advanced.crc2.beginPath();
        advanced.crc2.moveTo(110, 80);
        advanced.crc2.lineTo(-30, 80);
        advanced.crc2.lineWidth = 12;
        advanced.crc2.stroke();
        advanced.crc2.beginPath();
        advanced.crc2.moveTo(-10, 0);
        advanced.crc2.lineTo(90, 0);
        advanced.crc2.lineTo(40, -50);
        advanced.crc2.fillStyle = "darkbrown";
        advanced.crc2.fill();
        advanced.crc2.closePath();
        advanced.crc2.beginPath();
        advanced.crc2.moveTo(40, 80);
        advanced.crc2.lineTo(40, 200);
        advanced.crc2.lineWidth = 12;
        advanced.crc2.stroke();
        advanced.crc2.fillStyle = "black";
        advanced.crc2.beginPath();
        advanced.crc2.arc(40, 30, 20, 0, 2 * Math.PI);
        advanced.crc2.fill();
        advanced.crc2.closePath();
        advanced.crc2.restore();
    }
    /* function drawBird (_position: Vector): void {
        let head: Vector = {x: _position.x, y: _position.y};
        crc2.save();
        crc2.translate(_position.x, _position.y);

        let color: string = "#" + randomNumber(10, 90) + randomNumber(10, 90) + randomNumber(10, 90);
        
        let bird: Bird = new Bird;
    } */
    function createSnowflakes() {
        for (let index = 0; index < 175; index++) {
            xStep = xStep + 2;
            let snowflake = new advanced.Snowflake(1, new advanced.Position(xStep, 0));
            snowflake.create();
            moveables.push(snowflake);
        }
    }
    function createBirds() {
        for (let index = 0; index < 5; index++) {
            let velocity = new advanced.Position(0, 0);
            velocity.random(100, 250);
            let bird = new advanced.Bird(new advanced.Position(160, 200));
            moveables.push(bird);
        }
    }
    function update() {
        advanced.crc2.putImageData(background, 0, 0);
        advanced.crc2.fillRect(0, 0, advanced.crc2.canvas.width, advanced.crc2.canvas.height);
        for (let moveable of moveables) {
            if (moveable instanceof advanced.Snowflake) {
                moveable.move(1 / 50);
            }
            if (moveable instanceof advanced.Bird) {
                moveable.move(1 / 50);
                moveable.checkTargetDistance();
            }
            deleteExpandables();
        }
    }
    function clickCanvas(_event) {
        let hotspot = new advanced.Position(_event.clientX - advanced.crc2.canvas.offsetLeft, _event.clientY - advanced.crc2.canvas.offsetTop);
        let birdHit = getBirdHit(hotspot);
        if (birdHit)
            killBird(birdHit);
        else {
            createBird(hotspot);
        }
    }
    function getBirdHit(_hotspot) {
        for (let moveable of moveables) {
            if (moveable instanceof advanced.Bird && moveable.isHit(_hotspot))
                return moveable;
        }
        return null;
    }
    function killBird(_bird) {
        _bird.expendable = true;
    }
    function createBird(_hotspot) {
        let velocity = new advanced.Position(0, 0);
        velocity.random(100, 250);
        let bird = new advanced.Bird(_hotspot);
        moveables.push(bird);
    }
    function deleteExpandables() {
        for (let i = moveables.length - 1; i >= 0; i--) {
            if (moveables[i].expendable)
                moveables.splice(i, 1);
        }
    }
})(advanced || (advanced = {}));
//# sourceMappingURL=canvas.js.map