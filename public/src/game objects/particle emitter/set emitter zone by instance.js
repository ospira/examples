class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.setBaseURL('http://127.0.0.1:8080/v385');
        this.load.image('bg', 'assets/skies/darkstone.png');
        this.load.image('flare', 'assets/particles/white-flare.png');
        this.load.image('fox', 'assets/pics/card3.png');
        this.load.image('lizard', 'assets/pics/card2.png');
    }

    create ()
    {
        this.add.image(400, 300, 'bg');

        const card1 = this.add.image(225, 300, 'fox').setInteractive();
        const card2 = this.add.image(575, 300, 'lizard').setInteractive();

        const zone1 = new Phaser.GameObjects.Particles.Zones.EdgeZone(card1.getBounds(), 42);
        const zone2 = new Phaser.GameObjects.Particles.Zones.EdgeZone(card2.getBounds(), 42);

        const emitter = this.add.particles(0, 0, 'flare', {
            speed: 24,
            lifespan: 1500,
            quantity: 5,
            scale: { start: 0.4, end: 0 },
            advance: 2000,
            emitZone: [ zone1, zone2 ]
        });

        card1.on('pointerover', () => {

            emitter.setEmitZone(zone1);
            emitter.fastForward(2000);

        });

        card2.on('pointerover', () => {

            emitter.setEmitZone(zone2);
            emitter.fastForward(2000);

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
