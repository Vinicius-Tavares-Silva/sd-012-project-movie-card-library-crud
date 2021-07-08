import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { MovieForm } from '../components';

import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

export default class EditMovie extends Component {
  constructor({ match }) {
    super(match);
    this.state = {
      status: 'loading',
      shouldRedirect: false,
      movieId: match.params.id,
      movie: {
        title: '',
        subtitle: '',
        storyonline: '',
        rating: 0,
      },
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchMovie = this.fetchMovie.bind(this);
  }

  componentDidMount() {
    const { movieId } = this.state;
    this.fetchMovie(movieId);
  }

  async handleSubmit(updatedMovie) {
    await movieAPI.updateMovie(updatedMovie);
    this.setState({
      shouldRedirect: true,
      movie: updatedMovie,
    });
  }

  async fetchMovie(movieId) {
    const response = await movieAPI.getMovie(movieId);
    console.log(response);
    this.setState({
      movie: response,
      status: 'success',
    });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;

    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    if (status === 'loading') {
      return <Loading />;
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
