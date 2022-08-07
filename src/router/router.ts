import { createRouter, createWebHistory } from 'vue-router'
import home from '@/components/Home.vue';
import clients from '@/components/client/Clients.vue';
import comptes from '@/components/compte/Comptes.vue';
import operations from '@/components/operation/Operations.vue';

const routes = [
 {
    path: '/',
    name: 'Home',
    component: home
 },
 {
    path: '/clients',
    name: 'Clients',
    component: clients
 },
 {
   path: '/comptes',
   name: 'Comptes',
   component: comptes
},
{
   path: '/operations',
   name: 'Operations',
   component: operations
}
]

const router = createRouter({ history: createWebHistory(), routes })
export default router;