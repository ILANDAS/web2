<template>
 <div>

    <main class="py-20" style="background:#ccc;">
          <div class="container">
              <Slidershow></Slidershow>
           </div>  
    </main>

    <!-- REDES SOCIALES -->
    <div class="social-bar">
    <a href="https://www.facebook.com/gobiernoregionalhuanuco" class="icon icon-facebook" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
        </svg>
    </a>
    <a href="https://twitter.com/HuanucoGobierno?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" class="icon icon-twitter" target="_blank">
       <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
       <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
       </svg> 
    </a>
    <a href="https://www.youtube.com/channel/UCFCS1cmD-9iM6nqetz-qXoA" class="icon icon-youtube" target="_blank">
       <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
       <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
       </svg>
    </a>
    <a href="https://www.instagram.com/gorehco" class="icon icon-instagram" target="_blank">
       <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
       <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
       </svg>
    </a>
  </div>
    <!-- FIN REDES SOCIALES -->

    <!-- ACERCA DE NOSOSTROS -->
    <div class="pt-3 pb-3" style="background:linear-gradient(to bottom, rgba(39, 69, 160, 0.90), rgba(255, 255, 255, 0.85)),url('./../img/sede-gobirno-regional.jpg');background-size: cover;">
       <div class="container">
          <h4 class="text-center">Acerca de nosotros </h4>
          <hr/>
          <div class="row mt-4">
             <div class="col-xs-4 col-sm-4 col-12  text-center mt-3">
                
                <div class="msn">
                  <div class="msn1">Misión</div>
                  <div class="msn2">Conducir y promover el desarrollo humano Integral y Sostenible de la Población del Departamento de Huánuco, con una gestión moderna, transparente, competitiva e inclusiva, brindand bienes y servicios de calidad, con énfasis ambiental y la reducción de riezgos
                  </div>
                </div>
                
             </div>
             <div class="col-xs-4 col-sm-4 col-12 text-center mt-3" >
                <img :src="ruta+'./../img/logocuadrado.jpg'" class="rounded-circle" height="220">
             </div>
             <div class="col-xs-4 col-sm-4 col-12 col-md-4 text-center mt-3">
                
                <div class="msn">
                <div class="msn1">Visión</div>
                <div class="msn2">Huánuco, territorio andino Amazónico integrado, que ha impulsado el desarrollo humano y la sostenibilidad de su economia, en base a la grandeza de su Biodiversidad y el respeto por la interculturalidad
                </div>
                </div>
             </div>
          </div>
       </div>
    </div>
   
    <!-- FIN ACERCA DE NOSOSTROS -->

      <!-- TRAMITES Y Servicios -->
    <div class="pt-3 mb-5">
       <div class="container">
          <h4 class="text-center">Trámites y Servicios</h4>
          <hr/>
          <div class="row mt-4 text-center ">
            <div class="col-6 col-md-2">
               <button class="btn btn-outline-primary boton">
                  <i class="fa-solid fa-building-circle-check fa-3x"></i>
               <h5 class="text-uppercase pt-3">ACESO INTERNO</h5>
               <p class="lh-1 textxs" >Accede de manera rápida a las aplicaciones de SGD,SIGA, Transparencia y otros.</p></button>
            </div>

            <div class="col-6 col-md-2">
               <button class="btn btn-outline-primary boton">
                  <i class="fa-solid fa-bullhorn fa-3x"></i>
               <h5 class="text-uppercase pt-3">INTERéS PUBLICO</h5>
               <p class="lh-1 fw-light textxs">Entérate acerca de los programas y procesos que tenemos para ti.</p></button>
            </div>

            <div class="col-6 col-md-2">
               <button class="btn btn-outline-primary boton">
                  <i class="fa-solid fa-file-signature fa-3x"></i>
               <h5 class="text-uppercase pt-3">TRÁMITES RÁPIDOS</h5>
               <p class="lh-1 fw-light textxs">Conoce los requisitos y descarga los formatos para realizar tus trámites.</p></button>
            </div>

            <div class="col-6 col-md-2">
               <button class="btn btn-outline-primary boton">
                  <i class="fa-brands fa-gg-circle fa-3x"></i>
               <h5 class="text-uppercase pt-3">WEBS EXTERNAS</h5>
               <p class="lh-1 fw-light textxs">Infórmate acerca de los programas y eventos a nivel nacional y regional</p></button>
            </div>

            <div class="col-6 col-md-2">
               <button class="btn btn-outline-primary boton">
                  <i class="fa-solid fa-computer fa-3x"></i>
               <h5 class="text-uppercase pt-3">NORMATIVIDAD REGIONAL</h5>
               <p class="lh-1 fw-light textxs">Accede a la Normativa Regional</p></button>
            </div>

            <div class="col-6 col-md-2">
               <button class="btn btn-outline-primary boton">
                  <i class="fa-solid fa-file-lines fa-3x"></i>
               <h5 class="text-uppercase pt-3">FORMATO ÚNICO DE TRÁMITE</h5>
               <p class="lh-1 fw-light textxs">Accede al formato único de trámite del Gobierno Regional</p></button>
            </div>

         </div>
       </div>
    </div>
    <!-- FIN DE TRAMITES Y SERVICIOS -->

        <!-- NOTICIAS -->
    <div class="pt-3 pb-3" style="background:#cfe2ff;">
       <div class="container">
          <h4 class="text-center">Noticias </h4>
          <hr/>
          <Slidernoticias/>
       </div>
          <br>
          <div class="text-center">
          <router-link :to="'/noticias'" class="btn btn-primary">Ver Más</router-link>
          </div>
    </div>
    <!-- FIN NOTICIAS -->
     <!-- UBICACIÓN-->
    <div class="pt-3 pb-3" style="background:#ffff;">
       <div class="container-fluid">
          <h4 class="text-center">Contáctanos </h4>
         
          <hr/>
             
             <div id="mapa-contactanos" class="p-3 pt-4 d-none d-md-block" >
              <table>
                 <tbody>
                    <tr>
                       
                       <td>
                          <h6> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                           <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                           </svg> DIRECCIÓN </h6>
                             <div>
                                Calle Calicanto 145
                                <br>
                                Amarilis-Huanuco
                             </div>
                             <br>
                       </td>
                    </tr>
                    <tr>
                       <td>
                          <h6> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                          </svg> TELÉFONOS </h6>
                             <div>
                                +51 (062) 51-2124
                             </div>
                           <br>
                       </td>
                    </tr>
                    <tr>
                       <td>
                          <h6> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                          <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                          </svg> CORREOS</h6>
                             <div>
                                mesadepartesvirtual@regionhuanuco.gob.pe
                                <h6>Oficina de Secretaría general</h6>
                             </div>
                             <div>
                                sistemas@regionhuanuco.gob.pe
                                <br>
                                <h6>Sub Gerencia de Modernización y Transformación Digital</h6>
                             </div>
                             <br>
                       </td>
                    </tr>
                 </tbody>
              </table>
          </div>
         <div class="map-responsive">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1389.4704820193235!2d-76.23563653018458!3d-9.932625095755043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91a7c2fcae5899ab%3A0xdb74b5c9e67b6366!2sGobierno%20Regional%20Hu%C3%A1nuco!5e0!3m2!1ses-419!2spe!4v1649430178415!5m2!1ses-419!2spe" width="1300" height="500" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
         </div>
       </div>
    </div>
    <!-- FIN UBICACIÓN-->
      <!-- ENLACES EXTERNOS-->
    <div class="pt-3 pb-3" style="background:#cfe2ff;">
       <div class="container">
          <h4 class="text-center">Enlaces Externos </h4>
          <hr/>
          <SliderEnlaces/>
       </div>
    </div>
    <!-- FIN ENLACES EXTERNOS-->
 </div>
</template>

<script>
import Slidershow  from './CarrouselPublicidad'
import Slidernoticias  from './Carrouselnoticias'
import SliderEnlaces  from './CarrouselEnlaces'
 export default {
     props:['ruta'],
   components:{Slidershow,Slidernoticias,SliderEnlaces}
 }

 
</script>



<style lang="css" scoped>

.social-bar {
	position: fixed;
	right: 0;
	top: 35%;
	font-size: 1.5rem;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	z-index: 100;
}

.icon {
	color: white;
	text-decoration: none;
	padding: .7rem;
	display: flex;
	transition: all .5s;
}

.icon-facebook {
	background: #2E406E;
}

.icon-twitter {
	background: #339DC5;
}

.icon-youtube {
	background: #E83028;
}

.icon-instagram {
	background: #3F60A5;
}

.icon:first-child {
	border-radius: 1rem 0 0 0;
}

.icon:last-child {
	border-radius: 0 0 0 1rem;
}

.icon:hover {
	padding-right: 3rem;
	border-radius: 1rem 0 0 1rem;
	box-shadow: 0 0 .5rem rgba(0, 0, 0, 0.42);
}

.masnoticias{
 align-content: center;
}


.msn {
        /* margin-left: 50px; */
        background: rgba(29, 55, 202, 0.5);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 60px;;
        /* width: 400px;
        height: 200px; */
        text-align: center;
        padding: 1px;
    }
      
    .msn1 {
        font-size: 20px;
        font-weight: bold;
        color: #000000;
        /* margin-top: 40px; */
    }
      
    .msn2 {
        font-size: 12px;
        font-weight: bold;
    }



hr{
   height: 3px;
  width: 10%;
  background-color:#2745a0;
  margin:0 auto;
  margin-bottom: 3px;
}
h4{
   font-weight: normal;
   font-weight: bold;
}
h6{
   color: aliceblue;
   font-weight: bold;
}
#mapa-contactanos {
    position: absolute;
    top: 1;
    left: 16.5%;
    z-index: 5;
    background-color: rgba(39, 69, 160, 0.80);
    width: 350px;
    height: 470px;
    line-height: 1.2;
}

#mapa-contactanos h2 {
    color: #FFF;
}

#mapa-contactanos table td {
    vertical-align: middle;
}

#mapa-contactanos table td i {
    color: #FFF;
    font-size: 1.3em;
    margin-right: 7px;
}

#mapa-contactanos table td label {
    color: #FFF;
    font-size: .8em;
}

#mapa-contactanos table td div {
    color: #FFF;
    font-size: .9em;
}

@media (max-width: 1024px) and (min-width: 900px) {
    #mapa-contactanos {
        left: 8%;
    }
}

@media (max-width: 899px) and (min-width: 768px) {
    #mapa-contactanos {
        left: 4%;
    }
}

@media (max-width: 767px) {
    #mapa-contactanos {
        left: 0;
    }
}

#seccion_contactanos table td {
    vertical-align: middle;
}

.map-responsive{
    overflow:hidden;
    padding-bottom:470px;
    position:relative;
    height:0;
}
.map-responsive iframe{
    left:0;
    top:0;
    /* height:50%; */
    width:100%;
    position:absolute;
}
.textxs{
font-size: .85em !important;
}

.boton{
   height: 185px;
    animation: all 0.3s ease-out;
}


</style>
