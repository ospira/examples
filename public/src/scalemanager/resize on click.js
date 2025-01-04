class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.setBaseURL('http://127.0.0.1:8080/v385');
        this.load.image('pic1', 'assets/pics/neuromancer.jpg');
        this.load.image('pic2', 'assets/pics/monika-krawinkel-amberstar-title.png');
        this.load.image('pic3', 'assets/pics/game14-angel-dawn.png');
        this.load.image('pic4', 'assets/pics/ninja-masters2.png');
    }

    create ()
    {
        const pic1 = this.add.image(0, 0, 'pic1').setOrigin(0);
        const pic2 = this.add.image(0, 0, 'pic2').setOrigin(0).setVisible(false);
        const pic3 = this.add.image(0, 0, 'pic3').setOrigin(0).setVisible(false);
        const pic4 = this.add.image(0, 0, 'pic4').setOrigin(0).setVisible(false);

        const text = this.add.text(10, 10, 'Click to change game size', { font: '16px Courier', fill: '#00ff00' });

        let state = 0;

        this.input.on('pointerdown', function ()
        {

            if (state === 0)
            {
                // this.scale.setGameSize(320, 200);
                this.scale.resize(320, 200);

                text.setText('320 x 200');

                pic1.setVisible(false);
                pic2.setVisible(true);

                state = 1;
            }
            else if (state === 1)
            {
                // this.scale.setGameSize(640, 400);
                this.scale.resize(640, 400);

                text.setText('640 x 400');

                pic2.setVisible(false);
                pic3.setVisible(true);

                state = 2;
            }
            else if (state === 2)
            {
                // this.scale.setGameSize(1216, 896);
                this.scale.resize(1216, 896);

                text.setText('1216 x 896');

                pic3.setVisible(false);
                pic4.setVisible(true);

                state = 3;
            }
            else if (state === 3)
            {
                // this.scale.setGameSize(800, 600);
                this.scale.resize(800, 600);

                text.setText('800 x 600');

                pic4.setVisible(false);
                pic1.setVisible(true);

                state = 0;
            }

        }, this);

        // this.scale.on('resize', resize, this);
    }

    resize (gameSize, baseSize, displaySize, resolution)
    {
        const width = gameSize.width;
        const height = gameSize.height;

        this.cameras.resize(width, height);
    }
}

const config = {
    type: Phaser.CANVAS,
    backgroundColor: '#2dab2d',
    scale: {
        mode: Phaser.Scale.FIT,
        parent: 'phaser-example',
        width: 800,
        height: 600
    },
    scene: Example
};

const game = new Phaser.Game(config);
