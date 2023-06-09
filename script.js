class Studio extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'studio' });
    }

    preload (){
        this.load.path = './assets/';
        this.load.image('studio', 'studio.png');
        this.load.audio('bgm', 'bgm.mp3');
        this.load.spritesheet("gif", "gif4.png", {frameWidth: 1200, frameHeight: 1080});
        //this.load.audio('Boom', 'boom.mp3');
    }

    create ()
    {  
        this.cameras.main.fadeIn(1000, 0,0,0);
        let sound = this.sound.add('bgm');
        sound.play();
        //let sound2 = this.sound.add('Boom');
        //this.time.delayedCall(1000, () => {
        //    sound2.play();
        //});
       
        let studio = this.add.image(
            960,//x
            500,
            'studio',//imagename
        )
        studio.scale = 0.75;

        //this.anims.create({
        //    key: "vid",
        //    frameRate: 20,
        //    frames: this.anims.generateFrameNumbers("gif"),
        //    repeat: -1
        //});

        //this.anim = this.add.sprite(960, 540, "gif");
        //this.anim.play("vid");

        this.time.delayedCall(2000, () => {
            this.cameras.main.fadeOut(2000, 0,0,0);
        });

        this.time.delayedCall(5000, () => {
            this.scene.start('menu');
        })

        //fade in and out 
        {
            this.tweens.add({
                targets: studio,
                ease: 'Sine.easeInOut',
                repeat: -1,
                duration: 1000
            });
        

        this.input.on('pointerdown', () => this.scene.start('menu'));
    }
}
}

class MainMenu extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'menu' });
    }

    preload (){
        this.load.path = './assets/';
        this.load.image('start', 'Start2png.png');
        this.load.image('options', 'Options2.png');
        this.load.image('title', 'Title.png');
        this.load.image('credits', 'credit.png');
        this.load.image('glitch', 'glitch.png');

    }

    create ()
    {
        this.cameras.main.fadeIn(1000, 0,0,0);
       
        let title = this.add.image(
            960,//x
            500,
            'title',//imagename
        )

        let glitch = this.add.image(
            960,
            500,
            'glitch'
        )
        glitch.scale = 4;
        this.tweens.add({
            targets: glitch,
            alpha: 0,
            duration: 1000,
            ease: 'Bounce',
            repeat: -1,
        });
        let options = this.add.image(960, 700, 'options')
        options.setInteractive()
        options.on('pointerdown', () => this.scene.start('options'));

        let start = this.add.image(
            960,//x
            600,
            'start',//imagename
        )
        start.setInteractive()
        start.on('pointerdown', () => this.scene.start('gameplay'));

        let credit = this.add.image(
            960,//x
            800,
            'credits',//imagename
        )
        credit.setInteractive()
        credit.on('pointerdown', () => this.scene.start('credits'));

        start.scale = 0.75;
        options.scale = 0.75;
        title.scale = 0.75;
        credit.scale = 0.75;

        //fade in and out 
        this.tweens.add({
            targets: start,
            ease: 'Sine.easeInOut',
            repeat: -1,
            duration: 1000
        });
        this.tweens.add({
            targets: title,
            ease: 'Sine.easeInOut',
            repeat: -1,
            duration: 1000
        });
        this.tweens.add({
            targets: options,
            ease: 'Sine.easeInOut',
            repeat: -1,
            duration: 1000
        });
}
}

class Options extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'options' });
    }

    intialize (){
        //This variable will hold the sound value.
        this.registry.set('options', {Sound: 100})
    }

    preload (){
        this.load.path = './assets/';
        this.load.image('back', 'back.png');
        this.load.image('options', 'Options.png');
        this.load.image('menuopt', 'menu.png')

    }

    create ()
    {
        let options = this.imageObject = this.add.image(
            960,//x
            500,
            'menuopt',//imagename
        )
        let back = this.imageObject = this.add.image(
            960,
            500,
            'back',
        )
        back.setInteractive()
        back.on('pointerdown', () => this.scene.start('menu'));
    }
}

class Gameplay extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'gameplay' });
    }

    preload (){
        this.load.path = './assets/';
        this.load.image('end2', 'end2.png');
        this.load.image('end1', 'end1.png');
        this.load.image('gameplay', 'gameplayplaceholder.png')

    }

    create ()
    {
        let options = this.imageObject = this.add.image(
            900,//x
            500,
            'gameplay',//imagename
        )
        let end1 = this.add.image(960, 600, 'end1')
        end1.setInteractive()
        end1.on('pointerdown', () => this.scene.start('Ending1'));

        let end2 = this.add.image(
            960,//x
            800,
            'end2',//imagename
        )
        end2.setInteractive()
        end2.on('pointerdown', () => this.scene.start('Ending2'));
    }
}

class Credits extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'credits' });
    }

    preload (){
        this.load.path = './assets/';
        this.load.image('back', 'back.png');
        this.load.image('options', 'Options.png');
        this.load.image('credit', 'credits.png')

    }

    create ()
    {
        let options = this.imageObject = this.add.image(
            960,//x
            600,
            'credit',//imagename
        )
        let back = this.imageObject = this.add.image(
            900,
            400,
            'back',
        )
        back.setInteractive()
        back.on('pointerdown', () => this.scene.start('menu'));
    }
}

class End1 extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'Ending1' });
    }

    preload (){
        this.load.path = './assets/';
        this.load.image('end2', 'end2.png');
        this.load.image('end1', 'end1.png');
        this.load.image('gameplay', 'gameplayplaceholder.png')

    }

    create ()
    {
        let end1 = this.add.image(960, 500, 'end1')
    }
}

class End2 extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'Ending2' });
    }

    preload (){
        this.load.path = './assets/';
        this.load.image('end2', 'end2.png');
        this.load.image('end1', 'end1.png');
        this.load.image('gameplay', 'gameplayplaceholder.png')

    }

    create ()
    {
        let end2 = this.add.image(960, 500, 'end2')
    }
}

const config = {
    type: Phaser.AUTO,
    width: 1920,
    height: 1080,
    backgroundColor: '#16161D',
    parent: 'phaser-example',
    scene: [Studio, MainMenu, Options, Gameplay, Credits, End1, End2]
};

const game = new Phaser.Game(config);