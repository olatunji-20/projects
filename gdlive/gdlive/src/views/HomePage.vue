<template>
    <Navbar />
    <Hero />
</template>

<script>
import Hero from '@/components/Hero.vue';
import Navbar from '../components/Navbar.vue';

export default {
    name: "HomePage",
    components: {
    Navbar,
    Hero
}

}
</script>

<style>

</style>