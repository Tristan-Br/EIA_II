namespace advanced {
    export abstract class Moveable {
        position: Position;
        velocity: Position;
        expendable: boolean = false;

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