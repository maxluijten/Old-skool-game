const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let keypressed = false;
const gravity = 0.1;
canvas.width = 500;
canvas.height = 500;

const Player = function player(x,y,width,height){
    this.pos = [x,y];
    this.width = width;
    this.height = height;
    this.velo = 0;
};

const player = new Player(100,100,30,30);

Player.prototype.draw = function () {
    ctx.beginPath();
    ctx.fillRect(player.pos[0],player.pos[1],player.width,player.height);
    ctx.stroke();
};

Player.prototype.Up = function () {

    if (this.y + this.velo + 36 > 500) {
        // If so, move us back to ground level and set velocity to zero
        this.velo = 0;
        this.y = 500 - 36;
    } else {
        // Otherwise, move what is indicated by velocity
        this.velo += gravity;
        this.y += this.velo;
    }

};

const requestAnim = window.requestAnimationFrame || setInterval;

document.addEventListener('keydown', function (e) {
    if (e.keyCode == '38') {
        keypressed = true;
    }
}, false);

export {player,canvas,ctx,requestAnim,keypressed};

