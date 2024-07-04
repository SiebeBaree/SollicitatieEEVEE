import { Pokemon } from '@/types/pokemon'
import { useQuery } from '@tanstack/vue-query'
import axios from 'axios'

async function getPokemons(): Promise<Pokemon[]> {
    const response = await axios.get(
        `https://stoplight.io/mocks/appwise-be/pokemon/57519009/pokemon`,
    )

    return response.data
}

export default function useGetPokemons() {
    return useQuery({
        queryKey: ['pokemons'],
        queryFn: getPokemons,
    })
}
