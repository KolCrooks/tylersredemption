    
    class worldObject extends actor{

        constructor(object){
            super()
            this.type = object.type;
            this.boundingBox = object.dims;
            this.position = object.pos;
            this.originalX = object.pos.x;
            this.color = object.color;
            this.react = object.react;
        }

        draw(context,worldOffset){
            this.pos.x = this.originalX - worldOffset
            switch(this.type){
                case "rect":
                    context.beginPath()
                    if(this.color.type == "solid")
                    context.fillStyle = this.color.value;
                    context.fillRect(this.position.x,this.position.y,this.boundingBox.width,this.boundingBox.height);
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