var advanced;
(function (advanced) {
    class Snowflake extends advanced.Moveable {
        size;
        snowflake;
        gradient;
        constructor(_size, _position) {
            super(_position);
            if (_position)
                this.position = _position;
            else
                this.position = new advanced.Position(0, 0);
            this.velocity = new advanced.Position(0, 0);
            this.velocity.random(100, 250);
            this.size = _size;
        }
        create(_xStep) {
            this.snowflake = new Path2D();
            this.gradient = advanced.crc2.createRadialGradient(0, 0, 0, 0, 0, 10);
            this.snowflake.arc(0, 0, 10, 0, 2 * Math.PI);
            this.gradient.addColorStop(0, "hsla(0, 100%, 100%, 1)");
            this.gradient.addColorStop(1, "hsla(0, 100%, 100%, 0)");
            advanced.crc2.fillStyle = this.gradient;
            if (_xStep) {
                this.position.x = this.position.x + _xStep;
            }
        }
        draw() {
            advanced.crc2.save();
            advanced.crc2.translate(this.position.x, this.position.y);
            advanced.crc2.scale(this.size, this.size);
            advanced.crc2.fill(this.snowflake);
            advanced.crc2.restore();
        }
        move(_step) {
            let offset = new advanced.Position(0, this.velocity.y);
            offset.scale(_step);
            this.position.add(offset);
            if (this.position.y > 677) {
                this.position.y = 0;
            }
            this.draw();
        }
    }
    advanced.Snowflake = Snowflake;
})(advanced || (advanced = {}));
//# sourceMappingURL=snowflakes.js.map