AFRAME.registerComponent('batongame', {
  init: function () {
    // Variable pour stocker l'élément du bâton actuellement sélectionné
    this.currentHeldBaton = null;
    this.congratulationsDisplayed = false; // Pour éviter l'affichage répété du message de félicitations
    this.handleClick = this.handleClick.bind(this);
    // Création des bâtons et des espaces invisibles
    const sceneEl = this.el.sceneEl;

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

    let positionX = -5.5;

    // Créer les bâtons et les espaces invisibles
    batonGroups.forEach((group, groupIndex) => {
      // Créer les bâtons du groupe actuel
      for (let i = 0; i < group.numBaton; i++) {
        const batonId = `baton${i + 1 + groupIndex * 10}`; // Chaque groupe commence par 10
        const batonEl = document.createElement('a-box');
        batonEl.setAttribute('id', batonId);
        batonEl.setAttribute('position', `${positionX} 1.5 0`);
        batonEl.setAttribute('width', '0.1');
        batonEl.setAttribute('height', '3');
        batonEl.setAttribute('depth', '0.1');
        batonEl.setAttribute('color', group.visible ? 'black' : '#a3d0ed');
        batonEl.setAttribute('opacity', group.visible ? 1 : 0.1); // Réglez l'opacité en fonction de la visibilité
        batonEl.setAttribute('clickable', ''); // Rendre les bâtons cliquables
        sceneEl.appendChild(batonEl);
        batonEl.addEventListener('click', () => this.handleClick(batonEl));
        positionX += 1;
      }

      // Espacement différent entre les groupes de bâtons
      positionX += group.visible ? -0.3 : -0.3;
    });

    // Ajouter l'événement de clic au composant A-Frame lui-même
    // this.el.addEventListener('click', this.handleClick.bind(this));
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
    }
  }
});
