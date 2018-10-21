class level{
    levelObjects = [];

    get levelObjects(){
        return this.levelObjects;
    }

    get getObjsInFrame(window,player){
        let pos = player.position();
        let dims = window.dimentions();
        return level.levelObjects.filter((val)=>{
            return (val.position().x >= player.position-dims.width/1.5 || val.position().x <= player.position+dims.width/1.5);
        });
    }

    loadObjects(file){
        
    }
}