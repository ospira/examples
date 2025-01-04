class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.setBaseURL('http://127.0.0.1:8080/v385');
        this.load.css('80s', 'assets/loader-tests/80stypography.css');
    }

    create ()
    {
        const h1 = this.add.dom(450, 100, 'h1', null, 'CHROME');

        h1.setClassName('chrome');

        const h2 = this.add.dom(570, 180, 'h2', null, 'Dreams');

        h2.setClassName('dreams');
        h2.setAngle(-15);

        this.tweens.add({
            targets: [ h1, h2 ],
            y: 500,
            duration: 3000,
            ease: 'Sine.easeInOut',
            loop: -1,
            yoyo: true
        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#080808',
    parent: 'phaser-example',
    dom: {
        createContainer: true
    },
    scene: Example
};

const game = new Phaser.Game(config);
