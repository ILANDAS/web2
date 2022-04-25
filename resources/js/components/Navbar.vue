<template>
 <div>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark shadow-sm " style="background:#2745a0 !important;">
            <div class="container">
                <!-- <a class="navbar-brand" href="/">
                    Laravel
                </a> -->
                <router-link to="/" class="navbar-brand">
                  <img :src="ruta+'./../img/logo.png'" alt="" height="40">
               </router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <ul class="navbar-nav me-auto">

                    </ul>

                    <!-- Right Side Of Navbar -->
                    <ul class="navbar-nav ms-auto">
                         <li class="nav-item dropdown">
                                <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                    Institucional
                                </a>

                               <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="#">Misión y Visión</a>
                                    <a class="dropdown-item" href="#">Autoridad</a>
                                    <a class="dropdown-item" href="#">Logo Oficial</a>
                                    <a class="dropdown-item" href="#">Organigrama Dinámico</a>
                                    <a class="dropdown-item" href="#">Fondo de Apoyo Gerencial</a>
                                    <a class="dropdown-item" href="#">Formulario Único de Trámite(FUT)</a>
                                    <a class="dropdown-item" href="#">Direcciones Regionales</a>
                                    <a class="dropdown-item" href="#">Directorio Regional</a>
                                    <a class="dropdown-item" href="#">Directorio Telefónico</a>
                                    <a class="dropdown-item" href="#">Noticias</a>
                               </div>
                        </li>
                        <li class="nav-item dropdown">
                                <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                    Documentos
                                </a>

                               <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="#">Documentos de Gestión</a>
                                    <a class="dropdown-item" href="#">Normatividad Regional</a>
                               </div>
                        </li>
                        <li class="nav-item">
                            <router-link to="/noticias" class="nav-link">Convocatoria</router-link>
                        </li>
                        <li class="nav-item dropdown">
                                <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                    Transparencia
                                </a>

                               <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="#">Portal de Transparencia Estandar (PTE)</a>
                                    <a class="dropdown-item" href="#">Documetos de Gestión</a>
                                    <a class="dropdown-item" href="#">POI</a>
                                    <a class="dropdown-item" href="#">PEI</a>
                                    <a class="dropdown-item" href="#">Documentos Normativos</a>
                                    <a class="dropdown-item" href="#">Informe sobre Actividades Ejecutadas en el Marco del LED</a>
                                    <a class="dropdown-item" href="#">Formato de Apendice 2-OCI</a>
                               </div>
                        </li>

                    </ul>
                </div>
            </div>
    </nav>
    <div class="nav-scroller bg-body shadow-sm position-sticky" style="background-color: rgba(5, 74, 145, 0.376) !important;">
      <nav class="container nav nav-underline" aria-label="Secondary navigation">
        <div class="col-md-3 bg-1" align="left">
           <a href="http://digital.regionhuanuco.gob.pe/registro/mesa-partes-virtual/3" class="nav-link active" target="_blank">
           MESA DE PARTES VIRTUAL
           </a>
        </div>
        <div class="col-md-3 bg-2" align="left">
          <a href="http://digital.regionhuanuco.gob.pe/registro/mesa-partes-virtual/3" class="nav-link active" target="_blank">
          DIRECCIÓN Y UNIDADES
          </a>
        </div>
      </nav>
    </div>
 </div>
</template>

<script>
 export default {
     props:['ruta'],
   
 }
</script>

<style lang="css" scoped>

html,body {
  overflow-x: hidden; /* Prevent scroll on narrow devices */
} 

body {
  padding-top: 65px;
}

@media (max-width: 991.98px) {
  .offcanvas-collapse {
    position: fixed;
    top: 56px; /* Height of navbar */
    bottom: 0;
    left: 100%;
    width: 100%;
    padding-right: 1rem;
    padding-left: 1rem;
    overflow-y: auto;
    visibility: hidden;
    background-color: #343a40;
    transition: transform .3s ease-in-out, visibility .3s ease-in-out;
  }
  .offcanvas-collapse.open {
    visibility: visible;
    transform: translateX(-100%);
  }
}

.nav-scroller {
  position: relative;
  z-index: 2;
  height: 2.75rem;
  overflow-y: hidden;
}

.nav-scroller .nav {
  display: flex;
  flex-wrap: nowrap;
  padding-bottom: 1rem;
  margin-top: -1px;
  overflow-x: auto;
  color: rgba(255, 255, 255, .75);
  text-align: center;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}

.nav-underline .nav-link {
  padding-top: .75rem;
  padding-bottom: .75rem;
  font-size: .875rem;
  color: #6c757d;
}

.nav-underline .nav-link:hover {
  background: #ffffff;
  opacity: 50%;
  color: #000000;
  font-weight: bold;
}

.nav-underline .active {
  font-weight: 500;
  color: #ffffff;
  text-align: center;
  
}

.bg-1 {
  background: #E73434;
}

.bg-2 {
  background: #6FAC93;
}

.bg-purple {
  background-color: #6f42c1;
}

@media all and (min-width: 992px) {
	.navbar .dropdown-menu{ right:0; left: auto;  }
	.navbar .nav-item .dropdown-menu{  display:block; opacity: 0;  visibility: hidden; transition:.3s; margin-top:0;  }
	.navbar .nav-item:hover .nav-link{ color: #fff;  }
	.navbar .dropdown-menu.fade-down{ top:80%; transform: rotateX(-75deg); transform-origin: 0% 0%; }
	.navbar .dropdown-menu.fade-up{ top:180%;  }
	.navbar .nav-item:hover .dropdown-menu{ transition: .3s; opacity:1; visibility:visible; top:100%; transform: rotateX(0deg); }
}
</style>
