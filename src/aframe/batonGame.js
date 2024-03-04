AFRAME.registerComponent('batongame', {
  init: function () {
    // Variable pour stocker l'ID du bâton actuellement « tenu »
    this.currentHeldBatonId = null;
    this.congratulationsDisplayed = false; // Pour éviter l'affichage répété du message de félicitations

    // Création des bâtons et des espaces invisibles
    const sceneEl = document.querySelector('a-scene');

    // Positions et nombres de bâtons dans chaque groupe
    const batonGroups = [
      { numBaton: 4, visible: true },
      { numBaton: 3, visible: true },
      { numBaton: 2, visible: true },
      { numBaton: 1, visible: false }
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
        batonEl.setAttribute('color', 'black');
        batonEl.setAttribute('clickable', ''); // Rendre les bâtons cliquables
        sceneEl.appendChild(batonEl);

        positionX += 1;
      }

      // Créer un espace invisible après chaque groupe de bâtons
      const emptySpaceId = `espace${groupIndex + 1}`;
      const emptySpaceEl = document.createElement('a-box');
      emptySpaceEl.setAttribute('id', emptySpaceId);
      emptySpaceEl.setAttribute('position', `${positionX} 1.5 0`);
      emptySpaceEl.setAttribute('width', '0.1');
      emptySpaceEl.setAttribute('height', '3');
      emptySpaceEl.setAttribute('depth', '0.1');
      emptySpaceEl.setAttribute('color', '#a3d0ed');
      emptySpaceEl.setAttribute('visible', group.visible.toString());
      emptySpaceEl.setAttribute('clickable', ''); // Rendre les espaces vides cliquables
      sceneEl.appendChild(emptySpaceEl);

      positionX += 1; // Espacement entre les groupes de bâtons
    });

    // Ajouter l'événement de clic au composant A-Frame lui-même
    this.el.addEventListener('click', this.handleClick.bind(this));
  },

  handleClick: function (event) {
    if (event.detail.intersection) {
      const clickedElement = event.detail.intersection.object.el;

      // Si aucun bâton n'est actuellement sélectionné
      if (!this.currentHeldBatonId) {
        // Si l'élément cliqué est un bâton et qu'il est cliquable
        if (clickedElement.tagName === 'A-BOX' && clickedElement.getAttribute('clickable') !== null) {
          // Cacher le bâton sélectionné
          clickedElement.setAttribute('visible', 'false');
          // Stocker l'ID du bâton sélectionné
          this.currentHeldBatonId = clickedElement.id;
        }
      } else {
        // Si l'élément cliqué est un espace vide
        if (clickedElement.getAttribute('color') === '#a3d0ed') {
          // Récupérer l'ID de l'espace vide cliqué
          const emptySpaceId = clickedElement.id;
          // Récupérer le bâton sélectionné
          const baton = document.getElementById(this.currentHeldBatonId);
          // Déplacer le bâton vers l'espace vide
          baton.setAttribute('position', clickedElement.getAttribute('position'));
          // Afficher le bâton dans l'espace vide
          baton.setAttribute('visible', 'true');
          // Réinitialiser l'ID du bâton sélectionné
          this.currentHeldBatonId = null;

          // Vérifier si le bâton numéro deux est dans l'espace trois
          const baton2 = document.getElementById('baton2');
          const espace3 = document.getElementById('espace3');
          if (baton2.getAttribute('position').x === espace3.getAttribute('position').x) {
            if (!this.congratulationsDisplayed) {
              console.log("Bravo! Vous avez placé le bâton numéro deux dans l'espace trois.");
              this.congratulationsDisplayed = true;
              // Ajouter ici le code pour afficher le message de félicitations à l'utilisateur
            }
          }
        }
      }
    }
  }
});
