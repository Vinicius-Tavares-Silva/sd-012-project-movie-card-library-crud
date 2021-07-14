import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MovieDetails from './pages/MovieDetails';
import MovieList from './pages/MovieList';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <main>
        <div>
          <p>Movie Card Library CRUD</p>
        </div>
        <div>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={ MovieList } />
              <Route exact path="/movies/new" component={ NewMovie } />
              <Route exact path="/movies/:id/edit" component={ EditMovie } />
              <Route exact path="/movies/:id" component={ MovieDetails } />
              <Route exact path="*" component={ NotFound } />
            </Switch>
          </BrowserRouter>
        </div>
      </main>
    );
  }
}
export default App;
