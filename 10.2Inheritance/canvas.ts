namespace polymorphie {
    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;   
    export let canvas: HTMLCanvasElement | null; 

    let snowflakes: Snowflake[] = []; 
    let birds: Bird[] = [];
    let background: ImageData; 
    let xStep: number = 0; 

    export interface Vector {
        x: number;
        y: number;

    
    }

    function handleLoad(): void {
        canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        drawCanvas();
        createSnowflakes();
        createBirds();
        setInterval(update, 50); 
    }

    export function randomNumber(_min: number, _max: number): number {
        return Math.floor(Math.random() * _max) + _min;
    }  

    function drawCanvas(): void {
        drawBackground();
        drawSun({ x: randomNumber(50, 300), y: 50 });
        drawMountains({ x: 0, y: 400 }, 75, 250, "grey", "white");
        drawMountains({ x: 0, y: 440 }, 50, 150, "grey", "lightgrey");
        drawTree({ x: randomNumber(10, 400), y: 500 }, { x: 10, y: 100 });
        drawSnowman({x: 260, y: 620});
        drawHouse({x: 10, y: 10});

        drawBird({ x: randomNumber(50, 300), y: randomNumber(50, 600) });
    
        
    }

    function drawBackground (): void {
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(0.5, "white");
        gradient.addColorStop(1, "HSL(100, 80%, 30%)");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }

    function drawSun(_position: Vector): void {

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

    function drawTree(_position: Vector, _size: Vector): void {

        crc2.fillStyle = "#B07C4F";
        crc2.fillRect(_position.x, _position.y, 20, -100);


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

        crc2.translate(50, 450);

        crc2.fillStyle = "#B07C4F";
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

    function drawBird (_position: Vector): void {
        let head: Vector = {x: _position.x, y: _position.y}; 
        crc2.save(); 
        crc2.translate(_position.x, _position.y);

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

    function createSnowflakes(): void {
        for (let index: number = 0; index < 175; index++) {
            xStep = xStep + 5; 
            let snowflake: Snowflake = new Snowflake(1); 
            snowflake.create(xStep); 
            snowflakes.push(snowflake); 
        }
    }

    function createBirds(): void {
        for (let index: number = 0; index < 15; index++) {
            xStep = xStep + 5; 
            let bird: Bird = new Bird(); 
            birds.push(bird); 
        }
    }

    function update(): void {
        crc2.putImageData(background, 0, 0); 
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        for (let snowflake of snowflakes) {
            snowflake.move(1 / 50); 
        }
        for (let bird of birds) {
            bird.move(1 / 50);
        }
    }

}