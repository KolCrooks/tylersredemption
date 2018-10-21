class level{
    constructor(){
        this.levelObjs = new Array();
    }

    get levelObjects(){
        return this.levelObjs;
    }
    set levelObjects(obj){
        this.levelObjs = obj;
    }

    getObjsInFrame(dims,player){
        return this.levelObjects.filter((val)=>{
            return (val.position.x >= player.position-dims.width/1.5 || val.position.x <= player.position+dims.width/1.5);
        });
    }

    loadObjects(file){
        $.getJSON(file, function(json) {
            this.length = json.length;
            let temp = [];
            json.objects.forEach((obj,index)=>{
                temp[index] = (new worldObject(obj));
            });
            this.levelObjs = temp;
        });
    }
}