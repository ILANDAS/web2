
import Inicio  from './components/Inicio'
import Noticias from './components/Noticias.vue';
import InterNoticias from './components/InterNoticias.vue';
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
    {
        path:'/internoticias',
        component:InterNoticias
    },
    // { 
    //     path:'/users',
    //     component:User
    // },

];