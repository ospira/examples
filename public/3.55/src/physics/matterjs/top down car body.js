var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    physics: {
        default: 'matter',
        matter: {
            debug: false,
            gravity: {
                x: 0,
                y: 0
            }
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var car;
var tracker1;
var tracker2;
var cursors;

var game = new Phaser.Game(config);

function preload ()
{
        this.load.setBaseURL('http://127.0.0.1:8080/v355');
    this.load.image('soil', 'assets/textures/soil.png');
    this.load.image('car', 'assets/sprites/car-yellow.png');
}

function create ()
{
    this.add.tileSprite(400, 300, 800, 600, 'soil');

    car = this.matter.add.image(400, 300, 'car');
    car.setAngle(-90);
    car.setFrictionAir(0.2);
    car.setMass(10);

    this.matter.world.setBounds(0, 0, 800, 600);

    tracker1 = this.add.rectangle(0, 0, 4, 4, 0x00ff00);
    tracker2 = this.add.rectangle(0, 0, 4, 4, 0xff0000);

    cursors = this.input.keyboard.createCursorKeys();
}

var vec = Phaser.Physics.Matter.Matter.Vector;

function update ()
{
    var point1 = car.getTopRight();
    var point2 = car.getBottomRight();

    tracker1.setPosition(point1.x, point1.y);
    tracker2.setPosition(point2.x, point2.y);
    
    var speed = 0.03;
    var angle = vec.angle(point1, point2);
    var force = {x: Math.cos(angle) * speed, y: Math.sin(angle) * speed}
    if (cursors.up.isDown)
    {
        car.thrust(0.05);
        steer(vec.neg(force));
    }
    else if (cursors.down.isDown)
    {
        car.thrustBack(0.05);
        steer(force);
    }
}

function steer (force) {
    if (cursors.left.isDown)
    {
        Phaser.Physics.Matter.Matter.Body.applyForce(car.body, car.getTopRight(), force);
    }
    else if (cursors.right.isDown)
    {
        Phaser.Physics.Matter.Matter.Body.applyForce(car.body, car.getBottomRight(), vec.neg(force));
    }
}
