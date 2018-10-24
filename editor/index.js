var renderer;
var canvas = document.getElementById("can")
var context = canvas.getContext('2d');

let setup = ()=>{
    canvas.width = 800;
    canvas.height = 600;

    setInterval(drawLoop, 1000/FPS);
}


let drawLoop = ()=>{
    
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

document.body.appendChild(canvas);