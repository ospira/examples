class Example extends Phaser.Scene
{
    text;

    preload ()
    {
        this.load.setBaseURL('http://127.0.0.1:8080/v385');
        this.load.setPath('assets/sprites/');

        this.load.image('128x128');
        this.load.image('amiga-cursor');
        this.load.image('aqua_ball');
        this.load.image('arrow');
        this.load.image('asuna_by_vali233');
        this.load.image('atari130xe');
        this.load.image('atari400');
        this.load.image('atari800');
        this.load.image('atari800xl');
        this.load.image('atari1200xl');
        this.load.image('balls');
        this.load.image('beball1');
        this.load.image('bikkuriman');
        this.load.image('block');
        this.load.image('blue_ball');
        this.load.image('bluebar');
        this.load.image('bsquadron1');
        this.load.image('bsquadron2');
        this.load.image('bsquadron3');
        this.load.image('budbrain_chick');
        this.load.image('bullet');
        this.load.image('bunny');
        this.load.image('cakewalk');
        this.load.image('flectrum');
        this.load.image('fork');
    }

    create ()
    {
        const keys = this.textures.getTextureKeys();

        for (let i = 0; i < keys.length; i++)
        {
            const x = Phaser.Math.Between(100, 700);
            const y = Phaser.Math.Between(30, 300);

            this.add.image(x, y, keys[i]).setOrigin(0.5, 0);
        }

        this.text = this.add.text(10, 10, 'Click to start the loader', { font: '16px Courier', fill: '#00ff00' });

        this.input.once('pointerup', function ()
        {
      
            this.text.setText('Loading again ...');

            this.load.setPath('assets/sprites/');

            this.load.once('complete', this.subLoadCompleted, this);

            //  Load all the same files again to test we still get the complete event
            this.load.image('128x128');
            this.load.image('amiga-cursor');
            this.load.image('aqua_ball');
            this.load.image('arrow');
            this.load.image('asuna_by_vali233');
            this.load.image('atari130xe');
            this.load.image('atari400');
            this.load.image('atari800');
            this.load.image('atari800xl');
            this.load.image('atari1200xl');
            this.load.image('balls');
            this.load.image('beball1');
            this.load.image('bikkuriman');
            this.load.image('block');
            this.load.image('blue_ball');
            this.load.image('bluebar');
            this.load.image('bsquadron1');
            this.load.image('bsquadron2');
            this.load.image('bsquadron3');
            this.load.image('budbrain_chick');
            this.load.image('bullet');
            this.load.image('bunny');
            this.load.image('cakewalk');
            this.load.image('flectrum');
            this.load.image('fork');

            this.load.start();
        
        }, this);
    }

    subLoadCompleted ()
    {
        this.text.setText('Load Complete');
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
