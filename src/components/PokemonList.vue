<script setup lang="ts">
import { computed, watch } from 'vue'
import ListCard from '@/components/card/ListCard.vue'
import useGetPokemons from '@/composables/useGetPokemons'
import { usePokemonsStore } from '@/stores/pokemons'

const { data, error, isFetching, isPending, isError } = useGetPokemons()
const store = usePokemonsStore()

const pokemons = computed(() => store.displayedPokemons)

watch(data, (newData) => {
    if (newData) {
        store.setPokemons(newData)

        if (store.filter.length === 0) {
            store.setDisplayedPokemons(newData)
        }
    }
})
</script>

<template>
    <div class="flex flex-col gap-3 mt-4">
        <div v-if="pokemons && pokemons.length > 0" class="flex flex-col gap-3">
            <ListCard
                v-for="pokemon in pokemons"
                :key="pokemon.id"
                :pokemon="pokemon"
            />
        </div>
        <div v-else-if="isPending || isFetching" class="flex flex-col gap-3">
            <ListCard v-for="index in 5" :key="`skeleton-list-card-` + index" />
        </div>
        <span v-else-if="isError" class="text-center my-4 text-lg font-bold">
            Error: {{ error?.message || 'An error occurred.' }}
        </span>
        <span v-else class="text-center my-4 text-lg font-bold">
            No pokemons found.
        </span>
    </div>
</template>
