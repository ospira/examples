var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var spider;
var guide;
var light;
var circle;
var point;
var container;

var game = new Phaser.Game(config);

function preload ()
{
        this.load.setBaseURL('http://127.0.0.1:8080/v355');
    this.load.image('spider', ['assets/normal-maps/spider.png', 'assets/normal-maps/spider_n.png']);
    this.load.image('light', 'assets/normal-maps/light.png');
}

function create ()
{
    container = this.add.container(400, 300);
    spider = this.add.sprite(0, 0, 'spider');
    container.add(spider);

    // spider = this.add.sprite(400, 300, 'spider');

    spider.setPipeline('Light2D');

    light  = this.lights.addLight(0, 0, 500).setIntensity(6);

    this.lights.enable().setAmbientColor(0x888888);

    //  So you can see where the light is positioned
    circle = new Phaser.Geom.Circle(400, 300, 200);

    guide = this.add.image(0, 0, 'light');
}

function update ()
{
    container.rotation += 0.005;
    Phaser.Geom.Circle.CircumferencePoint(circle, container.rotation - (Math.PI / 2), guide);

    // spider.rotation += 0.005;
    // Phaser.Geom.Circle.CircumferencePoint(circle, spider.rotation - (Math.PI / 2), guide);

    light.x = guide.x;
    light.y = guide.y;
}
