export default class Boot extends Phaser.Scene
{
    constructor ()
    {
        super('Boot');
    }

    preload ()
    {
        this.load.setBaseURL('http://127.0.0.1:8080/v385');
        this.load.image('loading', 'assets/games/bank-panic/loading.png');
    }

    create ()
    {
        this.scene.start('Preloader');
    }
}
