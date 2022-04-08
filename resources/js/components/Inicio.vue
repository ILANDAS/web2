<template>
 <div>
    <main class="py-20" style="background:#ccc;">
          <div class="container">
              <Slidershow></Slidershow>
           </div>  
    </main>
    <!-- ACERCA DE NOSOSTROS -->
    <div class="pt-3 pb-3" style="background:linear-gradient(to bottom, rgba(39, 69, 160, 0.90), rgba(255, 255, 255, 0.85)),url('./../img/sede-gobirno-regional.jpg');background-size: cover;">
       <div class="container">
          <h4 class="text-center">Acerca de nosotros </h4>
          <hr/>
          <div class="row mt-4">
             <div class="col-4 text-center">
                <h4 class="text-center">Misión</h4>
                <h5 class="text-center">Conducir y promover el desarrollo humano Integral y Sostenible de la Población del Departamento de Huánuco, con una gestión moderna, transparente, competitiva e inclusiva, brindand bienes y servicios de calidad, con énfasis ambiental y la reducción de riezgos</h5>
             </div>
             <div class="col-4 text-center" >
                <img :src="ruta+'./../img/logocuadrado.jpg'" class="rounded-circle" height="220">
             </div>
             <div class="col-4 text-center">
                <h4 class="text-center">Visión</h4>
                <h5 class="text-center">Huánuco, territorio andino Amazónico integrado, que ha impulsado el desarrollo humano y la sostenibilidad de su economia, en base a la grandeza de su Biodiversidad y el respeto por la interculturalidad</h5>
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
          <h4 class="text-center">Noticas </h4>
          <hr/>
          <Slidernoticias/>
       </div>
    </div>
    <!-- FIN NOTICIAS -->
     <!-- UBICACIÓN-->
    <div class="pt-3 pb-3" style="background:#ffff;">
       <div class="container">
          <h4 class="text-center">Contáctanos </h4>
          <hr/>
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
</style>
