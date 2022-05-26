import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('../views/Home.vue')
        },
        {
            path: '/artikel',
            name: 'Artikel',
            component: () => import('../views/Blogs/Index.vue')
        },
        {
            path: '/kontak',
            name: 'Kontak',
            component: () => import('../views/Kontak/Index.vue')
        }
    ]
});

export default router