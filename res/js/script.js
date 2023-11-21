const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");

/*
//ctx.fillStyle = "orange";
//ctx.fillRect(500, 100, 100, 100);

//ctx.strokeStyle = "blue";
//ctx.strokeRect(100, 20, 200, 300);

ctx.lineWidth = 5;

ctx.fillStyle = "brown";
ctx.fillRect(165, 160, 25, 40)

ctx.fillStyle = "skyblue"; // Okna, čtverec s výplní
ctx.fillRect(165, 110, 25, 25);
ctx.fillRect(210, 110, 25, 25);
ctx.fillRect(210, 160, 25, 25);

ctx.beginPath();
ctx.moveTo(150, 97);
ctx.lineTo(200, 50);
ctx.lineTo(250, 97);
ctx.closePath();
ctx.stroke();

ctx.strokeRect(150, 100, 100, 100); // (X, Y, Width, Height) // Čtverec baráku bez výplně
*/

let image = new Image();
image.src = "./res/img/DVD.png";

let width = 200;
let height = 120;


let x = 0;
let y = 0;
let xVelocity = 1;
let yVelocity = 1;

window.addEventListener("resize", () => {
    resizeCanvas();
});

function resizeCanvas(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.onload = () => {
    resizeCanvas();
    setInterval(() => {
        ctx.fillStyle ="white";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        x += xVelocity;
        y += yVelocity;
    
        if(y + height >= canvas.height || y <=0){
            yVelocity *= -1;
        }
        if(x + width >= canvas.width || x <=0){
            xVelocity *= -1;
        }
    },1);
}
