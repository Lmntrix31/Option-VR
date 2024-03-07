AFRAME.registerComponent('cylindergame', {
  init: function () {
    // Stocker la référence à sceneEl dans une variable globale
    this.sceneEl = this.el.sceneEl;

    // Création des cylindres
    const positions = [
      { x: -20.357, y: 1.111, z: 10.328 },
      { x: -20.323, y: 1.111, z: 10.568 },
      { x: -20.281, y:  1.111, z: 10.813 },
      { x: -20.249, y:  1.111, z: 11.068 },
      { x: -20.214, y:  1.111, z: 11.311 },
      { x: -20.190, y:  1.111, z: 11.551 }
    ];

    positions.forEach((position, index) => {
      const cylinderEl = document.createElement('a-cylinder');
      cylinderEl.setAttribute('id', `cylinder-${index}`);
      cylinderEl.setAttribute('position', `${position.x} ${position.y} ${position.z}`);
      cylinderEl.setAttribute('scale', '0.518 0.220 0.526');
      cylinderEl.setAttribute('rotation', '0.029 0.220 0.608');
      cylinderEl.setAttribute('radius', '0.2');
      cylinderEl.setAttribute('height', '1');
      // Si l'index est inférieur à 3, le cylindre est noir, sinon il est blanc
      const color = index < 3 ? 'black' : 'white';
      cylinderEl.setAttribute('color', color);
      cylinderEl.setAttribute('clickable', ''); // Rendre les cylindres cliquables
      this.sceneEl.appendChild(cylinderEl);
      cylinderEl.addEventListener('click', () => this.handleClick(cylinderEl));
    });
  },

  handleClick: function (clickedElement) {
    // Si l'élément cliqué est un cylindre et qu'il est cliquable
    if (clickedElement.tagName === 'A-CYLINDER' && clickedElement.getAttribute('clickable') !== null) {
      // Inverser la couleur du cylindre cliqué
      const currentColor = clickedElement.getAttribute('color');
      const newColor = currentColor === 'black' ? 'white' : 'black';
      clickedElement.setAttribute('color', newColor);

      // Vérifier la condition de réussite
      const cylinder2 = document.getElementById('cylinder-1');
      const cylinder5 = document.getElementById('cylinder-4');

      if (cylinder2.getAttribute('color') === 'white' && cylinder5.getAttribute('color') === 'black') {
        // Affichage du message de réussite
        if (!this.congratulationsDisplayed) {
          this.congratulationsDisplayed = true;
          const messageEl = document.createElement('a-entity');
          messageEl.setAttribute('text', {
            value: 'Felicitations !',
            color: 'white',
            width: 4,
            align: 'center',
            wrapCount: 20
          });
          messageEl.setAttribute('position', '-20.400 2 11.064'); // Ajustez la position selon vos besoins
          messageEl.setAttribute('rotation', '0 -90 0');
          this.sceneEl.appendChild(messageEl);

          // Affichage du carré vert
          const squareEl = document.createElement('a-box');
          squareEl.setAttribute('position', '-20.400 1.202 11.016'); // Ajustez la position selon vos besoins
          squareEl.setAttribute('rotation', '-90 97.128 0');
          squareEl.setAttribute('color', 'green');
          squareEl.setAttribute('width', '2');
          squareEl.setAttribute('height', '1');
          squareEl.setAttribute('depth', '0.1');
          this.sceneEl.appendChild(squareEl);
        }
      }
    }
  }
});
