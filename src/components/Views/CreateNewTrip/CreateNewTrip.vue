<script lang="ts" setup>
import BackLink from "../../Basics/BackLink/BackLink.vue";
import Container from "../../Basics/Container/Container.vue";

import Button from "../../Basics/Button/Button.vue";
import ScrollToTop from "../../Basics/ScrollToTop/ScrollToTop.vue";
</script>

<template>
	<ScrollToTop />

	<BackLink backTo="Home" variant="white" />

	<div class="destination-header">
		<img
			class="destination-image"
			src="./../../../../src/assets/images/places/indonesia.png"
		/>

		<div class="destination-information">
			<div>
				<div class="title" style="margin-bottom: 5px">Camp Bukit Raya</div>
				<div class="text">Indonesia, Magelang</div>
			</div>
		</div>
	</div>

	<Container class="destination-body">
		<div class="subtitle black">Description</div>
		<div class="text">
			Lorem ipsum dolor sit amet, consectetur elit. Praesent gravida, mauris at
			pellentesque, velit felis volutpat metus, quis fringilla massa quis
			fringilla massa dui auctor erat.
		</div>
	</Container>

	<div class="destination-horizontal-scrolling">
		<div class="scroll-item">
			<img
				src="./../../../../src/assets/images/places/valley.png"
				class="scroll-image"
			/>
		</div>
		<div class="scroll-item">
			<img
				src="./../../../../src/assets/images/places/forest.png"
				class="scroll-image"
			/>
		</div>
		<div class="scroll-item">
			<img
				src="./../../../../src/assets/images/places/indonesia.png"
				class="scroll-image"
			/>
		</div>
	</div>

	<Container style="margin-top: 20px">
		<Button variant="full">Add to trip list</Button>
	</Container>
</template>

<style lang="scss" scoped>
.destination-header {
	width: 390px;
	height: 280px;
	max-height: 355px;
	position: relative;

	.destination-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		z-index: -1;
	}

	.destination-information {
		background: white;
		border-radius: 8px;
		bottom: -40px;
		left: 20px;
		padding: 16px;
		position: absolute;
		width: 90%;
	}
}

.destination-body {
	padding-top: 50px;
	padding-bottom: 20px;
}

.destination-horizontal-scrolling {
	min-width: 390px;
	overflow: scroll;
	height: 140px;
	overflow: scroll;
	display: flex;
	padding: 0 20px 0 20px;

	.scroll-item {
		overflow: hidden;
		min-width: 250px;
		height: 100%;
		border-radius: 8px;
		margin-right: 16px;

		.scroll-image {
			width: 100%;
			height: 100%;
			transition-duration: 200ms;

			&:hover {
				transform: scale(1.1) rotate(1.2deg);
			}
		}
	}

	.scroll-item:last-child {
		margin-right: 0;
	}

	&::-webkit-scrollbar {
		display: none;
	}
}
</style>
