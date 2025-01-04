class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.setBaseURL('http://127.0.0.1:8080/v385');
        this.load.image('bunny', 'assets/sprites/bunny.png');
    }

    create ()
    {
        this.add.sprite(400, 300, 'bunny');
    }
}

const config = {
    type: Phaser.AUTO,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
