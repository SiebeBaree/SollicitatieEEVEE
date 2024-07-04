<script setup lang="ts">
import { cn } from '@/lib/utils'
import Card from '@/components/card/Card.vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    subtitle: String,
    color: {
        type: String,
        default: 'bg-blue-500 text-white',
    },
    href: String,
})
</script>

<template>
    <RouterLink :to="props.href ?? '#'">
        <Card :class="cn('flex flex-col justify-end h-28 relative', color)">
            <img
                src="@/assets/pokeball.svg"
                alt="Pokeball"
                class="w-24 h-24 absolute right-0 top-1/2 -translate-y-1/2"
            />
            <p class="text-lg font-bold">{{ props.title }}</p>
            <p class="opacity-50 -mt-1">{{ props.subtitle }}</p>
        </Card>
    </RouterLink>
</template>
