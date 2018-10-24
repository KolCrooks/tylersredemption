
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

    findClosestAboveY(objs){
        let closest = {pos:{y:100000},boundingBox:{height:10000}};
        let test
        objs.forEach((obj)=>{
            let a = this.pos.y - (closest.pos.y+closest.boundingBox.height)
            let b = this.pos.y - (obj.pos.y+obj.boundingBox.height)
            test = obj
            if(this.pos.y - (closest.pos.y+closest.boundingBox.height) < this.pos.y - (obj.pos.y+obj.boundingBox.height) && this.pos.y >= obj.pos.y+obj.boundingBox.height){
                if(this.checkTouch(obj,{
                    boundingBox: {
                        width: this.boundingBox.width+30,
                        height: this.boundingBox.height+30
                    },
                    pos: {
                        x: this.pos.x-15,
                        y: this.pos.y-30
                    }
                }))
                closest = obj;  
            }
        });
        if(closest.pos.y >= 10000) return this;
        return closest;
    }

    findClosestBelowY(objs){
        let closest = {pos:{y:100000}};
        objs.forEach((obj)=>{
            if(closest.pos.y - this.pos.y > obj.pos.y - this.pos.y && this.pos.y + this.boundingBox.height <= obj.pos.y){
                if(this.checkTouch(obj,{
                    boundingBox: {
                        width: this.boundingBox.width+30,
                        height: this.boundingBox.height+30
                    },
                    pos: {
                        x: this.pos.x-15,
                        y: this.pos.y-15
                    }
                }))
                closest = obj;  
            }
        });
        if(closest.pos.y >= 10000) return this;
        return closest;
    }

    findClosestLeftX(objs){
        let closest = {pos:{x:100000},boundingBox:{width:10000}};
        objs.forEach((obj)=>{

            if(this.pos.x - (closest.pos.x+closest.boundingBox.width) < this.pos.x - (obj.pos.x+obj.boundingBox.width) && (this.pos.x >= (obj.pos.x + obj.boundingBox.width))){
                
                if(this.checkTouch(obj,{
                    boundingBox: {
                        width: this.boundingBox.width+30,
                        height: this.boundingBox.height+30
                    },
                    pos: {
                        x: this.pos.x-15,
                        y: this.pos.y-15
                    }
                }))

                closest = obj;
            } 
        });
        if(closest.pos.x >= 10000) return this;
        return closest;
    }

    findClosestRightX(objs){
        let closest = {pos:{x:100000},boundingBox:{width:10000}};
        objs.forEach((obj)=>{
            if(closest.pos.x - (this.pos.x+this.boundingBox.width) > obj.pos.x - (this.pos.x+this.boundingBox.width) && (this.pos.x+this.boundingBox.width) <= obj.pos.x){
                if(this.checkTouch(obj,{
                    boundingBox: {
                        width: this.boundingBox.width+30,
                        height: this.boundingBox.height+30
                    },
                    pos: {
                        x: this.pos.x-15,
                        y: this.pos.y-15
                    }
                }))
                closest = obj;
            } 
        });
        if(closest.pos.x >= 10000) return this;

        return closest;
    }
    attemptMove(world,newPos){
        let canMove = true;
        world.forEach((obj)=>{
            if(this.checkTouch(obj,{
                boundingBox: this.boundingBox,
                pos: newPos
            })){
                canMove = false;
            }
        });
        return canMove;
    }
}