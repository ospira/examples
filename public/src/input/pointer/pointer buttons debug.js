class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.setBaseURL('http://127.0.0.1:8080/v385');
        this.load.spritesheet('balls', 'assets/sprites/balls.png', { frameWidth: 17, frameHeight: 17 });
    }

    create ()
    {
        this.input.mouse.disableContextMenu();

        this.input.on('pointerdown', function (pointer)
        {

            if (pointer.leftButtonDown() && pointer.rightButtonDown())
            {
                this.add.image(pointer.x, pointer.y, 'balls', 0);
            }
            else if (pointer.leftButtonDown())
            {
                this.add.image(pointer.x, pointer.y, 'balls', 1);
            }
            else if (pointer.rightButtonDown())
            {
                this.add.image(pointer.x, pointer.y, 'balls', 2);
            }

        }, this);

        this.input.on('pointerup', pointer =>
        {

            // console.log('up - left:', pointer.leftButtonDown(), 'right:', pointer.rightButtonDown(), 'event', pointer.event.button);

            if (pointer.event.button === 0)
            {
                console.log('Left button released');
            }
            else if (pointer.event.button === 1)
            {
                console.log('Middle button released');
            }
            else if (pointer.event.button === 2)
            {
                console.log('Right button released');
            }

        });
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    disableContextMenu: true,
    scene: Example
};

const game = new Phaser.Game(config);
