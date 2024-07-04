<script setup lang="ts">
const props = defineProps({
    color: {
        type: String,
        default: 'text-black',
    },
})
</script>

<template>
    <h1 :class="`text-4xl font-bold ${props.color}`">
        <slot />
    </h1>
</template>
