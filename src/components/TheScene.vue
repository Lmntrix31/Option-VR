
<script setup>
  import { ref } from 'vue';

  import TheCameraRig from './TheCameraRig.vue';
import TheJungle from './TheJungle.vue';
  //import TheLifeCubeRoom from './TheLifeCubeRoom.vue';
 // import '../aframe/pavageCarre.js';

  defineProps({
    scale: Number,
    overlaySelector: String,
  });


  // Variable pour stocker l'ID du bâton actuellement « tenu »
  let currentHeldBatonId = null;

  const handleClick = (event) => {
    const clickedElement = event.target;
    
    // Si un bâton est actuellement « tenu »
    if (currentHeldBatonId) {
      // Trouver l'espace vide correspondant à l'élément cliqué
      const emptySpaceId = `espace${clickedElement.id.replace('baton', '')}`;
      const emptySpace = document.getElementById(emptySpaceId);
      
      if (emptySpace) {
        // Placer le bâton dans l'espace vide correspondant
        const baton = document.getElementById(currentHeldBatonId);
        baton.setAttribute('position', emptySpace.getAttribute('position'));
        baton.setAttribute('visible', 'true');
        currentHeldBatonId = null; // Réinitialiser l'ID du bâton « tenu »
      }
    } else {
      // Si l'élément cliqué est un bâton, le rendre invisible et le « tenir »
      if (clickedElement.tagName === 'A-BOX' && clickedElement.getAttribute('clickable') !== null) {
        clickedElement.setAttribute('visible', 'false');
        currentHeldBatonId = clickedElement.id;
      }
    }
  };


const allAssetsLoaded = ref(false);
</script>



<template>
  <a-scene stats background="color: #a3d0ed" fog="type: linear; color: #a3d0ed; near: 30; far: 60" @click="handleClick">

    <a-assets  @loaded="allAssetsLoaded = true">
      <a-asset-item id="jungle" src="assets/jungle_cabin.glb"></a-asset-item>
    </a-assets>

   
    <!--   <a-ocean depth="100" width="100" amplitude="0" amplitude-variance="0.1" opacity="1" density="50" ></a-ocean>
      <a-ocean depth="100" width="100" opacity="0.5" amplitude="0" amplitude-variance="0.15" density="50" ></a-ocean>
      <a-entity light="type: ambient; color: #326b80"></a-entity>
      <a-entity light="type: point; intensity: 2" position="0 2 -10"></a-entity> -->

     <!--  <a-box 
      
        pavageCarre


      ></a-box> -->
     
       <!-- Bâtons alignés avec des espaces invisibles entre les groupes -->
    <!-- Premier groupe de bâtons (4 bâtons) -->
    <a-box id="baton1" position="-5.5 1.5 0" width="0.1" height="3" depth="0.1" color="black" clickable></a-box>
    <a-box id="baton2" position="-4.5 1.5 0" width="0.1" height="3" depth="0.1" color="black" clickable></a-box>
    <a-box id="baton3" position="-3.5 1.5 0" width="0.1" height="3" depth="0.1" color="black" clickable></a-box>
    <a-box id="baton4" position="-2.5 1.5 0" width="0.1" height="3" depth="0.1" color="black" clickable></a-box>

    <!-- Espace invisible -->
    <a-box id="espace1" position="-1.5 1.5 0" width="0.1" height="3" depth="0.1" color="#a3d0ed" visible="false"></a-box>

    <!-- Deuxième groupe de bâtons (3 bâtons) -->
    <a-box id="baton5" position="-0.5 1.5 0" width="0.1" height="3" depth="0.1" color="black" clickable></a-box>
    <a-box id="baton6" position="0.5 1.5 0" width="0.1" height="3" depth="0.1" color="black" clickable></a-box>
    <a-box id="baton7" position="1.5 1.5 0" width="0.1" height="3" depth="0.1" color="black" clickable></a-box>

    <!-- Espace invisible -->
    <a-box id="espace2" position="2.5 1.5 0" width="0.1" height="3" depth="0.1" color="#a3d0ed" visible="false"></a-box>

    <!-- Troisième groupe de bâtons (2 bâtons) -->
    <a-box id="baton8" position="3.5 1.5 0" width="0.1" height="3" depth="0.1" color="black" clickable></a-box>
    <a-box id="baton9" position="4.5 1.5 0" width="0.1" height="3" depth="0.1" color="black" clickable></a-box>

    <!-- Espace invisible -->
    <a-box id="espace3" position="5.5 1.5 0" width="0.1" height="3" depth="0.1" color="#a3d0ed" visible="false"></a-box>

    <!-- Quatrième groupe de bâtons (1 bâton) -->
    <a-box id="baton10" position="6.5 1.5 0" width="0.1" height="3" depth="0.1" color="black" clickable></a-box>
    
    <template v-if="allAssetsLoaded">
      <TheJungle :scale="scale" />
      
    </template>
    <TheCameraRig />

  </a-scene>
</template>

