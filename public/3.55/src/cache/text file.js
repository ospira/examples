class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.setBaseURL('http://127.0.0.1:8080/v355');
        this.load.text('data', 'assets/loader-tests/test.txt');
    }

    create ()
    {
        console.log(this.cache.text.get('data'));
    }

    update ()
    {

    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    scene: [ Example ]
};

const game = new Phaser.Game(config);
