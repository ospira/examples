class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.setBaseURL('http://127.0.0.1:8080/v385');
        this.load.image('pic', 'assets/pics/kris-jovo.jpg');
    }

    create ()
    {
        this.add.image(400, 300, 'pic').setAlpha(0.3);

        this.bob = this.add.image(400, 300, 'pic');

        this.graphics = this.add.graphics();

        const cropWidth = 200;
        const cropHeight = 100;

        this.bob.setCrop(0, 0, cropWidth, cropHeight);

        this.offset = this.bob.getTopLeft();

        this.input.on('pointermove', pointer =>
        {
            this.bob.setCrop(
                (pointer.x - this.offset.x) - cropWidth / 2,
                (pointer.y - this.offset.y) - cropHeight / 2,
                cropWidth,
                cropHeight
            );
        });
    }

    update ()
    {
        this.graphics.clear();
        this.graphics.lineStyle(1, 0x00ff00);
        this.graphics.strokeRect(this.offset.x + this.bob._crop.x, this.offset.y + this.bob._crop.y, this.bob._crop.width, this.bob._crop.height);
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#2d2d88',
    scene: Example
};

const game = new Phaser.Game(config);
