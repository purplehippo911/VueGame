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
    };
  },
  methods: {
    start() {
      this.$refs.start.classList.add("close");
      this.$refs.block.style.display = "block";
      this.NotPlaying = true;
      this.score = 0;
      this.endGame();

    },
    playerJump() {
      if(this.$refs.player.classList != "animate") {
        this.$refs.player.classList.add("animate");
        setTimeout(() => {
          this.$refs.player.classList.remove("animate");
        }, 1000)
      }
    },
  //   getPositions(elem) {
  //     var pos = elem.getBoundingClientRect();
  //     var posArray = [pos.left, pos.top];
  //     return posArray;
  //   },
  //   comparePositions(p1, p2) {
  //     var r1, r2;
  //     if (p1[0] <= 976.5 && p2[1] >= 210 || p1[0] <= 782 && p2[1] >= 114) {
  //       r1 = p1;
  //       r2 = p2;
  //       this.$refs.block.style.animation = "none";
  //       this.$refs.start.classList.remove("close");
  //       this.title = "Game Over";
  //       this.content = "";
  //       this.buttonText = "Try Again";
  //       console.log("Worked");
  //       this.NotPlaying = true;
  //     } else {
  //       r1 = p2;
  //       r2 = p1;
  //       this.score+=2;
  //       console.log("didnt work")
  //     }
  //   },
  //   detectOverlap (a, b) {
  //     var blockLeft = this.getPositions(this.$refs.block);
  //     var playerTop = this.getPositions(this.$refs.player);
  //     return comparePositions(blockLeft[0], playerTop[1 ]);
  // },
  touches(elem1, elem2) {
    
    let rect1 = elem1.getBoundingClientRect();
    let rect2 = elem2.getBoundingClientRect();
    if (rect1.left == rect2.left) {
      console.log(true);
    }
  },
  endGame() {
    var checkTouch = setInterval(() => {
      var rect1 = this.$refs.player.getBoundingClientRect();
      var rect2 = this.$refs.block.getBoundingClientRect();
      if(rect1.top >= 255.1875 && rect2.x <= 963.6875){
        console.log('touching!')
        this.$refs.block.style.animation = "none";
        this.$refs.start.classList.remove("close");
        this.$refs.startButton.classList.add("close");
        this.title = "Game Over";
        this.content = "";
        this.buttonText = "Try Again";
        console.log(rect1);
        console.log(rect2);
        clearInterval(checkTouch);
      }
      else {
        this.score +=2;
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
