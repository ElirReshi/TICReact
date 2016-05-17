'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Hola extends Component {
  render() {
    return (
      <h1>Hola Mundo</h1>
    )
  }
}

const nodo = document.getElementById('container');

ReactDOM.render(
    < Hola />,
    nodo
  );
