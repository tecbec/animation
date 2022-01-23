class Running{
    constructor(game){
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./run.png"), 0, 0 , 126, 160, 8, 0.1, false, true);
        this.x = 0;
        this.y = 0
        this.speed = 30;
    };

    update(){
        this.x += this.speed*this.game.clockTick;

    };

    draw(ctx){
       this.animator.drawFrame(this.game.clockTick, ctx, this.x,10);

    }
};