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
                        temp[state].files = []
                        _this.sprites.states[state].files.forEach((v)=>{
                            temp[state].files.push(URL.createObjectURL("./assets/graphics/"+v));
                        });
                }
                console.log(temp)
                _this.sprites.states = temp;
            });
            this.state = "standing"
            this.speed = 0.5;
            this.pos = {x: 0, y: 0};
        }

        move(keys,deltaT){
            keys.forEach((key,val)=>{
                switch(key){
                    case 'w':
                        pos += speed*deltaT;
                    break;
                }
            });
        }
        update(deltaT,keys,context){
            this.move(keys,deltaT)
            this.draw(context);
        }
        draw(context){
            debugger
            context.drawImage(this.sprites.states[this.state].files[this.sprites.states[this.state].frame], this.pos.x, this.pos.y);
            
            this.sprites.states[this.state].frame++;
            this.sprites.states[this.state].frame %= this.sprites.states[this.state].files.length;
        }
    }
};
