class level{
    constructor(){
        this.levelObjects = new Array();
    }

    get levelObjects(){
        return this.levelObjs;
    }
    set levelObjects(obj){
        this.levelObjs = obj;
    }

    getObjsInFrame(dims,player){
        return this.levelObjects.filter((val)=>{
            return (val.position.x >= player.position.x-dims.width || val.position.x <= player.position.x+dims.width);
        });
    }

    loadObjects(file){
        let _this = this;
        $.getJSON(file, function(json) {
            this.length = json.length;
            let temp = [];
            json.objects.forEach((obj,index)=>{
                temp[index] = (new worldObject(obj));
            });
            _this.levelObjects = temp;
        });
    }
}