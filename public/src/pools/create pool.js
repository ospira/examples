class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.setBaseURL('http://127.0.0.1:8080/v385');
        this.load.image('cokecan', 'assets/sprites/cokecan.png');
    }

    create ()
    {
        const info = this.add.text(0, 0, 'Click to add objects', { fill: '#00ff00' });

        //  Our pool - essentially a Group that takes advantage of maxSize

        //  Setting the maxSize property limits the amount of objects allowed in this pool

        const cans = this.add.group({
            defaultKey: 'cokecan',
            maxSize: 10
        });

        let x = 60;

        this.input.on('pointerdown', () =>
        {

            //  Pluck an entry from the pool. If it doesn't already exist, create it.
            cans.get(x, 300);

            x += 74;

            info.setText([
                `Used: ${cans.getTotalUsed()}`,
                `Free: ${cans.getTotalFree()}`
            ]);

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
