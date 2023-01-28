var advanced;
(function (advanced) {
    class Moveable {
        position;
        velocity;
        constructor(_position, _velocity) {
            this.position = _position.copy();
            if (_velocity) {
                this.velocity = _velocity.copy();
            }
            else
                this.velocity = new advanced.Position(0, 0);
        }
    }
    advanced.Moveable = Moveable;
})(advanced || (advanced = {}));
//# sourceMappingURL=Moveable.js.map