import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: '',
      shouldRedirect: false,
      status: 'loading',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const { getMovie } = movieAPI;
    getMovie(id);
    this.fetchAPI();
  }

  handleSubmit(updatedMovie) {
    this.updateAPI(updatedMovie);
  }

  async fetchAPI() {
    const { match: { params: { id } } } = this.props;
    const moviePromise = await movieAPI.getMovie(id);
    this.setState({
      movie: moviePromise,
      status: 'loaded',
    });
  }

  async updateAPI(updatedMovie) {
    await movieAPI.updateMovie(updatedMovie);
    this.setState({
      movie: '',
      status: 'loading',
      shouldRedirect: true,
    });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect === true) {
      return <Redirect to="/">Carregando...</Redirect>;
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
      id: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default EditMovie;
