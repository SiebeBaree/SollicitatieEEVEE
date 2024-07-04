<script setup lang="ts">
import {
    ArrowUpDown,
    Filter,
    X,
    ArrowUpAZ,
    ArrowDownAZ,
    ArrowUp01,
    ArrowDown01,
} from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from '@/components/ui/drawer'
import { ref } from 'vue'
import { cn } from '@/lib/utils'
import { Pokemon } from '@/types/pokemon'
import { usePokemonsStore } from '@/stores/pokemons'

const sortOptions = [
    {
        name: 'Alfabetisch oplopend',
        icon: ArrowUpAZ,
        sort: (list: Pokemon[]): Pokemon[] =>
            list.sort((a, b) => a.name.localeCompare(b.name)),
    },
    {
        name: 'Alfabetisch aflopend',
        icon: ArrowDownAZ,
        sort: (list: Pokemon[]): Pokemon[] =>
            list.sort((a, b) => b.name.localeCompare(a.name)),
    },
    {
        name: 'Numeriek oplopend',
        icon: ArrowUp01,
        sort: (list: Pokemon[]): Pokemon[] => list.sort((a, b) => a.id - b.id),
    },
    {
        name: 'Numeriek aflopend',
        icon: ArrowDown01,
        sort: (list: Pokemon[]): Pokemon[] => list.sort((a, b) => b.id - a.id),
    },
]

const selectedSortOption = ref(sortOptions[2])
const store = usePokemonsStore()

function applyChanges() {
    store.sortPokemons(selectedSortOption.value.sort)
}
</script>

<template>
    <Drawer>
        <DrawerTrigger class="flex gap-1 justify-end w-full">
            <Filter />
            <ArrowUpDown />
        </DrawerTrigger>
        <DrawerContent>
            <DrawerHeader>
                <DrawerTitle class="text-left">Sorteren op</DrawerTitle>
                <DrawerClose class="absolute right-4 top-4">
                    <div class="rounded-full bg-gray-200 p-1.5">
                        <X class="w-4 h-4 text-white" />
                    </div>
                </DrawerClose>
            </DrawerHeader>

            <div class="flex flex-col gap-2 px-4 mb-2">
                <button
                    v-for="option in sortOptions"
                    :key="option.name"
                    @click="selectedSortOption = option"
                    :class="
                        cn(
                            'rounded-lg p-[1px] overflow-hidden',
                            selectedSortOption.name === option.name
                                ? 'bg-gradient-to-br from-green-400 to-blue-400'
                                : 'bg-gray-100',
                        )
                    "
                >
                    <div
                        class="bg-gray-100 p-2 rounded-lg flex gap-2 items-center"
                    >
                        <component
                            :is="option.icon"
                            class="w-6 h-6 text-gray-400"
                        />
                        <span>{{ option.name }}</span>
                    </div>
                </button>
            </div>

            <DrawerFooter>
                <DrawerClose>
                    <Button @click="applyChanges">Toepassen</Button>
                </DrawerClose>
            </DrawerFooter>
        </DrawerContent>
    </Drawer>
</template>
