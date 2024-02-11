<template>
    <Navbar />
    <main class="border-4 border-blue-800 w-[100%] h-[auto] mx-[auto] mt-8 md:w-[80%] md:mt-12">
        <div class="border-4 border-green-500 w-[100%] h-[250px] md:h-[320px]">
            <div class="border-4 border-red-400 w-[100%] h-[100%]">
                <img :src="profileStore.profile.coverImage" class="h-[100%] w-[100%] object-cover" />
            </div>
            <div class="border-8 border-yellow-600 w-[130px] h-[130px] rounded-full relative left-4 bottom-16 bg-blue-200 md:w-[200px] md:h-[200px] md:bottom-[30%]">
                <img :src="profileStore.profile.imageUrl" class="h-[100%] w-[100%] object-cover" />
            </div>
        </div>
        <div class="border-4 border-red-500 w-[100%] h-[auto] px-4 md:h-[320px]">
            <div class="border-2 border-blue-500 w-[100%] h-[auto] mt-20 flex flex-row md:mt-28">
                <h2 class="font-bold text-xl">{{ profileStore.profile.name }}</h2>
                <p class="ml-4 text-xl md:ml-12">{{ Math.floor((new Date() - new Date( profileStore.profile.dob ).getTime()) / 3.15576e+10) }}</p>
                <div class="border border-red-400 ml-4 md:ml-12"><img :src='"/img/" + profileStore.profile.country + ".png"' class=" w-[30px] h-[20px] inline relative bottom-[3px]" /><p class="ml-4 text-xl inline">{{ profileStore.profile.country }}</p></div>
            </div>
            <div class="border-4 border-green-600 w-[100%] h-[auto] mt-6 flex flex-col justify-between md:flex-row">
                <div class="border-4 mt-2 w-[100%] h-[auto] md:w-[30%]">
                    <p class="text-md">Occupation: <span class="font-bold text-[20px]">{{ profileStore.profile.occupation }}</span></p>
                    <p class="text-md">Campaign: <span class="font-bold text-[18px]">{{ profileStore.profile.campaign }}</span></p>
                </div>
                <div class="border-4 mt-2 w-[100%] h-[auto] md:w-[22%]">
                    <p class="text-md">Current Total Transferred</p>
                    <p class="text-[19px] font-bold mt-2"><span class="line-through">N</span>{{ profileStore.profile.firstPaymentAmount + profileStore.profile.finalPaymentAmount }} (${{ ((profileStore.profile.firstPaymentAmount + profileStore.profile.finalPaymentAmount)/dollarRate).toFixed(2) }})</p>
                </div>
                <div class="border-4 mt-2 w-[100%] h-[auto] md:w-[12%]">
                    <p class="text-md">Status</p>
                    <p class="bg-green-200 w-[90px] text-center pb-1 rounded-full">ongoing</p>
                </div>
                <div class="border-4 mt-2 w-[100%] h-[auto] md:w-[22%]">
                    <p class="text-md">Upcoming Stage</p>
                    <p class="text-[18px] font-bold mt-2">Next Payment</p>
                </div>
            </div>
        </div>
    </main>

    <Progress />

    <div class="border-4 border-purple-600 bg-purple-200 w-[100%] h-[auto] py-8 px-2 my-16 mx-auto mb-48 md:w-[80%]">
        <h3 class="font-bold text-lg">Activities</h3>
        <div class="border-2 border-green-500 w-[100%] h-[auto] my-4">
            <Activities :paymentInfo="profileStore.profile" />
        </div>
    </div>
    <FootBar />
</template>

<script>
import { useCounterStore } from '@/stores/counter';
import FootBar from '@/components/FootBar.vue';
import Activities from '@/components/Activities.vue';
import Navbar from '@/components/Navbar.vue';
import Progress from '@/components/Progress.vue';
import { useRoute } from 'vue-router';
import { onMounted } from 'vue';
import { ref } from 'vue';

export default {
    name: 'Profile',
    setup() {
        const route = useRoute();
        const profileStore = useCounterStore();

        const dollarRate = ref(1483);

        onMounted(async () => {
            await profileStore.getProfile(route.params.id)
        });

        return {
            profileStore,
            dollarRate
        }
    },
    components: {
        Navbar,
        Activities,
        FootBar,
        Progress
    }
}
</script>

<style>

</style>