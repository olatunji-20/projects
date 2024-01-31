<template>
    <Navbar />
    <!-- <h1>PROFILE PAGE</h1> -->
    <main class="border-4 border-blue-800 w-[100%] h-[auto] mx-[auto] mt-8 md:w-[80%] md:mt-12">
        <div class="border-4 border-green-500 w-[100%] h-[250px] md:h-[320px]"></div>
        <div class="border-4 border-red-500 w-[100%] h-[250px] md:h-[320px]">
            <div class="border-8 border-yellow-600 w-[120px] h-[120px] rounded-full relative left-8 bottom-[25%] bg-blue-200 md:w-[200px] md:h-[200px] md:bottom-[30%]"></div>
        </div>
    </main>

    <div class="border-4 border-blue-600 bg-blue-200 w-[100%] h-[auto] my-16 mx-auto py-1 md:flex flex-row items-center justify-evenly md:w-[80%]">
        <p class="font-bold text-left">Progress:</p>
        <div class="border-2 border-red-300 w-[100%] h-[100px] my-4 flex flex-row flex-nowrap items-center justify-evenly md:w-[70%]">

            <div class="border-2 border-blue-400 w-[33%] h-[80px] flex flex-row items-center md:w-[33%]">
                <div class="border-2 border-green-500 w-[70px] h-[70px] rounded-full"></div>
                <p class="pl-1 text-sm md:pl-4">Enrollment</p>
            </div>
            

            <div class="border-2 border-blue-400 w-[33%] h-[80px] flex flex-row items-center md:w-[33%]">
                <div class="border-2 border-green-500 w-[70px] h-[70px] rounded-full"></div>
                <p class="pl-1 text-sm md:pl-4">Transfer</p>
            </div>

            <div class="border-2 border-blue-400 w-[33%] h-[80px] flex flex-row items-center md:w-[33%]">
                <div class="border-2 border-green-500 w-[70px] h-[70px] rounded-full"></div>
                <p class="pl-1 text-sm md:pl-4">Completed</p>
            </div>

        </div>
    </div>

    <div class="border-4 border-purple-600 bg-purple-200 w-[100%] h-[auto] py-8 px-2 my-16 mx-auto mb-48 md:w-[80%]">
        <h3 class="font-bold text-lg">Activities</h3>
        <div class="border-2 border-green-500 w-[100%] h-[auto] my-4">
            <Activities />
        </div>
    </div>
    <FootBar />
</template>

<script>
import FootBar from '@/components/FootBar.vue';
import Activities from '@/components/Activities.vue';
import Navbar from '@/components/Navbar.vue';

export default {
    name: 'Profile',
    components: { Navbar, Activities, FootBar }
}
</script>

<style>

</style>