<script setup lang="ts">
import guides from "../../utils/guides";
import GuideCard from "./GuideCard.vue";
</script>

<template>
	<div class="guide-group">
		<GuideCard v-for="guide in guides" :guide="guide" />
	</div>
</template>

<style lang="scss" scoped>
@import "./../../scss/_variables.scss";

.guide-group {
	a {
		text-decoration: none;
		color: $black;
		display: block;
		margin-bottom: 2rem;
	}

	.card {
		margin-bottom: 2rem;
	}

	.card:last-child {
		margin-bottom: 0;
	}
}
</style>
