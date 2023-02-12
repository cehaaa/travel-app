<script setup lang="ts">
import Container from "../Container/Container.vue";
import MyTrip from "../../MyTrip/MyTrip.vue";
import Avatar from "../Avatar/Avatar";

import UserAvatar from "./../../../assets/images/avatars/avatar-4.png";
</script>

<template>
	<header>
		<Container>
			<div class="heading">
				<div>
					<div class="title">Hi, <span class="name">Kiera Watson</span></div>
					<div>Explore beauty of journey</div>
				</div>
				<div>
					<Avatar.Base size="base">
						<Avatar.Image :src="UserAvatar" />
					</Avatar.Base>
				</div>
			</div>
		</Container>
		<MyTrip />
	</header>
</template>

<style lang="scss" scoped>
@import "./../../../scss/_variables.scss";

header {
	background: $primary;
	width: 100%;
	height: 220px;
	color: white;
	padding-top: 20px;
	font-size: $sm;

	.heading {
		widows: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;

		.title {
			font-size: $xxl;

			.name {
				font-weight: 600;
			}
		}
	}
}
</style>
