<template>
       <div class="border-4 border-blue-600 bg-blue-200 w-[100%] h-[auto] my-16 mx-auto py-1 md:flex flex-row items-center justify-evenly md:w-[80%]">
        <p class="font-bold text-left">Progress:</p>
        <div class="border-2 border-red-300 w-[100%] h-[100px] my-4 flex flex-row flex-nowrap items-center justify-evenly md:w-[70%]">

            <div class="border-2 border-blue-400 w-[33%] h-[80px] flex flex-row items-center md:w-[33%]">
                <div class="border-2 border-green-500 w-[50px] h-[50px] rounded-full md:w-[70px] md:h-[70px]"></div>
                <p class="pl-1 text-sm md:pl-4">Enrollment</p>
            </div>
            

            <div class="border-2 border-blue-400 w-[33%] h-[80px] flex flex-row items-center md:w-[33%]">
                <div class="border-2 border-green-500 w-[50px] h-[50px] rounded-full md:w-[70px] md:h-[70px]"></div>
                <p class="pl-1 text-sm md:pl-4">Transfer</p>
            </div>

            <div class="border-2 border-blue-400 w-[33%] h-[80px] flex flex-row items-center md:w-[33%]">
                <div class="border-2 border-green-500 w-[50px] h-[50px] rounded-full md:w-[70px] md:h-[70px]"></div>
                <p class="pl-1 text-sm md:pl-4">Completed</p>
            </div>

        </div>
    </div>  
</template>

<script>
export default {
    name: "Progress",
    setup() {}

}
</script>

<style>

</style>