class Player{
    constructor(x,y){
        this.sprite = createSprite(x,y,50,50);
        this.playerName = null;
        this.playerCharacter = null;
        this.sprite.velocityX = 5;
        this.distance = null;

    }

    display(){

    }

    gravity(g){
        this.sprite.velocityY = this.sprite.velocityY+g;
    }

}