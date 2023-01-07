<script setup lang="ts"></script>

<template>
	<div class="avatar-group">
		<slot />
	</div>
</template>

<style lang="scss">
.avatar-group {
	display: flex;

	.avatar-base:first-child {
		margin-left: 0;
	}

	.avatar-base {
		margin-left: -20px;
	}
}
</style>
