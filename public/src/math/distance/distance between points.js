class Example extends Phaser.Scene
{
    graphic;
    ufo;
    player;
    cursors;

    preload ()
    {
        this.load.setBaseURL('http://127.0.0.1:8080/v385');
        this.load.image('eyes', 'assets/sprites/slimeeyes.png');
        this.load.image('ufo', 'assets/sprites/ufo.png');
    }

    create ()
    {
        this.cursors = this.input.keyboard.createCursorKeys();

        this.player = this.add.image(400, 300, 'eyes');

        this.ufo = this.add.image(200, 150, 'ufo');

        this.graphic = this.add.graphics({ lineStyle: { color: 0x00ffff } });
    }

    update ()
    {
        if (this.cursors.left.isDown)
        {
            this.player.x -= 5;
        }
        else if (this.cursors.right.isDown)
        {
            this.player.x += 5;
        }

        if (this.cursors.up.isDown)
        {
            this.player.y -= 5;
        }
        else if (this.cursors.down.isDown)
        {
            this.player.y += 5;
        }

        const dist = Phaser.Math.Distance.BetweenPoints(this.player, this.ufo);

        this.graphic
            .clear()
            .strokeCircle(this.player.x, this.player.y, dist);
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
