namespace advanced {
    export class Bird extends Moveable {
        declare position: Position; 
        declare velocity: Position;
        isEating: boolean;
        isFlying: boolean = true;
        color: string;
        target: Position;
    
        
    constructor(_position: Position, _velocity?: Position) {
        super(_position);
        let values: boolean[] = [true, false];
        this.isEating = values[Math.floor(Math.random() * values.length)];
        let color: string = "#" + randomNumber(10, 90) + randomNumber(10, 90) + randomNumber(10, 90);
        this.color = color;
        this.checkAction();
    }    

    checkTargetDistance(): Boolean | void {
        let distanceX: number = this.target.x - this.position.x;
        let distanceY: number = this.target.y - this.position.y;

        if (distanceX < 30 && distanceY < 30) {
            this.isFlying = false;
            this.handleReachTarget();
            return true;
        }

        else {
            return false;
        }
    }

    handleReachTarget(): void {
        this.isFlying = false;
        this.checkAction();
    }

    checkAction(): void {
        if ( this.isFlying == true) {
            this.target = this.getTarget();
            this.velocity = this.getVelocity();
        }

        else {
            let stop: Position = new Position(0, 0);
            this.velocity = stop.copy();
            this.wait();
        }
    }

    wait(): void {
        let waitingTime: number = randomNumber(5000, 10000);
        window.setTimeout(this.newDestination, waitingTime);
    }

    newDestination = (): void => {
        this.target = this.getTarget();
        this.velocity = this.getVelocity();
        this.isFlying = true;
    }

    getVelocity(): Position {
        let x: number = this.target.x - this.position.x;
        let y: number = this.target.y - this.position.y;
        let newVelocity: Position = new Position(x, y);

        return newVelocity.copy();
    }

    getTarget(_position?: Position): Position {
        let target: Vector = targets[Math.floor(Math.random() * targets.length)];
        let targetVector: Position = new Position(target.x, target.y);

        return targetVector.copy();
    }

    isHit(_hotspot: Position): boolean {
        let hitsize: number = 50;
        let difference: Position = new Position(_hotspot.x - this.position.x, _hotspot.y - this.position.y);
        return (Math.abs(difference.x) < hitsize && Math.abs(difference.y) < hitsize);

    }

    move(_step: number): void {
            let offset: Position = new Position(this.velocity.x, this.velocity.y);
            offset.scale(_step);
            this.position.add(offset); 

            this.draw(); 
        }
        draw(): void {
        
            crc2.save(); 
            crc2.translate(this.position.x, this.position.y);
            
            crc2.beginPath();
            crc2.arc(0, 0, 20, 0, 2 * Math.PI);
            crc2.fillStyle = this.color;
            crc2.fill();
            crc2.stroke();
            crc2.strokeStyle = this.color;
            crc2.fillStyle = this.color;
            crc2.lineWidth = 0;
            crc2.closePath();
    
            crc2.beginPath();
            crc2.arc(25, -20, 15, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            crc2.closePath();
    
            crc2.fillStyle = "yellow";
            crc2.beginPath();
            crc2.moveTo(38, -10);
            crc2.lineTo(50, -15);
            crc2.lineTo(40, -25);
            crc2.fill();
            crc2.closePath();
    
            
    
            crc2.restore();
        }
    }
}