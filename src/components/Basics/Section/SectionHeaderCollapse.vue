<script lang="ts" setup>
const closeHandler = () => {
	console.log("close");
};
</script>

<template>
	<div class="collapse-header" @click="closeHandler">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="2"
			stroke="currentColor"
			class="collapse-icon"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M19.5 8.25l-7.5 7.5-7.5-7.5"
			/>
		</svg>

		<slot />
	</div>
</template>

<style lang="scss" scoped>
@import "./../../../scss/_variables.scss";
.collapse-header {
	font-size: $base;
	color: $black;
	font-weight: 500;
	display: flex;
	align-items: center;
	cursor: pointer;

	.collapse-icon {
		width: 20px;
		height: 20px;
		transition-duration: 200ms;

		&.close {
			transform: rotate(180deg);
		}
	}

	& > *:first-child {
		margin-right: 10px;
	}
}
</style>
