function keyboard(cavas){
    this.keys = new Map();

    this.keyDown = (event)=> {
        this.keys.set(event.key,true)
    }

    this.keyUp = (event)=> {
        this.keys.set(event.key,false)
    }

    this.getKeys = ()=> {
        return this.keys;
    }

    window.addEventListener('keydown', this.keyDown);
    window.addEventListener('keyup', this.keyUp);
}