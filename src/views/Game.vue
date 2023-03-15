<template>
    <div class="min-h-screen p-4 text-center bg-teal-300">
      
      <div v-if="round < 5">
        <h2 class="text-[60px]">{{ emoji }}</h2>
        <div class="p-3 flex flex-col bg-teal-600">
          <input
            type="text"
            v-el:focusInput
            v-model="answer"
            v-bind:disabled="inputDisabled"
            class="focus:outline-none"
          />
  
          <p id="hint1" v-if="showHint">{{ hint1 }}</p>
          <p v-if="showHint2">{{ hint2 }}</p>
          <p v-if="showGiveUp">{{ giveUp }}</p>
          <button v-on:click="generateUniqueEmojis" v-show="showButton">
            Restart Game
          </button>
  
        <button @click="checkAnswer">Submit</button>
        <button @click="displayHint1">Hint 1</button>
        <button @click="displayHint2">Hint 2</button>
        <button @click="giveUpFn">Give Up</button>
      </div>
  
      </div>
    </div>
  </template>
  
  <script>
//   import emojis from "../db.json";
  // import emojis from "https://warathepj.github.io/vuejs-emoji-convert.json";
  import { RouterLink, RouterView } from "vue-router";
  
  export default {
    data() {
      return {
        // emojis: emojis.emojis,
        emojis: [],
        emoji: "",
        hint1: "",
        hint2: "",
        giveUp: "",
        answer: "",
        score: 0,
        round: 0,
        randomIndex: null,
        roundEmojis: [],
        inputDisabled: true,
        showButton: false,
        showHint: false,
        showHint2: false,
        showGiveUp: false,
        // showInput: false
      };
    },
    methods: {
      correctAlert() {
        let timerInterval;
        this.$swal({
          title: "you're correct!",
          html: "I will close in <b></b> milliseconds.",
          timer: 1000,
          timerProgressBar: true,
          didOpen: () => {
            this.$swal.showLoading();
            const b = this.$swal.getHtmlContainer().querySelector("b");
            timerInterval = setInterval(() => {
              b.textContent = this.$swal.getTimerLeft();
            }, 100);
          },
          willClose: () => {
            clearInterval(timerInterval);
          },
        }).then((result) => {
          /* Read more about handling dismissals below */
          if (result.dismiss === this.$swal.DismissReason.timer) {
            console.log("I was closed by the timer");
          }
        });
      },
      wrongAlert() {
        let timerInterval;
        this.$swal({
          title: "you're wrong!",
          html: "I will close in <b></b> milliseconds.",
          timer: 1000,
          timerProgressBar: true,
          didOpen: () => {
            this.$swal.showLoading();
            const b = this.$swal.getHtmlContainer().querySelector("b");
            timerInterval = setInterval(() => {
              b.textContent = this.$swal.getTimerLeft();
            }, 100);
          },
          willClose: () => {
            clearInterval(timerInterval);
          },
        }).then((result) => {
          /* Read more about handling dismissals below */
          if (result.dismiss === this.$swal.DismissReason.timer) {
            console.log("I was closed by the timer");
          }
        });
      },
      scoreAlert() {
        let timerInterval;
        this.$swal({
          title: `You scored ${this.score} out of 5`,
          html: "I will close in <b></b> milliseconds.",
          timer: 3000,
          timerProgressBar: true,
          didOpen: () => {
            this.$swal.showLoading();
            const b = this.$swal.getHtmlContainer().querySelector("b");
            timerInterval = setInterval(() => {
              b.textContent = this.$swal.getTimerLeft();
            }, 100);
          },
          willClose: () => {
            clearInterval(timerInterval);
          },
        }).then((result) => {
          /* Read more about handling dismissals below */
          if (result.dismiss === this.$swal.DismissReason.timer) {
            console.log("I was closed by the timer");
          }
        });
      },
      
  
  
      async generateUniqueEmojis() {
        let uniqueIndex = false;
  
        // Make HTTP request to fetch the data
        const response = await fetch(
          "https://warathepj.github.io/vuejs-emoji-convert.json"
        );
        const data = await response.json();

        this.emojis = data.emojis;
  
        while (!uniqueIndex) {
          let randomIndex = Math.floor(Math.random() * data.emojis.length);
  
          if (!this.roundEmojis.includes(randomIndex)) {
            uniqueIndex = true;
            this.emoji = data.emojis[randomIndex].emo;
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
  
      giveUpFn() {
        let currentEmojisIndex3 = this.emojis.findIndex(
          (item) => item.emo === this.emoji
        );
        this.giveUp = this.emojis[currentEmojisIndex3].giveUp;
        this.showGiveUp = true;
        setTimeout(() => {
          this.showGiveUp = false;
        }, 5000);
        this.inputDisabled = true; // disable input field
  
        console.log("hint2 : " + this.giveUp);
        this.genEmoji = true;
        console.log("genEmoji from giveUpFn() : " + this.genEmoji);
      },
  
      checkAnswer() {
        if (this.answer.toLowerCase() === this.emojiToWord(this.emoji)) {
          this.score++;
          this.correctAlert();
        } else {
          this.wrongAlert();
        }
        this.answer = "";
        if (this.round < 4) {
          this.generateNextRound();
          console.log(this.roundEmojis);
        } else {
          console.log(this.roundEmojis);
          
          this.scoreAlert();
  
          this.roundEmojis = [];
          this.round = 0;
          this.score = 0;
  
          this.showButton = true;
  
          this.inputDisabled = true; // disable input field
        }
        
      },
  
      emojiToWord(emoji) {
        for (let i = 0; i < this.emojis.length; i++) {
          if (this.emojis[i].emo === emoji) {
            return this.emojis[i].giveUp;
          }
        }
        return "";
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
  
      // Define a custom directive that focuses an input element
    },
    mounted() {
      this.generateUniqueEmojis();
    },
  };
  </script>