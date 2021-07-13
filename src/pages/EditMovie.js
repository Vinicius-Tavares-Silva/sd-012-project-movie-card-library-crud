import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      shouldRedirect: false,
      movie: {},
    };
    this.changeMovie = this.fetchMovie.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async handleSubmit(updatedMovie) {
    const { updateMovie } = movieAPI;
    const status = await updateMovie(updatedMovie);
    if (status === 'OK') {
      this.setState({ shouldRedirect: true });
    }
  }

  async fetchMovie() {
    const { match } = this.props;
    const { id } = match.params;
    const { getMovie } = movieAPI;

    // com a ajuda de um amigo do slack ele me indicou para descontruir getMovie para a const na linha 24 se tornar
    // uma function e assim conseguir redirecionar

    const movie = await getMovie(id);
    this.setState({ movie, status: 'loaded' });
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

export default EditMovie;
