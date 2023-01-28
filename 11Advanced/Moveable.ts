namespace advanced {
    export class Moveable {
        position: Position;
        velocity: Position;

        constructor(_position?: Position, _velocity?: Position) {
            this.position = _position.copy();
            if (_velocity) {
            this.velocity = _velocity.copy();
            }
            else
            this.velocity = new Position(0, 0);
        }
    }
}