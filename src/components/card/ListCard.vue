<script setup lang="ts">
import Card from '@/components/card/Card.vue'
import { Badge } from '@/components/ui/badge'
import { ChevronRight } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'
import { Skeleton } from '@/components/ui/skeleton'

const { pokemon } = defineProps({
    pokemon: Object,
})
</script>

<template>
    <RouterLink
        :to="pokemon ? '/pokemon/' + pokemon.id : '#'"
        :class="pokemon ? '' : 'pointer-events-none'"
    >
        <Card class="flex justify-between gap-2 bg-white shadow-card">
            <div class="flex gap-4 items-center">
                <img
                    v-if="pokemon"
                    :src="pokemon.sprites.front_default"
                    :alt="pokemon.name"
                    class="w-14 h-14 object-fill"
                />
                <Skeleton class="w-14 h-14 rounded-md" v-else />

                <div class="flex flex-col gap-2">
                    <p class="text-lg font-bold capitalize" v-if="pokemon">
                        {{ pokemon.name }}
                    </p>
                    <Skeleton class="w-36 h-5" v-else />
                    <p class="opacity-50" v-if="pokemon">
                        Nr. {{ String(pokemon.id).padStart(3, '0') }}
                    </p>
                    <Skeleton class="w-16 h-5" v-else />
                </div>
            </div>

            <div class="flex gap-2 justify-end">
                <div class="flex gap-1 items-start" v-if="pokemon">
                    <Badge v-for="type in pokemon.types" class="capitalize">{{
                        type.type.name
                    }}</Badge>
                </div>

                <ChevronRight />
            </div>
        </Card>
    </RouterLink>
</template>
