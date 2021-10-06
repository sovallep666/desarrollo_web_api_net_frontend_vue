import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CrearEmpleado from '../components/empleados/CrearEmpleado.vue';
import EditarEmpleado from '../components/empleados/EditarEmpleado.vue';
import ListarEmpleados from '../components/empleados/ListarEmpleados.vue';

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/empleados/CrearEmpleado',
        name: 'CrearEmpleado',
        component: CrearEmpleado
    },
    {
        path: '/empleados/EditarEmpleado/:id',
        name: 'EditarEmpleado',
        component: EditarEmpleado
    },
    {
        path: '/empleados/ListarEmpleados',
        name: 'ListarEmpleados',
        component: ListarEmpleados
    },
    {
        path: '/about',
        name: 'About',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router