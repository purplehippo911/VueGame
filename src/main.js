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
      // this.$refs.block.classList.add("animate-block");
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
    getPositions(elem) {
      var pos = elem.getBoundingClientRect();
      var posArray = [pos.left, pos.top];
      return posArray;
    },
    comparePositions(p1, p2) {
      var r1, r2;
      if (p1[0] < 649.5 && p2[1] >= 285) {
        r1 = p1;
        r2 = p2;
        this.$refs.block.style.animation = "none";
        this.$refs.start.classList.remove("close");
        this.title = "Game Over";
        this.content = "";
        this.buttonText = "Try Again";
      } else {
        r1 = p2;
        r2 = p1;
        this.score+=2;
        console.log("didnt work")
      }
    },
    endGame() {

      setInterval(() => {
        let playerTop = this.getPositions(this.$refs.player);
        let blockLeft = this.getPositions(this.$refs.block);
        console.log(playerTop);
        console.log(blockLeft);
        this.i++;
        return this.comparePositions(blockLeft, playerTop);
      }, 1000)
      NotPlaying = true;
    },
    tryAgain() {
      this.start();
      this.$refs.block.style.animation = "blockMove 2s infinite linear";
    }
  }
};
