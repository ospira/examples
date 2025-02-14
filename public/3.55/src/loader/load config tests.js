var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
        this.load.setBaseURL('http://127.0.0.1:8080/v355');
    //  Load via an object
    // this.load.image({ key: 'bunny', url: 'assets/sprites/bunny.png' });

    //  Load via an array of objects
    /*
    this.load.image([
        { key: 'bunny', url: 'assets/sprites/bunny.png' },
        { key: 'atari', url: 'assets/sprites/atari400.png' },
        { key: 'logo', url: 'assets/sprites/phaser2.png' }
    ]);
    */

    //  Object based including XHR Settings

    this.load.image({
        key: 'bunny',
        url: 'assets/sprites/bunny.png',
        xhr: {
            user: 'root',
            password: 'th3G1bs0n',
            timeout: 10,
            header: 'Content-Type',
            headerValue: 'image/png'
        }
    });

    /*
    //  Auto-filename based on key:

    //  Will load bunny.png from the defined path, because '.png' is the default extension.
    this.load.image({ key: 'bunny' });

    //  Will load bunny.jpg from the defined path, because of the 'ext' property.
    this.load.image({ key: 'bunny', extension: 'jpg' });

    //  ----------------------
    //  Texture Atlas Examples
    //  ----------------------

    //  Original atlas loader signature:
    //  this.load.atlas(key, textureURL, atlasURL, textureXhrSettings, atlasXhrSettings)

    this.load.atlas('level1', 'assets/level1/items.png', 'assets/level1/items.json');

    //  Object based
    this.load.atlas({ key: 'level1', textureURL: 'assets/level1/items.png', atlasURL: 'assets/level1/items.json' });
    */
}

function create ()
{
    this.add.image(400, 300, 'bunny');
}
