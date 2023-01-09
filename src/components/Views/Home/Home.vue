<script setup lang="ts">
import Header from "./../../Basics/Header/Header.vue";
import Guides from "../../Guides/Guides.vue";
import ScrollToTop from "../../Basics/ScrollToTop/ScrollToTop.vue";
</script>

<template>
	<ScrollToTop />

	<Header />

	<div class="home">
		<Guides />
	</div>
</template>

<style lang="scss" scoped>
@import "./../../../scss/_variables.scss";

.home {
	padding-top: 110px;
}
</style>
