import Login from '../components/Login.vue';
import Form from '../components/Form.vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history : createWebHistory(),
    routes: [
        {path: '/', component: Login},
        {path: '/register', component: Form},
    ]
})

export default router;