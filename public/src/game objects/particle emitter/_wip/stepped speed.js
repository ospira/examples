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
            frame: 'green',
            x: 100,
            y: 300,
            lifespan: 2000,
            speedX: { start: 100, end: 400, steps: 12 },
            speedY: { min: -20, max: 20 },
            scale: { start: 0.7, end: 0.2 },
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
