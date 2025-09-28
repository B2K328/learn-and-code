# Sudoku

Ce projet est une application web simple permettant de jouer et de vérifier des grilles de Sudoku.  
Il fait partie du dépôt [learn-and-code](https://github.com/B2K328/learn-and-code) qui regroupe mes exercices et projets d’apprentissage.

## Fonctionnalités

- Génération aléatoire de grilles de Sudoku de différents niveaux de difficulté.
- Saisie des chiffres directement dans la grille via l’interface web.
- Vérification automatique de la validité : les doublons dans les lignes, colonnes et carrés sont signalés.
- Les cases pré-remplies (issues de la grille générée) ne sont pas modifiables par l’utilisateur.
- Affichage visuel des erreurs (cases en rouge si doublon ou valeur invalide).

## Installation et utilisation

1. **Pré-requis**
    - Un navigateur web moderne
    - (Facultatif) Un serveur local pour ouvrir le projet (ex : [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) pour VSCode ou WebStorm)

2. **Cloner le projet**
   ```bash
   git clone https://github.com/B2K328/learn-and-code.git
   ```

3. **Ouvrir le projet**
    - Va dans le dossier `sudoku`
    - Ouvre le fichier `index.html` dans ton navigateur

4. **Jouer**
    - Remplis la grille de Sudoku.
    - Clique sur le bouton “Vérifier” pour contrôler si ta saisie respecte les règles du Sudoku.

## Organisation des fichiers

- `index.html` : page principale contenant la grille et le bouton de vérification
- `index.js` : logique de vérification des règles du Sudoku
- `script-import.js` : chargement et affichage d’une grille aléatoire
- `datas.json` : grilles de Sudoku (facile, moyen, difficile)
- `style.css` : styles visuels
- `images/background.jpeg` : image de fond
- `.idea/` : configuration WebStorm (peut être ignorée)

## Licence

Vous pouvez utiliser, modifier et partager ce projet librement, à condition de **m’indentifier** ([B2K328](https://github.com/B2K328)) comme auteur original.

---

N’hésite pas à proposer des améliorations ou à t’inspirer du code pour tes propres projets !