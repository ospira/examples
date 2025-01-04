var config = {
    type: Phaser.AUTO,
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
    this.load.atlas('atlas', 'assets/atlas/megaset-1.png', 'assets/atlas/megaset-1.json');
}

function create ()
{
    this.add.image(400, 200, 'atlas', 'titan-mech');
    this.add.image(400, 400, 'atlas', 'ship');
    this.add.image(400, 600, 'atlas', 'supercars-parsec');
}
