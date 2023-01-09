<script lang="ts" setup></script>

<template>
	<div class="section-header">
		<slot />
	</div>
</template>

<style lang="scss" scoped>
@import "./../../../scss/_variables.scss";
.section-header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: $black;
	font-size: $base;
}
</style>
