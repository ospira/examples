var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
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
    this.load.image({
        key: 'taikodrummaster',
        url: 'assets/pics/taikodrummaster.jpg'
    });
}

function create ()
{
    this.add.image(400, 300, 'taikodrummaster');
}
