class actor {
    constructor(box){
        this.boundingBox = box;
    }

    checkTouch(other, other2 = this){
        return(other2.pos.x < other.pos.x + other.boundingBox().width  && other2.pos.x + this.boundingBox().width  > other.pos.x &&
        other2.pos.y < other.pos.y + other.boundingBox().height && other2.pos.y + this.boundingBox().height > other.pos.y);
    }

    get position(){
        return this.pos;
    }
    get boundingBox(){
        return this.boundingBox;
    }
}