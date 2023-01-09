<script setup lang="ts"></script>

<template>
	<div class="section">
		<slot />
	</div>
</template>

<style lang="scss" scoped>
@import "./../../../scss/_variables.scss";
.section {
	width: 390px;
	min-height: 58px;
	padding: 20px;
	background: white;
	font-size: $sm;
	color: $gray-500;
	margin-bottom: 1rem;
	overflow: hidden;
}
</style>
