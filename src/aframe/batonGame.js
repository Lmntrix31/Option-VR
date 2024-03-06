AFRAME.registerComponent('batongame', {
  init: function () {
    // Variable pour stocker l'élément du bâton actuellement sélectionné
    this.currentHeldBaton = null;
    this.congratulationsDisplayed = false; // Pour éviter l'affichage répété du message de félicitations
    this.handleClick = this.handleClick.bind(this);
    // Création des bâtons et des espaces invisibles
    const sceneEl = this.el.sceneEl;

    // Espacement horizontal entre les bâtons et les espaces vides
    const espacementHorizontal = 0.3; // Ajustez selon vos besoins

    // Positions et nombres de bâtons dans chaque groupe
    const batonGroups = [
      { numBaton: 4, visible: true },
      { numBaton: 1, visible: false },
      { numBaton: 3, visible: true },
      { numBaton: 1, visible: false },
      { numBaton: 2, visible: true },
      { numBaton: 1, visible: false },
      { numBaton: 1, visible: true }
    ];

    // Positions spécifiées pour chaque bâton
    const positions = [
      { x: 12.759, y: 1.029, z: 11.890 },
      { x: 12.825, y: 1.029, z: 11.814 },
      { x: 12.895, y: 1.029, z: 11.748 },
      { x: 12.977, y: 1.029, z: 11.676 },
      { x: 13.077, y: 1.029, z: 11.583 },
      { x: 13.179, y: 1.029, z: 11.491 },
      { x: 13.252, y: 1.029, z: 11.417 },
      { x: 13.333, y: 1.029, z: 11.342 },
      { x: 13.418, y: 1.029, z: 11.259 },
      { x: 13.496, y: 1.029, z: 11.186 },
      { x: 13.571, y: 1.029, z: 11.116 },
      { x: 13.647, y: 1.029, z: 11.040 },
      { x: 13.731, y: 1.029, z: 10.964 }
    ];

    // Vérifier si le nombre de positions correspond au nombre total de bâtons à créer
    const totalBatonCount = batonGroups.reduce((acc, group) => acc + group.numBaton, 0);
    if (positions.length !== totalBatonCount) {
      console.error('Le nombre de positions ne correspond pas au nombre total de bâtons à créer');
      return;
    }

    // Créer les bâtons et les espaces invisibles
    let positionIndex = 0; // Initialiser l'index de position
    batonGroups.forEach((group, groupIndex) => {
      // Créer les bâtons du groupe actuel
      for (let i = 0; i < group.numBaton; i++) {
        if (!positions[positionIndex]) {
          console.error('Position non définie pour le bâton', positionIndex + 1);
          return;
        }
        const batonId = `baton${i + 1 + groupIndex * 10}`; // Chaque groupe commence par 10
        const batonEl = document.createElement('a-box');
        batonEl.setAttribute('id', batonId);
        batonEl.setAttribute('position', `${positions[positionIndex].x} ${positions[positionIndex].y} ${positions[positionIndex].z}`);
        batonEl.setAttribute('rotation', '-90.000 44.160 0.000');
        batonEl.setAttribute('scale', '0.341 0.216 0.522');
        batonEl.setAttribute('width', '0.1');
        batonEl.setAttribute('height', '3');
        batonEl.setAttribute('depth', '0.1');
        batonEl.setAttribute('color', group.visible ? 'black' : '#a3d0ed');
        batonEl.setAttribute('opacity', group.visible ? 1 : 0.1); // Réglez l'opacité en fonction de la visibilité
        batonEl.setAttribute('clickable', ''); // Rendre les bâtons cliquables
        sceneEl.appendChild(batonEl);
        batonEl.addEventListener('click', () => this.handleClick(batonEl));
        positionIndex++;
      }
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

      // Vérifier si le jeu est terminé
      const baton2 = document.getElementById('baton2');
      const baton12 = document.getElementById('baton51');

      if (baton2.getAttribute('color') === '#a3d0ed' && baton12.getAttribute('color') === 'black' && !this.congratulationsDisplayed) {
        this.congratulationsDisplayed = true;
        // Affichage du message de félicitations
        const messageEl = document.createElement('a-entity');
        messageEl.setAttribute('text', {
          value: 'Félicitation!',
          color: 'white',
          width: 4,
          align: 'center',
          wrapCount: 20
        });
        messageEl.setAttribute('position', '12.756 1.888 10.955');
        messageEl.setAttribute('rotation', '0 45 0');
        
        this.el.sceneEl.appendChild(messageEl);

        // Affichage du carré vert
        const squareEl = document.createElement('a-box');
        squareEl.setAttribute('position', '12.800 1.032 11.000');
        squareEl.setAttribute('rotation', '-90 45 0');
        squareEl.setAttribute('color', 'green');
        squareEl.setAttribute('width', 2);
        squareEl.setAttribute('height', 2);
        squareEl.setAttribute('depth', 0.1);
        this.el.sceneEl.appendChild(squareEl);
      }
    }
  }
});
