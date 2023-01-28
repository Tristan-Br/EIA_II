var advanced;
(function (advanced) {
    class Bird extends advanced.Moveable {
        move(_step) {
            let offset = new advanced.Position(this.velocity.x, this.velocity.y);
            offset.scale(_step);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += advanced.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += advanced.crc2.canvas.height;
            if (this.position.y > 380)
                this.position.y = 0;
            this.draw();
        }
        draw() {
            advanced.crc2.save();
            advanced.crc2.translate(this.position.x, this.position.y);
            let color = "#" + advanced.randomNumber(10, 90) + advanced.randomNumber(10, 90) + advanced.randomNumber(10, 90);
            advanced.crc2.beginPath();
            advanced.crc2.arc(0, 0, 20, 0, 2 * Math.PI);
            advanced.crc2.fillStyle = color;
            advanced.crc2.fill();
            advanced.crc2.stroke();
            advanced.crc2.strokeStyle = color;
            advanced.crc2.fillStyle = color;
            advanced.crc2.lineWidth = 0;
            advanced.crc2.closePath();
            advanced.crc2.beginPath();
            advanced.crc2.arc(25, -20, 15, 0, 2 * Math.PI);
            advanced.crc2.fill();
            advanced.crc2.stroke();
            advanced.crc2.closePath();
            advanced.crc2.fillStyle = "yellow";
            advanced.crc2.beginPath();
            advanced.crc2.moveTo(38, -10);
            advanced.crc2.lineTo(50, -15);
            advanced.crc2.lineTo(40, -25);
            advanced.crc2.fill();
            advanced.crc2.closePath();
            advanced.crc2.restore();
        }
    }
    advanced.Bird = Bird;
})(advanced || (advanced = {}));
//# sourceMappingURL=Birds.js.map