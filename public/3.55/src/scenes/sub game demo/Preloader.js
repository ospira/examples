class Preloader extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'preloader' });
    }

    preload ()
    {
        this.load.setBaseURL('http://127.0.0.1:8080/v355');
        this.load.image('bg', 'assets/tests/space/nebula.jpg');
        this.load.image('ship', 'assets/tests/space/ship.png');
        this.load.atlas('space', 'assets/tests/space/space.png', 'assets/tests/space/space.json');
    }

    create ()
    {
        this.scene.start('world');
    }
}
