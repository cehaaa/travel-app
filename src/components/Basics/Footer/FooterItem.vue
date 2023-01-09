<script lang="ts" setup>
import { RouterLink } from "vue-router";

interface FooterItemProps {
	to: string;
	exactPath: string;
}

const props = defineProps<FooterItemProps>();
</script>

<template>
	<RouterLink :to="props.to" class="footer-item">
		<slot />
	</RouterLink>
</template>

<style lang="scss" scoped>
@import "./../../../scss/_variables.scss";
.footer-item {
	color: $black;
	cursor: pointer;
	transition-duration: 200ms;

	&.active {
		color: $primary;
	}

	&:hover {
		color: $primary;
	}
}
</style>
