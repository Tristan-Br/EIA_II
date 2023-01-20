var polymorphie;
(function (polymorphie) {
    class Snowflake extends polymorphie.Moves {
        size;
        snowflake;
        gradient;
        constructor(_size, _position) {
            super(_position);
            if (_position)
                this.position = _position;
            else
                this.position = new polymorphie.Position(0, 0);
            this.velocity = new polymorphie.Position(0, 0);
            this.velocity.random(100, 250);
            this.size = _size;
        }
        create(_xStep) {
            this.snowflake = new Path2D();
            this.gradient = polymorphie.crc2.createRadialGradient(0, 0, 0, 0, 0, 10);
            this.snowflake.arc(0, 0, 10, 0, 2 * Math.PI);
            this.gradient.addColorStop(0, "hsla(0, 100%, 100%, 1)");
            this.gradient.addColorStop(1, "hsla(0, 100%, 100%, 0)");
            polymorphie.crc2.fillStyle = this.gradient;
            if (_xStep) {
                this.position.x = this.position.x + _xStep;
            }
        }
        draw() {
            polymorphie.crc2.save();
            polymorphie.crc2.translate(this.position.x, this.position.y);
            polymorphie.crc2.scale(this.size, this.size);
            polymorphie.crc2.fill(this.snowflake);
            polymorphie.crc2.restore();
        }
        move(_step) {
            let offset = new polymorphie.Position(0, this.velocity.y);
            offset.scale(_step);
            this.position.add(offset);
            if (this.position.y > 677) {
                this.position.y = 0;
            }
            this.draw();
        }
    }
    polymorphie.Snowflake = Snowflake;
})(polymorphie || (polymorphie = {}));
//# sourceMappingURL=snowflakes.js.map