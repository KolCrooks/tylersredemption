var player = function(){
     this.Player = class extends actor{
        constructor(objFile){
            super()
            let _this = this;
              $.getJSON(objFile,(val)=>{
                _this.loadedData = val;
                _this.sprites = _this.loadedData.sprites;
                let temp = {}
                for(let state in _this.sprites.states){
                    temp[state] = {}
                    temp[state].frame = 0;
                    temp[state].files = []
                    _this.sprites.states[state].files.forEach((v)=>{
                        let img = new Image;
                        img.onload = function(){
                            temp[state].files.push(img);
                        };
                        img.src = "./assets/graphics/"+v;
                        
                    });
                }
                console.log(temp)
                _this.sprites.states = temp;
            });
            this.boundingBox = {
                width: 64,
                height: 64
            }
            this.state = "standing"
            this.speed = 0.3;
            this.pos = {x: 0, y: 0};6
            this.gravity = 0.3;
        }

        move(keys,world,deltaT){

            if(this.attemptMove(world,{
                y: this.pos.y + this.gravity*deltaT,
                x: this.pos.x
            }))this.pos.y += this.gravity*deltaT;
            else{
                
                let closest = this.findClosestBelowY(world);
                this.pos.y += closest.pos.y - (this.pos.y+this.boundingBox.height);
            }
            keys.forEach((val,key)=>{
                if(val)
                switch(key){
                    case 'd':
                        if(this.attemptMove(world,{
                            y: this.pos.y,
                            x: this.pos.x + this.speed*deltaT
                        }))
                        this.pos.x += this.speed*deltaT;
                        else{
                            let closest = this.findClosestRightX(world);
                            this.pos.x +=  (this.pos.x+this.boundingBox.width) - closest.pos.x;
                        }
                    break;
                    case 'a':
                        if(this.attemptMove(world,{
                            y: this.pos.y,
                            x: this.pos.x - this.speed*deltaT
                        }))
                        this.pos.x -= this.speed*deltaT;
                        else{
                            let closest = this.findClosestLeftX(world);
                            debugger
                            console.log(this.pos.x - (closest.pos.x+closest.boundingBox.width))
                            this.pos.x -= this.pos.x - (closest.pos.x+closest.boundingBox.width);
                        }
                    break;
                }
            });
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

        findClosestBelowY(objs){
            let closest = {pos:{y:100000}};
            objs.forEach((obj)=>{
                if(closest.pos.y - this.pos.y > obj.pos.y - this.pos.y && this.pos.y + this.boundingBox.height <= obj.pos.y) closest = obj;
            });
            return closest;
        }

        findClosestLeftX(objs){
            let closest = {pos:{x:100000},boundingBox:{width:10000}};
            objs.forEach((obj)=>{
                if((closest.pos.x+closest.boundingBox.width) - this.pos.x > (obj.pos.x+obj.boundingBox.width) - this.pos.x && this.pos.x <= obj.pos.x+obj.boundingBox.width) closest = obj;
            });
            return closest;
        }

        findClosestRightX(objs){
            let closest = {pos:{x:100000},boundingBox:{width:10000}};
            objs.forEach((obj)=>{
                if(closest.pos.x - (this.pos.x+this.boundingBox.width)  > obj.pos.x - (this.pos.x+this.boundingBox.width) && this.pos.x <= obj.pos.x+obj.boundingBox.width) closest = obj;
            });
            return closest;
        }

        update(deltaT,keys,world,context){
            this.move(keys,world,deltaT);
            this.draw(context);
        }

        draw(context){
            
            context.drawImage(this.sprites.states[this.state].files[this.sprites.states[this.state].frame], this.pos.x, this.pos.y);
            
            this.sprites.states[this.state].frame++;
            this.sprites.states[this.state].frame %= this.sprites.states[this.state].files.length;
        }
    }
};
