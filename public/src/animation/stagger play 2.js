class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.setBaseURL('http://127.0.0.1:8080/v385');
        this.load.atlas('lazer', 'assets/animations/lazer/lazer.png', 'assets/animations/lazer/lazer.json');
    }

    create ()
    {
        this.anims.create({ key: 'blast', frames: this.anims.generateFrameNames('lazer', { prefix: 'lazer_', start: 0, end: 22, zeroPad: 2 }), repeat: -1 });

        var group = this.add.group();

        group.createMultiple({ key: 'lazer', frame: 'lazer_22', repeat: 39, setScale: { x: 0.25, y: 0.25 } });

        Phaser.Actions.GridAlign(group.getChildren(), {
            width: 20,
            height: 2,
            cellWidth: 32,
            cellHeight: 280,
            x: -100,
            y: -350
        });

        this.anims.staggerPlay('blast', group.getChildren(), 20);
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    pixelArt: true,
    width: 800,
    height: 600,
    scene: Example
};

const game = new Phaser.Game(config);
