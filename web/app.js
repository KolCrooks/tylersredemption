
var renderer = new Render();
var canvas = document.createElement('canvas')
var context = canvas.getContext('2d');


let setup = ()=>{
    canvas.width = 800;
    canvas.height = 600;

    setTimeout(drawLoop, 0);
}
var oldTime = Date.now()

let drawLoop = ()=>{
    let deltaT = Date.now()-oldTime;
    oldTime = Date.now();

    //Update Logic

    //Update Draw
    

    let delay = 1000/FPS - (Date.now() - begin);
    setTimeout(processVideo, delay);
}

document.body.appendChild(canvas);

document.on('ready',()=>{setup()})