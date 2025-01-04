class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.setBaseURL('http://127.0.0.1:8080/v385');
        this.load.image('pic', 'assets/pics/forgotten-worlds.png');
        this.load.image('ball', 'assets/sprites/shinyball.png');
    }

    create ()
    {
        //  This just injects an image into the div background, so you can see the transparency working.
        const div = document.getElementById('phaser-example');

        div.style.background = 'url(assets/demoscene/multi-color-raster.png)';

        console.log(this.sys.renderer);
        console.log(this.cameras.main);

        this.add.image(400, 600, 'pic').setOrigin(0.5, 1);

        const ball = this.add.image(400, 100, 'ball');

        this.tweens.add({
            targets: ball,
            y: 600,
            ease: 'Sine.inOut',
            yoyo: true,
            repeat: -1
        });
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: 'rgba(100,0,0,0)',
    transparent: true,
    clearBeforeRender: false,
    scene: Example
};

const game = new Phaser.Game(config);
