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
            this.gravity = 0.35;
            this.jumpPow = 0.84;
            this.curJump = 0.0;
            this.jumpLength = 3000;
            this.jumping = false;
            this.onGround = false;
            this.air = 0.9;
            this.screenPos = 0;
            this.optionsToggle = true;
            
        }

        move(keys,world,deltaT,context){
            if(this.jumping){
                this.curJump += deltaT;
                this.air = 1.2;
                if(this.attemptMove(world,{
                    y: this.pos.y - this.jumpPow*deltaT*Math.sin((Math.PI/this.jumpLength)*(this.curJump*10)),
                    x: this.pos.x
                })){
                    this.pos.y -= this.jumpPow*deltaT*Math.sin((Math.PI/this.jumpLength)*(this.curJump*10))
                    if(this.jumpPow*deltaT*Math.sin((Math.PI/this.jumpLength)*(this.curJump*10)) < this.gravity*deltaT && this.curJump > 100){
                        this.curJump = 0;
                        this.jumping = false;
                        this.air = 0.9;
                    }
                }else{
                    let closest = this.findClosestAboveY(world);
                    console.log(closest,closest.pos.y+closest.boundingBox.height - this.pos.y)
                    this.pos.y -= this.pos.y - (closest.pos.y+closest.boundingBox.height)
                        this.curJump = 0;
                        this.jumping = false;
                        this.air = 0.9;
                }
            }

            if(this.attemptMove(world,{
                y: this.pos.y + this.gravity*deltaT,
                x: this.pos.x
            })){
                this.onGround = false;
               this.pos.y += this.gravity*deltaT; 
            }
            else if(!this.jumping){
                this.onGround = true;
                console.log("other")
                let closest = this.findClosestBelowY(world);
                this.pos.y += closest.pos.y - (this.pos.y+this.boundingBox.height);
            }
            keys.forEach((val,key)=>{
                if(val)
                switch(key){
                    case 'd':
                        if(this.attemptMove(world,{
                            y: this.pos.y,
                            x: this.pos.x + this.speed*deltaT*this.air
                        }))
                        if(this.pos.x >= context.canvas.clientWidth*5/8){
                            this.screenPos += this.speed*deltaT*this.air;
                        }else
                        this.pos.x += this.speed*deltaT*this.air;
                        else{
                            let closest = this.findClosestRightX(world);
                            if(this.pos.x >= context.canvas.clientWidth*5/8){
                                this.screenPos += closest.pos.x - (this.pos.x+this.boundingBox.width)
                            }else
                            this.pos.x += closest.pos.x - (this.pos.x+this.boundingBox.width);
                        }
                    break;
                    case 'a':
                        if(this.attemptMove(world,{
                            y: this.pos.y,
                            x: this.pos.x - this.speed*deltaT*this.air
                        })){
                            if(this.pos.x <= context.canvas.clientWidth*(3/8) && this.screenPos >= 0){
                                this.screenPos -= this.speed*deltaT*this.air;
                            }else
                            this.pos.x -= this.speed*deltaT*this.air;
                        }
                        else{
                            let closest = this.findClosestLeftX(world);
                            if(this.pos.x <= context.canvas.clientWidth*(3/8) && this.screenPos >= 0){
                                this.screenPos -= this.pos.x - (closest.pos.x+closest.boundingBox.width);
                            }else
                            this.pos.x -= this.pos.x - (closest.pos.x+closest.boundingBox.width);
                        }
                    break;
                    case ' ':
                        if(this.onGround)
                        this.jumping = true;
                        break;
                    case 'F2':
                        this.optionsToggle = !this.optionsToggle;
                    break;
                }
            });
        }


        update(deltaT,keys,world,context){
            this.move(keys,world,deltaT,context);
            this.draw(context,deltaT);
        }

        draw(context,deltaT){
            if(this.optionsToggle){
                context.font = "14px Arial";
                context.fillText(`Screen Scroll: ${this.screenPos}`,10,14);
                context.fillText(`Position: (${this.pos.x},${this.pos.y})`,10,30);
                context.fillText(`DeltaT: ${deltaT}`,10,46);
            }
            context.drawImage(this.sprites.states[this.state].files[this.sprites.states[this.state].frame], this.pos.x, this.pos.y);
            
            this.sprites.states[this.state].frame++;
            this.sprites.states[this.state].frame %= this.sprites.states[this.state].files.length;
        }
    }
};
