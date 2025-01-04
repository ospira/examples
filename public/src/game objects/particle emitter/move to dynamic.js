class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.setBaseURL('http://127.0.0.1:8080/v385');
        this.load.image('bg', 'assets/skies/gradient26.png');
        this.load.image('ball', 'assets/demoscene/green_ball.png');
    }

    create ()
    {
        this.add.image(400, 300, 'bg');

        let x = 400;
        let y = 570;

        this.input.on('pointermove', pointer => {
            x = pointer.worldX;
            y = pointer.worldY;
        });

        this.add.particles(0, 0, 'ball', {
            x: { min: 300, max: 500 },
            y: -32,
            advance: 2000,
            moveToX: {
                onEmit: () => {
                    return x;
                },
                onUpdate: () => {
                    return x;
                }
            },
            moveToY: {
                onEmit: () => {
                    return y;
                },
                onUpdate: () => {
                    return y;
                }
            },
            lifespan: 2000,
            sortProperty: 'lifeT',
            sortOrderAsc: true
        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#000',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
