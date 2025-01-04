class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.setBaseURL('http://127.0.0.1:8080/v385');
        this.load.image('logo', 'assets/sprites/phaser3-logo.png');
        this.load.image('logoAlpha', 'assets/sprites/phaser3-logo-alpha.png');
    }

    create ()
    {
        //  This sprite is draggable from any pixel that has an alpha value >= 1
        const sprite1 = this.add.sprite(400, 200, 'logo').setInteractive({ pixelPerfect: true });

        //  This sprite is draggable from any pixel that has an alpha value >= 100 (i.e. the left side of the sprite)
        const sprite2 = this.add.sprite(400, 400, 'logoAlpha').setInteractive(this.input.makePixelPerfect(100));

        sprite2.angle = 22;
        sprite2.setScale(1.4);

        this.input.setDraggable([ sprite1, sprite2 ]);

        sprite1.on('drag', function (pointer, dragX, dragY)
        {

            this.x = dragX;
            this.y = dragY;

        });

        sprite2.on('drag', function (pointer, dragX, dragY)
        {

            this.x = dragX;
            this.y = dragY;

        });
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#efefef',
    scene: Example
};

const game = new Phaser.Game(config);
