<template>
    <Navbar />
    <Hero />
    <Stories />
</template>

<script>
import Hero from '@/components/Hero.vue';
import Navbar from '../components/Navbar.vue';
import Stories from '@/components/Stories.vue';

export default {
    name: "HomePage",
    components: {
    Navbar,
    Hero,
    Stories
}

}
</script>

<style>

</style>