    class worldObject extends actor{

        constructor(object){
            super()
            this.boundingBox = object.dims;
            this.pos = object.pos;
            this.color = object.color;
            this.react = object.react;
        }

        get react(){
            return this.r;
        }

        set react(v){
            this.r = v;
        }

        get color(){
            return this.c;
        }

        set color(v){
            this.c = v;
        }
}