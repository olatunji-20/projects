<template>
    <Navbar />
    <!-- <h1>PROFILE PAGE</h1> -->
    <main class="border-4 border-blue-800 w-[100%] h-[auto] mx-[auto] mt-8 md:w-[80%] md:mt-12">
        <div class="border-4 border-green-500 w-[100%] h-[250px] md:h-[320px]"></div>
        <div class="border-4 border-red-500 w-[100%] h-[250px] md:h-[320px]">
            <div class="border-8 border-yellow-600 w-[120px] h-[120px] rounded-full relative left-8 bottom-[25%] bg-blue-200 md:w-[200px] md:h-[200px] md:bottom-[30%]"></div>
        </div>
    </main>

    <div class="border-4 border-blue-600 bg-blue-200 w-[100%] h-[150px] my-16 mx-auto md:w-[80%]"></div>

    <div class="border-4 border-purple-600 bg-purple-200 w-[100%] h-[1200px] py-8 px-4 my-16 mx-auto mb-48 md:w-[80%]">
        <h3 class="font-bold text-lg">Activities</h3>
    </div>
    <FootBar />
</template>

<script>
import FootBar from '@/components/FootBar.vue';
import Navbar from '@/components/Navbar.vue';

export default {
    name: 'Profile',
    components: { Navbar, FootBar }
}
</script>

<style>

</style>