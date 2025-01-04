let total;
let blitter;
let text;
let frames = [];

class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.setBaseURL('http://127.0.0.1:8080/v385');
        this.load.atlas('blocks', 'assets/atlas/isoblocks.png', 'assets/atlas/isoblocks.json');
    }

    create ()
    {
        frames = this.textures.get('blocks').getFrameNames();

        total = 230;
        blitter = this.add.blitter(0, 0, 'blocks', 'block-000');
        text = this.add.text(10, 0, 'Total: 230', { font: '16px Courier', fill: '#00ff00' });

        for (var i = 0; i < 230; i++)
        {
            blitter.create(Phaser.Math.Between(0, 800), Phaser.Math.Between(16, 600), frames[i]);
        }

        blitter.postFX.addShine(1, 0.2, 5);
    }

    update ()
    {
        if (this.input.activePointer.isDown)
        {
            for (var i = 0; i < 230; i++)
            {
                blitter.create(Phaser.Math.Between(0, 800), Phaser.Math.Between(16, 600), frames[i]);
            }

            total += 230;

            text.setText('Total: ' + total);
        }
    }
}

const config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    batchSize: 8000,
    scene: Example
};

const game = new Phaser.Game(config);
