class level{

    get levelObjects(){
        return this.levelObjects;
    }

    getObjsInFrame(window,player){
        let pos = player.position();
        let dims = window.dimentions();
        level.levelObjects.filter((val)=>{
            return (val.position().x >= player.position-dims.width/1.5 || val.position().x <= player.position+dims.width/1.5);
        });
    }

    loadObjects(file){
        $.getJSON(file, function(json) {
            this.length = json.length;
            json.objects.forEach((obj)=>{
                this.levelObjects.push(new worldObj.worldObject(obj));
            });
            
        });
    }
}