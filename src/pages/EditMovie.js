import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      movie: [],
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const { getMovie } = movieAPI;
    getMovie(id);
    this.saveMovie();
  }

  handleSubmit(updatedMovie) {
    const { createMovie } = movieAPI;
    createMovie(updatedMovie);
    this.setState({
      movie: updatedMovie,
      shouldRedirect: true,
    });
  }

  async saveMovie() {
    const { match: { params: { id } } } = this.props;
    const { getMovie } = movieAPI;
    const selectedMovie = await getMovie(id);
    this.setState({
      status: 'loaded',
      movie: selectedMovie,
    });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    if (status === 'loading') {
      return <span>Carregando...</span>;
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.objectOf(Object).isRequired,
};

export default EditMovie;
