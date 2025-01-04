class MyScene extends Phaser.Scene {

    constructor (config)
    {
        super(config);
    }

    preload ()
    {
        this.load.setBaseURL('http://127.0.0.1:8080/v355');
        this.load.image('face', 'assets/pics/bw-face.png');
    }

    create ()
    {
        this.face = this.add.image(400, 300, 'face');
    }
}

const config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    parent: 'phaser-example',
    scene: MyScene
};

const game = new Phaser.Game(config);
