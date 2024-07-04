<script setup lang="ts">
import PageWrapper from '@/components/PageWrapper.vue'
import SortDrawer from '@/components/SortDrawer.vue'
import Title from '@/components/Title.vue'
import Search from '@/components/search/Search.vue'
import CategoryCard from '@/components/card/CategoryCard.vue'
import PokemonList from '@/components/PokemonList.vue'
</script>

<template>
    <PageWrapper class="mt-4">
        <SortDrawer />

        <Title>Pokédex</Title>

        <Search />

        <div class="grid grid-cols-2 gap-2">
            <CategoryCard
                title="Mijn team"
                subtitle="0 pokemons"
                color="text-white bg-purple-700"
            />
            <CategoryCard
                title="Favorieten"
                subtitle="0 pokemons"
                color="bg-gradient-to-br from-green-400 to-blue-400 text-white"
            />
        </div>

        <PokemonList />
    </PageWrapper>
</template>
