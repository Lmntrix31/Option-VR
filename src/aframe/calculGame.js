
AFRAME.registerComponent('calculgame', {
  init: function () {
    // Variable pour stocker l'élément du bâton actuellement sélectionné
    this.currentHeldBaton = null;
    this.congratulationsDisplayed = false; // Pour éviter l'affichage répété du message de félicitations
    this.handleClick = this.handleClick.bind(this);
    // Création des bâtons
    const sceneEl = this.el.sceneEl;

    // Définir les positions et les rotations des bâtons
    const batonData = [
      { position: { x: -15.364, y: 1.020, z: -14.779 }, rotation: { x: 0.007, y: 44.036, z: -0.173 } },
      { position: { x: -15.354, y: 1.020, z: -14.940 }, rotation: { x: 0.018, y: -46.937, z: -0.183 } },
      { position: { x: -15.507, y: 1.020, z: -14.942  }, rotation: { x: 0.007, y: 44.036, z: -0.173} },
      { position: { x: -15.352, y: 1.020, z: -15.098  }, rotation: { x: 0.007, y: 44.036, z: -0.173} },
      { position: { x: -15.540, y: 1.020, z: -15.142 }, rotation: {  x: 0.018, y: -46.937, z: -0.183} },
      { position: { x: -15.752, y: 1.020, z: -15.209  }, rotation: { x: 0.007, y: 44.036, z: -0.173 } },
      { position: { x: -15.741, y: 1.020, z: -15.361  }, rotation: {x: 0.018, y: -46.937, z: -0.183 } },
      { position: { x: -15.893, y: 1.020, z: -15.363  }, rotation: { x: 0.007, y: 44.036, z: -0.173 } },
      { position: { x: -15.731, y: 1.020, z: -15.519  }, rotation: { x: 0.007, y: 44.036, z: -0.173 } },
      { position: { x: -15.969, y: 1.020, z: -15.575  }, rotation: { x: 0.018, y: -46.937, z: -0.183 } },
      { position: { x: -15.941, y: 1.020, z: -15.599  }, rotation: { x: 0.018, y: -46.937, z: -0.183} },
      { position: { x: -16.256, y: 1.020, z: -15.627  }, rotation: {x: 0.018, y: -46.937, z: -0.183 } },
      { position: { x: -16.244, y: 1.020, z: -15.783  }, rotation: { x: 0.007, y: 44.036, z: -0.173 } },
      { position: { x: -16.093, y: 1.020, z: -15.932  }, rotation: {x: 0.007, y: 44.036, z: -0.173 } },
      { position: { x: -15.940, y: 1.020, z: -15.921  }, rotation: { x: 0.018, y: -46.937, z: -0.183 } },
      { position: { x: -15.942, y: 1.020, z: -15.776 }, rotation: { x: 0.007, y: 44.036, z: -0.173 } },
      { position: { x: -16.105, y: 1.020, z: -15.629  }, rotation: {x: 0.007, y: 44.036, z: -0.173 } },
      { position: { x: -16.096, y: 1.020, z: -15.782  }, rotation: { x: 0.018, y: -46.937, z: -0.183 } },
      { position: { x: -15.571, y: 1.020, z: -15.510  }, rotation: {x: 0.018, y: -46.937, z: -0.183 } },
      { position: { x: -15.583, y: 1.020, z: -15.362  }, rotation: { x: 0.007, y: 44.036, z: -0.173 } },
      { position: { x: -15.907, y: 1.020, z: -15.211  }, rotation: { x: 0.018, y: -46.936, z: -0.183 } },
      { position: { x: -15.197, y: 1.020, z: -15.095  }, rotation: {x: 0.018, y: -46.937, z: -0.183 } },
      { position: { x: -15.191, y: 1.020, z: -14.941  }, rotation: { x: 0.007, y: 44.036, z: -0.173} },
      { position: { x: -15.518, y: 1.020, z: -14.783  }, rotation: { x: 0.018, y: -46.937, z: -0.183 } },
      // Ajoutez d'autres bâtons ici avec des positions et des rotations différentes
    ];

    // Création des bâtons visibles et invisibles
    batonData.forEach((data, index) => {
      const batonEl = document.createElement('a-box');
      batonEl.setAttribute('id', `baton-${index}`);
      batonEl.setAttribute('position', `${data.position.x} ${data.position.y} ${data.position.z}`);
      batonEl.setAttribute('rotation', `${data.rotation.x} ${data.rotation.y} ${data.rotation.z}`);
      batonEl.setAttribute('scale', '0.187 -0.034 0.023');
      batonEl.setAttribute('color', index < 14 ? 'black' : '#a3d0ed');
      batonEl.setAttribute('opacity', index < 14 ? 1 : 0.1);
      batonEl.setAttribute('clickable', ''); // Rendre les bâtons cliquables
      sceneEl.appendChild(batonEl);
      batonEl.addEventListener('click', () => this.handleClick(batonEl));
    });
  },

  handleClick: function (clickedElement) {
    console.log('handleClick');
    // Si l'élément cliqué est un bâton et qu'il est cliquable
    if (clickedElement.tagName === 'A-BOX' && clickedElement.getAttribute('clickable') !== null) {
      // Si le bâton cliqué est déjà sélectionné, le rendre visible en noir
      if (this.currentHeldBaton === clickedElement) {
        clickedElement.setAttribute('color', 'black');
        clickedElement.setAttribute('opacity', 1);
        this.currentHeldBaton = null;
      } else if (this.currentHeldBaton) {
        // Si un autre bâton est déjà sélectionné, le rendre visible en noir
        this.currentHeldBaton.setAttribute('color', 'black');
        this.currentHeldBaton.setAttribute('opacity', 1);
      }

      // Inverser la visibilité du bâton cliqué
      const isVisible = clickedElement.getAttribute('color') === 'black';
      clickedElement.setAttribute('color', isVisible ? '#a3d0ed' : 'black');
      clickedElement.setAttribute('opacity', isVisible ? 0.1 : 1); // Réglez l'opacité en fonction de la visibilité

      // Mettre à jour le bâton actuellement sélectionné
      this.currentHeldBaton = isVisible ? null : clickedElement;
      //this.el.sceneEl.flushToDOM();


      // Vérifier si le jeu est terminé
      const baton1 = document.getElementById('baton-1');
      const baton22 = document.getElementById('baton-22');
      console.log('Couleur baton 1 :', baton1.getAttribute('color'));
      console.log('Couleur baton 22 :', baton22.getAttribute('color'));

      if (baton1.getAttribute('color') !== '#a3d0ed' && baton22.getAttribute('color') === 'black' && !this.congratulationsDisplayed) {
        this.congratulationsDisplayed = true;
        // Affichage du message de félicitations
        const messageEl = document.createElement('a-entity');
        messageEl.setAttribute('text', {
          value: 'Felicitations !',
          color: 'white',
          width: 4,
          align: 'center',
          wrapCount: 20
        });
        messageEl.setAttribute('position', '-15.513 2 -15.403'); // Ajustez la position selon vos besoins
        messageEl.setAttribute('rotation', '0 132.642 0');
        this.el.sceneEl.appendChild(messageEl);

        // Affichage du carré vert
        const squareEl = document.createElement('a-box');
        squareEl.setAttribute('position', '-15.641 1.011 -15.425'); // Ajustez la position selon vos besoins
        squareEl.setAttribute('rotation', '-90 132.124 0');
        squareEl.setAttribute('color', 'green');
        squareEl.setAttribute('width', '2');
        squareEl.setAttribute('height', '1');
        squareEl.setAttribute('depth', '0.1');
        this.el.sceneEl.appendChild(squareEl);
    
        const modelEl = document.createElement('a-entity');
        modelEl.setAttribute('gltf-model', '#roomEnd'); // Remplacez '#votre-modele-glb' par l'ID de votre modèle glb
        modelEl.setAttribute('position', '2.780 0.048 28.173'); // Ajustez la position selon vos besoins
        modelEl.setAttribute('scale', '1 1 1');
        modelEl.setAttribute('rotation', '0 -89.473 0');
        this.el.sceneEl.appendChild(modelEl);

        const messageEl2 = document.createElement('a-entity');
        messageEl2.setAttribute('text', {
          value: 'Bravo mais faites attention la jungle n est jamais loin !',
          color: 'black',
          width: 4,
          align: 'center',
          wrapCount: 20
        });

        messageEl2.setAttribute('position', '2.365 2.144 30.968'); // Ajustez la position selon vos besoins
        messageEl2.setAttribute('rotation', '0 -175.349 0');
        messageEl2.setAttribute('scale', '0.213 0.328 0.327');
        this.el.sceneEl.appendChild(messageEl2);
      
      }
    }
  }

 
});
