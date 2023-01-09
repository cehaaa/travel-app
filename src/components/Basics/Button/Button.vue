<script lang="ts" setup>
interface ButtonProps {
	variant?: string;
}

defineProps<ButtonProps>();
</script>

<template>
	<button :class="{ 'w-full': variant === 'full' }">
		<slot />
	</button>
</template>

<style lang="scss" scoped>
@import "./../../../scss/_variables.scss";

button {
	background: $primary;
	color: white;
	font-size: $sm;
	font-weight: 500;
	border: none;
	border-radius: 10px;
	padding: 15px 35px;
	cursor: pointer;

	&.w-full {
		width: 100%;
	}
}
</style>
