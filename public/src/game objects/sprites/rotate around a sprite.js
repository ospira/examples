class Example extends Phaser.Scene
{
    distance2 = 80;
    angle2 = 0;
    distance1 = 200;
    angle1 = 0;
    ball3;
    ball2;
    ball1;

    preload ()
    {
        this.load.setBaseURL('http://127.0.0.1:8080/v385');
        this.load.image('ballRed', 'assets/demoscene/ball.png');
        this.load.image('ballBlue', 'assets/demoscene/blue_ball.png');
        this.load.image('ballSmall', 'assets/demoscene/ball-tlb.png');
    }

    create ()
    {
        this.ball1 = this.add.sprite(400, 300, 'ballRed');
        this.ball2 = this.add.sprite(400, 300, 'ballBlue');
        this.ball3 = this.add.sprite(400, 300, 'ballSmall');
    }

    update ()
    {
        //  Reset the position so the rotation gets the correct _new_ position
        this.ball2.setPosition(400, 300);
        this.ball3.setPosition(400, 300);

        Phaser.Math.RotateAroundDistance(this.ball2, this.ball1.x, this.ball1.y, this.angle1, this.distance1);
        Phaser.Math.RotateAroundDistance(this.ball3, this.ball2.x, this.ball2.y, this.angle2, this.distance2);

        this.angle1 = Phaser.Math.Angle.Wrap(this.angle1 + 0.02);
        this.angle2 = Phaser.Math.Angle.Wrap(this.angle2 + 0.03);
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: Example
};

const game = new Phaser.Game(config);
