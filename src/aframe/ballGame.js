AFRAME.registerComponent('ballgame', {
  init: function () {
    // Variable pour stocker l'élément du bâton actuellement sélectionné
    this.currentHeldBaton = null;
    this.congratulationsDisplayed = false; // Pour éviter l'affichage répété du message de félicitations
    this.handleClick = this.handleClick.bind(this);
    // Création des bâtons et de la sphère
    const sceneEl = this.el.sceneEl;

    // Définir les positions et les rotations des bâtons
    const batonData = [
      { position: { x: 9.460, y: 1.061, z: -14.224 }, rotation: { x: -90, y: -42.228, z: 0 } },
      { position: { x: 9.472, y: 1.061, z: -13.957 }, rotation: { x: -90, y: 46.875, z: 0 } },
      { position: { x: 9.734, y: 1.061, z: -13.963 }, rotation: { x: -90, y: -42.228, z: 0 } },
      { position: { x: 9.318, y: 1.061, z: -13.791 }, rotation: { x: -90, y: -42.228, z: 0 } },
      { position: { x: 9.735, y: 1.061, z: -13.697 }, rotation: { x: -90, y: 46.875, z: 0 } },
      { position: { x: 9.529, y: 1.061, z: -13.578 }, rotation: { x: -90, y: -42.228, z: 0 } },
      { position: { x: 9.330, y: 1.061, z: -14.088 }, rotation: { x: -90, y: 46.875, z: 0 } },
      { position: { x: 9.024, y: 1.061, z: -14.079 }, rotation: { x: -90, y: -42.228, z: 0 } },
      { position: { x: 9.295, y: 1.061, z: -14.367 }, rotation: { x: -90, y: -42.228, z: 0 } }
    ];

    // Création des bâtons visibles et invisibles
    batonData.forEach((data, index) => {
      const batonEl = document.createElement('a-box');
      batonEl.setAttribute('id', `baton-${index}`);
      batonEl.setAttribute('position', `${data.position.x} ${data.position.y} ${data.position.z}`);
      batonEl.setAttribute('rotation', `${data.rotation.x} ${data.rotation.y} ${data.rotation.z}`);
      batonEl.setAttribute('scale', '0.1 0.250 0.1');
      batonEl.setAttribute('color', index < 4 ? 'black' : '#a3d0ed');
      batonEl.setAttribute('opacity', index < 4 ? 1 : 0.1);
      batonEl.setAttribute('clickable', ''); // Rendre les bâtons cliquables
      sceneEl.appendChild(batonEl);
      batonEl.addEventListener('click', () => this.handleClick(batonEl));
    });

    // Création de la sphère rouge non cliquable
    const ballEl = document.createElement('a-sphere');
    ballEl.setAttribute('position', '9.630 1.060 -14.134');
    ballEl.setAttribute('scale', '0.243 0.252 0.242');
    ballEl.setAttribute('radius', '0.5');
    ballEl.setAttribute('color', 'red');
    sceneEl.appendChild(ballEl);
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

      // Vérifier si le jeu est terminé
      const baton1 = document.getElementById('baton-1');
      const baton2 = document.getElementById('baton-2');
      const baton6 = document.getElementById('baton-6');
      const baton7 = document.getElementById('baton-7');
      if (baton1.getAttribute('color') !== 'black' && baton2.getAttribute('color') !== 'black' && 
          baton6.getAttribute('color') === 'black' && baton7.getAttribute('color') === 'black' &&
          !this.congratulationsDisplayed) {
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
        messageEl.setAttribute('position', '9.872 2 -14.162'); // Ajustez la position selon vos besoins
        messageEl.setAttribute('rotation', '0 -36.972 0');
        this.el.sceneEl.appendChild(messageEl);

        // Affichage du carré vert
        const squareEl = document.createElement('a-box');
        squareEl.setAttribute('position', '9.421 1.165 -13.793'); // Ajustez la position selon vos besoins
        squareEl.setAttribute('rotation', '-90 138.313 0');
        squareEl.setAttribute('color', 'green');
        squareEl.setAttribute('width', '2');
        squareEl.setAttribute('height', '1');
        squareEl.setAttribute('depth', '0.1');
        this.el.sceneEl.appendChild(squareEl);
      }
    }
  }
});
