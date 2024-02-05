<template>
  <div class="border-4 border-blue-400 w-[100%] h-[100%] flex flex-col justify-between px-1 md:flex-row flex-wrap">

    <div v-for="p in profileStore.profiles" :key="p.id" class="border-4 border-red-300 w-[100%] h-[auto] pb-4 p-1 my-4 md:w-[300px]">
        <router-link :to="/profile/ + `${p.id}`">
            <div class="border-2 border-blue-300 w-[100%] h-[200px]"></div>
            <h3 class="font-bold text-[15px] py-3"><span class="text-green-700">{{ p.name }}</span>, {{ p.heading }}</h3>
            <p class="text-green-700">{{ p.posted }}</p>
            <p class="pt-3 pb-8 text-sm">{{ p.story }}</p>
        </router-link>
    </div>
        
  </div>
</template>

<script>
import { useCounterStore } from '@/stores/counter';

export default {
    name: "EachStory",
    setup() {
        const profileStore = useCounterStore();

        profileStore.getProfiles();

        return {
            profileStore
        }
    }

}
</script>

<style>

</style>