
<script setup>
  import { ref } from 'vue';

  import TheCameraRig from './TheCameraRig.vue';
  import TheLifeCubeRoom from './TheLifeCubeRoom.vue';
  import '../aframe/pavageCarre.js';
  import '../aframe/batonGame.js';

  defineProps({
    scale: Number,
    overlaySelector: String,
  });


  // Variable pour stocker l'ID du bâton actuellement « tenu »
  let currentHeldBatonId = null;

/*   const handleClick = (event) => {
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
  }; */


const allAssetsLoaded = ref(false);
</script>



<template>
  <a-scene stats background="color: #a3d0ed" fog="type: linear; color: #a3d0ed; near: 30; far: 60"  batongame>
    

  
  
    <!--   <a-ocean depth="100" width="100" amplitude="0" amplitude-variance="0.1" opacity="1" density="50" ></a-ocean>
      <a-ocean depth="100" width="100" opacity="0.5" amplitude="0" amplitude-variance="0.15" density="50" ></a-ocean>
      <a-entity light="type: ambient; color: #326b80"></a-entity>
      <a-entity light="type: point; intensity: 2" position="0 2 -10"></a-entity> -->


     
       <!-- Bâtons alignés avec des espaces invisibles entre les groupes -->
    <!-- Premier groupe de bâtons (4 bâtons) -->

    
    <TheCameraRig />

  </a-scene>
</template>

