<script lang="ts" setup>
import { Ref, ref } from "vue";

import trips from "../../../utils/trips";

import Avatar from "../../Basics/Avatar/Avatar";
import Container from "../../Basics/Container/Container.vue";
import BackLink from "../../Basics/BackLink/BackLink.vue";
import Tabs from "../../Basics/Tabs/Tabs.vue";
import MyTripCardImage from "../../MyTrip/MyTripCardImage.vue";

import UserAvatar from "../../../assets/images/avatars/avatar-4.png";

const tabs: string[] = ["Trip Plans", "Guides"];

const activeTab: Ref<string> = ref("Trip Plans");

const changeTab = (tab: string) => {
	activeTab.value = tab;
};
</script>

<template>
	<BackLink backTo="Home" variant="black" />

	<div class="profile-header">
		<div>
			<div class="profile-picture">
				<Avatar.Base size="xxl">
					<Avatar.Image :src="UserAvatar" />
				</Avatar.Base>
				<div class="profile-edit-action">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="profile-edit-icon"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
						/>
					</svg>
				</div>
			</div>
			<div class="title">Kirea Watson</div>
			<div class="subtitle normal">@kierawatson</div>
		</div>
	</div>

	<div class="filter">
		<Tabs :tabs="tabs" :activeTab="activeTab" @changeTab="changeTab" />
	</div>

	<Container>
		<div class="filter-section">
			<MyTripCardImage v-for="trip in trips" :trip="trip" />
		</div>
	</Container>
</template>

<style lang="scss" scoped>
.profile-header {
	width: 390px;
	postition: relative;
	display: flex;
	padding-top: 100px;
	justify-content: center;
	text-align: center;
}

.filter {
	margin: 20px 0;
}

.profile-picture {
	position: relative;
	margin-bottom: 15px;

	.profile-edit-action {
		content: "";
		display: block;
		width: 32px;
		height: 32px;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 1px solid #fff;
		border-radius: 50%;
		background: #d9d9d9;
		position: absolute;
		bottom: 5px;
		right: 10px;
		cursor: pointer;
		transition: 200ms;

		&:hover {
			background: #cacaca;
		}
	}

	.profile-edit-icon {
		width: 15px;
		height: 15px;
		color: #313131;
	}
}

.filter-section {
	display: flex;
	flex-direction: column;
	row-gap: 1.5rem;
}
</style>
