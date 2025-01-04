class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.setBaseURL('http://127.0.0.1:8080/v385');

        this.load.image('logo', 'assets/sprites/phaser.png');

    }

    create ()
    {

        this.input.on('pointerdown', function (pointer)
        {

            console.log('down');

            this.add.image(pointer.x, pointer.y, 'logo');

        }, this);

    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
