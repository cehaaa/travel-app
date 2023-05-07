<script setup lang="ts">
import Trip from "./../../Interfaces/Trip";

import Icon from "./../Basics/Icons/Icons";
import Avatar from "../Basics/Avatar/Avatar";

import Nigela from "./../../assets/images/avatars/avatar.png";
import Marc from "./../../assets/images/avatars/avatar-2.png";
import Keane from "./../../assets/images/avatars/avatar-3.png";
import KieraWatson from "./../../assets/images/avatars/avatar-4.png";

interface MyTripCardProps {
	trip: Trip;
}

const props = defineProps<MyTripCardProps>();

const getExactAvatarProfile = (src: string) => {
	const avatar: { [key: string]: string } = {
		"kiera watson": KieraWatson,
		keane: Keane,
		nigela: Nigela,
		marc: Marc,
	};

	return avatar[src.toLowerCase()];
};
</script>

<template>
	<div class="card">
		<div class="card-header">
			<div>
				<div class="subtitle black no-margin-t">
					{{ props.trip.title }}
				</div>
				<div>Current trip</div>
			</div>
			<div>
				<Icon.EllipsisVertical class="card-icon" />
			</div>
		</div>
		<div class="card-footer">
			<Avatar.Group>
				<Avatar.Base v-for="member in props.trip.members" size="sm">
					<Avatar.Image :src="getExactAvatarProfile(member.name)!" />
				</Avatar.Base>
			</Avatar.Group>

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

	.card-icon {
		width: 21px;
		height: 21px;
	}
}
</style>
