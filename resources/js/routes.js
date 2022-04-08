
import Inicio  from './components/Inicio'
import Noticias from './components/Noticias.vue';
// import Profile from './components/admin/ProfileComponent.vue'
// import User from './components/admin/UserComponent.vue'

export const routes = [
    {
        path:'/',
        component:Inicio
    },
    {
        path:'/noticias',
        component:Noticias
    },
    // { 
    //     path:'/users',
    //     component:User
    // },

];