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

  async handleSubmit(newMovie) {
    const requestCreate = await movieAPI.createMovie(newMovie);
    if (requestCreate === 'OK') {
      this.setState({ shouldRedirect: true });
    }
  }

  render() {
    const { shouldRedirect } = this.state;
    const movie = {
      id: 6,
      title: '',
      subtitle: '',
      storyline: '',
      rating: 0,
      imagePath: '',
      bookmarked: false,
      genre: 'action',
    };
    if (shouldRedirect) {
      return (
        <Redirect to="/" />
      );
    }

    return (
      <div data-testid="new-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}
export default NewMovie;
