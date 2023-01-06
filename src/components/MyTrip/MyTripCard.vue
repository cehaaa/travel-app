<script setup lang="ts">
import Icon from "./../Basics/Icons/Icons";
import AvatarGroup from "../Basics/Avatar/AvatarGroup.vue";
import Avatar from "../Basics/Avatar/Avatar";
</script>

<template>
	<div class="card">
		<div class="card-header">
			<div>
				<div class="card-title">Trip to Indonesia</div>
				<div class="card-subtitle">Current trip</div>
			</div>
			<div>
				<Icon.ElipsisVertical class="card-icon" />
			</div>
		</div>
		<div class="card-footer">
			<AvatarGroup>
				<Avatar.Base size="sm">
					<Avatar.Image
						src="./../../../src/assets/images/avatars/avatar-2.png"
					/>
				</Avatar.Base>
				<Avatar.Base size="sm">
					<Avatar.Image
						src="./../../../src/assets/images/avatars/avatar-3.png"
					/>
				</Avatar.Base>
			</AvatarGroup>
			<div>Aug 1, 2022 - 6 Places</div>
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
