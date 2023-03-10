<template>
  <div>
    <h1>Emoji Convert Game</h1>
    <div v-if="round < 5">
      <h2>{{ emoji }}</h2>
      <!-- <p id="hint1" v-if="!answerSubmitted">{{ hint1 }}</p> -->
      
      <!-- <p>{{ genEmoji }}</p> -->

      <!-- <input type="text" v-model="answer" /> -->
      <input type="text" v-model="answer" v-bind:disabled="inputDisabled" />

      <button @click="checkAnswer">Submit</button>
      <button @click="displayHint1">Hint 1</button>
      <button @click="displayHint2">Hint 2</button>
      <p id="hint1" v-if="showHint">{{ hint1 }}</p>
      <p v-if="showHint2">{{ hint2 }}</p>
      <!-- <button v-on:click="generateUniqueEmojis" v-bind:disabled="inputDisabled" v-show="showButton">Generate Unique Emojis</button> -->
      <button v-on:click="generateUniqueEmojis" v-show="showButton">
        Restart Game
      </button>
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
      emojis: [
        {
          emo: "😀",
          hint1: "Facial expression",
          hint2: "sm...",
          "give up": "smile",
        },
        {
          emo: "😂",
          hint1: "Sound of amusement",
          hint2: "la...",
          "give up": "laugh",
        },
        {
          emo: "🤔",
          hint1: "Similar to consider",
          hint2: "th...",
          "give up": "think",
        },
        {
          emo: "🤩",
          hint1:
            "Celestial object that emits light and is visible in the night sky",
          hint2: ".... eyes",
          "give up": "star eyes",
        },
        {
          emo: "😎",
          hint1: "Awesome",
          hint2: "co..",
          "give up": "cool",
        },
        {
          emo: "👍",
          hint1: "Well done",
          hint2: ".....s up",
          "give up": "thumbs up",
        },
        {
          emo: "❤️",
          hint1:
            "the organ in the chest that pumps blood through the circulatory system",
          hint2: "he...",
          "give up": "heart",
        },
        {
          emo: "🎉",
          hint1: "Event",
          hint2: "pa...",
          "give up": "party",
        },
        {
          emo: "🐶",
          hint1: "four-legged mammal often kept as a pet, known for its loyalty and friendliness towards humans.",
          hint2: "d.."
        },
        {
          emo: "🐱",
          hint1: "a small carnivorous mammal kept as a pet, known for its independence, grace, and agility, and often valued for its ability to hunt rodents.",
          hint2: "c.."
        },
      ],
      // emojis: [
      //   {"😀"}, "😂", "🤔", "🤩", "😎", "👍", "❤️", "🎉", "🐶", "🐱"],
      emoji: "",
      hint1: "",
      hint2: "",
      answer: "",
      score: 0,
      round: 0,
      randomIndex: null,
      roundEmojis: [],
      inputDisabled: true,
      showButton: false,
      showHint: false,
      showHint2: false,
    };
  },
  methods: {
    generateUniqueEmojis() {
      let uniqueIndex = false;
      while (!uniqueIndex) {
        let randomIndex = Math.floor(Math.random() * this.emojis.length);
        if (!this.roundEmojis.includes(randomIndex)) {
          uniqueIndex = true;
          this.emoji = this.emojis[randomIndex].emo;
          // this.hint1 = this.emojis[randomIndex].hint1;
          this.randomIndex = randomIndex;
          this.roundEmojis.push(randomIndex);
        }
      }
      this.inputDisabled = false; // re-enable input field when done
      this.showButton = false;
      this.genEmoji = false;
      console.log("genEmoji from generateUniqueEmojis() : " + this.genEmoji);
    },
    displayHint1() {
      let currentEmojisIndex = this.emojis.findIndex(
        (item) => item.emo === this.emoji
      );
      this.hint1 = this.emojis[currentEmojisIndex].hint1;
      this.showHint = true;
      setTimeout(() => {
        this.showHint = false;
      }, 5000);
      console.log("hint1 : " + this.hint1);
      this.genEmoji = true;
      console.log("genEmoji from displayHint1() : " + this.genEmoji);
    },
    displayHint2() {
      let currentEmojisIndex2 = this.emojis.findIndex(
        (item) => item.emo === this.emoji
      );
      this.hint2 = this.emojis[currentEmojisIndex2].hint2;
      this.showHint2 = true;
      setTimeout(() => {
        this.showHint2 = false;
      }, 5000);
      console.log("hint2 : " + this.hint2);
      this.genEmoji = true;
      console.log("genEmoji from displayHint2() : " + this.genEmoji);
    },
    checkAnswer() {
      if (this.answer.toLowerCase() === this.emojiToWord(this.emoji)) {
        this.score++;
      }
      // console.log("score ", this.score);
      this.answer = "";
      // this.roundEmojis.push(this.randomIndex);
      if (this.round < 4) {
        this.generateNextRound();
        console.log(this.roundEmojis);
      } else {
        console.log(this.roundEmojis);
        // console.log("score ", this.score);
        alert("Your score: " + this.score + " of 5");

        this.roundEmojis = [];
        this.round = 0;
        this.score = 0;

        // ADD
        alert("You have completed all rounds.");

        this.showButton = true;

        this.inputDisabled = true; // disable input field
      }
      // this.answerSubmitted = true;
      //   console.log("answerSubmitted " + this.answerSubmitted);
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
  },
};
</script>
