<script setup lang="ts">
interface AvatarBaseProps {
	size: string;
	name?: string;
}

const props = withDefaults(defineProps<AvatarBaseProps>(), {
	size: "base",
});
</script>

<template>
	<div class="avatar-base">
		<div
			class="avatar"
			:class="{
				sm: props.size === 'sm',
				base: props.size === 'base',
				xxl: props.size === 'xxl',
			}"
		>
			<slot />
		</div>
		<div class="name" v-if="props.name">{{ name }}</div>
	</div>
</template>

<style lang="scss">
@import "./../../../scss/_variables.scss";

.avatar-base {
	display: flex;
	align-items: center;
	justify-content: center;
	min-width: 50px;
	min-height: 50px;

	.avatar {
		border: 2px solid white;
		background: lightgray;
		border-radius: 50%;
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;

		&.sm {
			width: 40px;
			height: 40px;
		}

		&.base {
			width: 50px;
			height: 50px;
		}

		&.xxl {
			width: 150px;
			height: 150px;
		}

		img {
			width: 100%;
			object-fit: cover;
		}
	}

	.name {
		margin-left: 8px;
		color: $black;
	}
}
</style>
