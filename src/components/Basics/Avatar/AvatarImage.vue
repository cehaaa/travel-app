<script setup lang="ts">
interface AvatarImageProps {
	src: string;
}

const props = defineProps<AvatarImageProps>();
</script>

<template>
	<img class="avatar-image" :src="props.src" />
</template>

<style>
.avatar-image {
	width: 100%;
	object-fit: contain;
}
</style>
