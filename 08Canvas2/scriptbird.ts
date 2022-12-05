 namespace birds {
    window.addEventListener("load", handleLoad);
    interface Vector {
        x: number;
        y: number;

    
    }


    function handleLoad(_event: Event): void {

    let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
    let crc2: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    drawBackground();
    drawSun({ x: randomNumber(100, 1650), y: randomNumber(40, 100) });
    drawMountains({ x: 0, y: 500 }, 75, 250, "grey", "white");
    drawMountains({ x: 0, y: 500 }, 50, 150, "grey", "lightgrey");
    drawTree({ x: randomNumber(10, 2000), y: 530 }, { x: 10, y: 100 });
    drawTree({ x: randomNumber(10, 2000), y: 510 }, { x: 10, y: 100 });
    drawTree({ x: randomNumber(10, 2000), y: 550 }, { x: 10, y: 100 });
    drawTree({ x: randomNumber(10, 2000), y: 510 }, { x: 10, y: 100 });
    drawTree({ x: randomNumber(10, 2000), y: 550 }, { x: 10, y: 100 });
    drawTree({ x: randomNumber(10, 2000), y: 550 }, { x: 10, y: 100 });
    drawTree({ x: randomNumber(10, 2000), y: 520 }, { x: 10, y: 100 });
    drawTree({ x: randomNumber(10, 2000), y: 550 }, { x: 10, y: 100 });
    drawTree({ x: randomNumber(10, 2000), y: 510 }, { x: 10, y: 100 });
    drawTree({ x: randomNumber(10, 2000), y: 550 }, { x: 10, y: 100 });
    drawTree({ x: randomNumber(10, 2000), y: 520 }, { x: 10, y: 100 });
    drawTree({ x: randomNumber(10, 2000), y: 550 }, { x: 10, y: 100 });
    drawTree({ x: randomNumber(10, 2000), y: 530 }, { x: 10, y: 100 });
    drawTree({ x: randomNumber(10, 2000), y: 540 }, { x: 10, y: 100 });
    drawTree({ x: randomNumber(10, 2000), y: 530 }, { x: 10, y: 100 });
    drawTree({ x: randomNumber(10, 2000), y: 530 }, { x: 10, y: 100 });
    drawTree({ x: randomNumber(10, 2000), y: 510 }, { x: 10, y: 100 });
    drawTree({ x: randomNumber(10, 2000), y: 550 }, { x: 10, y: 100 });
    drawTree({ x: randomNumber(10, 2000), y: 510 }, { x: 10, y: 100 });
    drawTree({ x: randomNumber(10, 2000), y: 550 }, { x: 10, y: 100 });
    drawTree({ x: randomNumber(10, 2000), y: 550 }, { x: 10, y: 100 });
    drawTree({ x: randomNumber(10, 2000), y: 520 }, { x: 10, y: 100 });
    drawTree({ x: randomNumber(10, 2000), y: 550 }, { x: 10, y: 100 });
    drawTree({ x: randomNumber(10, 2000), y: 510 }, { x: 10, y: 100 });
    drawTree({ x: randomNumber(10, 2000), y: 550 }, { x: 10, y: 100 });
    drawTree({ x: randomNumber(10, 2000), y: 520 }, { x: 10, y: 100 });
    drawTree({ x: randomNumber(10, 2000), y: 550 }, { x: 10, y: 100 });
    drawTree({ x: randomNumber(10, 2000), y: 530 }, { x: 10, y: 100 });
    drawTree({ x: randomNumber(10, 2000), y: 540 }, { x: 10, y: 100 });
    drawTree({ x: randomNumber(10, 2000), y: 530 }, { x: 10, y: 100 });
    drawSnowman({x: randomNumber(100, 1000), y: 620});
    drawHouse({x: 500, y: 620});
    drawSnowflakes({ x: canvas.width, y: 800 }, { x: 200, y: 200 });

    function drawBackground (): void {
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(0.5, "white");
        gradient.addColorStop(1, "HSL(100, 80%, 30%)");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }


    function drawSun(_position: Vector): void {
        console.log("Sun", _position);



        let r1: number = 30;
        let r2: number = 100;
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);

        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();

    }

    function drawMountains(_position: Vector, _min: number, _max: number, _colorLow: string, _colorHigh: string): void {
        console.log("Mountains");

        let stepMin: number = 50;
        let stepMax: number = 150;
        let x: number = 0;

        crc2.save();
        crc2.translate(_position.x, _position.y);

        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);

        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y: number = -_min - Math.random() * (_max - _min);

            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);

        crc2.lineTo(x, 0);
        crc2.closePath();

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);

        crc2.fillStyle = gradient;
        crc2.fill();

        crc2.restore();
    }

    function randomNumber(_min: number, _max: number): number {
        return Math.floor(Math.random() * _max) + _min;
    }  

    function drawTree(_position: Vector, _size: Vector): void {

        crc2.fillStyle = "#4c3228";
        crc2.fillRect(_position.x, _position.y, 20, -100);

        let gradientTree: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -180);

        let nBranches: number = 10;
        let maxRadius: number = 60;
        let branch: Path2D = new Path2D();
        branch.arc(0, 0, maxRadius, 0, 2 * Math.PI);
        crc2.fillStyle = "#2e6930";
        crc2.fillRect(_position.x, _position.y, 20, -_size.y);


        crc2.save();
        crc2.translate(_position.x, _position.y);

        do {
            let y: number = -_size.y - Math.random() * _size.y;
            let x: number = Math.random() * _size.x;
            crc2.save();
            crc2.translate(x, y);
            crc2.fill(branch);
            crc2.restore();
            nBranches -= 1;
        } while (nBranches > 0);



        crc2.restore();


        crc2.fillStyle = "#4c3228";
        crc2.fillRect(_position.x, _position.y, 20, -100);



    }

    function drawSnowflakes(_position: Vector, _size: Vector): void {
        let snowflakeAmount: number = 250;
        let snowflakeRadius: number = 20;
        let snowflake: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, snowflakeRadius);

        snowflake.arc(0, 0, snowflakeRadius, 0, 2 * Math.PI);
        gradient.addColorStop(0, "hsla(0, 100%, 100%, 1)");
        gradient.addColorStop(1, "hsla(0, 100%, 100%, 0)");

        crc2.translate(320, 1000);
        crc2.fillStyle = gradient;

        for (let drawn: number = 0; drawn < snowflakeAmount; drawn++) {
            crc2.save();
            let x: number = (Math.random() - 0.5) * 3000;
            let y: number = - (Math.random() * 1625);
            crc2.translate(x, y);
            crc2.fill(snowflake);
            crc2.restore();
        }
        crc2.restore();
    }
     
    function drawSnowman(_position: Vector): void {
        let head: Vector = {x: _position.x, y: _position.y - 125}; 
        crc2.save(); 
        crc2.translate(_position.x, _position.y);

        crc2.strokeStyle = "white";
        crc2.fillStyle = "white";
        crc2.lineWidth = 0;

        crc2.beginPath();
        crc2.arc(0, -15, 45, 0, 2 * Math.PI);
        crc2.fill();
        crc2.stroke();
        crc2.closePath();

        crc2.beginPath();
        crc2.arc(0, -74, 35, 0, 2 * Math.PI);
        crc2.fill();
        crc2.stroke();
        crc2.closePath();

        crc2.beginPath();
        crc2.arc(0, -125, 25, 0, 2 * Math.PI);
        crc2.fill();
        crc2.stroke();
        crc2.closePath();

        crc2.restore();

        crc2.save(); 
        
        crc2.translate(head.x, head.y + 10); 

        crc2.fillStyle = "black";
        crc2.beginPath();
        crc2.arc(-10, -14, 5, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.arc(10, -14, 5, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath(); 

        crc2.beginPath();
        crc2.lineWidth = 5;
        crc2.moveTo(-10, -3);
        crc2.lineTo(10, -3); 
        crc2.closePath(); 
        crc2.stroke(); 

        crc2.restore();
        }

    function drawHouse (_position: Vector): void {
        crc2.save();

        crc2.translate(1200, 600);

        crc2.fillStyle = "darkbrown";
        crc2.fillRect(0, 0, 80, 80);

        crc2.strokeStyle = "brown";
        crc2.beginPath();
        crc2.moveTo(110, 80);
        crc2.lineTo(-30, 80);
        crc2.lineWidth = 12;
        crc2.stroke();

        crc2.beginPath();
        crc2.moveTo(-10, 0);
        crc2.lineTo(90, 0);
        crc2.lineTo(40, -50);
        crc2.fillStyle = "darkbrown";
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.moveTo(40, 80);
        crc2.lineTo(40, 200);
        crc2.lineWidth = 12;
        crc2.stroke();

        crc2.fillStyle = "black";
        crc2.beginPath();
        crc2.arc(40, 30, 20, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();

        crc2.restore();
}

}
    
}
    