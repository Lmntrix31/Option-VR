AFRAME.registerComponent('ballgame', {
    init: function () {
      // Variable pour stocker l'élément du bâton actuellement sélectionné
      this.currentHeldBaton = null;
      this.congratulationsDisplayed = false; // Pour éviter l'affichage répété du message de félicitations
      this.handleClick = this.handleClick.bind(this);
      // Création des bâtons et de la sphère
      const sceneEl = this.el.sceneEl;
  
      // Positions des bâtons
      const batonPositions = [
        { x: -3, y: 1, z: -5 },
        { x: -2, y: 1, z: -5 },
        { x: -1, y: 1, z: -5 },
        { x: 1, y: 1, z: -5 },
        { x: 2, y: 1, z: -5 },
        { x: 3, y: 1, z: -5 },
        { x: 4, y: 1, z: -5 },
        { x: 5, y: 1, z: -5 },
        { x: 6, y: 1, z: -5 }
      ];
  
      // Création des bâtons visibles et invisibles
      batonPositions.forEach((position, index) => {
        const batonEl = document.createElement('a-box');
        batonEl.setAttribute('id', `baton-${index}`);
        batonEl.setAttribute('position', `${position.x} ${position.y} ${position.z}`);
        batonEl.setAttribute('rotation', '-90 0 0');
        batonEl.setAttribute('scale', '0.1 3 0.1');
        batonEl.setAttribute('color', index < 4 ? 'black' : 'transparent');
        batonEl.setAttribute('opacity', index < 4 ? 1 : 0);
        batonEl.setAttribute('clickable', ''); // Rendre les bâtons cliquables
        sceneEl.appendChild(batonEl);
        batonEl.addEventListener('click', () => this.handleClick(batonEl));
      });
  
      // Création de la sphère rouge non cliquable
      const ballEl = document.createElement('a-sphere');
      ballEl.setAttribute('position', '0 1 -5');
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
        clickedElement.setAttribute('color', isVisible ? 'transparent' : 'black');
        clickedElement.setAttribute('opacity', isVisible ? 0 : 1); // Réglez l'opacité en fonction de la visibilité
  
        // Mettre à jour le bâton actuellement sélectionné
        this.currentHeldBaton = isVisible ? null : clickedElement;
  
        // Vérifier si le jeu est terminé
        const batonsVisible = Array.from(document.querySelectorAll('a-box[color="black"]'));
        if (batonsVisible.length === 4 && !this.congratulationsDisplayed) {
          this.congratulationsDisplayed = true;
          // Affichage du message de félicitations
          const messageEl = document.createElement('a-entity');
          messageEl.setAttribute('text', {
            value: 'Félicitations !',
            color: 'white',
            width: 4,
            align: 'center',
            wrapCount: 20
          });
          messageEl.setAttribute('position', '0 2 -5'); // Ajustez la position selon vos besoins
          this.el.sceneEl.appendChild(messageEl);
  
          // Affichage du carré vert
          const squareEl = document.createElement('a-box');
          squareEl.setAttribute('position', '0 1.5 -5'); // Ajustez la position selon vos besoins
          squareEl.setAttribute('color', 'green');
          squareEl.setAttribute('width', '2');
          squareEl.setAttribute('height', '1');
          squareEl.setAttribute('depth', '0.1');
          this.el.sceneEl.appendChild(squareEl);
        }
      }
    }
  });
  