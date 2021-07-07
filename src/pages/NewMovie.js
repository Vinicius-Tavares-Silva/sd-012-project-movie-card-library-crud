import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldRedirect: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(newMovie) {
    const movie = movieAPI.createMovie(newMovie);
    console.log(movie);
    this.setState({
      shouldRedirect: true,
    });
  }

  render() {
    const { shouldRedirect } = this.state;
    if (shouldRedirect) {
      return (
        <div>
          <Redirect to="/" />
        </div>
      );
    }

    if (shouldRedirect === false) {
      return (
        <div data-testid="new-movie">
          <MovieForm onSubmit={ this.handleSubmit } />
        </div>
      );
    }
  }
}
export default NewMovie;
