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
      position="0 -0.9 0"
      scale="1 1 1"
      listen-to="target: a-scene; event: enter-scene; emit: play-sound;"
      sound="src: #sound; positional: false; on: play-sound; loop: true;"
      sound__2="src: #sound-2; positional: false; on: play-sound; delay: 10000; volume: 0.2; loop: true;"
      ></a-entity>
      <a-entity id="text-intro"
  text="value: Welcome to the Jungle \n\nPour pouvoir sortir d'ici, tu dois resoudre les enigmes. Il n'y aura pas d'indices. Attention, les animaux sont partout.; wrapCount: 40; color: white; width: 10;"
  position="0 2 -5"
  visible="false"
  listen-to="target: a-scene; event: enter-scene; emit: play-sound;"
  animation__show="property: visible; to: true; delay: 1000; dur: 1000"
  animation__hide="property: visible; to: false; delay: 30000; dur: 1000"
></a-entity>

<a-entity id="text-jeux1"
  text="value: Ce jeu est simple : en lisant de gauche à droite, vous verrez une suite de bâtons dans l'ordre 4, 3, 2, 1. Vous pouvez déplacer un seul bâton à la fois en cliquant dessus. Le but est de reformer la même suite, mais inversée, toujours en lisant de gauche à droite : 1, 2, 3, 4.\n Bonne Chance!; wrapCount: 40; color: white; width: 2; lineHeight: 50; letterSpacing: 5;"
  position="12.005 1.530 10.290"
  scale="0.544 0.786 1.730"
  rotation="0 45 0"
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