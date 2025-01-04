class Example extends Phaser.Scene
{
    info;

    preload ()
    {
        this.load.setBaseURL('http://127.0.0.1:8080/v385');
        this.load.setPath('assets/sprites');

        this.load.image('blockAP');
        this.load.image('blockBP');
        this.load.image('blockANP');
        this.load.image('blockBNP');
        this.load.image('blockANM');
        this.load.image('blockBNM');
    }

    create ()
    {
        let colliderSet = false;

        const setVelocity = (body, v) =>
        {
            if (colliderSet)
            {
                body.setVelocityY(v);
            }
            else
            {
                this.info.setColor('#ff0000');
            }
        };

        this.physics.world.setBounds(0, 0, 800 + 256, 600);

        //  Test 1

        const test1A = this.physics.add.image(80, 500, 'blockAP').setCollideWorldBounds().setInteractive();
        const test1B = this.physics.add.image(80, 150, 'blockBP').setCollideWorldBounds().setInteractive();

        test1A.setBounce(0.5);
        test1B.setBounce(0.5);
        test1A.setCircle(32);
        // test1B.setCircle(32);

        test1A.on('pointerdown', () =>
        {
            setVelocity(test1A, -200);
        });

        test1B.on('pointerdown', () =>
        {
            setVelocity(test1B, 200);
        });

        //  Test 2

        const test2A = this.physics.add.image(208, 500, 'blockANP').setCollideWorldBounds().setInteractive();
        const test2B = this.physics.add.image(208, 150, 'blockBNP').setCollideWorldBounds().setInteractive();

        test2A.setBounce(0.5);
        test2B.setBounce(0.5);
        test2A.setPushable(false);
        test2B.setPushable(false);
        test2A.setCircle(32);
        // test2B.setCircle(32);

        test2A.on('pointerdown', () =>
        {
            setVelocity(test2A, -200);
        });

        test2B.on('pointerdown', () =>
        {
            setVelocity(test2B, 200);
        });

        //  Test 3

        const test3A = this.physics.add.image(336, 500, 'blockAP').setCollideWorldBounds().setInteractive();
        const test3B = this.physics.add.image(336, 150, 'blockBNP').setCollideWorldBounds().setInteractive();

        test3A.setBounce(0.5);
        test3B.setBounce(0.5);
        test3B.setPushable(false);
        test3A.setCircle(32);
        // test3B.setCircle(32);

        test3A.on('pointerdown', () =>
        {
            setVelocity(test3A, -200);
        });

        test3B.on('pointerdown', () =>
        {
            setVelocity(test3B, 200);
        });

        //  Test 4

        const test4A = this.physics.add.image(464, 500, 'blockANP').setCollideWorldBounds().setInteractive();
        const test4B = this.physics.add.image(464, 150, 'blockBP').setCollideWorldBounds().setInteractive();

        test4A.setBounce(0.5);
        test4B.setBounce(0.5);
        test4A.setPushable(false);
        test4A.setCircle(32);
        // test4B.setCircle(32);

        test4A.on('pointerdown', () =>
        {
            setVelocity(test4A, -200);
        });

        test4B.on('pointerdown', () =>
        {
            setVelocity(test4B, 200);
        });

        //  Test 5

        const test5A = this.physics.add.image(592, 500, 'blockAP').setCollideWorldBounds().setInteractive();
        const test5B = this.physics.add.image(592, 150, 'blockBNM').setCollideWorldBounds().setInteractive();

        test5A.setBounce(0.5);
        test5B.setBounce(0.5);
        test5B.setImmovable(true);
        test5A.setCircle(32);
        // test5B.setCircle(32);

        test5A.on('pointerdown', () =>
        {
            setVelocity(test5A, -200);
        });

        test5B.on('pointerdown', () =>
        {
            setVelocity(test5B, 200);
        });

        //  Test 6

        const test6A = this.physics.add.image(720, 500, 'blockANP').setCollideWorldBounds().setInteractive();
        const test6B = this.physics.add.image(720, 150, 'blockBNM').setCollideWorldBounds().setInteractive();

        test6A.setBounce(0.5);
        test6B.setBounce(0.5);
        test6A.setPushable(false);
        test6B.setImmovable(true);
        test6A.setCircle(32);
        // test6B.setCircle(32);

        test6A.on('pointerdown', () =>
        {
            setVelocity(test6A, -200);
        });

        test6B.on('pointerdown', () =>
        {
            setVelocity(test6B, 200);
        });

        //  Test 7

        const test7A = this.physics.add.image(848, 500, 'blockANM').setCollideWorldBounds().setInteractive();
        const test7B = this.physics.add.image(848, 150, 'blockBP').setCollideWorldBounds().setInteractive();

        test7A.setBounce(0.5);
        test7B.setBounce(0.5);
        test7A.setImmovable(true);
        test7B.setPushable(true);
        test7A.setCircle(32);
        // test7B.setCircle(32);

        test7A.on('pointerdown', () =>
        {
            setVelocity(test7A, -200);
        });

        test7B.on('pointerdown', () =>
        {
            setVelocity(test7B, 200);
        });

        //  Test 8

        const test8A = this.physics.add.image(976, 500, 'blockANM').setCollideWorldBounds().setInteractive();
        const test8B = this.physics.add.image(976, 150, 'blockBNP').setCollideWorldBounds().setInteractive();

        test8A.setBounce(0.5);
        test8B.setBounce(0.5);
        test8A.setImmovable(true);
        test8B.setPushable(false);
        test8A.setCircle(32);
        // test8B.setCircle(32);

        test8A.on('pointerdown', () =>
        {
            setVelocity(test8A, -200);
        });

        test8B.on('pointerdown', () =>
        {
            setVelocity(test8B, 200);
        });

        //  Runner

        this.info = this.add.text(16, 16, 'Click the collider first:');

        const atob = this.add.text(280, 16, 'A to B').setInteractive();
        const btoa = this.add.text(400, 16, 'B to A').setInteractive();

        atob.once('pointerdown', () =>
        {

            atob.setColor('#ffff00');
            btoa.setAlpha(0.2);
            colliderSet = true;

            this.physics.add.collider(test1A, test1B);
            this.physics.add.collider(test2A, test2B);
            this.physics.add.collider(test3A, test3B);
            this.physics.add.collider(test4A, test4B);
            this.physics.add.collider(test5A, test5B);
            this.physics.add.collider(test6A, test6B);
            this.physics.add.collider(test7A, test7B);
            this.physics.add.collider(test8A, test8B);

        });

        btoa.once('pointerdown', () =>
        {

            btoa.setColor('#ffff00');
            atob.setAlpha(0.2);
            colliderSet = true;

            this.physics.add.collider(test1B, test1A);
            this.physics.add.collider(test2B, test2A);
            this.physics.add.collider(test3B, test3A);
            this.physics.add.collider(test4B, test4A);
            this.physics.add.collider(test5B, test5A);
            this.physics.add.collider(test6B, test6A);
            this.physics.add.collider(test7B, test7A);
            this.physics.add.collider(test8B, test8A);

        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800 + 256,
    height: 600,
    parent: 'phaser-example',
    backgroundColor: '#2d2d2d',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: true
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);
