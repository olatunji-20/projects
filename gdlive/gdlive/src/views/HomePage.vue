<template>
    <Navbar />
    <Hero />
  <h1>LAULAU</h1>
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