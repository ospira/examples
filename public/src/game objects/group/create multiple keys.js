class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.setBaseURL('http://127.0.0.1:8080/v385');
        this.load.spritesheet('diamonds', 'assets/sprites/diamonds32x24x5.png', { frameWidth: 32, frameHeight: 24 });
        this.load.spritesheet('veg', 'assets/sprites/fruitnveg32wh37.png', { frameWidth: 32, frameHeight: 32 });
    }

    create ()
    {
        const group = this.add.group();

        // group.createMultiple({ key: ['diamonds', 'veg'], frame: [0,1,2,3,4] });
        // group.createMultiple({ key: ['diamonds', 'veg'], frame: [0,1,2,3,4], repeat: 1 });
        // group.createMultiple({ key: ['diamonds', 'veg'], frame: [0,1,2], frameQuantity: 3 });
        // group.createMultiple({ key: ['diamonds', 'veg'], frame: [0,1,2], frameQuantity: 2, repeat: 1 });
        // group.createMultiple({ key: ['diamonds', 'veg'], frame: [0,1,2,3,4], randomKey: true });
        // group.createMultiple({ key: ['diamonds', 'veg'], frame: [0,1,2,3,4], randomFrame: true });
        group.createMultiple({ key: [ 'diamonds', 'veg' ], frame: [ 0,1,2,3,4 ], randomFrame: true, frameQuantity: 2 });

        // group.createMultiple({ key: ['diamonds', 'veg'], frame: [0,1,2,3,4], randomKey: true, frameQuantity: 2 });
        // group.createMultiple({ key: ['diamonds', 'veg'], frame: [0,1,2,3,4], yoyo: true });
        // group.createMultiple({ key: ['diamonds', 'veg'], frame: [0,1,2], frameQuantity: 2, yoyo: true });
        // group.createMultiple({ key: ['diamonds', 'veg'], frame: [0,1,2,3], repeat: 4, max: 15 });

        Phaser.Actions.SetXY(group.getChildren(), 32, 100, 32);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
