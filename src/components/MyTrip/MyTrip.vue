<script setup lang="ts">
import Container from "../Basics/Container/Container.vue";
import MyTripCard from "./MyTripCard.vue";

const trips = [
	{
		title: "Trip to Indonesia",
		currentTrip: true,
		data: "1 Aug 2022",
	},
	{
		title: "Trip to Malaysia",
		currentTrip: true,
		data: "1 Aug 2022",
	},
	{
		title: "Trip to Singapore",
		currentTrip: true,
		data: "1 Aug 2022",
	},
];
</script>

<template>
	<Container>
		<div class="my-trip">
			<div class="title">My Trip</div>
			<div class="plan-new-trip">Plan new trip</div>
		</div>
	</Container>
	<div class="horizontal-scrolling">
		<MyTripCard v-for="trip in trips" />
	</div>
</template>

<style scoped lang="scss">
@import "./../../scss/_variables.scss";

.my-trip {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 25px;

	.title {
		font-size: $lg;
		font-weight: 500;
	}

	.plan-new-trip {
		font-size: $sm;
	}
}

.horizontal-scrolling {
	display: flex;
	padding: 16px 20px 0px;
	min-width: 390px;
	overflow-x: scroll;
	min-height: 120px;

	.card {
		margin-right: 1rem;
	}

	.card:last-child {
		margin-right: 0;
	}
}

.horizontal-scrolling::-webkit-scrollbar {
	display: none;
}
</style>
