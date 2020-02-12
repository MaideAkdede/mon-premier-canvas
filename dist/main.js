const canvasElt = document.querySelector("#world");
resizeCanvas();
window.onresize = resizeCanvas;
function resizeCanvas(){
    canvasElt.width = window.innerWidth;
    canvasElt.height = window.innerHeight;
    draw();
}
function draw() {
    let w = window.innerWidth;
    let h = window.innerHeight;
    if(canvasElt.getContext){
        console.log('lié');
        const ctx = canvasElt.getContext("2d");
        //BACKGROUND-COLOR --- COULEUR DE FOND
        ctx.fillStyle = "hsl(60, 73%, 94%)";
        ctx.fillRect(0, 0, w, h);
        // FRAME --- CADRE
        let wSky = 400;
        let hSky = 300;

        let wFrame = wSky + 50;
        let hFrame = hSky + 50;
        ctx.fillStyle = "hsl(27, 34%, 34%)";
        ctx.fillRect( (w/2)-(wFrame/2) , (h/2)-(hFrame/2), wFrame, hFrame);
        // SKY --- CIEL DU CADRE
        let sGradient = ctx.createLinearGradient((w/2)-(wSky/2), (h/2)-(hSky/2), (w/2)-(wSky/2), (h/2)+(hSky/4) );
        sGradient.addColorStop(0, 'hsl(193, 100%, 50%)');
        sGradient.addColorStop(0.25, 'white');
        sGradient.addColorStop(0.60, 'hsl(54, 100%, 50%)');
        sGradient.addColorStop(1, 'hsl(0, 100%, 60%)');
        ctx.fillStyle = sGradient;
        ctx.fillRect( (w/2)-(wSky/2), (h/2)-(hSky/2), wSky, hSky);
        // GRASS --- PELOUSE
        let pGradient = ctx.createLinearGradient((w/2)-(wSky/2), (h/2)+(hSky/4), (w/2)-(wSky/2), (h/2)+((hSky/4)*2) );
        pGradient.addColorStop(0, 'hsl(94, 62%, 65%)');
        pGradient.addColorStop(1, 'hsl(94, 38%, 33%)');
        ctx.fillStyle = pGradient;
        ctx.fillRect((w/2)-(wSky/2), (h/2)+((hSky/3)/2), wSky, hSky/3);
        // HOUSE --- MAISON
        ctx.fillStyle = 'hsl(122, 13%, 82%)';
        ctx.fillRect((w/2)-(wSky/3.5), (h/2)-(hSky/8), wSky/3.5, hSky/3);
        // WINDOW --- FENÊTRE
        ctx.fillStyle = 'hsl(215, 50%, 68%)';
        ctx.fillRect((w/2)-(wSky/8), (h/2)-(hSky/16), wSky/8, hSky/8);
        // CHIMNEY --- CHEMINÉE
        ctx.fillStyle = ('hsl(28, 99%, 35%)');
        ctx.fillRect((w/2)-(wSky/3.5)+(((wSky/3.5)/2)*1.5), (h/2)-(hSky/3), wSky/22, hSky/5);
        // ROOF --- TOIT
        ctx.beginPath();
        ctx.moveTo((w/2)-(wSky/3.5), (h/2)-(hSky/8));
        ctx.lineTo((w/2)-(wSky/3.5)+((wSky/3.5)/2),(h/2)-(hSky/3));
        ctx.lineTo((w/2)-(wSky/3.5)+(((wSky/3.5)/2)*2),(h/2)-(hSky/8));
        ctx.fill();
        // DOOR --- PORTE
        ctx.fillStyle = 'hsl(27, 50%, 25%)';
        ctx.fillRect((w/2)-(wSky/4), (h/2)+(hSky/24), wSky/12, hSky/6);
        ctx.beginPath();
        ctx.arc((w/2)-(wSky/4)+(wSky/24), (h/2)+(hSky/23), (wSky/24), 0, 1*Math.PI, true);
        ctx.fill();
        ctx.closePath()
        // DRIVEWAY --- L'ALLÉE
        ctx.fillStyle = 'hsl(85, 5%, 50%)';
        ctx.beginPath();
        ctx.closePath();
        ctx.arc((w/2)-(wSky/4), (h/2)+(hSky/4.8), (wSky/12), 0, (1/2)*Math.PI, false);
        ctx.lineTo((w/2)-(wSky/4) ,(h/2)+(hSky/4.8));
        ctx.fill();
        ctx.beginPath();
        ctx.fillRect( (w/2)-(wSky/3.9)-(wSky/12.1), (h/2)+(hSky/4.8),wSky/10, hSky/9);
        ctx.beginPath();
        ctx.arc((w/2)-(wSky/4)-(wSky/12.2), (h/2)+(hSky/2.92), (wSky/10), 1.5*Math.PI, 0.5*Math.PI, true);
        ctx.fill();
        ctx.beginPath();
        ctx.arc((w/2)-(wSky/4)-(wSky/16), (h/2)+(hSky/2.92), (wSky/56), 1.5*Math.PI, 0.5*Math.PI, true);
        ctx.lineTo((w/2)-(wSky/2.7) ,(h/2)+(hSky/2.73));
        ctx.lineTo((w/2)-(wSky/2.7) ,(h/2)+(hSky/3.5));
        ctx.fill();
        ctx.beginPath();
        ctx.fillRect((w/2)-(wSky/3.9)-(wSky/12.2) , (h/2)+(hSky/2.74),wSky/5, hSky/9);
        ctx.fill();
        ctx.stroke();
        ctx.beginPath();
        ctx.arc((w/2)-(wSky/3.9)-(wSky/12.2)+(wSky/5.1), (h/2)+(hSky/2.74)+(hSky/9), (wSky/12), 1.5*Math.PI, 0, false);
        ctx.lineTo((w/2)-(wSky/3.9)-(wSky/12.2)+(wSky/5.1), (h/2)+(hSky/2.74)+(hSky/9));
        ctx.fill();
        ctx.beginPath();
        ctx.rect((w/2)-(wSky/3.9)-(wSky/12.2)+(wSky/5.1), (h/2)+(hSky/2.84)+(hSky/9), wSky/12,hSky/27 );
        ctx.fill();
    }
};