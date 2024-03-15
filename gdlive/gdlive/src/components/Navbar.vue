<template>
  <header class="border-2 border-red-400 w-[100%] h-[120px] bg-gray-600 flex flex-row justify-between items-center px-6 md:px-16">
    <router-link to="/">
      <div class="border-2 border-green-600 w-[200px] h-[55px]">
        <img src="/img/gdlive.svg" alt="gdlive-love" class="w-[100%] h-[100%]" />
      </div>
    </router-link>
    <div class="border-2 border-red-800 w-[40px] h-[40px] md:hidden"></div>
    <div class="border-2 border-blue-600 w-[300px] h-[30px] text-center text-white hidden md:inline">
      <h5>GiveDirectly Home</h5>
    </div>
    <div class="w-[160px] h-[50px] hidden md:inline">
      <button class="bg-teal-300 w-[100%] h-[100%] rounded-md text-white">Give Now</button>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>