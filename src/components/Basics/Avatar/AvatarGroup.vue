<script setup lang="ts">
interface AvatarGrouProps {
	size: string;
}

const props = withDefaults(defineProps<AvatarGrouProps>(), {
	size: "base",
});
</script>

<template>
	<div
		class="avatar-group"
		:class="{
			base: props.size === 'base',
			xs: props.size === 'xs',
		}"
	>
		<slot />
	</div>
</template>

<style lang="scss">
.avatar-group {
	display: flex;
}

.base {
	.avatar-base:first-child {
		margin-left: 0;
	}

	.avatar-base {
		margin-left: -20px;
	}
}

.xs {
	.avatar-base:first-child {
		margin-left: 0;
	}

	.avatar-base {
		margin-left: -10px;
	}
}
</style>
