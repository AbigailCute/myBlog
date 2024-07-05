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
]

export const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router;