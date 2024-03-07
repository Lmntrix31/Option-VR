
<script setup>
  import { ref } from 'vue';

  import TheCameraRig from './TheCameraRig.vue';
import TheJungle from './TheJungle.vue';
  //import TheLifeCubeRoom from './TheLifeCubeRoom.vue';
 // import '../aframe/pavageCarre.js';
  import '../aframe/batonGame.js';
  import '../aframe/cylinderGame.js';
  import '../aframe/ballGame.js';


  defineProps({
    scale: Number,
    overlaySelector: String,
  });



const allAssetsLoaded = ref(false);
</script>



<template>
  <a-scene stats background="color: #000000" fog="type: linear; color: #00001; near: 30; far: 60" batongame cylindergame ballgame>

    <a-assets  @loaded="allAssetsLoaded = true">
      <a-asset-item id="jungle" src="assets/jungleMap.glb"></a-asset-item>
      <a-asset-item id="sound" response-type="arraybuffer" src="assets/soundJungle.mp3" preload="auto"></a-asset-item>
      <a-asset-item id="sound" response-type="arraybuffer" src="assets/soundJungle-2.mp3" preload="auto"></a-asset-item>

      <a-asset-item id="sound-2" response-type="arraybuffer" src="assets/GorillaSound.mp3" preload="auto"></a-asset-item>

    </a-assets>

   
   
    
    <template v-if="allAssetsLoaded">
      <TheJungle :scale="scale" />
      
    </template>
    <TheCameraRig />

  </a-scene>
</template>

