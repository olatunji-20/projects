<template>
  <div class="border-4 border-blue-400 w-[100%] h-[100%] flex flex-col justify-between px-1 md:flex-row flex-wrap">

    <div v-for="p in profileStore.profiles" :key="p.id" class="border-2 border-red-300 bg-white rounded-md w-[100%] h-[auto] pb-2 p-1 my-4 overflow-hidden text-wrap md:w-[300px] md:h-[auto]">
        <router-link :to="/profile/ + `${p.id}`">
            <div class="border-2 border-blue-300 w-[100%] h-[200px] overflow-hidden">
                <img :src="p.coverImage" class="h-[100%] w-[100%] object-fill hover:scale-150 duration-500" />
            </div>
            <h3 class="font-bold text-[15px] py-3"><span class="text-green-700">{{ p.name }}</span>, {{ p.heading }}</h3>
            <p class="text-green-700">{{ timeAgo(p.posted) }}</p>
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

        const timeAgo = (x) => {
            const seconds = Math.floor((new Date() - new Date(x))/ 1000);

            let interval = Math.floor(seconds / 31536000);

            if (interval > 1) {
                return interval + ' years ago';
            }

            interval = Math.floor(seconds / 2592000);
            if (interval > 1) {
                return interval + ' months ago';
            }

            interval = Math.floor(seconds / 86400);
            if (interval > 1) {
                return interval + ' days ago';
            }

            interval = Math.floor(seconds / 3600);
            if (interval > 1) {
                return interval + ' hours ago';
            }

            interval = Math.floor(seconds / 60);
            if (interval > 1) {
                return interval + ' minutes ago';
            }

            if (seconds < 10) {
                return ' just now';
            }

            return Math.floor(seconds) + 'seconds ago';
        }


        return {
            profileStore,
            timeAgo
        }
    }

}
</script>

<style>

</style>