class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.setBaseURL('http://127.0.0.1:8080/v385');
        this.load.image('ball', 'assets/sprites/green_ball.png');

        this.load.image('image', 'assets/physics/compound.png');

        this.load.json('shapes', 'assets/physics/compound.json');
    }

    create ()
    {
        this.matter.world.setBounds(0, 0, 800, 600, 32, true, true, false, true);

        const Body = Phaser.Physics.Matter.Matter.Body;
        const Bodies = Phaser.Physics.Matter.Matter.Bodies;
        const Composite = Phaser.Physics.Matter.Matter.Composite;
        const Parser = Phaser.Physics.Matter.PhysicsEditorParser;

        const shapes = this.cache.json.get('shapes');

        const composite = Composite.create();

        const parts = [ 'bird', 'p', 'h', 'a', 's', 'e', 'r' ];

        for (let i = 0; i < parts.length; i++)
        {
            const body = Body.create({ isStatic: true });

            Body.setParts(body, Parser.parseVertices(shapes[parts[i]].fixtures[0].vertices));

            Composite.addBody(composite, body);
        }

        /*
        var fixtures = shapes.logo.fixtures;

        for (var i = 0; i < fixtures.length; i++)
        {
            var body = Body.create({ isStatic: true });

            Body.setParts(body, parseVertices(fixtures[i].vertices));

            Composite.addBody(composite, body);
        }
        */

        Composite.translate(composite, { x: 0, y: 150 });

        this.matter.world.add(composite);

        this.add.image(400, 300, 'image');

        for (let i = 0; i < 64; i++)
        {
            const ball = this.matter.add.image(Phaser.Math.Between(100, 700), Phaser.Math.Between(-600, 0), 'ball');
            ball.setCircle();
            ball.setFriction(0.005);
            ball.setBounce(1);
        }
    }

    parseVertices (vertexSets, options)
    {
        const Matter = Phaser.Physics.Matter.Matter;

        let i, j, k, v, z;
        const parts = [];

        options = options || {};

        for (v = 0; v < vertexSets.length; v += 1)
        {
            parts.push(Matter.Body.create(Matter.Common.extend({
                position: Matter.Vertices.centre(vertexSets[v]),
                vertices: vertexSets[v]
            }, options)));
        }

        // flag coincident part edges
        const coincidentMaxDist = 5;

        for (i = 0; i < parts.length; i++)
        {
            const partA = parts[i];

            for (j = i + 1; j < parts.length; j++)
            {
                const partB = parts[j];

                if (Matter.Bounds.overlaps(partA.bounds, partB.bounds))
                {
                    const pav = partA.vertices,
                        pbv = partB.vertices;

                    // iterate vertices of both parts
                    for (k = 0; k < partA.vertices.length; k++)
                    {
                        for (z = 0; z < partB.vertices.length; z++)
                        {
                            // find distances between the vertices
                            const da = Matter.Vector.magnitudeSquared(Matter.Vector.sub(pav[(k + 1) % pav.length], pbv[z])),
                                db = Matter.Vector.magnitudeSquared(Matter.Vector.sub(pav[k], pbv[(z + 1) % pbv.length]));

                            // if both vertices are very close, consider the edge concident (internal)
                            if (da < coincidentMaxDist && db < coincidentMaxDist)
                            {
                                pav[k].isInternal = true;
                                pbv[z].isInternal = true;
                            }
                        }
                    }

                }
            }
        }

        return parts;
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#0094f7',
    parent: 'phaser-example',
    physics: {
        default: 'matter',
        matter: {
            debug: true
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);
