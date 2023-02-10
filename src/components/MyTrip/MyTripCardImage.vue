<script lang="ts" setup>
import Trip from "../../Interfaces/Trip";

import Avatar from "../Basics/Avatar/Avatar";

interface MyTripCardImageProps {
	trip: Trip;
}

const props = defineProps<MyTripCardImageProps>();
</script>

<template>
	<div class="card">
		<div class="card-image">
			<img :src="props.trip.src" />
		</div>
		<div class="card-body">
			<div>
				<div class="card-title">{{ props.trip.title }}</div>
				<div class="body-section">
					<div class="member">
						<Avatar.Group size="xs">
							<Avatar.Base v-for="member in props.trip.members" size="xs">
								<Avatar.Image :src="member.src"
							/></Avatar.Base>
						</Avatar.Group>
					</div>
					<div>{{ props.trip.numOfPlaces }} Places to go</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import "./../../scss/_variables.scss";
.card {
	display: flex;

	.card-image {
		width: 80px;
		height: 80px;
		border-radius: 5px;
		overflow: hidden;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}

	.card-body {
		padding: 0 1rem;
		display: flex;
		align-items: center;
	}

	.card-title {
		font-weight: 500;
		font-size: 1rem;
	}

	.member {
		margin-right: 10px;
	}

	.body-section {
		display: flex;
		align-items: center;
		justify-content: left;
		margin-top: 10px;
		font-size: $sm;
		color: $gray-500;
	}
}
</style>
