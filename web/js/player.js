var player = function(){
     this.Player = class extends actor{
        constructor(objFile){
            super()
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
            //context.drawImage(image, dx, dy);
        }
    }
};
