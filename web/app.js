
var renderer = new Render();
var canvas = document.createElement('canvas'),
    context = canvas.getContext('2d');


let setup = ()=>{
    canvas.width = 800;
    canvas.height = 600;
    console.log('t')
}

let drawLoop = ()=>{
    //Update Logic

    //Update Draw

}

document.body.appendChild(canvas);

document.on('ready',()=>{setup()})