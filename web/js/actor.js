
class actor {

    checkTouch(other, other2 = this){
    
        return(other2.pos.x < other.pos.x + other.boundingBox.width  && other2.pos.x + other2.boundingBox.width  > other.pos.x &&
        other2.pos.y < other.pos.y + other.boundingBox.height && other2.pos.y + other2.boundingBox.height > other.pos.y);
    }

    get position(){
        return this.pos;
    }

    set position(val){
        this.pos = val;
    }
    get boundingBox(){
        return this.Box;
    }
    set boundingBox(box){
        this.Box = box;
    }
}