import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      shouldRedirect: false,
      movie: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.fetchMovie(id);
  }

  handleSubmit(updatedMovie) {
    this.fetchUpdateMovie(updatedMovie);
    this.setState({ shouldRedirect: true });
  }

  fetchMovie(movieId) {
    movieAPI.getMovie(movieId).then((movie) => {
      this.setState({
        movie,
        loading: false,
      });
    }).catch(console.log);
  }

  fetchUpdateMovie(updatedMovie) {
    movieAPI.updateMovie(updatedMovie);
  }

  render() {
    const { loading, shouldRedirect, movie } = this.state;
    if (shouldRedirect) { return <Redirect to="/" />; }
    if (loading) { return <Loading />; }
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
