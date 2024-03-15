<template>
    <main class="border-4 border-red-300 bg-gray-200 w-[100%] h-[auto] py-12 px-4 md:p-32">
        <div class="border-2 border-green-500 w-[100%] h-[50px] flex flex-row no-wrap justify-between items-center">
            <div class="border-2 border-purple-300 w-[50%] h-[40px]"></div>
            <div class="border-2 border-pink-300 w-[100px] h-[40px]"></div>
        </div>
        <div class="border-2 border-rose-500 w-[100%] h-[auto] mt-16">
            <EachStory />
        </div>
        <div class="w-[100%] h-[50px] mx-auto my-12 text-center md:w-[250px]">
            <button class="bg-green-500 w-[100%] h-[100%] rounded-md text-white">Load More</button>
        </div>
    </main>
</template>

<script>
import EachStory from '../components/EachStory.vue'

export default {
    name: 'Stories',
    setup() {

        return {

        }
    },
    components: {
        EachStory
    }

}
</script>

<style>

</style>