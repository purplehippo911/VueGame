export default {
    data() {
      return { 
        count: 0, 
        message:"Welcome to my game!",
        player: document.querySelector("#player"),
    }
},
methods: {
    playerJump() {
            console.log("Hi");
            console.log(this.player);
            this.player.classList.add("animate");
        }
    }
  }