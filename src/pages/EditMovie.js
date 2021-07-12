import React, { Component } from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { MovieForm, Loading } from '../components';
import { getMovie, updateMovie } from '../services/movieAPI';
import { movieAPI } from '../tests/helpers';
// import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      movie: {},
      shouldRedirect: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.getMovieByUrl();
  }

  handleSubmit(updatedMovie) {
    this.setState({ loading: true }, async () => {
      await updateMovie(updatedMovie);
      this.setState({ movie: updatedMovie, loading: false, shouldRedirect: true });
    });
  }

  getMovieByUrl() {
    const { match } = this.props;
    const { id } = match.params;
    this.setState({ loading: true }, async () => {
      const movie = await getMovie(id);
      this.setState({ loading: false, movie });
    });
  }

  fetchUpdateMovie(updatedMovie) {
    movieAPI.updateMovie(updatedMovie);
  }

  render() {
    const { loading, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    if (loading) {
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
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default EditMovie;
