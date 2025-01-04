class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.setBaseURL('http://127.0.0.1:8080/v385');
        this.load.spritesheet('bobs', 'assets/sprites/bobs-by-cleathley.png', { frameWidth: 32, frameHeight: 32 });
    }

    create ()
    {
        //  This will create a Group with 400 children.
        //  Each child will use the 'bobs' texture and a random frame number between 0 and 399 (inclusive)
        //  Change 'randomFrame' to false to see the difference it makes

        const group = this.make.group({
            key: 'bobs',
            frame: Phaser.Utils.Array.NumberArray(0, 399),
            randomFrame: true,
            gridAlign: {
                x: 16,
                y: 16,
                width: 25,
                height: 25,
                cellWidth: 32,
                cellHeight: 32
            }
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
