<template>

  <div class="border-2 border-red-600 w-[100%] h-[150px] rounded-md bg-yellow-200 mt-6 mb-2 flex flex-row justify-between">
    <div class="border-4 border-blue-500 w-[65%] h-[100%] flex flex-row flex-nowrap justify-between">
        <div class="border-2 border-blue-500 w-[70px] h-[70px] rounded-full"></div>
        <div class="border-2 border-green-500 w-[70%] h-[100%]">
            <h3 class="font-bold text-xl">Final Payment</h3>
            <p class="font-bold mt-4">Transfer Amount</p>
            <p class="text-sm font-bold">127, 000 KES ($52,000)</p>
            <p class="text-sm mt-4">2 hours ago</p>
        </div>
    </div>
    <div class="border-4 border-red-500 w-[25%] h-[100%]">
        <p class="hidden md:block">20 hours ago</p>
        <p class="hidden md:inline-block">Show story</p>
        <p class="inline ml-4 border-2 border-green-500 px-2 cursor-pointer" @click="toggleEnroll" >S</p>
    </div>
  </div>

  <transition name="hhh">
    <div v-show="showEnroll" class="border-2 border-purple-600 rounded-md w-[100%] h-[200px] bg-blue-100 my-2 p-2">
        <h1>testinf testing</h1>
    </div>
  </transition>

  <div class="border-2 border-red-600 w-[100%] h-[150px] rounded-md bg-yellow-200 mt-6 mb-2 flex flex-row justify-between">
    <div class="border-4 border-blue-500 w-[65%] h-[100%] flex flex-row flex-nowrap justify-between">
        <div class="border-2 border-blue-500 w-[70px] h-[70px] rounded-full"></div>
        <div class="border-2 border-green-500 w-[70%] h-[100%]">
            <h3 class="font-bold text-xl">Initial Payment</h3>
            <p class="font-bold mt-4">Transfer Amount</p>
            <p class="text-sm font-bold">55,000 KES ($33,000)</p>
            <p class="text-sm mt-4">20 hours ago</p>
        </div>
    </div>
    <div class="border-4 border-red-500 w-[25%] h-[100%]">
        <p class="hidden md:block">20 hours ago</p>
        <p class="hidden md:inline-block">Show story</p>
        <p class="inline ml-4 border-2 border-green-500 px-2 cursor-pointer" @click="toggleEnroll2" >S</p>
    </div>
  </div>

  <transition name="hhh">
    <div v-show="showEnroll2" class="border-2 border-purple-600 rounded-md w-[100%] h-[200px] bg-blue-100 my-2 p-2">
        <h1>testinf testing</h1>
    </div>
  </transition>

  <div class="border-2 border-red-600 w-[100%] h-[150px] rounded-md bg-yellow-200 mt-6 mb-2 flex flex-row justify-between">
    <div class="border-4 border-blue-500 w-[65%] h-[100%] flex flex-row flex-nowrap justify-between">
        <div class="border-2 border-blue-500 w-[70px] h-[70px] rounded-full"></div>
        <div class="border-2 border-green-500 w-[70%] h-[100%]">
            <h3 class="font-bold text-xl">Enrolled</h3>
            <p class="font-bold mt-4">Location</p>
            <p class="text-sm font-bold">Lagos, Nigeria</p>
            <p class="text-sm mt-4">Fri, Feb 12, 2023</p>
        </div>
    </div>
    <div class="border-4 border-red-500 w-[25%] h-[100%]">
        <p class="hidden md:block">20 hours ago</p>
        <p class="hidden md:inline-block">Show story</p>
        <p class="inline ml-4 border-2 border-green-500 px-2 cursor-pointer" @click="toggleEnroll3" >S</p>
    </div>
  </div>

  <transition name="hhh">
    <div v-show="showEnroll3" class="border-2 border-purple-600 rounded-md w-[100%] h-[200px] bg-blue-100 my-2 p-2">
        <h1>testinf testing</h1>
    </div>
  </transition>

</template>

<script>
import { ref } from 'vue';

export default {
    name: "Activities",
    setup() {
        const showEnroll = ref(false);
        const showEnroll2 = ref(false);
        const showEnroll3 = ref(false);

        const toggleEnroll = () => {
            showEnroll.value = !showEnroll.value
        }

        const toggleEnroll2 = () => {
            showEnroll2.value = !showEnroll2.value
        }

        const toggleEnroll3 = () => {
            showEnroll3.value = !showEnroll3.value
        }

        return {
            showEnroll, showEnroll2, showEnroll3,
            toggleEnroll, toggleEnroll2, toggleEnroll3
        }
    },

}
</script>

<style scoped>
.hhh-enter-from {
    height: 0px;
}
.hhh-enter-to {
    height: 200px
}
.hhh-enter-active {
    transition: 0.2s linear;
}
.hhh-leave-from {
    height: 200px;
}
.hhh-leave-to {
    height: 0px
}
.hhh-leave-active {
    transition: 0.2s linear;
}

</style>