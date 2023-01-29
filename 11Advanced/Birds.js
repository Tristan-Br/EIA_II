var advanced;
(function (advanced) {
    class Bird extends advanced.Moveable {
        isEating;
        isFlying = true;
        color;
        target;
        constructor(_position, _velocity) {
            super(_position);
            let values = [true, false];
            this.isEating = values[Math.floor(Math.random() * values.length)];
            let color = "#" + advanced.randomNumber(10, 90) + advanced.randomNumber(10, 90) + advanced.randomNumber(10, 90);
            this.color = color;
            this.checkAction();
        }
        checkTargetDistance() {
            let distanceX = this.target.x - this.position.x;
            let distanceY = this.target.y - this.position.y;
            if (distanceX < 30 && distanceY < 30) {
                this.isFlying = false;
                this.handleReachTarget();
                return true;
            }
            else {
                return false;
            }
        }
        handleReachTarget() {
            this.isFlying = false;
            this.checkAction();
        }
        checkAction() {
            if (this.isFlying == true) {
                this.target = this.getTarget();
                this.velocity = this.getVelocity();
            }
            else {
                let stop = new advanced.Position(0, 0);
                this.velocity = stop.copy();
                this.wait();
            }
        }
        wait() {
            let waitingTime = advanced.randomNumber(5000, 10000);
            window.setTimeout(this.newDestination, waitingTime);
        }
        newDestination = () => {
            this.target = this.getTarget();
            this.velocity = this.getVelocity();
            this.isFlying = true;
        };
        getVelocity() {
            let x = this.target.x - this.position.x;
            let y = this.target.y - this.position.y;
            let newVelocity = new advanced.Position(x, y);
            return newVelocity.copy();
        }
        getTarget(_position) {
            let target = advanced.targets[Math.floor(Math.random() * advanced.targets.length)];
            let targetVector = new advanced.Position(target.x, target.y);
            return targetVector.copy();
        }
        isHit(_hotspot) {
            let hitsize = 50;
            let difference = new advanced.Position(_hotspot.x - this.position.x, _hotspot.y - this.position.y);
            return (Math.abs(difference.x) < hitsize && Math.abs(difference.y) < hitsize);
        }
        move(_step) {
            let offset = new advanced.Position(this.velocity.x, this.velocity.y);
            offset.scale(_step);
            this.position.add(offset);
            this.draw();
        }
        draw() {
            advanced.crc2.save();
            advanced.crc2.translate(this.position.x, this.position.y);
            advanced.crc2.beginPath();
            advanced.crc2.arc(0, 0, 20, 0, 2 * Math.PI);
            advanced.crc2.fillStyle = this.color;
            advanced.crc2.fill();
            advanced.crc2.stroke();
            advanced.crc2.strokeStyle = this.color;
            advanced.crc2.fillStyle = this.color;
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