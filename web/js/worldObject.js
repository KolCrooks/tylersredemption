    class worldObject extends actor{

        constructor(object){
            this.boundingBox = object.dims;
            this.pos = object.pos;
            this.color = object.color;
            this.react = object.react;
        }

        get react(){
            return this.react;
        }
        get color(){
            return this.color;
        }
}