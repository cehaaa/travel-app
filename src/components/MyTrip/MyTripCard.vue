<script setup lang="ts">
import Trip from "./../../Interfaces/Trip";

import Icon from "./../Basics/Icons/Icons";
import AvatarGroup from "../Basics/Avatar/AvatarGroup.vue";
import Avatar from "../Basics/Avatar/Avatar";

interface MyTripCardProps {
	trip: Trip;
}

const props = defineProps<MyTripCardProps>();
</script>

<template>
	<div class="card">
		<div class="card-header">
			<div>
				<div class="card-title">{{ props.trip.title }}</div>
				<div class="card-subtitle">Current trip</div>
			</div>
			<div>
				<Icon.ElipsisVertical class="card-icon" />
			</div>
		</div>
		<div class="card-footer">
			<AvatarGroup>
				<Avatar.Base v-for="member in props.trip.members" size="sm">
					<Avatar.Image :src="member.src" />
				</Avatar.Base>
			</AvatarGroup>

			<div>{{ props.trip.numOfPlaces }} Places to go</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import "./../../scss/_variables.scss";

.card {
	background: white;
	padding: 17px;
	border-radius: 5px;
	min-width: 280px;
	color: $gray-500;
	font-size: $sm;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	.card-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		border-bottom: 0.5px solid $gray-200;

		div:nth-child(2) {
			align-self: flex-start;
		}

		padding-bottom: 8px;
		margin-bottom: 10px;
	}

	.card-footer {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
	}

	.card-title {
		font-weight: 500;
		font-size: $base;
		color: $black;
	}

	.card-subtitle {
		margin-top: 3px;
	}

	.card-icon {
		width: 21px;
		height: 21px;
	}
}
</style>
