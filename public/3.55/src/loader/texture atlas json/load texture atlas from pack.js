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
    this.load.pack('pack', 'assets/loader-tests/pack5.json');
}

function create ()
{
    var atlasTexture = this.textures.get('megaset');

    var frames = atlasTexture.getFrameNames();

    for (var i = 0; i < frames.length; i++)
    {
        var x = Phaser.Math.Between(0, 800);
        var y = Phaser.Math.Between(0, 600);

        this.add.image(x, y, 'megaset', frames[i]);
    }
}
