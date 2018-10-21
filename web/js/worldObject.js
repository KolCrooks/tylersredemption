    
    class worldObject extends actor{

        constructor(object){
            super()
            this.type = object.type;
            this.boundingBox = object.dims;
            this.position = object.pos;
            this.color = object.color;
            this.react = object.react;
        }

        draw(context){
            console.log("test")
            switch(this.type){
                case "rect":
                console.log("rect")
                    context.beginPath()
                    context.strokeStyle = this.color;
                    context.rect(this.position.x,this.position.y,this.boundingBox.width,this.boundingBox.height);
                    context.stroke();
                break;
            }
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