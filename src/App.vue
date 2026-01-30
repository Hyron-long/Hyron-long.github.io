<script setup>
import Navbar from './component/Navbar.vue'
import Footer from './component/Footer.vue'
</script>

<template>
	<Navbar />
	<main>
		<router-view />
	</main>
	<Footer />
</template>

<style scoped>
main{min-height:70vh}
</style>
