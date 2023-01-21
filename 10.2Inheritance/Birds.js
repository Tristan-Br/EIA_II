var polymorphie;
(function (polymorphie) {
    class Bird extends polymorphie.Moveable {
        move(_step) {
            let offset = new polymorphie.Position(this.velocity.x, this.velocity.y);
            offset.scale(_step);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += polymorphie.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += polymorphie.crc2.canvas.height;
            if (this.position.y > 380)
                this.position.y = 0;
            this.draw();
        }
        draw() {
            polymorphie.crc2.save();
            polymorphie.crc2.translate(this.position.x, this.position.y);
            let color = "#" + polymorphie.randomNumber(10, 90) + polymorphie.randomNumber(10, 90) + polymorphie.randomNumber(10, 90);
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
    }
    polymorphie.Bird = Bird;
})(polymorphie || (polymorphie = {}));
//# sourceMappingURL=Birds.js.map