export default {
  data() {
    return {
      message: "Hello Vue!",
      i: 0,
      title:"The flight from the blockbee",
      buttonText:"Start",
      content:`Help Sweet Liquor to flee from the thirsty bees. Use the spacebar to jump. 
      Later on you will get a gun,
      use the left-arrow-key to shoot to the right, and right-arrow-key to shoot to the left.`,
      NotPlaying:false,
      score:0,
      highscore:0
    };
  },
  methods: {
    start() {
      this.$refs.start.classList.add("close");
      this.$refs.block.style.display = "block";
      this.NotPlaying = true;
      this.score = 0;
      if(localStorage.getItem("highscore"))
          highscore = localStorage.getItem("highscore");
      this.endGame();

    },
    playerJump() {
      if(this.$refs.player.classList != "animate") {
        this.$refs.player.classList.add("animate");
      }
        setTimeout(() => {
          this.$refs.player.classList.remove("animate");
        }, 500)
    },

  touches(elem1, elem2) {
    
    let rect1 = elem1.getBoundingClientRect();
    let rect2 = elem2.getBoundingClientRect();
    if (rect1.left == rect2.left) {
      console.log(true);
    }
  },
  endGame() {
    let player = document.querySelector("player");
    let block = document.querySelector("player");
    let pos1 = player.getBoundingClientRect();
    let pos2 = block.getBoundingClientRect();

    var checkTouch = setInterval(() => {
      var playerTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"));
      var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
      /*if(pos1.x < pos2.x + pos2.width &&
        pos1.x + pos1.width > pos2.x &&
        pos1.y < pos2.y + pos2.height &&
        pos1.y + pos1.height > pos2.y
        )*/
        if(blockLeft< 350 && blockLeft > 0 && playerTop >= 236)
        {
        console.log('touching!')
        block.style.animation = "none";
        this.$refs.start.classList.remove("close");
        this.title = "Game Over";
        this.content = "";
        this.buttonText = "Try Again";
        window.localStorage.setItem("highscore", highscore);
        document.write(pos1);
        document.write(pos2);
        clearInterval(checkTouch);
        }
      else {
        this.score +=2;
        document.write(pos1);
        document.write(pos2);
        console.log("Touches nothing!")
        console.log(rect1);
        console.log(rect2);
      } 
    }, 1500)
    checkTouch;
    },
    tryAgain() {
      this.NotPlaying = true;
      this.start();
      this.endGame();
      this.$refs.block.style.animation = "blockMove 2s infinite linear";
    },
    playerShoot() {
      this.score +=2;
    }
  }
};
