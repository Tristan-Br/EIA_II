var polymorphie;
(function (polymorphie) {
    class Moveable {
        position;
        velocity;
        constructor(_position, _velocity) {
            this.position = _position.copy();
            if (_velocity) {
                this.velocity = _velocity.copy();
            }
            else
                this.velocity = new polymorphie.Position(0, 0);
        }
    }
    polymorphie.Moveable = Moveable;
})(polymorphie || (polymorphie = {}));
//# sourceMappingURL=polymorphie.js.map