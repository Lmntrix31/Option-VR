AFRAME.registerComponent('cylindergame', {
  init: function () {
    // Variable pour stocker les cylindres actuellement sélectionnés
    this.selectedCylinders = [];
    this.winningCombination = []; // La combinaison gagnante
    this.generateWinningCombination(); // Générer la combinaison gagnante
    this.handleClick = this.handleClick.bind(this);

    // Création des cylindres
    const sceneEl = this.el.sceneEl;
    const positions = [
      { x: -3, y: 1, z: -5 },
      { x: -2, y: 1, z: -5 },
      { x: -1, y: 1, z: -5 },
      { x: 0, y: 1, z: -5 },
      { x: 1, y: 1, z: -5 },
      { x: 2, y: 1, z: -5 },
      { x: 3, y: 1, z: -5 },
      { x: 4, y: 1, z: -5 }
    ];

    positions.forEach((position, index) => {
      const cylinderEl = document.createElement('a-cylinder');
      const color = this.winningCombination[index];
      cylinderEl.setAttribute('position', `${position.x} ${position.y} ${position.z}`);
      cylinderEl.setAttribute('radius', '0.2');
      cylinderEl.setAttribute('height', '1');
      cylinderEl.setAttribute('color', color);
      cylinderEl.setAttribute('clickable', ''); // Rendre les cylindres cliquables
      sceneEl.appendChild(cylinderEl);
      cylinderEl.addEventListener('click', () => this.handleClick(cylinderEl));
    });

    // Création du bouton de validation
    const validationButtonEl = document.createElement('a-plane');
    validationButtonEl.setAttribute('id', 'validationButton');
    validationButtonEl.setAttribute('position', '0 1.5 -5');
    validationButtonEl.setAttribute('width', '2');
    validationButtonEl.setAttribute('height', '1');
    validationButtonEl.setAttribute('color', 'blue');
    validationButtonEl.setAttribute('clickable', ''); // Rendre le bouton cliquable
    sceneEl.appendChild(validationButtonEl);
    validationButtonEl.addEventListener('click', () => this.validateCombination());
    
    const textEl = document.createElement('a-text');
    textEl.setAttribute('value', 'Valider');
    textEl.setAttribute('align', 'center');
    textEl.setAttribute('width', '4');
    validationButtonEl.appendChild(textEl);
  },

  generateWinningCombination: function () {
    // Générer une combinaison aléatoire de couleurs (vert ou jaune)
    const colors = ['green', 'yellow'];
    for (let i = 0; i < 8; i++) {
      const randomIndex = Math.floor(Math.random() * colors.length);
      this.winningCombination.push(colors[randomIndex]);
    }
  },

  handleClick: function (clickedElement) {
    // Si l'élément cliqué est un cylindre et qu'il est cliquable
    if (clickedElement.tagName === 'A-CYLINDER' && clickedElement.getAttribute('clickable') !== null) {
      // Inverser la couleur du cylindre cliqué
      const currentIndex = this.selectedCylinders.indexOf(clickedElement);
      if (currentIndex === -1) {
        const currentColor = clickedElement.getAttribute('color');
        const newColor = currentColor === 'green' ? 'yellow' : 'green';
        clickedElement.setAttribute('color', newColor);
        this.selectedCylinders.push(clickedElement);
      } else {
        clickedElement.setAttribute('color', 'gray'); // Réinitialiser la couleur du cylindre cliqué
        this.selectedCylinders.splice(currentIndex, 1);
      }
    }
  },

  validateCombination: function () {
    // Vérifier si la combinaison actuelle correspond à la combinaison gagnante
    if (this.checkWinningCombination()) {
      // Afficher le message de félicitations
      console.log('Félicitations ! Vous avez trouvé la bonne combinaison.');
    }
  },

  checkWinningCombination: function () {
    // Vérifier si la combinaison actuelle correspond à la combinaison gagnante
    for (let i = 0; i < this.selectedCylinders.length; i++) {
      if (this.selectedCylinders[i].getAttribute('color') !== this.winningCombination[i]) {
        return false;
      }
    }
    return true;
  }
});
