class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.setBaseURL('http://127.0.0.1:8080/v385');
        this.load.image('eye', 'assets/pics/lance-overdose-loader-eye.png');
    }

    create ()
    {
        for (let i = 0; i < 14; i++)
        {
            this.add.sprite(100 + i * 30, 100 + i * 30, 'eye').setInteractive();
        }

        //  If you disable topOnly it will fire events for all objects the pointer is over
        //  regardless of their place on the display list
        this.input.setTopOnly(true);

        //  Events

        this.input.on('gameobjectover', (pointer, gameObject) =>
        {

            gameObject.setTint(0xff0000);

        });

        this.input.on('gameobjectout', (pointer, gameObject) =>
        {

            gameObject.clearTint();

        });

        const text = this.add.text(10, 10, 'Input.topOnly: true', { font: '16px Courier', fill: '#00ff00' });

        this.input.on('pointerdown', function (pointer)
        {
        
            if (this.input.topOnly)
            {
                this.input.setTopOnly(false);
                text.setText('Input.topOnly: false');
            }
            else
            {
                this.input.setTopOnly(true);
                text.setText('Input.topOnly: true');
            }

        
        }, this);
    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: Example
};

const game = new Phaser.Game(config);
