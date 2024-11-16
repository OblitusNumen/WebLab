import {createRouter, createWebHistory} from 'vue-router';
import Home from '../components/Home.vue';
import Catalog from '../components/Catalog.vue';
import Contacts from '../components/Contacts.vue';
import About from '../components/About.vue';
import Login from '../components/Login.vue';

const routes = [
    {path: '/', component: Home}, // Default route
    {path: '/catalog', component: Catalog},
    {path: '/contacts', component: Contacts},
    {path: '/about', component: About},
    {path: '/login', component: Login},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
