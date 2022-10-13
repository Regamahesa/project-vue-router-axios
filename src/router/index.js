import MotorView from "../View/MotorView.vue"
import MobilView from "../View/MobilView.vue"
import BusView from "../View/BusView.vue"
import KapalView from "../View/KapalView.vue"
import PesawatView from "../View/PesawatView.vue"
import Vue from "vue";
import Router from "vue-router";


Vue.use(Router)
const routes = [ 
    {
        path: "/",
        name: "MotorView",
        component: MotorView,   
    },
    {
        path: "/about",
        name: "MobilView",
        component: MobilView,   
    },
    {
        path: "/contact",
        name: "BusView",
        component: BusView,   
    },
    {
        path: "/detail",
        name: "KapaltView",
        component: KapalView,   
    },
    {
        path: "/product",
        name: "PesawatView",
        component: PesawatView,   
    },
]

const router = new Router({
    routes,
    mode: "history",
})
export default router;