Reprendre le composant Avatar de l’atelier du cours react props et modifier le code JSX pour que:
si la prop image n’est pas fournie le composant affiche cette image (affichage par défaut)
si la prop star vaut true applique un style particulier à ton avatar (couleur de fond, couleur de texte, et pourquoi pas des paillettes animées en CSS).


// App.js
import React, { Component } from 'react';
import './App.css';
import Avatar from './Avatar';

class App extends Component {
  render() {
    return (
      <div>
        <Avatar
          firstName='Bart'
          lastName='Simpsons'
          image='https://i.skyrock.net/7605/73177605/pics/2883983638_1.png'
        />
        <Avatar
          firstName='Lisa'
          lastName='Simpsons'
          image='https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/Lisa_Simpson.png/220px-Lisa_Simpson.png'
        />
        <Avatar
          firstName='Homer'
          lastName='Simpsons'
          image='https://vignette.wikia.nocookie.net/simpsons/images/3/33/Homer.png/revision/latest?cb=20110703093455&path-prefix=fr'
        />
      </div>
    );
  }
}

export default App;


// Avatar.js

import React, { Component } from 'react';

const data = {};

class Avatar extends Component {
  render() {
    return (
      <div>
        <h1>
          {this.props.firstName} {this.props.lastName.toUpperCase()}
        </h1>
        <img src={this.props.image} />
      </div>
    );
  }
}

export default Avatar;
