class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.setBaseURL('http://127.0.0.1:8080/v385');
        this.load.spritesheet({
            key: 'explosion',
            url: 'assets/sprites/explosion.png',
            frameConfig: { frameWidth: 64, frameHeight: 64, endFrame: 23 }
        });
    }

    create ()
    {
        const config = {
            key: 'explodeAnimation',
            frames: this.anims.generateFrameNumbers('explosion', { start: 0, end: 23, first: 23 }),
            frameRate: 20,
            repeat: -1
        };

        this.anims.create(config);

        this.add.sprite(400, 300, 'explosion').play('explodeAnimation');
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
