import Login from '../components/Login.vue';
import Form from '../components/Form.vue';
import HomeView from '../views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history : createWebHistory(),
    routes: [
        {path: '/', component : HomeView},
        {path: '/login', component: Login},
        {path: '/register', component: Form},
        // {path: '/tasks', component: Tasks}
    ]
})

export default router;