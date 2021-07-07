import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Redirect } from 'react-router-dom';
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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.movieApi = this.movieApi.bind(this);
  }

  componentDidMount() {
    this.movieApi();
  }

  async handleSubmit(updatedMovie) {
    const requisicao = await movieAPI.updateMovie(updatedMovie);

    if (requisicao === 'OK') {
      this.setState({
        shouldRedirect: true,
      });
    }
  }

  async movieApi() {
    const { match: { params: { id } } } = this.props;
    const requisicao = await movieAPI.getMovie(id);

    this.setState({
      movie: requisicao,
      status: '',
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

export default EditMovie;
