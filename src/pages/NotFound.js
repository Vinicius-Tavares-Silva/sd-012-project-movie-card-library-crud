import React, { Component } from 'react';
import './NotFound.css';

class NotFound extends Component {
  render() {
    return (
      <div data-testid="404-error" className="error">
        <p>Página não encontrada</p>
      </div>
    );
  }
}

export default NotFound;
