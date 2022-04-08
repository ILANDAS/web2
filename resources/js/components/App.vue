<template>
    <div>
        <!-- MENUS -->
        <Navbar :ruta="ruta"></Navbar>
        <!-- FIN MENUAS -->
        
        

        <router-view v-slot="{ Component }">
            <transition name="fade">
                <component :is="Component" />
            </transition>
        </router-view>

        <!-- Footer -->
        <Footer></Footer>

    </div>
</template>

<script>
import Navbar from './Navbar'
// import Header  from './Header'
import Footer from './Footer'


//import slider from './App.vue'
//import { component } from 'vue/types/umd'
    export default {
        props:['ruta'],
        components:{Navbar,Footer}
        // mounted() {
            
           
        // }
    }
</script>
