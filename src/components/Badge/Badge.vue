<script lang="ts" setup></script>

<template>
	<div class="badge">
		<slot />
	</div>
</template>

<style lang="scss" scoped>
@import "./../../scss/_variables.scss";
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
</style>
