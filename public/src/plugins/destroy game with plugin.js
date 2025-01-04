class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.setBaseURL('http://127.0.0.1:8080/v385');
        this.load.plugin('RandomNamePlugin', 'assets/loader-tests/RandomNamePlugin.js', true);
    }

    create ()
    {
        let plugin = this.plugins.get('RandomNamePlugin');

        let names = plugin.getNames(10);

        names.push('', 'Click to destroy game instance');

        this.add.text(10, 10, names, { font: '16px Courier', fill: '#00ff00' });

        this.input.on('pointerdown', function ()
        {

            this.sys.game.destroy(true);

            document.addEventListener('mousedown', function newGame ()
            {

                game = new Phaser.Game(config);

                document.removeEventListener('mousedown', newGame);

            });

        }, this);
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: Example
};

let game = new Phaser.Game(config);
