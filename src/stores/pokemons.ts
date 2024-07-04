import { Pokemon } from '@/types/pokemon'
import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const usePokemonsStore = defineStore('pokemons', () => {
    const pokemons = ref<Pokemon[]>([])
    const displayedPokemons = ref<Pokemon[]>([])
    const filter = ref<string>('')
    const sortBy = ref<string>('')

    const setPokemons = (newPokemons: Pokemon[]) => {
        pokemons.value = newPokemons
    }

    const setDisplayedPokemons = (newPokemons: Pokemon[]) => {
        displayedPokemons.value = newPokemons
    }

    const sortPokemons = (sortFn: (list: Pokemon[]) => Pokemon[]) => {
        setPokemons(sortFn([...pokemons.value]))
    }

    watch(pokemons, (newPokemons) => {
        if (filter.value === '') {
            displayedPokemons.value = newPokemons
        }
    })

    return {
        pokemons,
        displayedPokemons,
        filter,
        sortBy,
        setPokemons,
        setDisplayedPokemons,
        sortPokemons,
    }
})
