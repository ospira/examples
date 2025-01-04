class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.setBaseURL('http://127.0.0.1:8080/v385');
        // this.load.image('rick', 'assets/demoscene/purple-raster.png');
        this.load.image('rick', 'assets/demoscene/sunset-raster.png');
        this.load.image('rick2', 'assets/demoscene/rastercarpet32.png');
    }

    create ()
    {
        const sprite1 = this.add.sprite(0, 100, 'rick');
        const sprite2 = this.add.sprite(-100, 0, 'rick2').setAngle(90);
        const sprite3 = this.add.sprite(0, -100, 'rick').setAngle(180);
        const sprite4 = this.add.sprite(100, 0, 'rick2').setAngle(270);

        const containers = [];

        for (let i = 0; i < 128; i++)
        {
            const container = this.add.container(400, 300);

            if (i > 0)
            {
                container.setExclusive(false);
            }

            container.add([ sprite1, sprite2, sprite3, sprite4 ]);

            containers.push(container);
        }

        this.tweens.add({
            targets: sprite1,
            y: -100,
            ease: 'Quad.easeInOut',
            duration: 4000,
            repeat: -1,
            yoyo: true
        });

        this.tweens.add({
            targets: sprite2,
            x: 100,
            ease: 'Quad.easeInOut',
            duration: 4000,
            repeat: -1,
            yoyo: true
        });

        this.tweens.add({
            targets: sprite3,
            y: 100,
            ease: 'Quad.easeInOut',
            duration: 4000,
            repeat: -1,
            yoyo: true
        });

        this.tweens.add({
            targets: sprite4,
            x: -100,
            ease: 'Quad.easeInOut',
            duration: 4000,
            repeat: -1,
            yoyo: true
        });

        this.tweens.add({
            targets: containers,
            angle: { value: 360, duration: 6000 },
            scaleX: { value: 6, duration: 3000, yoyo: true, ease: 'Quart.easeInOut' },
            scaleY: { value: 0.1, duration: 3000, yoyo: true, ease: 'Quad.easeInOut' },
            repeat: -1,
            delay: function (target, key, value, index, total, tween)
            {
                return index * 16;
            }
        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
