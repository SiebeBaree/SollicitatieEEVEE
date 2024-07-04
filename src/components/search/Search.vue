<script setup lang="ts">
import { ref, watch } from 'vue'
import { SearchIcon } from 'lucide-vue-next'
import { usePokemonsStore } from '@/stores/pokemons'
import Fuse from 'fuse.js'

const options = {
    keys: ['id', 'name'],
}

const store = usePokemonsStore()
const filter = ref('')
const fuse = ref(new Fuse(store.pokemons || [], options))

watch(filter, (newFilter) => {
    store.filter = newFilter

    if (newFilter.length > 0) {
        store.setDisplayedPokemons(
            fuse.value.search(newFilter).map((result) => result.item),
        )
    } else {
        store.setDisplayedPokemons(store.pokemons)
    }
})

watch(
    () => store.pokemons,
    (newPokemons) => {
        fuse.value = new Fuse(newPokemons, options)
    },
)
</script>

<template>
    <div
        class="flex items-center rounded-lg overflow-hidden bg-gray-100 px-3 py-2 min-w-full my-4"
    >
        <SearchIcon />
        <input
            type="text"
            v-model="filter"
            placeholder="Pokemon zoeken"
            class="w-full pl-2 border-none outline-none bg-transparent text-foreground"
        />
    </div>
</template>
