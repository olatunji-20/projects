<template>

  <div class="border-2 border-red-600 w-[100%] h-[150px] rounded-md bg-yellow-200 mt-6 mb-2 flex flex-row justify-between">
    <div class="border-4 border-blue-500 w-[65%] h-[100%] flex flex-row flex-nowrap justify-between">
        <div class="border-2 border-blue-500 w-[70px] h-[70px] rounded-full pt-1 text-center align-middle"><i class="material-symbols-outlined font-bold text-[60px]">paid</i></div>
        <div class="border-2 border-green-500 w-[70%] h-[100%]">
            <h3 class="font-bold text-xl">Final Payment</h3>
            <p class="font-bold mt-4">Transfer Amount</p>
            <p class="text-sm font-bold"><span class="line-through">N</span>{{ paymentInfo.finalPaymentAmount }} (${{ ((paymentInfo.finalPaymentAmount)/dollarRate).toFixed(2) }})</p>
            <p class="text-sm mt-4 md:hidden">{{ timeAgo(paymentInfo.finalPaymentTime) }}</p>
        </div>
    </div>
    <div class="border-4 border-red-500 w-[25%] h-[100%]">
        <p class="hidden md:block">{{ timeAgo(paymentInfo.finalPaymentTime) }}</p>
        <p class="hidden md:inline-block">Show story</p>
        <p class="inline ml-4 border border-green-500 px-1 pt-2 relative top-2 cursor-pointer" @click="toggleEnroll" ><span v-if="showEnroll"><i class="material-symbols-outlined font-bold">keyboard_control_key</i></span><span v-else><i class="material-symbols-outlined font-bold">expand_more</i></span></p>
    </div>
  </div>

  <transition name="hhh">
    <div v-show="showEnroll" class="border-2 border-purple-600 rounded-md w-[100%] h-[auto] bg-blue-100 my-2 p-2 overflow-hidden">
        <h1>{{ paymentInfo.story }}</h1>
    </div>
  </transition>

  <div class="border-2 border-red-600 w-[100%] h-[150px] rounded-md bg-yellow-200 mt-6 mb-2 flex flex-row justify-between">
    <div class="border-4 border-blue-500 w-[65%] h-[100%] flex flex-row flex-nowrap justify-between">
        <div class="border-2 border-blue-500 w-[70px] h-[70px] rounded-full pt-1 text-center align-middle"><i class="material-symbols-outlined font-bold text-[60px]">payments</i></div>
        <div class="border-2 border-green-500 w-[70%] h-[100%]">
            <h3 class="font-bold text-xl">Initial Payment</h3>
            <p class="font-bold mt-4">Transfer Amount</p>
            <p class="text-sm font-bold"><span class="line-through">N</span>{{ paymentInfo.firstPaymentAmount }} (${{ ((paymentInfo.firstPaymentAmount)/dollarRate).toFixed(2) }})</p>
            <p class="text-sm mt-4 md:hidden">{{ timeAgo(paymentInfo.firstPaymentTime) }}</p>
        </div>
    </div>
    <div class="border-4 border-red-500 w-[25%] h-[100%]">
        <p class="hidden md:block">{{ timeAgo(paymentInfo.firstPaymentTime) }}</p>
        <p class="hidden md:inline-block">Show story</p>
        <p class="inline ml-4 border border-green-500 px-1 pt-2 relative top-2 cursor-pointer" @click="toggleEnroll2"><span v-if="showEnroll2"><i class="material-symbols-outlined font-bold">keyboard_control_key</i></span><span v-else><i class="material-symbols-outlined font-bold">expand_more</i></span></p>
    </div>
  </div>

  <transition name="hhh">
    <div v-show="showEnroll2" class="border-2 border-purple-600 rounded-md w-[100%] h-[auto] bg-blue-100 my-2 p-2 overflow-hidden">
        <h1>{{ paymentInfo.story }}</h1>
    </div>
  </transition>

  <div class="border-2 border-red-600 w-[100%] h-[150px] rounded-md bg-yellow-200 mt-6 mb-2 flex flex-row justify-between">
    <div class="border-4 border-blue-500 w-[65%] h-[100%] flex flex-row flex-nowrap justify-between">
        <div class="border-2 border-blue-500 w-[70px] h-[70px] rounded-full pt-1 text-center align-middle"><i class="material-symbols-outlined font-bold text-[60px]">how_to_reg</i></div>
        <div class="border-2 border-green-500 w-[70%] h-[100%]">
            <h3 class="font-bold text-xl">Enrolled</h3>
            <p class="font-bold mt-4">Location</p>
            <p class="text-sm font-bold">Lagos, Nigeria</p>
            <p class="text-sm mt-4 md:hidden">{{ timeAgo(paymentInfo.enrollmentTime) }}</p>
        </div>
    </div>
    <div class="border-4 border-red-500 w-[25%] h-[100%]">
        <p class="hidden md:block">{{ timeAgo(paymentInfo.enrollmentTime) }}</p>
        <p class="hidden md:inline-block">Show story</p>
        <p class="inline ml-4 border border-green-500 px-1 pt-2 relative top-2 cursor-pointer" @click="toggleEnroll3"><span v-if="showEnroll3"><i class="material-symbols-outlined font-bold">keyboard_control_key</i></span><span v-else><i class="material-symbols-outlined font-bold">expand_more</i></span></p>
    </div>
  </div>

  <transition name="hhh">
    <div v-show="showEnroll3" class="border-2 border-purple-600 rounded-md w-[100%] h-[auto] bg-blue-100 my-2 p-2 overflow-hidden">
        <h1>{{ paymentInfo.story }}</h1>
    </div>
  </transition>

</template>

<script >
import { ref } from 'vue';

export default {
    name: "Activities",
    props: {
        paymentInfo: Object
    },
    setup() {
        const showEnroll = ref(false);
        const showEnroll2 = ref(false);
        const showEnroll3 = ref(false);
        const dollarRate = ref(1843)

        const toggleEnroll = () => {
            showEnroll.value = !showEnroll.value
        }

        const toggleEnroll2 = () => {
            showEnroll2.value = !showEnroll2.value
        }

        const toggleEnroll3 = () => {
            showEnroll3.value = !showEnroll3.value
        }

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
            showEnroll, showEnroll2, showEnroll3,
            toggleEnroll, toggleEnroll2, toggleEnroll3,
            timeAgo,
            dollarRate
        }
    }
    

}
</script>

<style scoped>
.hhh-enter-from, .hhh-leave-to {
    height: 0px;
    opacity: 0;
}
.hhh-enter-to, .hhh-leave-from {
    height: 120px;
    opacity: 1;
}
.hhh-enter-active, .hhh-leave-active {
    transition: all 0.2s linear;
}
</style>