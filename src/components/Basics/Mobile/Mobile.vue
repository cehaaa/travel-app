<script setup lang="ts">
import ScrollToTop from "../ScrollToTop/ScrollToTop.vue";
</script>

<template>
	<main class="mobile">
		<slot />
	</main>
</template>

<style scoped lang="scss">
@import "./../../../scss/_variables.scss";
.mobile {
	padding-bottom: 90px;
	width: 390px;
	min-height: 100vh;
	margin: 0 auto;
	background: $gray-50;
	overflow: hidden;
}
</style>
