class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.setBaseURL('http://127.0.0.1:8080/v385');
        this.load.atlas('flares', 'assets/particles/flares.png', 'assets/particles/flares.json');
    }

    create ()
    {
        const particles = this.add.particles('flares');

        particles.createEmitter({
            frame: 'red',
            x: 200, y: 150,
            lifespan: 1000,
            angle: { start: 0, end: 360, steps: 32 },
            speed: 200,
            quantity: 16,
            scale: { start: 0.3, end: 0 },
            frequency: 64,
            blendMode: 'ADD'
        });

        particles.createEmitter({
            frame: 'yellow',
            x: 600, y: 150,
            lifespan: 800,
            angle: { start: 360, end: 0, steps: 32 },
            speed: 200,
            quantity: 1,
            scale: { start: 0.8, end: 0 },
            frequency: 40,
            blendMode: 'ADD'
        });

        particles.createEmitter({
            frame: 'blue',
            x: 200, y: 450,
            lifespan: 1000,
            angle: { start: 0, end: 360, steps: 360 },
            speed: 200,
            quantity: 8,
            scale: { start: 0.4, end: 0 },
            blendMode: 'ADD'
        });

        particles.createEmitter({
            frame: 'green',
            x: 600, y: 450,
            lifespan: { min: 600, max: 800 },
            angle: { start: 0, end: 360, steps: 64 },
            speed: 200,
            quantity: 64,
            scale: { start: 0.2, end: 0.1 },
            frequency: 32,
            blendMode: 'ADD'
        });
    }
}

const config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#000',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
