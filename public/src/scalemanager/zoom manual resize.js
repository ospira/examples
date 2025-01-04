class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.setBaseURL('http://127.0.0.1:8080/v385');
        this.load.image('pic', 'assets/tests/zoom/title.png');
    }

    create ()
    {
        this.add.image(0, 0, 'pic').setOrigin(0);

        this.input.on('pointerdown', function ()
        {

            const currentZoom = this.scale.zoom;

            if (currentZoom < 6)
            {
                this.scale.setZoom(currentZoom + 1);
            }

        }, this);
    }
}

const config = {
    type: Phaser.AUTO,
    backgroundColor: '#2dab2d',
    scale: {
        mode: Phaser.Scale.FIT,
        parent: 'phaser-example',
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 160,
        height: 144,
        zoom: 2
    },
    scene: Example
};

const game = new Phaser.Game(config);
