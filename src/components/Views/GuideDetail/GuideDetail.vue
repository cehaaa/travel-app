<script setup lang="ts">
import { useRoute } from "vue-router";

import Guide from "../../../Interfaces/Guide";

import useSlug from "../../../utils/useSlug";
import { selectGuide } from "../../../utils/guides";

import Avatar from "../../Basics/Avatar/Avatar";
import Section from "../../Basics/Section/Section";
import BackLink from "../../Basics/BackLink/BackLink.vue";
import ScrollToTop from "../../Basics/ScrollToTop/ScrollToTop.vue";

const route = useRoute();
const { toNormalString } = useSlug();

const title = toNormalString(route.params.guideTitle as string);

const guide: Guide = selectGuide(title);
</script>

<template>
	<ScrollToTop />

	<BackLink backTo="Home" />

	<div class="guide-header">
		<div class="overlay"></div>
		<img class="guide-image" :src="guide.src" :alt="guide.title" />
		<div class="guide-title">{{ guide.title }}</div>
	</div>
	<div class="guide-body">
		<Section.Base>
			<Section.Header>
				<Avatar.Base size="base" :name="guide.publisher.name">
					<Avatar.Image :src="guide.publisher.src" />
				</Avatar.Base>
			</Section.Header>
			<Section.Body>
				<div>{{ guide.description }}</div>
			</Section.Body>
		</Section.Base>

		<Section.Base>
			<Section.Header>
				<Section.HeaderCollapse>
					<div>General Tips</div>
				</Section.HeaderCollapse>
			</Section.Header>
			<Section.Body>
				<div>{{ guide.description }}</div>
			</Section.Body>
		</Section.Base>

		<Section.Base v-for="(plan, index) in guide.plans">
			<Section.Header>
				<Section.HeaderCollapse>
					<div>{{ `Day ${index + 1}` }}</div>
				</Section.HeaderCollapse>
			</Section.Header>
			<Section.Body>
				<div v-for="el in plan" style="margin-top: 1rem">
					<div class="text semibold black" style="margin-bottom: 5px">
						{{ el.title }}
					</div>
					<div>{{ el.description }}</div>
				</div>
			</Section.Body>
		</Section.Base>
	</div>
</template>

<style lang="scss" scoped>
@import "./../../../scss/_variables.scss";

.guide-header {
	width: 390px;
	height: 220px;
	max-height: 220px;
	position: relative;
	color: white;

	.overlay {
		width: 100%;
		height: 100%;
		background: rgba(107, 114, 128, 0.3);
		position: absolute;
	}

	.guide-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.guide-title {
		position: absolute;
		left: 20px;
		bottom: 20px;
		font-size: $xl;
		font-weight: 600;
		max-width: 250px;
	}
}
</style>