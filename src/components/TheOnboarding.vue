<script setup>
  import { ref } from 'vue';

  defineProps({
    loaded: Boolean,
  });

  const showOnboarding = ref(true);

  function enterScene() {
    showOnboarding.value = false;
    if (AFRAME.utils.device.checkHeadsetConnected() && !AFRAME.utils.device.isMobile()) {
      document.querySelector('a-scene').enterVR();
    }
    document.querySelector('a-scene').emit('enter-scene');
  }
</script>

<template>
  <div id="onboarding" v-if="showOnboarding">
    <div>
      <h1>A-Frame + Vite + Vue Boilerplate</h1>
      <p v-if="!loaded">loading...</p>
      <button v-if="loaded" @click="enterScene()">Enter scene</button>
      <div class="licences">
        <section>
          <h4>Movement modes support</h4>
          <ul>
            <li>
              Desktop – Keyboard for move (WASD or Arrows keys) + Mouse for look
              control (Drag and drop)
            </li>
            <li>
              Mobile – 1x Finger touch to go forward + 2x Fingers touch to go
              backward + Gaze cursor for click
            </li>
            <li>
              VR/AR – walk + Teleport (Grip for grab and laser for
              click) + Gaze cursor for click
            </li>
          </ul>
        </section>
        <dl>
          <dt>
            <i>Included</i>
          </dt>
          <dt>
            <a href="https://github.com/c-frame/aframe-extras" target="_blank">aframe-extras controls and animation-mixer</a>
          </dt><dd>
            <a href="https://github.com/c-frame/aframe-extras/blob/master/LICENSE" target="_blank">MIT License</a>
          </dd>

          <dt>
            <a href="https://github.com/c-frame/physx" target="_blank">aframe physx</a>
          </dt><dd>
            <a href="https://github.com/c-frame/aframe-extras/blob/master/LICENSE" target="_blank">MIT License</a>
          </dd>

          <dt>
            <a href="https://github.com/jure/aframe-blink-controls/" target="_blank">aframe-blink-controls</a>
          </dt><dd>
            <a href="https://github.com/jure/aframe-blink-controls/blob/main/LICENSE" target="_blank">MIT License</a>
          </dd>

          <dt>
            <a href="https://github.com/diarmidmackenzie/aframe-multi-camera/" target="_blank">aframe-multi-camera</a>
          </dt><dd>
            <a href="https://github.com/diarmidmackenzie/aframe-multi-camera/blob/main/LICENSE" target="_blank">MIT License</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/ancient-pyramid-056c158eacc244b599ff28fde66e08a0" target="_blank">Ancient Pyramid
</a>
          </dt><dd>
            by <a href="https://sketchfab.com/thunderpwn" target="_blank">Thunder</a>
            under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/jungle-temple-pillar-cd98e49ca5074a9eaabc41d21abdcc77" target="_blank">Jungle Temple Pillar
</a>
          </dt><dd>
            by <a href="https://sketchfab.com/demondragon48" target="_blank">Matías Mellado</a>
            under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
          </dd>
          
          <dt>
            <a href="https://sketchfab.com/3d-models/pj-king-kong-2005-1791fb6dad1a479d92251df2cbede920" target="_blank">PJ King Kong 2005

</a>
          </dt><dd>
            by <a href="https://sketchfab.com/CGreature" target="_blank">CGreature</a>
            under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
          </dd>
          

          <dt>
            <a href="https://sketchfab.com/3d-models/jungle-vine-d8a2da241a1b4ce9aa8c528240fc92b2" target="_blank">Jungle Vine
</a>
          </dt><dd>
            by <a href="https://sketchfab.com/mike753" target="_blank">mike753</a>
            under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
          </dd>


          <dt>
            <a href="https://sketchfab.com/3d-models/jungle-temple-b55c572b0c90434f9b6097f281ddb2c2" target="_blank">Jungle Temple


</a>
          </dt><dd>
            by <a href="https://sketchfab.com/thunderpwn" target="_blank">Thunder</a>
            under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/jungle-cabin-13cb9510bca9486492107d9df3b67f27" target="_blank">Jungle Cabin

</a>
          </dt><dd>
            by <a href="https://sketchfab.com/shuvalan" target="_blank">shuvalan</a>
            under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
          </dd>

               
          <dt>
            <a href="https://sketchfab.com/3d-models/stylized-tree-843278c62cb9494bafda67e7c14c5707" target="_blank">Stylized Tree

</a>
          </dt><dd>
            by <a href="https://sketchfab.com/CocoJinjo" target="_blank">Coco Jinjo</a>
            under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
          </dd>

             
          <dt>
            <a href="https://sketchfab.com/3d-models/machete-lowpoly-426caebd84a74fe9993bc8b0cbe6ada4" target="_blank">Machete Lowpoly

</a>
          </dt><dd>
            by <a href="https://sketchfab.com/mrjarack" target="_blank">mrjarack</a>
            under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
          </dd>

             
          <dt>
            <a href="https://sketchfab.com/3d-models/firepit-049a818ed2fe456fb36008260a27c1e9" target="_blank">Firepit

</a>
          </dt><dd>
            by <a href="https://sketchfab.com/pantherone" target="_blank">Anthony V.</a>
            under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/rope-fence-462e970561664ff9a98de84dfb24d8bf" target="_blank">Rope Fence

</a>
          </dt><dd>
            by <a href="https://sketchfab.com/pantherone" target="_blank">Anthony V.</a>
            under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/arco-08c6c48fb61a4a2fa711a276be4ec048" target="_blank">Arco

</a>
          </dt><dd>
            by <a href="https://sketchfab.com/franciscopioner" target="_blank">Francisco Fischer Pioner</a>
            under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/tent-4bb901d9c7fd4ac7a5a02e383361d3cd" target="_blank">Tent

</a>
          </dt><dd>
            by <a href="https://sketchfab.com/hildegunstdermythenmetz" target="_blank">hildegunstdermythenmetz</a>
            under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
          </dd>
          
          <dt>
            <a href="https://sketchfab.com/3d-models/walkway-stones-3268b9e74f73498fa93912922bc4df73" target="_blank">Walkway Stones


</a>
          </dt><dd>
            by <a href="https://sketchfab.com/thunderpwn" target="_blank">Thunder</a>
            under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/wooden-sign-256975ecc4a947a79ffe2a0e963e8bbd" target="_blank">Wooden Sign


</a>
          </dt><dd>
            by <a href="https://sketchfab.com/carlossamuelariza" target="_blank">Carlos</a>
            under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
          </dd>

        </dl>
      </div>
    </div>
  </div>
</template>

<style scoped>
  h1 { font-size: 1.5rem }
  a {
    color: #eee;
    text-decoration: none;
  }
  .licences {
    margin: 2rem 0;
    padding-bottom: 1rem;
    font-size: 1rem;
    text-align: left;
  }
  .licences dt {
    padding-top: 0.75rem;
    font-size: 0.9rem;
    font-weight: bold;
  }
  .licences dd {
    margin-left: 0;
    font-size: 0.8rem;
  }

  #onboarding {
    position: absolute;
    top: 0;
    left: 0;
    background-color: #333;
    color: #ccc;
    width: 100vw;
    height: 100vh;
    padding: 1rem;
    font-family: monospace;
    z-index: 10000;
    overflow: auto;
  }
  #onboarding > * {
    margin: 0 auto;
    max-width: 50rem;
    width: calc(100vw - 10rem);
    text-align: center;
    border-radius: 0.3rem;
    padding: 1rem;
    font-size: 1.3rem;
  }
  #onboarding button {
    font-size: 1.3rem;
    padding: 0.5rem 1rem;
    border-radius: 0.3rem;
    background-color: white;
    color: black;
    border: none;
    cursor: pointer;
  }
</style>#onboarding li {
#onboarding li {
  font-size: 1rem;
  text-align: left;
}
