<template lang="">
  <div class="flex flex-col items-center">
    <h1 class="text-[60px] lg:text-4xl mb-3 md:mb-7 lg:mb-0 xl:mb-9">👋🌎👨‍👩‍👧‍👦💬</h1>

  <div class="md:mt-10 lg:mt-2 xl:mb-8 p-2 md:p-4 md:h-[430px] lg:h-80 lg:w-[800px] self-center rounded-lg shadow-xl shadow-teal-900 bg-teal-600">
    <h3 class="text-xl mb-5 font-bold text-white">How to Play:</h3>
    <ul class="md:text-lg lg:text-base text-white">
      <li>
        Guess the meaning of the emoji. For example, 🌟⚔️🚀 means Star Wars.
      </li>
      <li>Type your answer in the input field.</li>
      <li>
        If you are sure that your answer is correct, press the Submit button.
      </li>
      <li>If you want a hint for the first time, press the Hint1 button.</li>
      <li>If you want a second hint, press the Hint2 button.</li>
      <li>
        If you give up, press the Give Up button. The answer will be displayed.
      </li>
      <li>
        If you give up and want to continue playing the game, press the Submit
        button.
      </li>
      <li>When you have played the game 5 times, the round will end.</li>
      <li>
        If you want to play another round of the game, press the Restart Game
        button.
      </li>
    </ul>
  </div>
  <RouterLink to="/game">

    <button class="mt-8 md:mt-32 lg:mt-5 p-7 rounded-lg bg-white text-3xl text-teal-600 shadow-md shadow-teal-900 hover:bg-teal-100">START GAME</button>
  </RouterLink>
</div>
</template>
<script>
import { RouterLink } from "vue-router";

export default {};
</script>
<style lang=""></style>
