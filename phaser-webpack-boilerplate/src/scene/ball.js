export default class Ball extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture);
        this.scene = scene;
        scene.add.existing(this);

        // Crear fisicas para la pelota
        scene.physics.add.existing(this);
        this.body.setBounce(1);
        this.body.setCollideWorldBounds(true);

        // Establezca la velocidad inicial y la aceleración en distintos valoressss. 
        this.body.setVelocityX(Phaser.Math.Between(-200, 200));
        this.body.setVelocityY(Phaser.Math.Between(-200, 200));
        this.body.setAccelerationX(Phaser.Math.Between(-50, 50));
        this.body.setAccelerationY(Phaser.Math.Between(-50, 50));
    }
}
