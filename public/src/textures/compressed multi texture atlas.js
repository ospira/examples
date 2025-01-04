class Demo extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.setBaseURL('http://127.0.0.1:8080/v385');
        const path = 'assets/compressed';

        this.load.texture('test', {
            'IMG': { multiAtlasURL: `${path}/multi.json`, multiPath: `${path}` },
            'PVRTC': { type: 'PVR', multiAtlasURL: `${path}/multi-pvr.json`, multiPath: `${path}` },
            'S3TC': { type: 'PVR', multiAtlasURL: `${path}/multi-dxt5.json`, multiPath: `${path}` }
        });
    }

    create ()
    {
        this.add.sprite(400, 250, 'test', 'phaser3-logo-x2');
        this.add.sprite(400, 100, 'test', 'astorm-truck');
        this.add.sprite(400, 420, 'test', 'bunny');
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#2d2d6d',
    scene: Demo
};

const game = new Phaser.Game(config);
