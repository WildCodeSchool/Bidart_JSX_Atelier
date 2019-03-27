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
        />
        <Avatar
          firstName='Lisa'
          lastName='Simpsons'
          image='https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/Lisa_Simpson.png/220px-Lisa_Simpson.png'
          star
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
