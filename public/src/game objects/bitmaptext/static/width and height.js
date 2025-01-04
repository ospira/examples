class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.setBaseURL('http://127.0.0.1:8080/v385');
        this.load.bitmapFont('atari', 'assets/fonts/bitmap/atari-smooth.png', 'assets/fonts/bitmap/atari-smooth.xml');
    }

    create ()
    {
        this.string = 'Phaser 3\nBitmapText\nScaling\nwith bounds';

        this.text = this.add.bitmapText(0, 0, 'atari', this.string).setFontSize(32);

        this.graphics = this.add.graphics({ x: 0, y: 0, lineStyle: { thickness: 1, color: 0xffff00, alpha: 1 } });

        this.tweens.add({
            targets: this.text,
            duration: 4000,
            scaleX: 2,
            ease: 'Quad.easeInOut',
            repeat: -1,
            yoyo: true
        });

        this.tweens.add({
            targets: this.text,
            duration: 2000,
            scaleY: 4,
            ease: 'Quad.easeInOut',
            repeat: -1,
            yoyo: true
        });
    }

    update ()
    {
        this.text.setText(this.string + '\nScale X: ' + this.text.scaleX.toFixed(4));
        this.graphics.clear();
        this.graphics.strokeRect(this.text.x, this.text.y, this.text.width, this.text.height);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    scene: Example
};


const game = new Phaser.Game(config);
