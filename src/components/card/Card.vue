<script setup lang="ts">
import { cn } from '@/lib/utils'

const props = defineProps({
    class: {
        type: String,
        default: 'bg-blue-500 text-white',
    },
})
</script>

<template>
    <div :class="cn('rounded-xl p-4', props.class)">
        <slot />
    </div>
</template>
