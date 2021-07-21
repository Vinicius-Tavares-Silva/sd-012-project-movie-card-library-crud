import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filmes: false,
      movie: {},
      shouldRedirect: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.getMovie = this.getMovie.bind(this);
  }

  componentDidMount() {
    this.getMovie();
  }

  handleSubmit(newMovie) {
    movieAPI.updateMovie(newMovie);
    this.setState({ shouldRedirect: true });
  }

  async getMovie() {
    const { props: { match: { params: { id } } } } = this;
    const movie = await movieAPI.getMovie(id);
    this.setState({ movie, filmes: true });
  }

  render() {
    const { shouldRedirect, movie, filmes } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    if (!filmes) {
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

export default EditMovie;
