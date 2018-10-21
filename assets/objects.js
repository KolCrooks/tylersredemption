(function data(){
    class actor{
        pos = {x:-10,y:-10};
        boundingBox;

        constructor(box){
            this.boundingBox = box;
        }

        checkTouch(other){
            return(this.pos.x < other.pos.x + other.boundingBox.width  && this.pos.x + this.boundingBox.width  > other.pos.x &&
                this.pos.y < other.pos.y + other.boundingBox.height && this.pos.y + this.boundingBox.height > other.pos.y);
        }
    }
});