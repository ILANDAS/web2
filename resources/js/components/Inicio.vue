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
             <div class="col-4 text-center">
                
                <div class="msn">
                <div class="msn1">Misión</div>
                <div class="msn2">Conducir y promover el desarrollo humano Integral y Sostenible de la Población del Departamento de Huánuco, con una gestión moderna, transparente, competitiva e inclusiva, brindand bienes y servicios de calidad, con énfasis ambiental y la reducción de riezgos
                </div>
                </div>
                
             </div>
             <div class="col-4 text-center" >
                <img :src="ruta+'./../img/logocuadrado.jpg'" class="rounded-circle" height="220">
             </div>
             <div class="col-4 text-center">
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
    <div class="pt-3 pb-3">
       <div class="container">
          <h4 class="text-center">Trámites y Servicios</h4>
          <hr/>
          <div class="row mt-4 text-center">
            <div class="col-2">
               <button class="btn btn-outline-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-display" viewBox="0 0 16 16">
                     <path d="M0 4s0-2 2-2h12s2 0 2 2v6s0 2-2 2h-4c0 .667.083 1.167.25 1.5H11a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1h.75c.167-.333.25-.833.25-1.5H2s-2 0-2-2V4zm1.398-.855a.758.758 0 0 0-.254.302A1.46 1.46 0 0 0 1 4.01V10c0 .325.078.502.145.602.07.105.17.188.302.254a1.464 1.464 0 0 0 .538.143L2.01 11H14c.325 0 .502-.078.602-.145a.758.758 0 0 0 .254-.302 1.464 1.464 0 0 0 .143-.538L15 9.99V4c0-.325-.078-.502-.145-.602a.757.757 0 0 0-.302-.254A1.46 1.46 0 0 0 13.99 3H2c-.325 0-.502.078-.602.145z"/>
                  </svg>
               <h5 class="text-uppercase pt-3">ACESO INTERNO</h5>
               <p class="lh-1 fw-light">Accede de manera rápida a las aplicaciones de SGD,SIGA, Transparencia y otros.</p></button>
            </div>

            <div class="col-2">
               <button class="btn btn-outline-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-megaphone-fill" viewBox="0 0 16 16">
                     <path d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-11zm-1 .724c-2.067.95-4.539 1.481-7 1.656v6.237a25.222 25.222 0 0 1 1.088.085c2.053.204 4.038.668 5.912 1.56V3.224zm-8 7.841V4.934c-.68.027-1.399.043-2.008.053A2.02 2.02 0 0 0 0 7v2c0 1.106.896 1.996 1.994 2.009a68.14 68.14 0 0 1 .496.008 64 64 0 0 1 1.51.048zm1.39 1.081c.285.021.569.047.85.078l.253 1.69a1 1 0 0 1-.983 1.187h-.548a1 1 0 0 1-.916-.599l-1.314-2.48a65.81 65.81 0 0 1 1.692.064c.327.017.65.037.966.06z"/>
                  </svg>
               <h5 class="text-uppercase pt-3">INTERéS PUBLICO</h5>
               <p class="lh-1 fw-light">Entérate acerca de los programas y procesos que tenemos para ti.</p></button>
            </div>

            <div class="col-2">
               <button class="btn btn-outline-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-clipboard-data-fill" viewBox="0 0 16 16">
                     <path d="M6.5 0A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3Zm3 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3Z"/>
                     <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1A2.5 2.5 0 0 1 9.5 5h-3A2.5 2.5 0 0 1 4 2.5v-1ZM10 8a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0V8Zm-6 4a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1Zm4-3a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1Z"/>
                     </svg>
               <h5 class="text-uppercase pt-3">TRÁMITES RÁPIDOS</h5>
               <p class="lh-1 fw-light">Conoce los requisitos y descarga los formatos para realizar tus trámites.</p></button>
            </div>

            <div class="col-2">
               <button class="btn btn-outline-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-dribbble" viewBox="0 0 16 16">
                     <path fill-rule="evenodd" d="M8 0C3.584 0 0 3.584 0 8s3.584 8 8 8c4.408 0 8-3.584 8-8s-3.592-8-8-8zm5.284 3.688a6.802 6.802 0 0 1 1.545 4.251c-.226-.043-2.482-.503-4.755-.217-.052-.112-.096-.234-.148-.355-.139-.33-.295-.668-.451-.99 2.516-1.023 3.662-2.498 3.81-2.69zM8 1.18c1.735 0 3.323.65 4.53 1.718-.122.174-1.155 1.553-3.584 2.464-1.12-2.056-2.36-3.74-2.551-4A6.95 6.95 0 0 1 8 1.18zm-2.907.642A43.123 43.123 0 0 1 7.627 5.77c-3.193.85-6.013.833-6.317.833a6.865 6.865 0 0 1 3.783-4.78zM1.163 8.01V7.8c.295.01 3.61.053 7.02-.971.199.381.381.772.555 1.162l-.27.078c-3.522 1.137-5.396 4.243-5.553 4.504a6.817 6.817 0 0 1-1.752-4.564zM8 14.837a6.785 6.785 0 0 1-4.19-1.44c.12-.252 1.509-2.924 5.361-4.269.018-.009.026-.009.044-.017a28.246 28.246 0 0 1 1.457 5.18A6.722 6.722 0 0 1 8 14.837zm3.81-1.171c-.07-.417-.435-2.412-1.328-4.868 2.143-.338 4.017.217 4.251.295a6.774 6.774 0 0 1-2.924 4.573z"/>
                  </svg>
               <h5 class="text-uppercase pt-3">WEBS EXTERNAS</h5>
               <p class="lh-1 fw-light">Infórmate acerca de los programas y eventos a nivel nacional y regional</p></button>
            </div>

            <div class="col-2">
               <button class="btn btn-outline-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-pc-display-horizontal" viewBox="0 0 16 16">
                  <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5v7A1.5 1.5 0 0 0 1.5 10H6v1H1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5v-1h4.5A1.5 1.5 0 0 0 16 8.5v-7A1.5 1.5 0 0 0 14.5 0h-13Zm0 1h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5ZM12 12.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm2 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0ZM1.5 12h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1ZM1 14.25a.25.25 0 0 1 .25-.25h5.5a.25.25 0 1 1 0 .5h-5.5a.25.25 0 0 1-.25-.25Z"/>
                  </svg>
               <h5 class="text-uppercase pt-3">NORMATIVIDAD REGIONAL</h5>
               <p class="lh-1 fw-light">Accede a la Normativa Regional</p></button>
            </div>

            <div class="col-2">
               <button class="btn btn-outline-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-file-earmark-medical-fill" viewBox="0 0 16 16">
                  <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zm-3 2v.634l.549-.317a.5.5 0 1 1 .5.866L7 7l.549.317a.5.5 0 1 1-.5.866L6.5 7.866V8.5a.5.5 0 0 1-1 0v-.634l-.549.317a.5.5 0 1 1-.5-.866L5 7l-.549-.317a.5.5 0 0 1 .5-.866l.549.317V5.5a.5.5 0 1 1 1 0zm-2 4.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zm0 2h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1z"/>
                  </svg>
               <h5 class="text-uppercase pt-3">FORMATO ÚNICO DE TRÁMITE</h5>
               <p class="lh-1 fw-light">Accede al formato único de trámite del Gobierno Regional</p></button>
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
       <div class="container">
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
         
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1389.4704820193235!2d-76.23563653018458!3d-9.932625095755043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91a7c2fcae5899ab%3A0xdb74b5c9e67b6366!2sGobierno%20Regional%20Hu%C3%A1nuco!5e0!3m2!1ses-419!2spe!4v1649430178415!5m2!1ses-419!2spe" width="1300" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          
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
        margin-left: 50px;
        background: rgba(29, 55, 202, 0.5);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 93px;;
        width: 400px;
        height: 200px;
        text-align: center;
        padding: 1px;
    }
      
    .msn1 {
        font-size: 20px;
        font-weight: bold;
        color: #000000;
        margin-top: 40px;
    }
      
    .msn2 {
        font-size: 12px;
        font-weight: bold;
    }

.col-4 .text-center{
   position:static;
   width: 450px;
   height: 200px;
   left: 20px;
   top: 200px;

   background: rgba(29, 55, 202, 0.5);
   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
   border-radius: 93px;
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
    height: 450px;
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

</style>
