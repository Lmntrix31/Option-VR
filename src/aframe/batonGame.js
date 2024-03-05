AFRAME.registerComponent('batongame', {
  init: function () {
    // Variable pour stocker l'ID du bâton actuellement « tenu »
    this.currentHeldBatonId = null;
    this.congratulationsDisplayed = false; // Pour éviter l'affichage répété du message de félicitations
    this.handleClick = this.handleClick.bind(this)
    // Création des bâtons et des espaces invisibles
    const sceneEl = this.el.sceneEl;

    // Positions et nombres de bâtons dans chaque groupe
    const batonGroups = [
      { numBaton: 4, visible: true },
      { numBaton: 3, visible: true },
      { numBaton: 2, visible: true },
      { numBaton: 1, visible: false }
    ];

    // Position initiale du premier bâton
    let positionX = 12.963; // Position X du deuxième bâton
    let positionY = 0.983;
    let positionZ = 11.707;

    // Espacement horizontal entre les bâtons et les espaces vides
    const espacementHorizontal = 0.02; // 20 cm de longueur de socle

    // Largeur d'un bâton
    const largeurBaton = 0.1; // 10 cm

    // Créer les bâtons et les espaces invisibles
    batonGroups.forEach((group, groupIndex) => {
      // Créer les bâtons du groupe actuel
      for (let i = 0; i < group.numBaton; i++) {
        const batonId = `baton${i + 1 + groupIndex * 10}`; // Chaque groupe commence par 10
        const batonEl = document.createElement('a-box');
        batonEl.setAttribute('id', batonId);
        batonEl.setAttribute('position', `${positionX} ${positionY} ${positionZ}`);
        batonEl.setAttribute('rotation', '-86.408 -171.720 -146.134'); // Rotation du deuxième bâton
        batonEl.setAttribute('scale', '0.341 0.216 0.522'); // Scale du deuxième bâton
        batonEl.setAttribute('width', '0.1');
        batonEl.setAttribute('height', '3');
        batonEl.setAttribute('depth', '0.1');
        batonEl.setAttribute('color', 'black');
        batonEl.setAttribute('clickable', ''); // Rendre les bâtons cliquables
        sceneEl.appendChild(batonEl);
        batonEl.addEventListener('click', () => this.handleClick(batonEl));
        positionX += largeurBaton + espacementHorizontal; // Espacement horizontal entre les bâtons
      }

      // Créer un espace invisible après chaque groupe de bâtons
      const emptySpaceId = `espace${groupIndex + 1}`;
      const emptySpaceEl = document.createElement('a-box');
      emptySpaceEl.setAttribute('id', emptySpaceId);
      emptySpaceEl.setAttribute('position', `${positionX} ${positionY} ${positionZ}`);
      emptySpaceEl.setAttribute('rotation', '-86.408 -171.720 -146.134'); // Utilisation de la même rotation que les bâtons
      emptySpaceEl.setAttribute('scale', '0.341 0.216 0.522'); // Utilisation de la même mise à l'échelle que les bâtons
      emptySpaceEl.setAttribute('width', '0.1');
      emptySpaceEl.setAttribute('height', '3');
      emptySpaceEl.setAttribute('depth', '0.1');
      emptySpaceEl.setAttribute('color', '#a3d0ed');
      emptySpaceEl.setAttribute('visible', group.visible.toString());
      emptySpaceEl.setAttribute('clickable', ''); // Rendre les espaces vides cliquables
      sceneEl.appendChild(emptySpaceEl);
      emptySpaceEl.addEventListener('click', () => this.handleClick(emptySpaceEl));

      positionX += largeurBaton + espacementHorizontal; // Espacement entre les groupes de bâtons
    });

    // Ajouter l'événement de clic au composant A-Frame lui-même
    // this.el.addEventListener('click', this.handleClick.bind(this));
  },

  handleClick: function (clickedElement) {
    console.log('handleClick');
      // Si aucun bâton n'est actuellement sélectionné
      if (!this.currentHeldBatonId) {
        // Si l'élément cliqué est un bâton et qu'il est cliquable
        if (clickedElement.tagName === 'A-BOX' && clickedElement.getAttribute('clickable') !== null) {
          // Cacher le bâton sélectionné
          //clickedElement.setAttribute('visible', 'false');
          // le baton devient un espace vide
          clickedElement.setAttribute('color', '#a3d0ed');
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
          // Afficher le bâton dans l'espace vide dans la couleur du bâton 
          clickedElement.setAttribute('color', 'black');
          //baton.setAttribute('visible', 'true');
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
});
