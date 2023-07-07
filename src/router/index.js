import { createRouter, createWebHistory } from "vue-router";
import ModalPage from '../pages/ModalPage.vue';
import ReactionTimer from '../pages/ReactionTimer.vue';
import Signup from '../pages/FormInput.vue';

const routes = [
    {
        path: '/',
        name: "Home",
        component: ModalPage
    },
    {
        path: '/reaction-timer',
        name: "ReactionTimer",
        component: ReactionTimer,
    },
    { 
        path: '/signup',
        name: "SignUp",
        component: Signup
    }
]

const router = createRouter({
    history: createWebHistory("/"),
    routes
})

export default router;