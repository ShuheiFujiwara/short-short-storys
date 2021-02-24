import Vue from 'vue'
import VueRouter from 'vue-router'
import Top from "./components/Top.vue"
import Test_sf from "./components/Test_sf.vue"
import Room from "./components/Room.vue"

Vue.use(VueRouter)

const routes = [
    { 
        path: '/',
        component: Top
    },
    {
        path: '/test_sf',
        component: Test_sf
    },
    {
        path: '/room/:id',
        name: 'room',
        component: Room
    }
]

const router = new VueRouter({
    routes: routes
})

export default router