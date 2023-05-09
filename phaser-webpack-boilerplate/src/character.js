export default class Maincharacter extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture);
        this.scene = scene;
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.speed= 200;
        this.isMoving = false;
        this.body.setCollideWorldBounds(true);

        this.move = this.move.bind(this);

        // Aquí será para el mov en WASD
        scene.input.keyboard.on("keydown-W", this.move);
        scene.input.keyboard.on("keydown-A", this.move);
        scene.input.keyboard.on("keydown-S", this.move);
        scene.input.keyboard.on("keydown-D", this.move);
    }

    move(event) {
        if(this.isMoving){
            return;
        }
    
        const keyCode = event.keyCode;

        // Movimiento del lapicito
        switch(keyCode) {
            
            case Phaser.Input.Keyboard.KeyCodes.W:
                this.body.setVelocityY(-this.speed);
                break;
            case Phaser.Input.Keyboard.KeyCodes.S:
                this.body.setVelocityY(this.speed);
                break;
            case Phaser.Input.Keyboard.KeyCodes.A:
                this.body.setVelocityX(-this.speed);
                break;
            case Phaser.Input.Keyboard.KeyCodes.D:
                this.body.setVelocityX(this.speed);
                break;
        }
        this.body.onWorldBounds= true;
        this.scene.physics.world.on('worldbounds', () => {
            this.isMoving = false;
        }, this);
    }
}