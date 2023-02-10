<script lang="ts" setup>
import Container from "../Container/Container.vue";

interface TabsProps {
	tabs: string[];
	activeTab: string;
}

const props = defineProps<TabsProps>();

const emit = defineEmits(["changeTab"]);

const changeTab = (tab: string) => {
	emit("changeTab", tab);
};
</script>

<template>
	<div class="tab-container">
		<Container>
			<div class="tabs">
				<div
					v-for="tab in props.tabs"
					class="tab"
					:class="{
						active: tab === props.activeTab,
					}"
					@click="changeTab(tab)"
				>
					{{ tab }}
				</div>
			</div>
		</Container>
	</div>
</template>

<style lang="scss" scoped>
@import "./../../../scss/_variables.scss";

.tab-container {
	width: 100%;
	border-bottom: 1px solid #d1d5db;
	padding: 2px 0;
}

.tabs {
	display: flex;
	align-items: center;
	column-gap: 1.5rem;

	.tab {
		cursor: pointer;
		transform: translateY(3.5px);
		padding: 2px 0;
		font-weight: 500;

		color: $gray-500;

		&.active {
			color: $primary;
			border-bottom: 2px solid $primary;
		}
	}
}
</style>
