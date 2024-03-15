<template>
  <main class="border-4 border-purple-500 bg-gray-600 w-[100%] h-[auto] flex flex-col justify-start pb-72 md:flex-row md:justify-center md:pb-48">
    <div class="border-4 border-green-500 w-[100%] h-[400px]  md:w-[38%] px-4 py-12 md:h-[550px] md:px-12 md:pt-28">
        <h1 class="font-bold text-[40px]">Unfiltered, Unedited Stories</h1>
        <p class="pt-4">We're committed to transparency and the use of our survey technology to collect and share real-time updates and stories
            in this live newsfeed.
        </p>
        <p class="font-bold pt-12">Learn about how we collect stories L</p>
    </div>
    <div class="border-4 border-green-700 w-[100%] h-[420px] md:w-[55%] md:h-[550px]">
        <div class="border-8 border-orange-500 w-[400px] h-[400px] m-[auto] relative flex justify-center items-center md:w-[540px] md:h-[540px]">

            <div class="zig border-2 border-green-900 bg-red-400 rounded-full h-[10px] w-[10px] absolute"></div>

            <div class="rot3 border-2 border-green-900 bg-purple-400 rounded-full h-[15px] w-[15px] absolute"></div>
            <div class="rot border-2 border-green-400 bg-red-600 rounded-full h-[20px] w-[20px] absolute"></div>
            <div class="rot2 border-2 border-green-900 bg-green-400 rounded-full h-[20px] w-[20px] absolute"></div>

            <div class="border border-blue-800 w-[95%] h-[95%] rounded-full flex">
                <div class="border-2 border-blue-500 w-[75%] h-[75%] rounded-full m-[auto] flex">
                    <div class="border-4 border-blue-400 w-[60%] h-[60%] rounded-full m-[auto] flex">
                        <div class="border-4 border-blue-400 w-[40px] h-[40px] rounded-full m-[auto] bg-blue-500">
                            <div class="border-8 border-red-600 w-[150px] h-[150px] relative rounded-full bottom-40 right-40"></div>
                            <div class="border-8 border-red-900 w-[80px] h-[80px] relative rounded-full left-32 bottom-56"></div>
                            <div class="border-8 border-pink-300 w-[100px] h-[100px] relative rounded-full right-40 bottom-40"></div>
                            <div class="border-8 border-purple-900 w-[120px] h-[120px] relative rounded-full left-24 bottom-64"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
<div class="border-4 border-teal-900 w-[100%] h-[auto]">
    <div class="border-2 border-blue-400 w-[80%] bg-blue-200 h-[auto] mx-[auto] relative bottom-36 rounded-[40px] p-8 flex flex-col md:flex-row md:bottom-12">
        <h2 class="text-green-800 font-bold text-xl mx-auto my-4 md:w-[500px]">GDLive Newsfeed</h2>
        <p class="text-center md:text-left">We check in with people at each stage of the cash transfer process to see how things are going. Take a look at some of their stories as they
            appear here in real-time. Learn more about how recipients opt in to share their stories.
        </p>
    </div>
    <div class="border-4 border-red-500 w-[100%] h-[auto] px-4 py-16 flex flex-col md:flex-row md:py-32 md:px-12">
        <div class="border-2 border-fuchsia-500 w-[85%] h-[auto] mx-auto text-center md:w-[35%] md:text-left">
            <h3 class="font-bold text-xl">Explore Recipients</h3>
            <p class="pt-6">Browse the real, unedited profiles of the recipients we serve, learn about their aspirations and follow them to stay updated as their
                 lives move forward.
            </p>
        </div>
        <div class="border-2 border-green-400 w-[90%] h-[30px] my-12 mx-auto flex flex-row flex-nowrap justify-between items-center md:w-[35%] relative md:top-12">
            <img src="/img/Nigeria.png" class="border-2 h-[25px] w-[30px]" />
            <img src="/img/USA.png" class="border-2 h-[25px] w-[30px]" />
            <img src="/img/Malawi.png" class="border-2 h-[25px] w-[30px]" />
            <img src="/img/Mozambiq.png" class="border-2 h-[25px] w-[30px]" />
            <img src="/img/Kenya.png" class="border-2 h-[25px] w-[30px]" />
            <img src="/img/Togo.png" class="border-2 h-[25px] w-[30px]" />
            <img src="/img/Turkey.png" class="border-2 h-[25px] w-[30px]" />
            <img src="/img/Liberia.png" class="border-2 h-[25px] w-[30px]" />
            <img src="/img/Yemen.png" class="border-2 h-[25px] w-[30px]" />
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "Hero"

}
</script>

<style scoped>

@keyframes orbit {
    0% {
        transform: rotate(0deg) translateX(250px) rotate(0deg);
    }
    100%  {
        transform: rotate(360deg) translateX(250px) rotate(-360deg);
    }
}

@keyframes orbit2 {
    0% {
        transform: rotate(360deg) translateX(185px) rotate(-360deg);
    }
    100%  {
        transform: rotate(0deg) translateX(185px) rotate(0deg);
    }
}

@keyframes orbit3 {
    0% {
        transform: rotate(0deg) translateX(110px) rotate(0deg);
    }
    100%  {
        transform: rotate(360deg) translateX(110px) rotate(-360deg);
    }
}

@keyframes move {
    0% {
        transform: translate(-150px, 70px);
    }
    33% {
        transform: translate(100px, -230px);

    }
    66% {
        transform: translate(-250px, 150px);

    }
    100% {
        transform: translate(250px, 400px);
    }
}


.rot {
    animation: orbit 4s linear infinite;   
}
.rot2 {
    animation: orbit2 4s linear infinite;   
}
.rot3 {
    animation: orbit3 4s linear infinite;   
}
.zig  {
    animation: move 4s linear infinite;
}
</style>