<template>
  <div class="border-4 border-blue-800 w-[100%] h-[100%] flex flex-col justify-between px-1 md:flex-row flex-wrap">
    <!-- <h1 class="font-bold text-purple-400 text-xl">{{ counterStore.count }}</h1> -->

    <router-link to="/profile">
        <div class="border-4 border-red-300 w-[100%] h-[auto] pb-4 p-1 my-4 md:w-[300px]">
            <div class="border-2 border-blue-300 w-[100%] h-[200px]"></div>
            <h3 class="font-bold text-green-700 text-xl py-3">recdfvf ihweoihf fwiehfioe fhuiiof</h3>
            <p class="text-green-700">20 hours ago</p>
            <p class="pt-3 pb-8 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Rerum quod esse modi necessitatibus cupiditate earum rem pariatur adipisci. 
                Fuga hic perspiciatis maxime. Ipsam tenetur sunt voluptate, culpa vitae voluptatem, 
                impedit laborum laudantium mollitia sed praesentium eveniet voluptas eos magni autem?
            </p>
        </div>
    </router-link>

    <div class="border-4 border-red-300 w-[100%] h-[auto] pb-4 p-1 my-4 md:w-[300px]">
        <div class="border-2 border-blue-300 w-[100%] h-[200px]"></div>
        <h3 class="font-bold text-green-700 text-xl py-3">recdfvf ihweoihf fwiehfioe fhuiiof</h3>
        <p class="text-green-700">20 hours ago</p>
        <p class="pt-3 pb-8 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Rerum quod esse modi necessitatibus cupiditate earum rem pariatur adipisci. 
            Fuga hic perspiciatis maxime. Ipsam tenetur sunt voluptate, culpa vitae voluptatem, 
            impedit laborum laudantium mollitia sed praesentium eveniet voluptas eos magni autem?
        </p>
    </div>

    <div class="border-4 border-red-300 w-[100%] h-[auto] pb-4 p-1 my-4 md:w-[300px]">
        <div class="border-2 border-blue-300 w-[100%] h-[200px]"></div>
        <h3 class="font-bold text-green-700 text-xl py-3">recdfvf ihweoihf fwiehfioe fhuiiof</h3>
        <p class="text-green-700">20 hours ago</p>
        <p class="pt-3 pb-8 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Rerum quod esse modi necessitatibus cupiditate earum rem pariatur adipisci. 
            Fuga hic perspiciatis maxime. Ipsam tenetur sunt voluptate, culpa vitae voluptatem, 
            impedit laborum laudantium mollitia sed praesentium eveniet voluptas eos magni autem?
        </p>
    </div>

    <div class="border-4 border-red-300 w-[100%] h-[auto] pb-4 p-1 my-4 md:w-[300px]">
        <div class="border-2 border-blue-300 w-[100%] h-[200px]"></div>
        <h3 class="font-bold text-green-700 text-xl py-3">recdfvf ihweoihf fwiehfioe fhuiiof</h3>
        <p class="text-green-700">20 hours ago</p>
        <p class="pt-3 pb-8 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Rerum quod esse modi necessitatibus cupiditate earum rem pariatur adipisci. 
            Fuga hic perspiciatis maxime. Ipsam tenetur sunt voluptate, culpa vitae voluptatem, 
            impedit laborum laudantium mollitia sed praesentium eveniet voluptas eos magni autem?
        </p>
    </div>

    <div class="border-4 border-red-300 w-[100%] h-[auto] pb-4 p-1 my-4 md:w-[300px]">
        <div class="border-2 border-blue-300 w-[100%] h-[200px]"></div>
        <h3 class="font-bold text-green-700 text-xl py-3">recdfvf ihweoihf fwiehfioe fhuiiof</h3>
        <p class="text-green-700">20 hours ago</p>
        <p class="pt-3 pb-8 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Rerum quod esse modi necessitatibus cupiditate earum rem pariatur adipisci. 
            Fuga hic perspiciatis maxime. Ipsam tenetur sunt voluptate, culpa vitae voluptatem, 
            impedit laborum laudantium mollitia sed praesentium eveniet voluptas eos magni autem?
        </p>
    </div>

    <div class="border-4 border-red-300 w-[100%] h-[auto] pb-4 p-1 my-4 md:w-[300px]">
        <div class="border-2 border-blue-300 w-[100%] h-[200px]"></div>
        <h3 class="font-bold text-green-700 text-xl py-3">recdfvf ihweoihf fwiehfioe fhuiiof</h3>
        <p class="text-green-700">20 hours ago</p>
        <p class="pt-3 pb-8 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Rerum quod esse modi necessitatibus cupiditate earum rem pariatur adipisci. 
            Fuga hic perspiciatis maxime. Ipsam tenetur sunt voluptate, culpa vitae voluptatem, 
            impedit laborum laudantium mollitia sed praesentium eveniet voluptas eos magni autem?
        </p>
    </div>
    
  </div>
</template>

<script>
import { useCounterStore } from '@/stores/counter';

export default {
    name: "EachStory",
    setup() {
        const counterStore = useCounterStore();

        return {
            counterStore
        }
    }

}
</script>

<style>

</style>