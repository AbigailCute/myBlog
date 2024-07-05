import { createMemoryHistory, createRouter } from 'vue-router'

const routes = [
    {
        path: "/",
        redirect: "/login",
    },
    {
        path: '/login',
        name: 'login',
        component: () => import("@/views/login/index.vue"),
    },
    {
        path: '/index',
        name: 'index',
        component: () => import("@/views/index/index.vue"),
    },
]

export const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router;