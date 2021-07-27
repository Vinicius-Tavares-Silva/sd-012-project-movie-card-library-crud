import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
// import MovieList from "./pages/MovieList";
// import NewMovie from "./pages/NewMovie";
// import EditMovie from "./pages/EditMovie";
// import MovieDetails from "./pages/MovieDetails";
// import NotFound from "./pages/NotFound";
import {
  MovieList,
  NewMovie,
  EditMovie,
  MovieDetails,
  NotFound,
} from './pages';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        Movie Card Library CRUD
        <Route path="/movies/new" component={ NewMovie } />
        <Route path="/movies/:id/edit" render={ (props) => <EditMovie { ...props } /> } />
        <Route path="/movies/:id" component={ MovieDetails } />
        <Route exact path="/" component={ MovieList } />
        <Route path="" component={ NotFound } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
