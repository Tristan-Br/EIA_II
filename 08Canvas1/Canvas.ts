namespace Canvas01 {

    window.addEventListener("load", handleLoad);

    function handleLoad (_event: Event): void {

        let canvas: HTMLCanvasElement = document.querySelector("canvas");
        let crc2: CanvasRenderingContext2D = canvas.getContext("2d");

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        crc2.fillStyle = "#FFF";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        crc2.beginPath();
        for (let i: number = 0; i < 100; i++) {
            let x: number = Math.random() * crc2.canvas.width;
            let y: number = Math.random() * crc2.canvas.height;
            crc2.arc(x, y, 20, 0, 2 * Math.PI);
        }

        //Background

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop (0, 'green');
        gradient.addColorStop (1, 'pink');
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);



    }


    }
