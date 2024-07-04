import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import DetailView from '@/views/DetailView.vue'
import MyTeamView from '@/views/MyTeamView.vue'
import FavoritesView from '@/views/FavoritesView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const routes = [
    { path: '/', component: HomeView },
    { path: '/pokemon/:id', component: DetailView },
    { path: '/my-team', component: MyTeamView },
    { path: '/favorites', component: FavoritesView },
    { path: '/:catchAll(.*)', component: NotFoundView },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router
