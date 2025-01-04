class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.setBaseURL('http://127.0.0.1:8080/v385');
        this.load.image('lemming', 'assets/sprites/lemming.png');
    }

    create ()
    {
        const path = new Phaser.Curves.Path(50, 500);

        path.splineTo([ 164, 446, 274, 542, 412, 457, 522, 541, 664, 464 ]);
        path.lineTo(700, 300);
        path.lineTo(600, 350);
        path.ellipseTo(200, 100, 100, 250, false, 0);
        path.cubicBezierTo(222, 119, 308, 107, 208, 368);
        path.ellipseTo(60, 60, 0, 360, true);

        const graphics = this.add.graphics();

        graphics.lineStyle(1, 0xffffff, 1);

        path.draw(graphics, 128);

        const lemming = this.add.follower(path, 50, 500, 'lemming');

        lemming.startFollow({
            duration: 10000,
            yoyo: true,
            repeat: -1,
            rotateToPath: true,
            verticalAdjust: true
        });
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
