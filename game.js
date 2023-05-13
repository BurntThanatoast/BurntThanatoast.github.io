class Demo1 extends AdventureScene {
    constructor() {
        super("demo1", "Dark Empty Room");
    }

    preload() {
        this.load.path = './assets/';
        this.load.image('Door', 'Door.png');
        this.load.image('Torch', 'Torch.png');
        this.load.image('Whopper', 'whopper.png');
        this.load.image('Open Door', 'Open Door.png');
        this.load.audio('Open', 'doorsound.mp3');
    }

    onEnter() {
        if (this.hasItem('Whopper')) {
            //Do Nothing
        } else if (this.hasItem("Lit Torch")) {
            let clip = this.add.image(this.w * 0.6, this.w * 0.3, 'Whopper')
                .setInteractive()
                .on('pointerover', () => this.showMessage("Couldn't see this before, a whopper from BK. Looks surpisingly edible."))
                .on('pointerdown', () => {
                    this.gainItem('Whopper');
                    this.showMessage("Might want a snack for later.");
                    this.tweens.add({
                        targets: clip,
                        y: `-=${2 * this.s}`,
                        alpha: { from: 1, to: 0 },
                        duration: 500,
                        onComplete: () => clip.destroy()
                    });
                });
        }

        if (this.hasItem("Lit Torch")) {
            //Do nothing
        } else if (this.hasItem("Torch")) {
            //Do nothing
        } else {
            let torch = this.add.image(this.w * 0.4, this.w * 0.4, 'Torch')
                .setInteractive()
                .on('pointerover', () => {
                    this.showMessage("Looks like an unlit Minecraft Torch.")
                })
                .on('pointerdown', () => {
                    this.showMessage("You picked up the torch, kinda blocky.");
                    this.gainItem('Torch');
                    this.tweens.add({
                        targets: torch,
                        y: `-=${2 * this.s}`,
                        alpha: { from: 1, to: 0 },
                        duration: 500,
                        onComplete: () => torch.destroy()
                    });
                })

        }

        let door = this.add.image(this.w * 0.2, this.w * 0.15, 'Door')
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Looks like the only exit to this room.");
            })
            .on('pointerdown', () => {
                this.showMessage("*squeak*");
                let sound = this.sound.add('Open');
                sound.play();
                door.setTexture('Open Door');
                this.gotoScene('demo2');
            })

    }
}

class Demo2 extends AdventureScene {
    constructor() {
        super("demo2", "Campfire Room");
    }

    preload() {
        this.load.path = './assets/';
        this.load.image('Door', 'Door.png');
        this.load.image('Fire', 'Campfire.png');
        this.load.image('Dude', 'man.png');
        this.load.image('Open Door', 'Open Door.png');
        this.load.audio('Open', 'doorsound.mp3');
    }

    onEnter() {
        let door1 = this.add.image(this.w * 0.2, this.w * 0.15, 'Door')
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Leads back to the Dark Room.");
            })
            .on('pointerdown', () => {
                this.showMessage("*squeak*");
                let sound = this.sound.add('Open');
                sound.play();
                door1.setTexture('Open Door');
                this.gotoScene('demo1');
            })
        
        let door2 = this.add.image(this.w * 0.2, this.w * 0.4, 'Door')
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Another Minecraft door wonder where it goes.");
            })
            .on('pointerdown', () => {
                this.showMessage("*squeak*");
                let sound = this.sound.add('Open');
                sound.play();
                door2.setTexture('Open Door');
                this.gotoScene('demo3');
            })

        let fire = this.add.image(this.w * 0.4, this.w * 0.3, 'Fire')
            .setInteractive()
            .on('pointerover', () => {
                if (this.hasItem("Torch")) {
                    this.showMessage("I can light my torch with this.");
                } else {
                    this.showMessage("Well at least I can see in this room.");
                }
            })
            .on('pointerdown', () => {
                if (this.hasItem("Torch")) {
                    this.showMessage("Finally my torch is lit.");
                    this.loseItem('Torch')
                    this.gainItem('Lit Torch');
                } else {
                    this.showMessage("I think it may be too hot to touch.");
                }
                this.tweens.add({
                    targets: clip,
                    x: '+=' + this.s,
                    repeat: 2,
                    yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 100
                });
            });

            let man = this.add.image(this.w * 0.63, this.w * 0.4, 'Dude')
            .setInteractive()
            .on('pointerover', () => {
                if (this.hasItem("Whopper")) {
                    this.showMessage("Let me get that whopper I'll pay you.");
                } else {
                    this.showMessage("Just some dude, looks hungry.");
                }
            })
            .on('pointerdown', () => {
                if (this.hasItem("Whopper")) {
                    this.loseItem('Whopper');
                    this.showMessage("Thanks, here some money.");
                    this.gainItem('2 dollar bill');
                } else {
                    this.showMessage("Hey you got any food I am starving.");
                }
                this.shake(man);
            });

        
    }
}

class Demo3 extends AdventureScene {
    constructor() {
        super("demo3", "The Button Room");
    }

    preload() {
        this.load.path = './assets/';
        this.load.image('Door', 'Door.png');
        this.load.image('Button', 'RedButton.png');
        this.load.image('Dude', 'man.png');
        this.load.image('Open Door', 'Open Door.png');
        this.load.audio('Open', 'doorsound.mp3');
    }

    onEnter() {
        let door1 = this.add.image(this.w * 0.2, this.w * 0.15, 'Door')
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Leads back to the Campfire Room.");
            })
            .on('pointerdown', () => {
                this.showMessage("*squeak*");
                let sound = this.sound.add('Open');
                sound.play();
                door1.setTexture('Open Door');
                this.gotoScene('demo2');
            })
        
        let door2 = this.add.image(this.w * 0.2, this.w * 0.4, 'Door')
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Hopefully the last door.");
            })
            .on('pointerdown', () => {
                this.showMessage("*squeak*");
                let sound = this.sound.add('Open');
                sound.play();
                door2.setTexture('Open Door');
                this.gotoScene('demo4');
            })

        let button = this.add.image(this.w * 0.6, this.w * 0.3, 'Button')
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Says DO NOT PUSH wonder why.");
            })
            .on('pointerdown', () => {
                this.showMessage("Uh oh.");
                this.tweens.add({
                    targets: button,
                    y: '+=' + this.s,
                    repeat: 2,
                    yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 100
                });
                this.gotoScene('outro2');
            });
        
    }
}

class Demo4 extends AdventureScene {
    constructor() {
        super("demo4", "The Vending Machine Room");
    }

    preload() {
        this.load.path = './assets/';
        this.load.image('Door', 'Door.png');
        this.load.image('machine', 'vendingmachine.png');
        this.load.image('Open Door', 'Open Door.png');
        this.load.audio('Open', 'doorsound.mp3');
    }

    onEnter() {
        let door1 = this.add.image(this.w * 0.2, this.w * 0.15, 'Door')
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Leads back to the Button Room.");
            })
            .on('pointerdown', () => {
                this.showMessage("*squeak*");
                let sound = this.sound.add('Open');
                sound.play();
                door1.setTexture('Open Door');
                this.gotoScene('demo3');
            })

        let machine = this.add.image(this.w * 0.6, this.w * 0.3, 'machine')
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Got some decent stuff in it, wait are those Disneyland tickets?.");
            })
            .on('pointerdown', () => {
                if (this.hasItem("2 dollar bill")) {
                    this.showMessage("Here are your Disneyland Tickets.");
                    this.gainItem('Disneyland Tickets');
                    this.gotoScene('outro');
                } else {
                    this.showMessage("Give me money and I will let you have the Disneyland tickets.");
                }
                this.shake(machine);
            });
    }
}

class Intro extends Phaser.Scene {
    constructor() {
        super('intro')
    }
    create() {
        let box = this.add.text(10, 10,
            `After a long night of homework you look at your clock and
decide that you should probably go to bed.  Exhausted, you
fall asleep quickly.  You awaken to find yourself on a cold
hard floor very unlike your bed.  As you look around you 
find yourself in a poorly lit room.  It is pretty much empty,
but you can make out some things.  Confused as to where you
are you get up and walk around to try to figure out the situation.`
                            ).setFontSize(30);
        this.add.text(10,230, "Click anywhere to begin.").setFontSize(40);
        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('demo1'));
        });
    }
}

class Outro extends Phaser.Scene {
    constructor() {
        super('outro');
    }
    create() {
        let box = this.add.text(10, 10,
            `You watch as the Vending Machine begins to tremble and
float in the air.  Magical runes start to appear around it with
ominous noises coming from all around.  After a great buildup and a
flash of light you open your eyes to find yourself in Disneyland.
Awesome, you spend the whole day at the park trying all the rides and
getting terrible knick knacks for expensive prices.  At the end of the
day you get an email saying you got a 100% on your homework.
Life is good.`
                            ).setFontSize(30);
        this.add.text(50, 100, "Click anywhere to restart.").setFontSize(40);
        this.clearInventory();
        this.input.on('pointerdown', () => this.scene.start('intro'));
    }
}

class Outro2 extends Phaser.Scene {
    constructor() {
        super('outro2');
    }
    create() {
        let box = this.add.text(10, 10,
            `After finding out you lost your chance to go to Disneyland you cry
and weep.  The man from the campfire walks up and kicks you in the crotch and you wake
up in your bed with a jolt.  The pain is still there.  Was it a 
dream?  Regardless you wake up to find that you didn't turn in 
your homework on time.  Damn, this shit sucks.`
                            ).setFontSize(30);
        this.add.text(10, 170, "Click anywhere to restart.").setFontSize(40);
        this.clearInventory();
        this.input.on('pointerdown', () => this.scene.start('intro'));
    }
}


const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    scene: [Intro, Demo1, Demo2, Demo3, Demo4, Outro, Outro2],
    title: "Adventure Game",
});

