namespace Canvas01 {

    window.addEventListener("load", handleLoad);

    function handleLoad (_event: Event): void {

        let canvas: HTMLCanvasElement = document.querySelector("canvas");
        let crc2: CanvasRenderingContext2D = canvas.getContext("2d");

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        crc2.fillStyle = "#FFF";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        //Background

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop (0, "#000");
        gradient.addColorStop(1, "hsl(" + randomNumber(0, 400) + ", 100%, 50%)");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);


        function randomNumber(_min: number, _max: number): number {
                return Math.floor(Math.random() * _max) + _min;
            }  


        //Grid

        crc2.beginPath();
        for ( let i: number = 0; i <= 2000; i = i + randomNumber(10, 100) ) {

            crc2.moveTo(i, 500);
            crc2.lineTo(i, 2000);

            crc2.strokeStyle = "#" + randomNumber(10, 20) + randomNumber(4, 7) + randomNumber(0, 9) + randomNumber(0, 9) + randomNumber(0, 9);
            crc2.stroke();
            crc2.closePath();
            
            
        }
        
        
        //Horizon

        crc2.beginPath();
        crc2.moveTo(0, 500);
        crc2.lineTo(2000, 500);
        crc2.strokeStyle = "#" + randomNumber(10, 20) + randomNumber(4, 7) + randomNumber(0, 9) + randomNumber(0, 9) + randomNumber(0, 9);
        crc2.stroke();

        
        //Sun

        let x: number = randomNumber(200, 1300);
        let y: number = randomNumber(100, 300);

        crc2.beginPath();
        crc2.arc(x, y, 200, 0, 2 * Math.PI);
        crc2.scale(10, 10);
        crc2.fillStyle = "#" + "FF" + randomNumber(0, 9) + randomNumber(0, 9) + randomNumber(0, 9) + randomNumber(0, 9);
        crc2.fill();

        
        

    

        

        
        
        

    }

}


    

    
