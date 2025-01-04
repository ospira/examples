export default class Boot extends Phaser.Scene
{
    constructor ()
    {
        super('Boot');
    }

    preload ()
    {
        this.load.setBaseURL('http://127.0.0.1:8080/v385');
        this.load.setPath('assets/games/germs/');
        this.load.image('background', 'background.png');
        this.load.bitmapFont('slime', 'slime-font.png', 'slime-font.xml');
    }

    create ()
    {
        this.registry.set('highscore', 0);

        this.scene.start('Preloader');
    }
}
