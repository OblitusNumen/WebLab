import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Catalog from '../components/Catalog.vue';
import Contacts from '../components/Contacts.vue';
import About from '../components/About.vue';
import Login from '../components/Login.vue';

const routes = [
    { path: '/', component: Home }, // Default route
    { path: '/Home', component: Home },
    { path: '/Catalog', component: Catalog },
    { path: '/Contacts', component: Contacts },
    { path: '/About', component: About },
    { path: '/Login', component: Login },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
