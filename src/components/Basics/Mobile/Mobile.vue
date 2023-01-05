<script setup lang="ts"></script>

<template>
	<main class="mobile">
		<slot />
	</main>
</template>

<style scoped lang="scss">
@import "./../../../scss/_variables.scss";
.mobile {
	width: 390px;
	min-height: 100vh;
	margin: 0 auto;
	background: $gray-50;
	overflow: hidden;
	position: relative;
}
</style>
