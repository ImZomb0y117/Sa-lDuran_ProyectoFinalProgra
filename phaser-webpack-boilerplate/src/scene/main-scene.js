import Ball from "./ball";
import Maincharacter from "../character";
import Erixscene from "./Erixscene";
export default class GameScene extends Erixscene {
    constructor (config){
        super ("MainScene",config);
        this.pencil=null;
        this.ball=null;
    }
    preload (){
        this.load.image("pencil", "assets/bird.png")
        this.load.image("ball", "assets/ball.png")
        this.load.image("Sky","assets/skysky.png")
    }
    create (){
        super.create ();
        this.pencil=new Maincharacter (this,100,this.config.height/2,"pencil");
        this.layers.game.add(this.pencil);
        this.pencilCollision=this.physics.add.collider(this.pencil,null,this);
        this.pencil.body.setCollideWorldBounds(true);
        this.ball=new Ball (this,200,300,"ball");
        this.layers.game.add(this.ball);
        this.physics.add.collider(this.ball, this.pencil, this.gameOver, null, this);  
    }
    gameOver(){
        alert("Perdiste");
        this.scene.restart();
    }
}