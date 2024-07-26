import { createWebHashHistory, createMemoryHistory, createRouter } from 'vue-router'

const routes = [
    {
        path: "/",
        redirect: "/login",
    },
    {
        name: 'login',
        path: '/login',
        component: () => import("@/views/login/index.vue"),
    },
    {
        name: 'layout',
        path: '/layout',
        component: () => import("@/layout/layout.vue"),
        children: [
            {
                name: "index",
                path: "/index",
                component: () => import("@/views/index/index.vue"),
            },
            {
                name: "news",
                path: "/news",
                component: () => import("@/views/news/index.vue"),
            },
            {
                name: "answer",
                path: "/answer",
                component: () => import("@/views/answer/index.vue"),
            },
            {
                name: "account",
                path: "/account",
                component: () => import("@/views/account/index.vue"),
            },
        ]
    },
]

export const router = createRouter({
    // history: createMemoryHistory(),
    history: createWebHashHistory(),
    routes,
})

export default router;