class logic {
    constructor(canvas){
        this.playerObj = new (new player).Player("./assets/dataFiles/player.json");
        this.level1 = new level();
        this.keyListen = new keyboard(canvas);
        this.level1.loadObjects("./assets/levels/level1/level1.json");
    }


    doLogic(canvas,deltaT){
        let allObj = []; 
        let obs = this.level1.getObjsInFrame({width: canvas.width, height: canvas.height},this.playerObj)
        obs.forEach((obj)=>{
            obj.draw(canvas.getContext('2d'),this.playerObj.screenPos)
        });


        allObj = allObj.concat(obs);
        
        this.playerObj.update(deltaT,this.keyListen.getKeys(),allObj,context);
    }
}