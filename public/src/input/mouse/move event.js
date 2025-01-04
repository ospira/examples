class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.setBaseURL('http://127.0.0.1:8080/v385');
        this.load.image('eye', 'assets/pics/lance-overdose-loader-eye.png');
    }

    create ()
    {
        const sprite1 = this.add.sprite(400, 300, 'eye').setInteractive();
        const sprite2 = this.add.sprite(450, 350, 'eye').setInteractive();
        const sprite3 = this.add.sprite(500, 400, 'eye').setInteractive();

        //  If you disable topOnly it will fire events for all objects the pointer is over, regardless of place on the display list
        this.input.topOnly = false;

        //  Events

        this.input.on('gameobjectmove', (pointer, gameObject) =>
        {

            gameObject.setTint(Math.random() * 16000000);

        });
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
