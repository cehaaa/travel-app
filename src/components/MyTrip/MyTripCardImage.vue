<script lang="ts" setup>
import Trip from "../../Interfaces/Trip";

import Avatar from "../Basics/Avatar/Avatar";

import KieraWatson from "../../assets/images/avatars/avatar.png";
import Keane from "../../assets/images/avatars/avatar-2.png";
import Nigela from "../../assets/images/avatars/avatar-3.png";
import Marc from "../../assets/images/avatars/avatar-4.png";

import Indonesia from "../../assets/images/places/indonesia.png";
import Japan from "../../assets/images/places/japan.png";
import China from "../../assets/images/places/china.png";

interface MyTripCardImageProps {
	trip: Trip;
}

const props = defineProps<MyTripCardImageProps>();

const getAvatarImage = (src: string) => {
	switch (src.toLowerCase()) {
		case "kiera watson":
			return KieraWatson;
		case "keane":
			return Keane;
		case "nigela":
			return Nigela;
		case "marc":
			return Marc;
	}
};

const getExactPlace = (src: string) => {
	switch (src.toLowerCase()) {
		case "trip to indonesia":
			return Indonesia;
		case "trip to japan":
			return Japan;
		case "trip to china":
			return China;
	}
};
</script>

<template>
	<div class="card">
		<div class="card-image">
			<img :src="getExactPlace(props.trip.title)" />
		</div>
		<div class="card-body">
			<div>
				<div class="card-title">{{ props.trip.title }}</div>
				<div class="body-section">
					<div class="member">
						<Avatar.Group size="xs">
							<Avatar.Base v-for="member in props.trip.members" size="xs">
								<Avatar.Image :src="getAvatarImage(member.name)"
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
