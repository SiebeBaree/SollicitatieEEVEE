<script setup lang="ts">
const { title } = defineProps({
    title: {
        type: String,
        required: true,
    },
})
</script>

<template>
    <div>
        <p class="uppercase font-bold mb-2 text-white">{{ title }}</p>

        <slot />
    </div>
</template>
