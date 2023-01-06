<script setup lang="ts">
import Icon from "../Basics/Icons/Icons";
import Avatar from "../Basics/Avatar/Avatar";

import Guide from "../../Interfaces/Guide";

interface GuideCardProps {
	guide: Guide;
}

const props = defineProps<GuideCardProps>();
</script>

<template>
	<div class="card">
		<div class="card-header">
			<img :src="props.guide.src" class="guide-image" alt="" />
			<div class="badge">Guide</div>
		</div>
		<div class="card-body">
			<div class="card-title">{{ props.guide.title }}</div>
			<div class="card-text">
				{{ props.guide.description }}
			</div>
		</div>
		<div class="card-footer">
			<div class="left">
				<Avatar.Base size="sm">
					<Avatar.Image :src="props.guide.publisher.src" />
				</Avatar.Base>
				<div class="card-text">{{ props.guide.publisher.name }}</div>
			</div>
			<div>
				<Icon.Bookmark />
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import "./../../scss/variables";
.card {
	.card-header {
		position: relative;
		min-height: 200px;
		.guide-image {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}

		.badge {
			position: absolute;
			top: 15px;
			right: 15px;
			background: rgba(107, 114, 128, 0.7);
			padding: 5px 12px;
			color: white;
			font-size: $sm;
			font-weight: 500;
			border-radius: 5px;
		}
	}

	.card-body {
		padding: 10px 20px;
	}

	.card-footer {
		padding: 0 20px;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;

		.left {
			display: flex;
			align-items: center;

			*:first-child {
				margin-right: 10px;
			}
		}
	}

	.card-title {
		font-size: $sm;
		font-weight: 500;
		margin-bottom: 8px;
	}

	.card-text {
		font-size: $sm;
		color: $gray-500;
		line-height: 1.4rem;
	}
}
</style>
