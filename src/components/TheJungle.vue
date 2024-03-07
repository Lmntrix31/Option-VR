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

  <a-box
  id="box-intro"
  position="0 3.052 -5"
  scale="10.888 4 0.1"
  visible="false"
  material="color: #000000; opacity: 0.5"
  animation__show="property: visible; to: true; delay: 500; dur: 1000"
  animation__hide="property: visible; to: false; delay: 30000; dur: 1000"
></a-box>

      <a-entity id="text-intro"
  text="value: Welcome to the Jungle \n\nPour pouvoir sortir d'ici tu dois resoudre les enigmes. Il n'y aura pas d'indices. Pour savoir ou sont les jeux regarde les pancartes. Attention, les animaux sont partout.; wrapCount: 40; color: white; width: 10;"
  position="0.362 3.047 -4.914"
  visible="false"
  animation__show="property: visible; to: true; delay: 500; dur: 1000"
  animation__hide="property: visible; to: false; delay: 30000; dur: 1000"
></a-entity>

<a-entity id="text-jeux1"
  text="value: Ce jeu est simple : en lisant de gauche à droite, vous verrez une suite de bâtons dans l'ordre 4, 3, 2, 1. Vous pouvez déplacer un seul bâton à la fois en cliquant dessus et cliquez sur les espaces vides. Le but est de reformer la même suite, mais inversée, toujours en lisant de gauche à droite : 1, 2, 3, 4.\n Bonne Chance!; wrapCount: 40; color: white; width: 2; lineHeight: 50; letterSpacing: 5;"
  position="12.033 1.512 10.262"
  scale="0.566 0.643 1.730"
  rotation="0 45 0"
></a-entity>

<a-entity id="text-jeux2"
  text="value: 6 cylindres sont alignes. Les 3 premiers cylindres sont noirs, les 3 derniers sont blancs. Comment, en ne cliquant que sur deux cylindres, pouvez-vous les alterner (noir, blanc, noir, blanc…) ?\n Bonne Chance!; wrapCount: 40; color: white; width: 2; lineHeight: 50; letterSpacing: 5;"
  position="-18.627 1.543 10.659"  
  scale="0.538 0.736 1.730"
  rotation="0 -79.895 0"
></a-entity>

<a-entity id="text-jeux3"
  text="value: La figure ci-dessous represente une pelle. Une boule rouge se trouve dans la pelle.Comment faire sortir la boule rouge de la pelle en ne deplaçant que 2 allumettes ?Précisions : interdiction de toucher la boule rouge et la pelle doit avoir la meme forme apres le deplacement bien-sur.\n Bonne Chance!; wrapCount: 40; color: white; width: 2; lineHeight: 50; letterSpacing: 5;"
  position="10.609 1.504 -15.232"
  scale="0.505 0.631 2.623"
  rotation="0 -45.850 0"
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