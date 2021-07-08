import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class EditMovie extends Component {
  constructor() {
    super();
    this.state = {
      movie: {},
      loading: true,
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  handleSubmit(updatedMovie) {
    const { updateMovie } = movieAPI;
    this.setState({ shouldRedirect: false }, async () => {
      const movie = await updateMovie(updatedMovie);
      this.setState({
        shouldRedirect: true,
        movie,
      });
    });
  }

  fetchMovie() {
    const { match: { params: { id } } } = this.props;
    const { getMovie } = movieAPI;
    this.setState({ loading: true }, async () => {
      const movie = await getMovie(id);
      this.setState({
        loading: false,
        movie,
      });
    });
  }

  render() {
    const { shouldRedirect, loading, movie } = this.state;
    if (shouldRedirect) return <Redirect to="/" />;

    if (loading) return <Loading />;

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
