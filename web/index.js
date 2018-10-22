var renderer;
var canvas = document.createElement('canvas')
var context = canvas.getContext('2d');
var pLogic;
var FPS = 30;
let setup = ()=>{
    canvas.width = 800;
    canvas.height = 600;
    pLogic = new logic(canvas);
    console.log(pLogic)
    setInterval(drawLoop, 1000/FPS);
}
var oldTime = Date.now()

let drawLoop = ()=>{
    let deltaT = Date.now()-oldTime;
    oldTime = Date.now();

    //Update Logic
    pLogic.doLogic(canvas,deltaT);
    //Update Draw
    
}

let loadJS = async (files)=>{
    $.holdReady( true );
    let t = 0;
    files.forEach((v)=>{
        $.getScript(v,()=>{
            t++;
            if(t == files.length) $.holdReady( false );
        });
    });
    $().ready(()=>{
        setup();
    });
    
}

loadJS([
    "assets/levels/level.js",
    "js/actor.js",
    "js/player.js",
    "js/logic.js",
    "js/worldObject.js",
    "js/keyboard.js"
]);

document.body.appendChild(canvas);