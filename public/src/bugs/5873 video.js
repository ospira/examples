var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
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
        this.load.setBaseURL('http://127.0.0.1:8080/v385');
    this.load.video('tokyo', 'assets/bugs/tokyo.mp4', true);
}

function create ()
{
    var vid = this.add.video(400, 300, 'tokyo');

    vid.play();
}
