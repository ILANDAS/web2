<template>
    <div>
        <!-- MENUS -->
        <Navbar :ruta="ruta"></Navbar>
        <!-- FIN MENUAS -->
        
        

       <transition name="slide-fade" mode="out-in">
                    <router-view> </router-view>
            </transition>

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
        components:{Navbar,Footer},

    }
</script>
<style scoped>
/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.slide-fade-enter-active {
 transition: all .6s ease /* -out; */
}

.slide-fade-leave-active {
  transition: all .6s cubic-bezier(.17,.67,.83,.67)
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translatey(350px);
  opacity: 0;

  
}
.ir-arriba{
  display:none;
  background-repeat:no-repeat;
  font-size:20px;
  color:black;
  cursor:pointer;
  position:fixed;
  bottom:10px;
  right:10px;
  z-index:2;
}
</style>
