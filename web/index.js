var renderer;
var canvas = document.createElement('canvas')
var context = canvas.getContext('2d');
var pLogic;

let setup = ()=>{
    canvas.width = 800;
    canvas.height = 600;
    pLogic = new logic();
    
    setTimeout(drawLoop, 0);
}
var oldTime = Date.now()

let drawLoop = ()=>{
    let deltaT = Date.now()-oldTime;
    oldTime = Date.now();

    //Update Logic
    pLogic.doLogic();
    //Update Draw


    let delay = 1000/FPS - (Date.now() - begin);
    setTimeout(processVideo, delay);
}

let loadJS = (files)=>{

    files.forEach((v)=>{
        $.getScript(v);
    });
    setup()
}

loadJS([
    "assets/levels/level.js",
    "js/actor.js",
    "js/player.js",
    "js/logic.js",
    "assets/levels/level1/level1.js",
    "js/worldObject.js"
    
]);
document.body.appendChild(canvas);
