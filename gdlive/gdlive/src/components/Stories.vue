<template>
    <main class="border-4 border-red-300 bg-gray-200 w-[100%] h-[auto] py-12 px-4 md:p-32">
        <div class="border-2 border-green-500 w-[100%] h-[50px] flex flex-row no-wrap justify-between items-center">
            <div class="border-2 border-purple-300 bg-white w-[40%] h-[auto] flex flex-row flex-nowrap">
                <div class="border-2 border-red-400 w-[35px] h-[35px] text-center pt-1"><i class="material-symbols-outlined font-bold">search</i></div>
                <div class="border-2 border-blue-500 h-[35px] w-[80%] ml-2">
                    <input placeholder="search name, country or region  " class="w-[100%] h-[100%] indent-2" />
                </div>
            </div> 
            <div class="border-2 border-pink-300 bg-red-200 w-[100px] h-[40px] text-center">
                <img src="/img/gdlive.svg" class="w-[100%] h-[100%]" />
                <!-- <i class="material-symbols-outlined font-bold text-[30px]">home_max_dots</i> -->
            </div>
        </div>
        <div class="border-2 border-rose-500 w-[100%] h-[auto] mt-16" data-aos="fade-out">
            <EachStory />
        </div>
        <div class="w-[100%] h-[50px] mx-auto my-12 text-center md:w-[250px]">
            <button class="bg-green-500 w-[100%] h-[100%] rounded-md text-white hover:bg-red-500 duration-200">Load More</button>
        </div>
    </main>
</template>

<script>
import EachStory from '../components/EachStory.vue';

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 1000,
});

export default {
    name: 'Stories',
    setup() {

        return {

        }
    },
    components: {
        EachStory,
    }

}
</script>

<style>

</style>