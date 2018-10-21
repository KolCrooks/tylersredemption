class logic {
    constructor(){
        this.playerObj = new (new player).Player("./assets/dataFiles/player.json");
        this.level1 = new level();
        this.level1.loadObjects("./assets/levels/level1/level1.json");
    }


    doLogic(canvas,deltaT){
        let obs =this.level1.getObjsInFrame({width: canvas.width, height: canvas.height},this.playerObj)
        obs.forEach((obj)=>{
            
            obj.draw(canvas.getContext('2d'))
        });
        this.playerObj.update(deltaT);
    }
}