<script setup lang="ts">
import { RouterView } from "vue-router";

import Mobile from "./components/Basics/Mobile/Mobile.vue";
import Footer from "./components/Basics/Footer/Footer.vue";
</script>

<template>
	<Mobile>
		<RouterView />

		<Footer />
	</Mobile>
</template>
