<script setup lang="ts">
import Icon from "./../Icons/Icons";
</script>

<template>
	<footer class="footer">
		<div>
			<Icon.Home />
		</div>
		<div>
			<Icon.Plus />
		</div>
		<div>
			<Icon.User />
		</div>
	</footer>
</template>

<style lang="scss" scoped>
.footer {
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
