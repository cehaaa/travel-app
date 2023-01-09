<script lang="ts" setup>
import { useNavigate } from "./../../../utils/useNavigate";

interface BackLinkProps {
	backTo: string;
	variant?: string;
}

const props = withDefaults(defineProps<BackLinkProps>(), {
	variant: "white",
});

const { back } = useNavigate();
</script>

<template>
	<div
		@click="back(-1)"
		class="back-link"
		:class="{
			white: props.variant === 'white',
			black: props.variant === 'black',
		}"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="2"
			stroke="currentColor"
			class="icon"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M15.75 19.5L8.25 12l7.5-7.5"
			/>
		</svg>

		<div class="title white">{{ props.backTo }}</div>
	</div>
</template>

<style lang="scss" scoped>
@import "./../../../scss/_variables.scss";
.back-link {
	display: flex;
	align-items: center;
	position: absolute;
	max-width: 390px;
	top: 50px;
	z-index: 10;
	margin-left: 20px;
	text-decoration: none;
	cursor: pointer;

	& > *:first-child {
		margin-right: 8px;
	}

	&.white {
		color: white;
	}

	&.black {
		color: $black;
	}
}
</style>
