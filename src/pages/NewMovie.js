import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import MovieForm from '../components/MovieForm';
import { createMovie } from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getInfo: 0,
    };
  }

  handleSubmit = (newMovie) => {
    createMovie(newMovie).then(this.setState({ getInfo: 1 }));
  }

  showNewMovie = () => (
    <div data-testid="new-movie">
      <MovieForm onSubmit={ this.handleSubmit } />
    </div>
  )

  goMovieList = () => <Redirect to="/" />

  render() {
    const { getInfo } = this.state;
    const { showNewMovie, goMovieList } = this;
    return (getInfo === 0) ? showNewMovie() : goMovieList();
  }
}
export default NewMovie;
