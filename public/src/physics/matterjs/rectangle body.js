class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.setBaseURL('http://127.0.0.1:8080/v385');
        this.load.image('blue', 'assets/sprites/columns-blue.png');
    }

    create ()
    {
        this.matter.world.setBounds().disableGravity();

        //  By default it will create a rectangular body the size of the texture
        const rect = this.matter.add.image(200, 50, 'blue');

        //  However, you can tell it to create any size rectangle you like, such as this one:
        rect.setBody({
            type: 'rectangle',
            width: 128,
            height: 128
        });

        //  Just make the body move around and bounce
        rect.setVelocity(6, 3);
        rect.setAngularVelocity(0.01);
        rect.setBounce(1);
        rect.setFriction(0, 0, 0);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#1b1464',
    parent: 'phaser-example',
    physics: {
        default: 'matter',
        matter: {
            debug: true
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);
