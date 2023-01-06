<script setup lang="ts"></script>

<template>
	<div class="avatar-group">
		<slot />
	</div>
</template>

<style lang="scss">
.avatar-group {
	display: flex;

	.avatar:first-child {
		margin-left: 0;
	}

	.avatar {
		margin-left: -10px;
	}
}
</style>
