export type Pokemon = {
    id: number
    name: string
    sprites: {
        front_default: string
    }
    types: PokemonType[]
}

export type PokemonDetails = {
    abilities: {
        ability: {
            name: string
        }
        is_hidden: boolean
        slot: number
    }[]
    base_experience: number
    height: number
    id: number
    is_default: boolean
    moves: {
        move: {
            name: string
        }
    }[]
    name: string
    weight: number
    types: PokemonType[]
    stats: {
        base_stat: number
        effort: number
        stat: {
            name: string
        }
    }[]
    sprites: {
        front_default: string
        front_shiny: string
        other: {
            'official-artwork': {
                front_default: string
                front_shiny: string
            }
        }
    }
}

type PokemonType = {
    slot: number
    type: {
        name: string
    }
}
