
var sceneConfig = {
    preload: preload,
    create: create,
    pack: {
        files: [
            { type: 'image', key: 'sonic', url: 'assets/sprites/sonic_havok_sanity.png' }
        ]
    }
};

var gameConfig = {
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: sceneConfig
};

var game = new Phaser.Game(gameConfig);

function preload ()
{
        this.load.setBaseURL('http://127.0.0.1:8080/v355');
    this.load.image('face', 'assets/pics/bw-face.png');
}

function create ()
{
    this.add.image(400, 300, 'face');
    this.add.image(400, 300, 'sonic');
}
