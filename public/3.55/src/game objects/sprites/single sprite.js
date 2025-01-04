var config = {
    type: Phaser.AUTO,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
        this.load.setBaseURL('http://127.0.0.1:8080/v355');
    this.load.image('bunny', 'assets/sprites/bunny.png');
}

function create ()
{
    this.add.sprite(400, 300, 'bunny');
}
