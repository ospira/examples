var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
        this.load.setBaseURL('http://127.0.0.1:8080/v385');
    this.load.audio('sfx', [ 'assets/audio/stage_sfx2.mp3' ]);
}

function create ()
{
    var sound1 = this.sound.add('sfx');

    sound1.play();
}
