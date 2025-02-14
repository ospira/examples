class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.setBaseURL('http://127.0.0.1:8080/v355');
        this.load.xml('data', 'assets/loader-tests/test.xml');
    }

    create ()
    {
        const catalog = this.cache.xml.get('data');
        const books = catalog.getElementsByTagName('book');
        Array.from(books).forEach(book => {
            console.log(book.getAttribute('id'));
        });
    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    scene: [ Example ]
};

const game = new Phaser.Game(config);
