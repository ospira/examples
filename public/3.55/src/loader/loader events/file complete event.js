var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    pixelArt: true,
    scene: {
        preload: preload
    }
};

var game = new Phaser.Game(config);

function preload ()
{
        this.load.setBaseURL('http://127.0.0.1:8080/v355');
    // this.load.on('filecomplete', function (key, file) {

    //     this.add.image(400, 300, key);

    // }, this);

    this.load.image('taikodrummaster', 'assets/pics/taikodrummaster.jpg').on('filecomplete', addImage, this);

    this.load.image('sukasuka-chtholly', 'assets/pics/sukasuka-chtholly.png');
}

function addImage (key, file)
{
    this.add.image(400, 300, key);
}
