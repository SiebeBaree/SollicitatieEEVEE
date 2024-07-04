import { PokemonDetails } from '@/types/pokemon'
import { useQuery } from '@tanstack/vue-query'
import axios from 'axios'

async function getPokemonDetails(id: number): Promise<PokemonDetails> {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    return response.data
}

export default function usePokemon(id: number) {
    return useQuery({
        queryKey: ['pokemon-details', id],
        queryFn: (): Promise<PokemonDetails> => getPokemonDetails(id),
    })
}
