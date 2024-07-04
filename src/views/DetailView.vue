<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import usePokemon from '@/composables/usePokemon'
import PageWrapper from '@/components/PageWrapper.vue'
import Title from '@/components/Title.vue'
import DetailsSection from '@/components/DetailsSection.vue'
import Card from '@/components/card/Card.vue'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { ChevronLeft } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'

const route = useRoute()
const router = useRouter()

if (!route.params.id) {
    router.push({ name: '404' })
} else {
    try {
        parseInt(route.params.id as string)
    } catch (error) {
        router.push({ name: '404' })
    }
}

const id = ref(route.params.id as string)
const { data, isError } = usePokemon(parseInt(id.value))

watch(isError, (value) => {
    if (value === true) {
        router.push({ name: '404' })
    }
})
</script>

<template>
    <div class="min-h-screen min-w-screen bg-[#7ECD8B] pb-8">
        <PageWrapper class="">
            <RouterLink to="/" class="flex items-center py-4">
                <ChevronLeft class="text-white" />
                <p class="text-white">Terug</p>
            </RouterLink>

            <div v-if="data">
                <Title class="capitalize text-white pb-4">{{
                    data.name
                }}</Title>

                <Carousel>
                    <CarouselContent>
                        <CarouselItem>
                            <img
                                :src="
                                    data.sprites.other['official-artwork']
                                        .front_default
                                "
                                :alt="data.name"
                                class="w-full"
                            />
                        </CarouselItem>
                        <CarouselItem>
                            <img
                                :src="
                                    data.sprites.other['official-artwork']
                                        .front_shiny
                                "
                                :alt="`shiny ${data.name}`"
                                class="w-full"
                            />
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>

                <div class="flex flex-col gap-8">
                    <DetailsSection title="ABOUT">
                        <Card class="bg-white text-black">
                            <table
                                class="border-spacing-y-3 border-spacing-x-8"
                            >
                                <tr>
                                    <td class="row-title">Type</td>
                                    <td class="flex gap-1">
                                        <Badge
                                            v-for="type in data.types"
                                            :key="type.type.name"
                                            class="capitalize"
                                        >
                                            {{ type.type.name }}
                                        </Badge>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="row-title">Nummer</td>
                                    <td>{{ String(id).padStart(3, '0') }}</td>
                                </tr>
                                <tr>
                                    <td class="row-title">Hoogte</td>
                                    <td>{{ data.height / 10 }}m</td>
                                </tr>
                                <tr>
                                    <td class="row-title">Gewicht</td>
                                    <td>{{ data.weight / 10 }} kg</td>
                                </tr>
                                <tr>
                                    <td class="row-title">Vaardigheden</td>
                                    <td class="capitalize">
                                        {{
                                            data.abilities
                                                .map(
                                                    (ability) =>
                                                        ability.ability.name,
                                                )
                                                .join(', ')
                                        }}
                                    </td>
                                </tr>
                            </table>
                        </Card>
                    </DetailsSection>

                    <DetailsSection title="STATISTIEKEN">
                        <Card class="bg-white text-black">
                            <table
                                class="border-spacing-y-3 border-spacing-x-8"
                            >
                                <tr
                                    v-for="stat in data.stats"
                                    :key="stat.stat.name"
                                >
                                    <td class="row-title capitalize">
                                        {{ stat.stat.name }}
                                    </td>
                                    <td class="w-full">
                                        <Progress
                                            :model-value="stat.base_stat"
                                            class="w-full"
                                        />
                                    </td>
                                </tr>
                            </table>
                        </Card>
                    </DetailsSection>

                    <DetailsSection title="MOVESET">
                        <Card
                            class="bg-white text-black grid grid-cols-2 md:grid-cols-4 gap-2"
                        >
                            <Badge
                                v-for="move in data.moves.slice(0, 4)"
                                :key="move.move.name"
                                class="text-base capitalize"
                            >
                                {{ move.move.name }}
                            </Badge>
                        </Card>
                    </DetailsSection>
                </div>
            </div>
        </PageWrapper>
    </div>
</template>

<style scoped>
td {
    padding-top: 4px;
    padding-bottom: 4px;
}

.row-title {
    color: #acb2c1;
    padding-right: 32px;
}
</style>
