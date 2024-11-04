import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import Game from '../views/Game.vue';
import Special from '../views/Special.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/game',
            name: 'game',
            component: Game
        },
        {
            path: '/special',
            name: 'special',
            component: Special
        },
          
    ]
});

export default router