<script setup lang="ts">
interface AvatarBaseProps {
	size: string;
}

const props = withDefaults(defineProps<AvatarBaseProps>(), {
	size: "base",
});
</script>

<template>
	<div
		class="avatar"
		:class="{ sm: props.size === 'sm', base: props.size === 'base' }"
	>
		<slot />
	</div>
</template>

<style lang="scss">
.avatar {
	border: 2px solid white;
	background: lightgray;
	border-radius: 50%;
	overflow: hidden;

	&.sm {
		width: 40px;
		height: 40px;
	}

	&.base {
		width: 50px;
		height: 50px;
	}

	img {
		width: 100%;
		object-fit: cover;
	}
}
</style>
