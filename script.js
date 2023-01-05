window.addEventListener('load',function(){
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2D');
    canvas.width = 1280;
    canvas.height = 720;

    class InputHandler {
        constructor(game){
            this.game = game;
            window.addEventListener('keydown', e => {
                this.game.lastKey = 'p' + e.key;
              
              });
            window.addEventListener('keyup', e => { 
               this.game.lastKey = 'R' + e.key;
              
              });
        }
    }

    class Owlbear {
        constructor(game){
            this.game = game;
            this.width = 100;
            this.height = 100;
            this.x = 200;
            this.y = 200;
        }
     draw(context){
        context.fillRect(this.x, this.y, this.width, this.height);
     }
     update(){
        this.x++;
     }
    }

    class Object {

    }

    class Game {
        constructor(width, height){
            this.width = width;
            this.height = height;
            this.lastKey = undefined;
            this.input = new InputHandler(this);
            this.owlbear = new Owlbear(this);
        }
        render(context){
            this.owlbear.draw(context);
            this.owlbear.update();
        }
    }

    const game = new Game(canvas.width, canvas.height);
    function animate() {
        game.render(ctx);
        requestAnimationFrame(animate);
    }
    animate();
});
