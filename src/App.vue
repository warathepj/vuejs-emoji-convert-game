<template>
  <div class="md:p-10 lg:p-5 lg:pb-10 top-0 left-0 w-full text-center">
    <RouterLink to="/special">
              <button
                class="w-48 p-2 mb-3 rounded-xl bg-red-500 hover:bg-red-100 text-2xl text-white"
              >
                Special
              </button>
            </RouterLink>
    <h1
      class="text-2xl xl:text-5xl mt-3 lg:mt-10 lg:bg-red mb-1 md:mb-7 xl:mb-16 lg:mb-0 font-bold text-white"
    >
      Emoji Convert Game
    </h1>
    <RouterView />
  </div>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
</script>
