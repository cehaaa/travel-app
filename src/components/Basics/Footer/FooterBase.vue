<script lang="ts" setup></script>

<template>
	<footer class="footer">
		<slot />
	</footer>
</template>

<style lang="scss" scoped>
.footer {
	display: flex;
	width: 390px;
	background: white;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: fixed;
	bottom: 0;
	height: 72px;
	padding: 0 50px;
}
</style>
