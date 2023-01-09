<script setup lang="ts">
import Icon from "./../Icons/Icons";
import Footer from "./Footer";
</script>

<template>
	<Footer.Base>
		<Footer.Item to="/" exactPath="/">
			<Icon.Home />
		</Footer.Item>
		<Footer.Item to="/create-new-trip" exactPath="create-new-trip">
			<Icon.Plus />
		</Footer.Item>
		<Footer.Item to="/profile" exactPath="profile">
			<Icon.User />
		</Footer.Item>
	</Footer.Base>
</template>

<style lang="scss" scoped></style>
