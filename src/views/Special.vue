<template lang="">
    <div>
        <h3 class="text-3xl font-bold text-teal-900 mb-4">เลี้ยงกาแฟผู้พัฒนา</h3>
        <img
              className="w-56 mx-auto mb-16"
              src="https://warathepj.github.io/js-ai-gallery/public/image/promptpay.jpg" 
              alt="corgi" 
        />
        <div class="flex flex-col">

          <RouterLink to="/">
                <button
                  class="w-48 p-2 mb-8 rounded-xl bg-white hover:bg-teal-300 text-2xl text-teal-500"
                >
                  ดูโปรเจ็คอื่นๆ
                </button>
              </RouterLink>
  
          <RouterLink to="/game">
                <button
                  class="w-48 p-2 mb-8 rounded-xl bg-white hover:bg-teal-300 text-2xl text-teal-500"
                >
                  กลับไปเล่นเกมส์
                </button>
              </RouterLink>
        </div>

        <h3 class="text-3xl font-bold text-teal-900 mb-4">CorgiDev</h3>
            <img
              className="w-36 mx-auto"
              src="https://warathepj.github.io/js-ai-gallery/public/image/fri9.jpeg" 
              alt="CorgiDev" 
            />

            {{ edit_1 }} <!-- Added footer section -->
        <footer class="text-center mt-8">
            <p class="text-teal-500">© {{ new Date().getFullYear() }} CorgiDev. All rights reserved.</p>
        </footer>
        {{ edit_1 }}
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>