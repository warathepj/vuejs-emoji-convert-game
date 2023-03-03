<template>
  <div>
    <h1>Emoji Convert Game</h1>
    <div v-if="round < 5">
      <h2>{{ emoji }}</h2>
      <input type="text" v-model="answer" />
      <button @click="checkAnswer">Submit</button>
    </div>
    <div v-else>
      <h2>Game Over!</h2>
      <p>Your final score is {{ score }}.</p>
      <button @click="resetGame">Play Again</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      emojis: ["😀", "😂", "🤔", "🤩", "😎", "👍", "❤️", "🎉", "🐶", "🐱"],
      emoji: "",
      answer: "",
      score: 0,
      round: 0,
      randomIndex: null,
      roundEmojis: [],
    };
  },
  methods: {
    // generateUniqueEmojis() {
      // let uniqueIndex = false;
      // this.randomIndex = Math.floor(Math.random() * this.emojis.length);
      // if uniqueIndex = true;
      // this.emoji = this.emojis[this.randomIndex];
      // this.emojiIndexes.push(this.randomIndex); // 2Mar Not use this line, add the index of the current emoji to the array
      // this.roundEmojis.push(this.randomIndex);
    // generateUniqueEmojis() {
    //   this.randomIndex = Math.floor(Math.random() * this.emojis.length);
    //   this.emoji = this.emojis[this.randomIndex];
    //   // this.emojiIndexes.push(this.randomIndex); // add the index of the current emoji to the array
    //   this.roundEmojis.push(this.randomIndex);
    // },

    // generateUniqueEmojis() {
  // for (let i = 0; i < 5; i++) {
    // let uniqueIndex = false;
    // while (!uniqueIndex) {
    //   let randomIndex = Math.floor(Math.random() * this.emojis.length);
    //   if (!this.roundEmojis.includes(randomIndex)) {
    //     uniqueIndex = true;
    //     this.emoji = this.emojis[this.randomIndex];
    //     this.roundEmojis.push(randomIndex);
    //   }
    // }
  // }
    // },

    generateUniqueEmojis() {
  let uniqueIndex = false;
  while (!uniqueIndex) {
    let randomIndex = Math.floor(Math.random() * this.emojis.length);
    if (!this.roundEmojis.includes(randomIndex)) {
      uniqueIndex = true;
      this.emoji = this.emojis[randomIndex];
      this.randomIndex = randomIndex;
      this.roundEmojis.push(randomIndex);
    }
  }
},


    checkAnswer() {
      if (this.answer.toLowerCase() === this.emojiToWord(this.emoji)) {
        this.score++;
      }
      this.answer = "";
      // this.roundEmojis.push(this.randomIndex);
      if (this.round < 4) {
        this.generateNextRound();
        console.log(this.roundEmojis);
      } else {
        console.log(this.roundEmojis);
        this.roundEmojis = [];
        this.round = 0;
        this.score = 0;
      }
    },

    emojiToWord(emoji) {
      switch (emoji) {
        case "😀":
          return "smile";
        case "😂":
          return "laugh";
        case "🤔":
          return "think";
        case "🤩":
          return "star eyes";
        case "😎":
          return "cool";
        case "👍":
          return "thumbs up";
        case "❤️":
          return "heart";
        case "🎉":
          return "party";
        case "🐶":
          return "dog";
        case "🐱":
          return "cat";
        default:
          return "";
      }
    },
    generateNextRound() {
      this.round++;
      if (this.round < 5) {
        this.generateUniqueEmojis();
      } else {
        console.log(this.emojiIndexes); // log the array of emoji indexes to the console
      }
    },
    resetGame() {
      this.score = 0;
      this.round = 0;
      this.generateUniqueEmojis();
      this.emojiIndexes = []; // clear the array of emoji indexes when the game is reset
    },
  },
  mounted() {
    this.generateUniqueEmojis();
  }
};
</script>


