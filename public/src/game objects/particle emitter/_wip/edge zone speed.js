class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.setBaseURL('http://127.0.0.1:8080/v385');
        this.load.atlas('flares', 'assets/particles/flares.png', 'assets/particles/flares.json');
    }

    create ()
    {
        const shape1 = new Phaser.Geom.Circle(0, 0, 100);
        const shape2 = new Phaser.Geom.Ellipse(0, 0, 500, 150);
        const shape3 = new Phaser.Geom.Rectangle(-150, -150, 300, 300);
        const shape4 = new Phaser.Geom.Line(-150, -150, 150, 150);
        const shape5 = new Phaser.Geom.Triangle(0, -200, 200, 200, -200, 200);

        const particles = this.add.particles('flares');

        particles.createEmitter({
            frame: [ 'red', 'yellow', 'green', 'blue' ],
            x: 400, y: 300,
            speed: 90,
            lifespan: 3000,
            quantity: 48,
            frequency: 2000,
            delay: 1000,
            scale: { start: 0.4, end: 0 },
            blendMode: 'ADD',
            emitZone: { type: 'edge', source: shape5, quantity: 48 }
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
