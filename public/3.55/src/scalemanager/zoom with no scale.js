var config = {
    type: Phaser.AUTO,
    backgroundColor: '#2dab2d',
    scale: {
        mode: Phaser.Scale.NONE,
        parent: 'phaser-example',
        width: 160,
        height: 144,
        zoom: 4
    },
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
        this.load.setBaseURL('http://127.0.0.1:8080/v355');
    this.load.image('pic', 'assets/tests/zoom/title.png');
}

function create ()
{
    this.add.image(0, 0, 'pic').setOrigin(0);
}
