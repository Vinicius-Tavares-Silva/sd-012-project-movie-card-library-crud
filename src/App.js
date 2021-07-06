import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/Home';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>Movie Card Library CRUD</div>
        <Home />
      </BrowserRouter>
    );
  }
}

export default App;
