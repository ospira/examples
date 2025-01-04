class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.setBaseURL('http://127.0.0.1:8080/v385');
        this.load.image('eye', 'assets/pics/lance-overdose-loader-eye.png');
    }

    create ()
    {
        const container1 = this.add.container(100, 100);
        const container2 = this.add.container(200, 200);

        const sprite = this.add.image(0, 0, 'eye').setInteractive();
        
        container1.add(container2);
        container2.add(sprite);

        // container1.setVisible(false);

        sprite.on('pointerover', function ()
        {
            console.log('over');
            this.setTint(0xff0000);
        });

        sprite.on('pointerout', function ()
        {
            console.log('out');
            this.clearTint();
        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#010101',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
