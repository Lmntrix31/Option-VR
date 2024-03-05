<script setup>
  import { ref } from 'vue';
  import '../aframe/listen-to.js';



  defineProps({
    scale: Number,
  });

  
</script>

<template>
  <a-entity
      id="jungle"
      gltf-model="#jungle"
      position="0 -0.968 0"
      scale="1 1 1"
      listen-to="target: a-scene; event: enter-scene; emit: play-sound;"
      sound="src: #sound; positional: false; on: play-sound; loop: true;"
      sound__2="src: #sound-2; positional: false; on: play-sound; delay: 10000; volume: 0.2; loop: true;"
      ></a-entity>

    


  

  <!-- Main room navigation mesh  -->
  <!-- <a-entity
    geometry="primitive: plane; height: 13.5; width: 6"
    position="0 0.01 -4.75"
    rotation="-90 0 0"
    data-role="nav-mesh"
    material="color: blue"
    visible="false"
  ></a-entity>
  <a-entity
    geometry="primitive: plane; height: .5; width: 5"
    position="0 0.01 -11.75"
    rotation="-90 0 0"
    data-role="nav-mesh"
    material="color: red"
    visible="false"
  ></a-entity> -->

</template>