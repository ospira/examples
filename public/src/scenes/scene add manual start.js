class Example extends Phaser.Scene
{
    constructor ()
    {
        super({ key: "Boot" });
    }

    preload ()
    {
        this.load.setBaseURL('http://127.0.0.1:8080/v385');
        this.load.image('face', 'assets/pics/bw-face.png');
    }

    create ()
    {
        this.face = this.add.image(400, 300, 'face');
    }
}


const config = {
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    width: 800,
    height: 600
};

const game = new Phaser.Game(config);

game.scene.add('Boot', Example);
game.scene.start('Boot');
