var animation;
(function (animation) {
    class Bird {
        position;
        velocity;
        constructor() {
            this.position = new animation.Position(160, 200);
            this.velocity = new animation.Position(0, 0);
            this.velocity.random(100, 250);
        }
        move(_step) {
            let offset = new animation.Position(this.velocity.x, this.velocity.y);
            offset.scale(_step);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += animation.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += animation.crc2.canvas.height;
            if (this.position.y > 380)
                this.position.y = 0;
            this.draw();
        }
        draw() {
            animation.crc2.save();
            animation.crc2.translate(this.position.x, this.position.y);
            let color = "#" + animation.randomNumber(10, 90) + animation.randomNumber(10, 90) + animation.randomNumber(10, 90);
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
    }
    animation.Bird = Bird;
})(animation || (animation = {}));
//# sourceMappingURL=Birds.js.map