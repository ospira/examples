function preload ()
{
        this.load.setBaseURL('http://127.0.0.1:8080/v355');
    this.load.image('face', 'assets/pics/bw-face.png');
}

function create ()
{
    this.add.image(400, 300, 'face');
}

const config = {
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create
    }
};

const game = new Phaser.Game(config);
