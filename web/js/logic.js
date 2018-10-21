class logic {
    constructor(){
        this.player = new Player("./assets/dataFiles/player.json");
        this.level1 = new level1();
    }


    doLogic(deltaT){
        this.level1.getObjsInFrame(this.player.position()).forEach((plat)=>{
            
        });
        this.player.update(deltaT);
    }

    drawObj(object){
        switch(object.type){

        }
    }
}