class Intro extends Phaser.Scene {
    constructor() {
        super('intro');
    }
    create() {
        let box = this.add.text(10, 10,
`INSTRUCTIONS
Mouse: Controls Where You Drop The Plinko
Left Click: Resets The Current Level
Up Arrow: Drops The Plinko
Down Arrow: Moves Onto Next Level

Click to Begin...`
        );
        this.input.on('pointerdown', () => this.scene.start('Example'));
    }
}

class Example extends Phaser.Scene
{

    constructor ()
    {
        super({
            key: 'Example',
            physics: {
                arcade: {
                    debug: false,
                    gravity: { y: 200 }
                },
                matter: {
                    debug: false,
                    gravity: { y: 0.5 }
                }
            }
        });
        this.move = 0;
        this.x = 0;
        this.y = 0;
        this.drop;
    }

    preload ()
    {
        //this.load.image('fuji', 'assets/sprites/fuji.png');
        this.load.image('block', 'assets/plinkoball.png');
        this.load.image('peg', 'assets/pegs.png');
        this.load.image('win', 'assets/win1.png');
        this.load.image('lose', 'assets/lose1.png');
        this.load.image('divide', 'assets/divider.png');
        this.load.image('arrow', 'assets/arrow.png');
        this.load.image('wall', 'assets/wall.png');
    }

    create ()
    {      
        //setting up pegs for plinko
        let peg1 = this.matter.add.image(300, 100, 'peg', null, { isStatic: true });
        peg1.setCircle(17);
        peg1.setStatic(true);

        let peg2 = this.matter.add.image(375, 150, 'peg', null, { isStatic: true });
        peg2.setCircle(17);
        peg2.setStatic(true);

        let peg3 = this.matter.add.image(225, 150, 'peg', null, { isStatic: true });
        peg3.setCircle(17);
        peg3.setStatic(true);

        let peg4 = this.matter.add.image(300, 200, 'peg', null, { isStatic: true });
        peg4.setCircle(17);
        peg4.setStatic(true);

        let peg5 = this.matter.add.image(150, 200, 'peg', null, { isStatic: true });
        peg5.setCircle(17);
        peg5.setStatic(true);

        let peg6 = this.matter.add.image(450, 200, 'peg', null, { isStatic: true });
        peg6.setCircle(17);
        peg6.setStatic(true);

        let peg7 = this.matter.add.image(375, 250, 'peg', null, { isStatic: true });
        peg7.setCircle(17);
        peg7.setStatic(true);

        let peg8 = this.matter.add.image(225, 250, 'peg', null, { isStatic: true });
        peg8.setCircle(17);
        peg8.setStatic(true);

        let peg9 = this.matter.add.image(75, 250, 'peg', null, { isStatic: true });
        peg9.setCircle(17);
        peg9.setStatic(true);

        let peg10 = this.matter.add.image(525, 250, 'peg', null, { isStatic: true });
        peg10.setCircle(17);
        peg10.setStatic(true);

        let peg11 = this.matter.add.image(450, 300, 'peg', null, { isStatic: true });
        peg11.setCircle(17);
        peg11.setStatic(true);

        let peg12 = this.matter.add.image(150, 300, 'peg', null, { isStatic: true });
        peg12.setCircle(17);
        peg12.setStatic(true);

        let divider = this.matter.add.image(300, 450, 'divide', null, { isStatic: true});

        this.win = this.matter.add.image(150, 475, 'win', null, { isStatic: true});

        let lose = this.matter.add.image(450, 475, 'lose', null, { isStatic: true});

        this.matter.add.image(0, 250, 'wall', null, { isStatic: true});

        this.matter.add.image(600, 250, 'wall', null, { isStatic: true});

        this.group = this.add.group({key: 'arrow', frameQuantity: 1});
       
          //Arcade Physics:
        //const block = this.physics.add.image(400, 100, 'fuji');

        //block.setVelocity(100, 200);
        //block.setBounce(1, 1);
        //drop.setCollideWorldBounds(true);

        // set up cursor keys
        this.cursors = this.input.keyboard.createCursorKeys();

        this.input.on('pointermove', function (pointer) {
            this.x = pointer.x;
        }, this);

        this.input.on('pointerdown', () => {
            this.scene.start('Example');
            this.y = 0;
        });
    }

    update(time, delta) {
        this.move += delta;
        if (this.move > 6) {
            Phaser.Actions.ShiftPosition(this.group.getChildren(), this.x, 50);
            this.move = 0;
        }

        if(this.cursors.up.isDown && this.y == 0) {
            this.drop = this.matter.add.image(this.x, -100, 'block');
            this.drop.setCircle(20);
            this.drop.setBounce(1);
            this.y = 1;
        }

        if(this.cursors.down.isDown){
            this.y = 0;
            this.scene.start('post1');
        }
    }
}

class Post1 extends Phaser.Scene {
    constructor() {
        super('post1');
    }
    create() {
        let box = this.add.text(10, 10,
`LEVEL 1 COMPLETE
Good work, though that level is basically impossible to fail. 
Let's see how you like dealing with some actual Plinko.

Click to Begin Level 2...`
        );
        this.input.on('pointerdown', () => this.scene.start('Example2'));
    }
}

class Example2 extends Phaser.Scene
{

    constructor ()
    {
        super({
            key: 'Example2',
            physics: {
                arcade: {
                    debug: false,
                    gravity: { y: 200 }
                },
                matter: {
                    debug: false,
                    gravity: { y: 0.5 }
                }
            }
        });
        this.move = 0;
        this.x = 0;
        this.y = 0;
        this.drop;
    }

    preload ()
    {
        //this.load.image('fuji', 'assets/sprites/fuji.png');
        this.load.image('block', 'assets/plinkoball.png');
        this.load.image('peg', 'assets/pegs.png');
        this.load.image('win', 'assets/win1.png');
        this.load.image('lose', 'assets/lose1.png');
        this.load.image('divide2', 'assets/divider2.png');
        this.load.image('arrow', 'assets/arrow.png');
        this.load.image('wall', 'assets/wall.png');
        this.load.image('rect', 'assets/rect.png');
    }

    create ()
    {        
        //setting up pegs for plinko
        let peg1 = this.matter.add.image(300, 100, 'peg', null, { isStatic: true });
        peg1.setCircle(17);
        peg1.setStatic(true);

        let peg2 = this.matter.add.image(374, 100, 'peg', null, { isStatic: true });
        peg2.setCircle(17);
        peg2.setStatic(true);

        let peg3 = this.matter.add.image(448, 100, 'peg', null, { isStatic: true });
        peg3.setCircle(17);
        peg3.setStatic(true);

        let peg4 = this.matter.add.image(522, 100, 'peg', null, { isStatic: true });
        peg4.setCircle(17);
        peg4.setStatic(true);

        let peg5 = this.matter.add.image(596, 100, 'peg', null, { isStatic: true });
        peg5.setCircle(17);
        peg5.setStatic(true);

        let peg6 = this.matter.add.image(226, 100, 'peg', null, { isStatic: true });
        peg6.setCircle(17);
        peg6.setStatic(true);

        let peg7 = this.matter.add.image(152, 100, 'peg', null, { isStatic: true });
        peg7.setCircle(17);
        peg7.setStatic(true);

        let peg8 = this.matter.add.image(78, 100, 'peg', null, { isStatic: true });
        peg8.setCircle(17);
        peg8.setStatic(true);

        let peg9 = this.matter.add.image(4, 100, 'peg', null, { isStatic: true });
        peg9.setCircle(17);
        peg9.setStatic(true);

        let peg10 = this.matter.add.image(337, 175, 'peg', null, { isStatic: true });
        peg10.setCircle(17);
        peg10.setStatic(true);

        let peg11 = this.matter.add.image(411, 175, 'peg', null, { isStatic: true });
        peg11.setCircle(17);
        peg11.setStatic(true);

        let peg12 = this.matter.add.image(485, 175, 'peg', null, { isStatic: true });
        peg12.setCircle(17);
        peg12.setStatic(true);

        let peg13 = this.matter.add.image(559, 175, 'peg', null, { isStatic: true });
        peg13.setCircle(17);
        peg13.setStatic(true);

        let peg14 = this.matter.add.image(263, 175, 'peg', null, { isStatic: true });
        peg14.setCircle(17);
        peg14.setStatic(true);

        let peg15 = this.matter.add.image(189, 175, 'peg', null, { isStatic: true });
        peg15.setCircle(17);
        peg15.setStatic(true);

        let peg16 = this.matter.add.image(115, 175, 'peg', null, { isStatic: true });
        peg16.setCircle(17);
        peg16.setStatic(true);

        let peg17 = this.matter.add.image(41, 175, 'peg', null, { isStatic: true });
        peg17.setCircle(17);
        peg17.setStatic(true);

        let peg18 = this.matter.add.image(300, 250, 'peg', null, { isStatic: true });
        peg18.setCircle(17);
        peg18.setStatic(true);

        let peg19 = this.matter.add.image(374, 250, 'peg', null, { isStatic: true });
        peg19.setCircle(17);
        peg19.setStatic(true);

        let peg20 = this.matter.add.image(448, 250, 'peg', null, { isStatic: true });
        peg20.setCircle(17);
        peg20.setStatic(true);

        let peg21 = this.matter.add.image(522, 250, 'peg', null, { isStatic: true });
        peg21.setCircle(17);
        peg21.setStatic(true);

        let peg22 = this.matter.add.image(596, 250, 'peg', null, { isStatic: true });
        peg22.setCircle(17);
        peg22.setStatic(true);

        let peg23 = this.matter.add.image(226, 250, 'peg', null, { isStatic: true });
        peg23.setCircle(17);
        peg23.setStatic(true);

        let peg24 = this.matter.add.image(152, 250, 'peg', null, { isStatic: true });
        peg24.setCircle(17);
        peg24.setStatic(true);

        let peg25 = this.matter.add.image(78, 250, 'peg', null, { isStatic: true });
        peg25.setCircle(17);
        peg25.setStatic(true);

        let peg26 = this.matter.add.image(4, 250, 'peg', null, { isStatic: true });
        peg26.setCircle(17);
        peg26.setStatic(true);

        let peg27 = this.matter.add.image(337, 325, 'peg', null, { isStatic: true });
        peg27.setCircle(17);
        peg27.setStatic(true);

        let peg28 = this.matter.add.image(411, 325, 'peg', null, { isStatic: true });
        peg28.setCircle(17);
        peg28.setStatic(true);

        let peg29 = this.matter.add.image(485, 325, 'peg', null, { isStatic: true });
        peg29.setCircle(17);
        peg29.setStatic(true);

        let peg30 = this.matter.add.image(559, 325, 'peg', null, { isStatic: true });
        peg30.setCircle(17);
        peg30.setStatic(true);

        let peg31 = this.matter.add.image(263, 325, 'peg', null, { isStatic: true });
        peg31.setCircle(17);
        peg31.setStatic(true);

        let peg32 = this.matter.add.image(189, 325, 'peg', null, { isStatic: true });
        peg32.setCircle(17);
        peg32.setStatic(true);

        let peg33 = this.matter.add.image(115, 325, 'peg', null, { isStatic: true });
        peg33.setCircle(17);
        peg33.setStatic(true);

        let peg34 = this.matter.add.image(41, 325, 'peg', null, { isStatic: true });
        peg34.setCircle(17);
        peg34.setStatic(true);

        let peg35 = this.matter.add.image(300, 425, 'peg', null, { isStatic: true });
        peg35.setCircle(17);
        peg35.setStatic(true);

        let peg36 = this.matter.add.image(150, 425, 'peg', null, { isStatic: true });
        peg36.setCircle(17);
        peg36.setStatic(true);

        let peg37 = this.matter.add.image(450, 425, 'peg', null, { isStatic: true });
        peg37.setCircle(17);
        peg37.setStatic(true);

        this.matter.add.image(300, 525, 'divide2', null, { isStatic: true});

        this.matter.add.image(150, 525, 'divide2', null, { isStatic: true});

        this.matter.add.image(450, 525, 'divide2', null, { isStatic: true});

        this.win = this.matter.add.image(50, 475, 'win', null, { isStatic: true});

        this.matter.add.image(380, 475, 'win', null, { isStatic: true});

        let lose = this.matter.add.image(220, 475, 'lose', null, { isStatic: true});

        this.matter.add.image(550, 475, 'lose', null, { isStatic: true});

        this.matter.add.image(0, 250, 'wall', null, { isStatic: true});

        this.matter.add.image(600, 250, 'wall', null, { isStatic: true});

        this.group = this.add.group({key: 'arrow', frameQuantity: 1});

        //this.rect = this.matter.add.image(300, 200, 'rect', null, { isStatic: true});
       
          //Arcade Physics:
        //const block = this.physics.add.image(400, 100, 'fuji');

        //block.setVelocity(100, 200);
        //block.setBounce(1, 1);
        //drop.setCollideWorldBounds(true);

        // set up cursor keys
        this.cursors = this.input.keyboard.createCursorKeys();

        this.input.on('pointermove', function (pointer) {
            this.x = pointer.x;
        }, this);

        this.input.on('pointerdown', () => {
            this.scene.start('Example2');
            this.y = 0;
        });
    }

    update(time, delta) {
        this.move += delta;
        if (this.move > 6) {
            Phaser.Actions.ShiftPosition(this.group.getChildren(), this.x, 50);
            this.move = 0;
        }

        if(this.cursors.up.isDown && this.y == 0) {
            this.drop = this.matter.add.image(this.x, -100, 'block');
            this.drop.setCircle(20);
            this.drop.setBounce(1);
            this.y = 1;
        }

        if(this.cursors.down.isDown){
            this.scene.start('post2');
            this.y = 0;
        }
    }
}

class Post2 extends Phaser.Scene {
    constructor() {
        super('post2');
    }
    create() {
        let box = this.add.text(10, 10,
`LEVEL 2 COMPLETE
Nice job, that shouldn't have been too bad.  Probably.
I hope you didn't cheat, I can't really stop you.
Anyways time for the final fun.

Click to Begin Level 3...`
        );
        this.input.on('pointerdown', () => this.scene.start('Example3'));
    }
}

class Example3 extends Phaser.Scene
{

    constructor ()
    {
        super({
            key: 'Example3',
            physics: {
                arcade: {
                    debug: false,
                    gravity: { y: 200 }
                },
                matter: {
                    debug: false,
                    gravity: { y: 0.5 }
                }
            }
        });
        this.move = 0;
        this.x = 0;
        this.y = 0;
        this.drop;
    }

    preload ()
    {
        //this.load.image('fuji', 'assets/sprites/fuji.png');
        this.load.image('block', 'assets/plinkoball.png');
        this.load.image('peg', 'assets/pegs.png');
        this.load.image('win', 'assets/win1.png');
        this.load.image('lose', 'assets/lose1.png');
        this.load.image('divide2', 'assets/divider2.png');
        this.load.image('arrow', 'assets/arrow.png');
        this.load.image('wall', 'assets/wall.png');
        this.load.image('rect', 'assets/rect.png');
        this.load.image('l', 'assets/L.png');
        this.load.image('w', 'assets/W.png');
    }

    create ()
    {        
        //setting up pegs for plinko
        let peg1 = this.matter.add.image(300, 100, 'peg', null, { isStatic: true });
        peg1.setCircle(17);
        peg1.setStatic(true);

        let peg2 = this.matter.add.image(374, 100, 'peg', null, { isStatic: true });
        peg2.setCircle(17);
        peg2.setStatic(true);

        let peg3 = this.matter.add.image(448, 100, 'peg', null, { isStatic: true });
        peg3.setCircle(17);
        peg3.setStatic(true);

        let peg4 = this.matter.add.image(522, 100, 'peg', null, { isStatic: true });
        peg4.setCircle(17);
        peg4.setStatic(true);

        let peg5 = this.matter.add.image(596, 100, 'peg', null, { isStatic: true });
        peg5.setCircle(17);
        peg5.setStatic(true);

        let peg6 = this.matter.add.image(226, 100, 'peg', null, { isStatic: true });
        peg6.setCircle(17);
        peg6.setStatic(true);

        let peg7 = this.matter.add.image(152, 100, 'peg', null, { isStatic: true });
        peg7.setCircle(17);
        peg7.setStatic(true);

        let peg8 = this.matter.add.image(78, 100, 'peg', null, { isStatic: true });
        peg8.setCircle(17);
        peg8.setStatic(true);

        let peg9 = this.matter.add.image(4, 100, 'peg', null, { isStatic: true });
        peg9.setCircle(17);
        peg9.setStatic(true);

        let peg10 = this.matter.add.image(337, 175, 'peg', null, { isStatic: true });
        peg10.setCircle(17);
        peg10.setStatic(true);

        let peg11 = this.matter.add.image(411, 175, 'peg', null, { isStatic: true });
        peg11.setCircle(17);
        peg11.setStatic(true);

        let peg12 = this.matter.add.image(485, 175, 'peg', null, { isStatic: true });
        peg12.setCircle(17);
        peg12.setStatic(true);

        let peg13 = this.matter.add.image(559, 175, 'peg', null, { isStatic: true });
        peg13.setCircle(17);
        peg13.setStatic(true);

        let peg14 = this.matter.add.image(263, 175, 'peg', null, { isStatic: true });
        peg14.setCircle(17);
        peg14.setStatic(true);

        let peg15 = this.matter.add.image(189, 175, 'peg', null, { isStatic: true });
        peg15.setCircle(17);
        peg15.setStatic(true);

        let peg16 = this.matter.add.image(115, 175, 'peg', null, { isStatic: true });
        peg16.setCircle(17);
        peg16.setStatic(true);

        let peg17 = this.matter.add.image(41, 175, 'peg', null, { isStatic: true });
        peg17.setCircle(17);
        peg17.setStatic(true);

        let peg18 = this.matter.add.image(300, 250, 'peg', null, { isStatic: true });
        peg18.setCircle(17);
        peg18.setStatic(true);

        let peg19 = this.matter.add.image(374, 250, 'peg', null, { isStatic: true });
        peg19.setCircle(17);
        peg19.setStatic(true);

        let peg20 = this.matter.add.image(448, 250, 'peg', null, { isStatic: true });
        peg20.setCircle(17);
        peg20.setStatic(true);

        let peg21 = this.matter.add.image(522, 250, 'peg', null, { isStatic: true });
        peg21.setCircle(17);
        peg21.setStatic(true);

        let peg22 = this.matter.add.image(596, 250, 'peg', null, { isStatic: true });
        peg22.setCircle(17);
        peg22.setStatic(true);

        let peg23 = this.matter.add.image(226, 250, 'peg', null, { isStatic: true });
        peg23.setCircle(17);
        peg23.setStatic(true);

        let peg24 = this.matter.add.image(152, 250, 'peg', null, { isStatic: true });
        peg24.setCircle(17);
        peg24.setStatic(true);

        let peg25 = this.matter.add.image(78, 250, 'peg', null, { isStatic: true });
        peg25.setCircle(17);
        peg25.setStatic(true);

        let peg26 = this.matter.add.image(4, 250, 'peg', null, { isStatic: true });
        peg26.setCircle(17);
        peg26.setStatic(true);

        let peg27 = this.matter.add.image(337, 325, 'peg', null, { isStatic: true });
        peg27.setCircle(17);
        peg27.setStatic(true);

        let peg28 = this.matter.add.image(411, 325, 'peg', null, { isStatic: true });
        peg28.setCircle(17);
        peg28.setStatic(true);

        let peg29 = this.matter.add.image(485, 325, 'peg', null, { isStatic: true });
        peg29.setCircle(17);
        peg29.setStatic(true);

        let peg30 = this.matter.add.image(559, 325, 'peg', null, { isStatic: true });
        peg30.setCircle(17);
        peg30.setStatic(true);

        let peg31 = this.matter.add.image(263, 325, 'peg', null, { isStatic: true });
        peg31.setCircle(17);
        peg31.setStatic(true);

        let peg32 = this.matter.add.image(189, 325, 'peg', null, { isStatic: true });
        peg32.setCircle(17);
        peg32.setStatic(true);

        let peg33 = this.matter.add.image(115, 325, 'peg', null, { isStatic: true });
        peg33.setCircle(17);
        peg33.setStatic(true);

        let peg34 = this.matter.add.image(41, 325, 'peg', null, { isStatic: true });
        peg34.setCircle(17);
        peg34.setStatic(true);

        let peg38 = this.matter.add.image(337, 25, 'peg', null, { isStatic: true });
        peg38.setCircle(17);
        peg38.setStatic(true);

        let peg39 = this.matter.add.image(411, 25, 'peg', null, { isStatic: true });
        peg39.setCircle(17);
        peg39.setStatic(true);

        let peg40 = this.matter.add.image(485, 25, 'peg', null, { isStatic: true });
        peg40.setCircle(17);
        peg40.setStatic(true);

        let peg41 = this.matter.add.image(559, 25, 'peg', null, { isStatic: true });
        peg41.setCircle(17);
        peg41.setStatic(true);

        let peg42 = this.matter.add.image(263, 25, 'peg', null, { isStatic: true });
        peg42.setCircle(17);
        peg42.setStatic(true);

        let peg43 = this.matter.add.image(189, 25, 'peg', null, { isStatic: true });
        peg43.setCircle(17);
        peg43.setStatic(true);

        let peg44 = this.matter.add.image(115, 25, 'peg', null, { isStatic: true });
        peg44.setCircle(17);
        peg44.setStatic(true);

        let peg45 = this.matter.add.image(41, 25, 'peg', null, { isStatic: true });
        peg45.setCircle(17);
        peg45.setStatic(true);

        //let peg35 = this.matter.add.image(300, 425, 'peg', null, { isStatic: true });
        //peg35.setCircle(17);
        //peg35.setStatic(true);

        //let peg36 = this.matter.add.image(150, 425, 'peg', null, { isStatic: true });
        //peg36.setCircle(17);
        //peg36.setStatic(true);

        //let peg37 = this.matter.add.image(450, 425, 'peg', null, { isStatic: true });
        //peg37.setCircle(17);
        //peg37.setStatic(true);

        this.matter.add.image(60, 525, 'divide2', null, { isStatic: true});

        this.matter.add.image(120, 525, 'divide2', null, { isStatic: true});

        this.matter.add.image(180, 525, 'divide2', null, { isStatic: true});

        this.matter.add.image(240, 525, 'divide2', null, { isStatic: true});

        this.matter.add.image(300, 525, 'divide2', null, { isStatic: true});

        this.matter.add.image(360, 525, 'divide2', null, { isStatic: true});

        this.matter.add.image(420, 525, 'divide2', null, { isStatic: true});

        this.matter.add.image(480, 525, 'divide2', null, { isStatic: true});
        
        this.matter.add.image(540, 525, 'divide2', null, { isStatic: true});

        this.matter.add.image(600, 525, 'divide2', null, { isStatic: true});

        this.matter.add.image(30, 475, 'l', null, { isStatic: true});

        this.matter.add.image(90, 475, 'l', null, { isStatic: true});

        this.matter.add.image(150, 475, 'l', null, { isStatic: true});

        this.matter.add.image(210, 475, 'l', null, { isStatic: true});

        this.matter.add.image(270, 475, 'l', null, { isStatic: true});

        this.matter.add.image(330, 475, 'l', null, { isStatic: true});

        this.matter.add.image(390, 475, 'w', null, { isStatic: true});

        this.matter.add.image(450, 475, 'l', null, { isStatic: true});

        this.matter.add.image(510, 475, 'l', null, { isStatic: true});

        this.matter.add.image(570, 475, 'l', null, { isStatic: true});

        this.matter.add.image(0, 250, 'wall', null, { isStatic: true});

        this.matter.add.image(600, 250, 'wall', null, { isStatic: true});

        this.group = this.add.group({key: 'arrow', frameQuantity: 1});

        //this.rect = this.matter.add.image(300, 200, 'rect', null, { isStatic: true});
       
          //Arcade Physics:
        //const block = this.physics.add.image(400, 100, 'fuji');

        //block.setVelocity(100, 200);
        //block.setBounce(1, 1);
        //drop.setCollideWorldBounds(true);

        // set up cursor keys
        this.cursors = this.input.keyboard.createCursorKeys();

        this.input.on('pointermove', function (pointer) {
            this.x = pointer.x;
        }, this);

        this.input.on('pointerdown', () => {
            this.scene.start('Example3');
            this.y = 0;
        });
    }

    update(time, delta) {
        this.move += delta;
        if (this.move > 6) {
            Phaser.Actions.ShiftPosition(this.group.getChildren(), this.x, 50);
            this.move = 0;
        }

        if(this.cursors.up.isDown && this.y == 0) {
            this.drop = this.matter.add.image(this.x, -100, 'block');
            this.drop.setCircle(20);
            this.drop.setBounce(1);
            this.y = 1;
        }

        if(this.cursors.down.isDown){
            this.scene.start('post3');
            this.y = 0;
        }
    }
}

class Post3 extends Phaser.Scene {
    constructor() {
        super('post3');
    }
    create() {
        let box = this.add.text(10, 10,
`LEVEL 3 COMPLETE
CONGRATULATIONS, you beat my dumb Plinko game.  Probably.
Still not clear on whether you cheated or not.
Anyways thanks for playing and I hope it wasn't too easy.

Click to go back to Instructions...`
        );
        this.input.on('pointerdown', () => this.scene.start('intro'));
    }
}


const config = {
    type: Phaser.AUTO,
    width: 600,
    height: 500,
    parent: 'phaser-example',
    scene: [Intro, Example, Post1, Example2, Post2, Example3, Post3],
};

const game = new Phaser.Game(config);
