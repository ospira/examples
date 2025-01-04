class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.setBaseURL('http://127.0.0.1:8080/v385');
        this.load.image('block', 'assets/sprites/block.png');
    }

    create ()
    {
        const group = this.physics.add.group({
            bounceX: 0.5,
            bounceY: 0.5,
            collideWorldBounds: true,
            dragX: 0.5,
            dragY: 0.5
        });

        group.create(100, 200, 'block').setVelocity(100, 200).setDamping(true);
        group.create(500, 200, 'block').setVelocity(-100, -100).setDamping(true);
        group.create(300, 400, 'block').setVelocity(60, 100).setDamping(true);
        group.create(600, 300, 'block').setVelocity(-30, -50).setDamping(true);

        this.physics.add.collider(group);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            gravity: { y: 200 }
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);
