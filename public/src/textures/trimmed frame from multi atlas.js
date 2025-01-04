class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.setBaseURL('http://127.0.0.1:8080/v385');
        this.load.path = 'assets/atlas/';

        this.load.multiatlas('megaset', 'tp3-multi-atlas.json');
    }

    create ()
    {
        this.add.image(400, 300, 'megaset', 'hello');
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: Example
};

const game = new Phaser.Game(config);
