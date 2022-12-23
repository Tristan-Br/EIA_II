namespace animation {
    export class Bird {
        position: Position; 
        velocity: Position;

        constructor() {
            this.position = new Position(160, 200);
            this.velocity = new Position(0, 0);
            this.velocity.random(100, 250);
        }

        move(_step: number): void {
            let offset: Position = new Position(this.velocity.x, this.velocity.y);
            offset.scale(_step);
            this.position.add(offset); 

            if (this.position.x < 0)
                this.position.x += crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += crc2.canvas.height;
            if (this.position.y > 380) 
                this.position.y = 0; 
            this.draw(); 
        }
        draw(): void {
        
            crc2.save(); 
            crc2.translate(this.position.x, this.position.y);
    
            let color: string = "#" + randomNumber(10, 90) + randomNumber(10, 90) + randomNumber(10, 90);
            
    
            crc2.strokeStyle = color;
            crc2.fillStyle = color;
            crc2.lineWidth = 0;
    
            crc2.beginPath();
            crc2.arc(0, 0, 20, 0, 2 * Math.PI);
            crc2.fillStyle = color;
            crc2.fill();
            crc2.stroke();
            crc2.strokeStyle = color;
            crc2.fillStyle = color;
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