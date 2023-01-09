<script setup lang="ts">
import { RouterLink } from "vue-router";

import Guide from "../../Interfaces/Guide";

import useSlug from "../../utils/useSlug";

import Badge from "../Basics/Badge/Badge.vue";
import Icon from "../Basics/Icons/Icons";
import Avatar from "../Basics/Avatar/Avatar";

interface GuideCardProps {
	guide: Guide;
}

const props = defineProps<GuideCardProps>();

const { makeSlug } = useSlug();

const destination = makeSlug(props.guide.title);
</script>

<template>
	<div class="card">
		<RouterLink
			:to="{ name: 'guide-detail', params: { guideTitle: destination } }"
		>
			<div class="card-header">
				<img :src="props.guide.src" class="guide-image" />
				<Badge>Guide</Badge>
			</div>
			<div class="card-body">
				<div class="subtitle black">{{ props.guide.title }}</div>
				<div>
					{{ props.guide.description }}
				</div>
			</div>
		</RouterLink>
		<div class="card-footer">
			<div class="left">
				<Avatar.Base size="sm" :name="props.guide.publisher.name">
					<Avatar.Image :src="props.guide.publisher.src" />
				</Avatar.Base>
			</div>
			<div>
				<Icon.Bookmark size="sm" />
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import "./../../scss/variables";
.card {
	text-decoration: none;
	font-size: $sm;

	a {
		text-decoration: none;
		color: $gray-500;
	}
	.card-header {
		position: relative;
		height: 200px;
		overflow: hidden;
		width: 390px;
		.guide-image {
			width: 100%;
			height: 100%;
			object-fit: cover;
			transition-duration: 200ms;

			&:hover {
				transform: scale(1.1) rotate(1.2deg);
			}
		}
	}

	.card-body {
		padding: 15px 20px 5px;
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
}
</style>
