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
    this.load.image('pic', 'assets/pics/cougar-face-of-nature.png');
}

function create ()
{
    //  Default non-flipped image
    this.add.image(250, 164, 'pic');

    //  Flipped via a call to setFlipY
    this.add.image(250, 464, 'pic').setFlipY(true);

    var image = this.add.image(650, 164, 'pic');

    //  Flipped via setting the flipY property
    image.flipY = true;

    var image2 = this.add.image(650, 464, 'pic');

    this.input.on('pointerdown', function () {

        //  Flipped via a call to toggleFlipX
        image2.toggleFlipY();

    });
}
