class Animator {
    constructor(spritesheet, xStart, yStart, Fwidth, Fheight, frameCount, frameDuration, reverse, loop) {
        Object.assign(this, {
            spritesheet,
            xStart,
            yStart,
            Fheight,
            Fwidth,
            frameCount,
            frameDuration, 
            reverse, 
            loop
        });

        this.elapsedTime = 0;
        this.totalTime = frameCount * frameDuration;
    };

    drawFrame(tick, ctx, x, y) {

        this.elapsedTime += tick; 

        if (this.elapsedTime > this.totalTime) {
            this.elapsedTime -= this.totalTime;
        }

        const frame = this.currentFrame();

        ctx.drawImage(this.spritesheet,
            this.xStart + this.Fwidth * frame,this.yStart,
            this.Fwidth, this.Fheight,
            x, y,
            this.Fwidth, this.Fheight);

    };

    currentFrame() {
        return Math.floor(this.elapsedTime / this.frameDuration);
    };

    isDone() {
        return (this.elapsedTime >= this.totalTime);
    };

};