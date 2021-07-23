import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      shouldRedirect: false,
      movie: {},
    };
  this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie)
      .then(() => this.setState({ shouldRedirect: true }));
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
    Redirect
    }

    if (status === 'loading') {
      <Loading />
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
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default EditMovie;
